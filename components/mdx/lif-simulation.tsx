"use client"
import React, { useState, useEffect, useRef } from "react"
import { Play, Pause, RotateCcw } from "lucide-react"

// Box-Muller transform for Gaussian noise
function randomNormal() {
  let u = 0, v = 0
  while (u === 0) u = Math.random()
  while (v === 0) v = Math.random()
  return Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v)
}

export function LIFSimulation() {
  const [inputType, setInputType] = useState<"constant" | "sinusoid" | "noise" | "poisson">("constant")
  const [meanCurrent, setMeanCurrent] = useState(1.5) // nA
  const [noiseSigma, setNoiseSigma] = useState(0.5) // nA
  const [poissonRate, setPoissonRate] = useState(30) // Hz
  const [synapticWeight, setSynapticWeight] = useState(0.6) // nA
  const [tauM, setTauM] = useState(10) // ms
  const [isPaused, setIsPaused] = useState(false)
  const [speed, setSpeed] = useState<0.5 | 1 | 2>(1)

  // Simulation state variables in refs for 60fps performance
  const vRef = useRef(-65.0) // mV
  const synapticCurrentRef = useRef(0.0) // nA for Poisson mode
  const historyRef = useRef<{ t: number; v: number }[]>([])
  const timeRef = useRef(0) // ms
  const spikeCountRef = useRef(0)
  const spikeTimesRef = useRef<number[]>([])

  // DOM Refs for direct manipulation (extremely high performance)
  const pathRef = useRef<SVGPathElement>(null)
  const currentVoltTextRef = useRef<HTMLSpanElement>(null)
  const spikeCountTextRef = useRef<HTMLSpanElement>(null)
  const firingRateTextRef = useRef<HTMLSpanElement>(null)

  // Constants
  const dt = 1.0 // ms
  const EL = -65.0 // mV
  const R = 10.0 // MOhm
  const Vth = -50.0 // mV
  const Vreset = -65.0 // mV
  const tauS = 5.0 // ms (synaptic time constant)
  const historyLength = 250 // slightly longer for wider display

  // Reset simulation
  const handleReset = () => {
    vRef.current = EL
    synapticCurrentRef.current = 0.0
    historyRef.current = Array.from({ length: historyLength }, (_, i) => ({
      t: -historyLength + i,
      v: EL,
    }))
    timeRef.current = 0
    spikeCountRef.current = 0
    spikeTimesRef.current = []

    if (spikeCountTextRef.current) spikeCountTextRef.current.innerText = "0"
    if (firingRateTextRef.current) firingRateTextRef.current.innerText = "0.0"
  }

  // Initialize history on mount
  useEffect(() => {
    handleReset()
  }, [])

  // Main simulation loop
  useEffect(() => {
    let animationFrameId: number
    let lastRealTime = performance.now()
    let accumulator = 0

    const loop = (now: number) => {
      const elapsedRealTime = now - lastRealTime
      lastRealTime = now

      if (!isPaused) {
        accumulator += elapsedRealTime * speed

        while (accumulator >= dt) {
          runStep()
          accumulator -= dt
        }

        updateVisualization()
      } else {
        accumulator = 0
      }

      animationFrameId = requestAnimationFrame(loop)
    }

    const runStep = () => {
      const t = timeRef.current
      let I = 0.0

      if (inputType === "constant") {
        I = meanCurrent
      } else if (inputType === "sinusoid") {
        I = meanCurrent * (1 + Math.sin((2 * Math.PI * t) / 150.0))
      } else if (inputType === "noise") {
        I = meanCurrent + noiseSigma * randomNormal()
      } else if (inputType === "poisson") {
        const pSpike = (poissonRate * dt) / 1000.0
        if (Math.random() < pSpike) {
          synapticCurrentRef.current += synapticWeight
        }
        synapticCurrentRef.current -= (dt / tauS) * synapticCurrentRef.current
        if (synapticCurrentRef.current < 0) synapticCurrentRef.current = 0
        I = synapticCurrentRef.current
      }

      const prevV = vRef.current

      if (prevV === 0.0) {
        vRef.current = Vreset
      } else {
        const dV = (dt / tauM) * (EL - prevV + R * I)
        vRef.current = prevV + dV

        if (vRef.current >= Vth) {
          vRef.current = 0.0 // Draw spike peak
          spikeCountRef.current += 1
          spikeTimesRef.current.push(t)
        }
      }

      spikeTimesRef.current = spikeTimesRef.current.filter((st) => t - st <= 2000)

      historyRef.current.push({ t, v: vRef.current })
      if (historyRef.current.length > historyLength) {
        historyRef.current.shift()
      }

      timeRef.current += dt
    }

    const updateVisualization = () => {
      if (pathRef.current && historyRef.current.length > 0) {
        const width = 600
        const height = 120
        const minV = -75
        const maxV = 5

        const getX = (i: number) => (i / (historyLength - 1)) * width
        const getY = (v: number) => {
          const clampedV = Math.max(minV, Math.min(maxV, v))
          return height - ((clampedV - minV) / (maxV - minV)) * height
        }

        let d = `M ${getX(0)} ${getY(historyRef.current[0].v)}`
        for (let i = 1; i < historyRef.current.length; i++) {
          d += ` L ${getX(i)} ${getY(historyRef.current[i].v)}`
        }
        pathRef.current.setAttribute("d", d)
      }

      const currentV = vRef.current
      if (currentVoltTextRef.current) {
        currentVoltTextRef.current.textContent = `${currentV === 0 ? "Spike!" : `${currentV.toFixed(1)} mV`}`
      }
      if (spikeCountTextRef.current) {
        spikeCountTextRef.current.innerText = spikeCountRef.current.toString()
      }
      if (firingRateTextRef.current) {
        const rate = spikeTimesRef.current.length / 2.0
        firingRateTextRef.current.innerText = rate.toFixed(1)
      }
    }

    animationFrameId = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(animationFrameId)
  }, [isPaused, inputType, meanCurrent, noiseSigma, poissonRate, synapticWeight, tauM, speed])

  return (
    <div className="my-8 border border-gray-200 rounded-2xl p-6 sm:p-8 w-full mx-auto bg-white shadow-sm select-none">

      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <span className="text-[10px] sm:text-xs font-semibold text-gray-400 uppercase tracking-widest">
          LIF NEURON
        </span>
        
        {/* Status Indicators as Pills */}
        <div className="flex items-center gap-2 text-xs font-medium">
          <div className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full flex items-center gap-1">
            Voltage: <span ref={currentVoltTextRef} className="font-bold text-gray-900 w-12 text-right">-65.0</span> mV
          </div>
          <div className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full flex items-center gap-1">
            Spikes: <span ref={spikeCountTextRef} className="font-bold text-rose-500">0</span>
          </div>
          <div className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full flex items-center gap-1">
            Rate: <span ref={firingRateTextRef} className="font-bold text-rose-500">0.0</span> Hz
          </div>
        </div>
      </div>

      {/* Membrane Potential Waveform Plot */}
      <div className="w-full h-[140px] relative overflow-visible">
        <svg width="100%" height="100%" viewBox="0 0 600 140" preserveAspectRatio="none" className="overflow-visible">
          {/* Threshold Line (-50mV) */}
          <line x1="0" y1="35" x2="600" y2="35" stroke="#e5e7eb" strokeWidth="2" strokeDasharray="4,4" />
          <text x="595" y="28" fill="#9ca3af" fontSize="10" fontWeight="500" textAnchor="end">Threshold (-50 mV)</text>
          
          {/* Resting Line (-65mV) */}
          <line x1="0" y1="105" x2="600" y2="105" stroke="#f3f4f6" strokeWidth="2" />
          <text x="595" y="118" fill="#9ca3af" fontSize="10" fontWeight="500" textAnchor="end">Resting (-65 mV)</text>

          {/* Voltage Path */}
          <path
            ref={pathRef}
            fill="none"
            stroke="#fbbf24" // amber-400
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Controls and Footer */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mt-10">
        
        {/* Left: Interactive Controls */}
        <div className="flex flex-wrap gap-4 w-full sm:w-auto">
          {/* Mode Selector Pill */}
          <div className="relative">
            <select
              value={inputType}
              onChange={(e) => setInputType(e.target.value as any)}
              className="appearance-none bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-semibold px-4 py-2 pr-8 rounded-full focus:outline-none transition-colors cursor-pointer"
            >
              <option value="constant">Constant</option>
              <option value="sinusoid">Sinusoidal</option>
              <option value="noise">Noise</option>
              <option value="poisson">Poisson</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>

          {/* Parameter Sliders */}
          <div className="flex flex-col justify-center gap-1 min-w-[120px]">
            {inputType !== "poisson" ? (
              <>
                <div className="flex justify-between text-[10px] font-medium text-gray-400 uppercase tracking-widest">
                  <span>Current</span>
                  <span>{meanCurrent.toFixed(1)} nA</span>
                </div>
                <input
                  type="range"
                  min="0.0"
                  max="3.0"
                  step="0.1"
                  value={meanCurrent}
                  onChange={(e) => setMeanCurrent(parseFloat(e.target.value))}
                  className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-amber-400"
                />
              </>
            ) : (
              <>
                <div className="flex justify-between text-[10px] font-medium text-gray-400 uppercase tracking-widest">
                  <span>Rate</span>
                  <span>{poissonRate} Hz</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="100"
                  step="5"
                  value={poissonRate}
                  onChange={(e) => setPoissonRate(parseInt(e.target.value))}
                  className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-amber-400"
                />
              </>
            )}
          </div>
          
          <div className="flex flex-col justify-center gap-1 min-w-[120px]">
             <div className="flex justify-between text-[10px] font-medium text-gray-400 uppercase tracking-widest">
                <span>Tau (τ_m)</span>
                <span>{tauM} ms</span>
              </div>
              <input
                type="range"
                min="5"
                max="30"
                step="1"
                value={tauM}
                onChange={(e) => setTauM(parseInt(e.target.value))}
                className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-amber-400"
              />
          </div>
        </div>

        {/* Right: Playback Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsPaused(!isPaused)}
            className="text-gray-500 hover:text-gray-700 transition-colors p-1"
            title={isPaused ? "Play" : "Pause"}
          >
            {isPaused ? <Play size={16} fill="currentColor" /> : <Pause size={16} fill="currentColor" />}
          </button>
          <button
            onClick={handleReset}
            className="text-gray-400 hover:text-gray-600 transition-colors p-1 mr-2"
            title="Reset"
          >
            <RotateCcw size={14} />
          </button>
          
          <div className="flex bg-gray-100 rounded-full p-1 text-xs font-semibold text-gray-500">
            {([0.5, 1, 2] as const).map((s) => (
              <button
                key={s}
                onClick={() => setSpeed(s)}
                className={`px-3 py-1 rounded-full transition-colors ${
                  speed === s ? "bg-white text-gray-900 shadow-sm" : "hover:text-gray-700"
                }`}
              >
                {s}x
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
