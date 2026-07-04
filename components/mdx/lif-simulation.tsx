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
    <div className="my-8 bg-stone-50 border border-stone-200 rounded-xl p-5 w-full mx-auto shadow-sm select-none">
      
      {/* Header controls and statistics with rounded buttons */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-4 text-xs text-stone-500 font-mono">
        <div className="flex items-center gap-3">
          <span className="font-bold text-stone-800">LIF NEURON</span>
          <span className="text-stone-300">/</span>
          <span ref={currentVoltTextRef} className="font-bold text-stone-600 w-16">-65.0 mV</span>
          <span className="text-stone-300">/</span>
          <span>Spikes: <span ref={spikeCountTextRef} className="font-bold text-stone-700">0</span></span>
          <span>Rate: <span ref={firingRateTextRef} className="font-bold text-stone-700">0.0</span> Hz</span>
        </div>
        
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsPaused(!isPaused)}
            className="p-1 bg-white hover:bg-stone-100 border border-stone-200 rounded-md text-stone-600 hover:text-stone-800 transition-all outline-none focus:outline-none focus:ring-0 focus:ring-transparent focus-visible:outline-none shadow-sm"
            title={isPaused ? "Play" : "Pause"}
          >
            {isPaused ? <Play size={11} fill="currentColor" /> : <Pause size={11} fill="currentColor" />}
          </button>
          <button
            onClick={handleReset}
            className="p-1 bg-white hover:bg-stone-100 border border-stone-200 rounded-md text-stone-600 hover:text-stone-800 transition-all outline-none focus:outline-none focus:ring-0 focus:ring-transparent focus-visible:outline-none shadow-sm"
            title="Reset"
          >
            <RotateCcw size={11} />
          </button>
          <div className="flex bg-stone-100 border border-stone-200 rounded-md p-0.5 text-[10px] font-bold text-stone-500 ml-1 shadow-sm">
            {([0.5, 1, 2] as const).map((s) => (
              <button
                key={s}
                onClick={() => setSpeed(s)}
                className={`px-1.5 py-0.5 rounded transition-all outline-none focus:outline-none focus:ring-0 focus:ring-transparent focus-visible:outline-none ${
                  speed === s ? "bg-white text-stone-800 shadow-sm" : "hover:text-stone-800"
                }`}
              >
                {s}x
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Membrane Potential Waveform Plot */}
      <div className="bg-white border border-stone-200 rounded-lg p-2 h-[120px] relative overflow-hidden">
        <svg width="100%" height="100%" viewBox="0 0 600 120" preserveAspectRatio="none" className="overflow-visible">
          {/* Threshold Line (-50mV) */}
          <line x1="0" y1="30" x2="600" y2="30" stroke="#f87171" strokeWidth="1" strokeDasharray="3,3" opacity="0.6" />
          <text x="595" y="24" fill="#ef4444" fontSize="8" fontWeight="medium" textAnchor="end">Threshold (-50 mV)</text>
          
          {/* Resting Line (-65mV) */}
          <line x1="0" y1="90" x2="600" y2="90" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3,3" opacity="0.4" />
          <text x="595" y="100" fill="#94a3b8" fontSize="8" fontWeight="medium" textAnchor="end">Resting (-65 mV)</text>

          {/* Voltage Path */}
          <path
            ref={pathRef}
            fill="none"
            stroke="#0ea5e9" // sky-500
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Grid Controls */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mt-5 text-xs text-stone-600">
        
        {/* Mode Selector */}
        <div>
          <label className="block text-[10px] font-bold text-stone-400 uppercase tracking-wider mb-1.5">Input Mode</label>
          <select
            value={inputType}
            onChange={(e) => setInputType(e.target.value as any)}
            className="w-full bg-white border border-stone-200 rounded px-2 py-1 text-stone-700 focus:outline-none focus:ring-1 focus:ring-stone-400 font-medium"
          >
            <option value="constant">Constant</option>
            <option value="sinusoid">Sinusoidal</option>
            <option value="noise">Noise</option>
            <option value="poisson">Poisson</option>
          </select>
        </div>

        {/* Sliders depend on Input Mode */}
        {inputType !== "poisson" ? (
          <div>
            <div className="flex justify-between font-mono mb-1">
              <span>Current (I)</span>
              <span className="font-bold">{meanCurrent.toFixed(2)} nA</span>
            </div>
            <input
              type="range"
              min="0.0"
              max="3.0"
              step="0.05"
              value={meanCurrent}
              onChange={(e) => setMeanCurrent(parseFloat(e.target.value))}
              className="w-full accent-stone-600 h-1 bg-stone-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>
        ) : (
          <>
            <div>
              <div className="flex justify-between font-mono mb-1">
                <span>Rate (λ)</span>
                <span className="font-bold">{poissonRate} Hz</span>
              </div>
              <input
                type="range"
                min="10"
                max="100"
                step="5"
                value={poissonRate}
                onChange={(e) => setPoissonRate(parseInt(e.target.value))}
                className="w-full accent-stone-600 h-1 bg-stone-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>
            <div>
              <div className="flex justify-between font-mono mb-1">
                <span>Weight (w)</span>
                <span className="font-bold">{synapticWeight.toFixed(2)} nA</span>
              </div>
              <input
                type="range"
                min="0.1"
                max="2.0"
                step="0.05"
                value={synapticWeight}
                onChange={(e) => setSynapticWeight(parseFloat(e.target.value))}
                className="w-full accent-stone-600 h-1 bg-stone-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>
          </>
        )}

        {inputType === "noise" && (
          <div>
            <div className="flex justify-between font-mono mb-1">
              <span>Noise (σ)</span>
              <span className="font-bold">{noiseSigma.toFixed(2)} nA</span>
            </div>
            <input
              type="range"
              min="0.0"
              max="2.0"
              step="0.05"
              value={noiseSigma}
              onChange={(e) => setNoiseSigma(parseFloat(e.target.value))}
              className="w-full accent-stone-600 h-1 bg-stone-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>
        )}

        {/* This takes the remaining spot in the 4-column layout if needed, or slides over */}
        <div className={inputType === "constant" || inputType === "sinusoid" ? "sm:col-start-4" : ""}>
          <div className="flex justify-between font-mono mb-1">
            <span>Time (τ_m)</span>
            <span className="font-bold">{tauM} ms</span>
          </div>
          <input
            type="range"
            min="5"
            max="30"
            step="1"
            value={tauM}
            onChange={(e) => setTauM(parseInt(e.target.value))}
            className="w-full accent-stone-600 h-1 bg-stone-200 rounded-lg appearance-none cursor-pointer"
          />
        </div>

      </div>

    </div>
  )
}
