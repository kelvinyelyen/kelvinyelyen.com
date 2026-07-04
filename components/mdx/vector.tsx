"use client"
import React, { useState, useEffect, useRef } from "react"
import { Play, Pause, RotateCcw } from "lucide-react"

// Helper for rendering SVG grid lines
function GridLines({ width, height, step }: { width: number; height: number; step: number }) {
  const xLines = []
  const yLines = []
  for (let x = step; x < width; x += step) {
    xLines.push(x)
  }
  for (let y = step; y < height; y += step) {
    yLines.push(y)
  }

  return (
    <g className="stroke-stone-200/50" strokeWidth="0.5">
      {xLines.map((x) => (
        <line key={`x-${x}`} x1={x} y1={0} x2={x} y2={height} />
      ))}
      {yLines.map((y) => (
        <line key={`y-${y}`} x1={0} y1={y} x2={width} y2={y} />
      ))}
    </g>
  )
}

interface ArrowInSpaceProps {
  vector?: string | [number, number]
}

export function ArrowInSpace({ vector }: ArrowInSpaceProps) {
  const parseInitial = (): [number, number] => {
    if (!vector) return [3, 2]
    if (typeof vector === "string") {
      return vector.split(",").map(Number) as [number, number]
    }
    return vector
  }

  const [val, setVal] = useState<[number, number]>(parseInitial)
  const [isDragging, setIsDragging] = useState(false)
  const svgRef = useRef<SVGSVGElement>(null)

  const scale = 25
  const width = 400
  const height = 200
  const cx = width / 2
  const cy = height / 2

  const xPixel = cx + val[0] * scale
  const yPixel = cy - val[1] * scale

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging || !svgRef.current) return
      const rect = svgRef.current.getBoundingClientRect()
      const xPx = e.clientX - rect.left
      const yPx = e.clientY - rect.top
      let x = (xPx - cx) / scale
      let y = -(yPx - cy) / scale
      x = Math.max(-7.5, Math.min(7.5, x))
      y = Math.max(-3.5, Math.min(3.5, y))
      setVal([parseFloat(x.toFixed(1)), parseFloat(y.toFixed(1))])
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging || !svgRef.current || e.touches.length === 0) return
      const rect = svgRef.current.getBoundingClientRect()
      const touch = e.touches[0]
      const xPx = touch.clientX - rect.left
      const yPx = touch.clientY - rect.top
      let x = (xPx - cx) / scale
      let y = -(yPx - cy) / scale
      x = Math.max(-7.5, Math.min(7.5, x))
      y = Math.max(-3.5, Math.min(3.5, y))
      setVal([parseFloat(x.toFixed(1)), parseFloat(y.toFixed(1))])
    }

    const handleMouseUp = () => setIsDragging(false)

    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove)
      window.addEventListener("mouseup", handleMouseUp)
      window.addEventListener("touchmove", handleTouchMove, { passive: true })
      window.addEventListener("touchend", handleMouseUp)
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseup", handleMouseUp)
      window.removeEventListener("touchmove", handleTouchMove)
      window.removeEventListener("touchend", handleMouseUp)
    }
  }, [isDragging])

  return (
    <div className="my-6 bg-stone-50 border border-stone-200 rounded-xl p-5 w-full mx-auto shadow-sm">
      <div className="flex justify-between items-center text-xs text-stone-500 font-mono mb-2 px-1">
        <span className="font-bold text-stone-700">VECTOR SPACE</span>
        <span>v = [{val[0].toFixed(1)}, {val[1].toFixed(1)}]</span>
      </div>

      <div className="bg-white border border-stone-200 rounded-lg overflow-hidden relative h-[200px]">
        <svg
          ref={svgRef}
          width="100%"
          height="100%"
          viewBox={`0 0 ${width} ${height}`}
          className="select-none overflow-visible"
        >
          <defs>
            <marker id="arrow-gray" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#a8a29e" />
            </marker>
            <marker id="arrow-sky" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#0ea5e9" />
            </marker>
          </defs>

          <GridLines width={width} height={height} step={scale} />

          <line x1={0} y1={cy} x2={width} y2={cy} stroke="#a8a29e" strokeWidth="1.2" markerEnd="url(#arrow-gray)" />
          <line x1={cx} y1={height} x2={cx} y2={0} stroke="#a8a29e" strokeWidth="1.2" markerEnd="url(#arrow-gray)" />

          <line
            x1={cx}
            y1={cy}
            x2={xPixel}
            y2={yPixel}
            stroke="#0ea5e9"
            strokeWidth="2.5"
            markerEnd="url(#arrow-sky)"
          />

          <circle
            cx={xPixel}
            cy={yPixel}
            r="7"
            className="fill-sky-500 hover:fill-sky-600 active:fill-sky-700 stroke-white stroke-2 cursor-grab active:cursor-grabbing transition-colors duration-150"
            onMouseDown={() => setIsDragging(true)}
            onTouchStart={() => setIsDragging(true)}
          />
        </svg>
      </div>
    </div>
  )
}

export function Vector3D() {
  const [x, setX] = useState(3.0)
  const [y, setY] = useState(2.0)
  const [z, setZ] = useState(3.0)

  const width = 400
  const height = 200
  const cx = width / 2
  const cy = height / 2 + 20

  // Reduced scale from 16 to 11 to fit larger vector inputs inside the viewBox
  const scale = 11

  const project = (vx: number, vy: number, vz: number) => {
    const xAngle = (150 * Math.PI) / 180
    const yAngle = (30 * Math.PI) / 180
    
    const px = cx + vx * scale * Math.cos(xAngle) + vy * scale * Math.cos(yAngle)
    const py = cy - (vx * scale * Math.sin(xAngle) + vy * scale * Math.sin(yAngle) + vz * scale)
    return [px, py]
  }

  const [ox, oy] = [cx, cy]
  const [xx, xy] = project(6, 0, 0)
  const [yx, yy] = project(0, 6, 0)
  const [zx, zy] = project(0, 0, 5)

  const [tx, ty] = project(x, y, z)
  const [xValX, xValY] = project(x, 0, 0)
  const [xyValX, xyValY] = project(x, y, 0)

  return (
    <div className="my-6 bg-stone-50 border border-stone-200 rounded-xl p-5 w-full mx-auto shadow-sm">
      <div className="flex justify-between items-center text-xs text-stone-500 font-mono mb-2 px-1">
        <span className="font-bold text-stone-700">3D VECTOR SPACE</span>
        <span>v = [{x.toFixed(1)}, {y.toFixed(1)}, {z.toFixed(1)}]</span>
      </div>

      <div className="bg-white border border-stone-200 rounded-lg overflow-hidden h-[200px]">
        <svg width="100%" height="100%" viewBox={`0 0 ${width} ${height}`} className="select-none overflow-visible">
          <defs>
            <marker id="arrow-light" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#cbd5e1" />
            </marker>
            <marker id="arrow-darkblue" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#1e3a8a" />
            </marker>
          </defs>

          <line x1={ox} y1={oy} x2={xx} y2={xy} stroke="#cbd5e1" strokeWidth="1.5" markerEnd="url(#arrow-light)" />
          <line x1={ox} y1={oy} x2={yx} y2={yy} stroke="#cbd5e1" strokeWidth="1.5" markerEnd="url(#arrow-light)" />
          <line x1={ox} y1={oy} x2={zx} y2={zy} stroke="#cbd5e1" strokeWidth="1.5" markerEnd="url(#arrow-light)" />

          <text x={xx - 10} y={xy + 12} fill="#94a3b8" fontSize="9" fontWeight="bold">X</text>
          <text x={yx + 5} y={yy + 12} fill="#94a3b8" fontSize="9" fontWeight="bold">Y</text>
          <text x={zx} y={zy - 6} fill="#94a3b8" fontSize="9" fontWeight="bold" textAnchor="middle">Z</text>

          <line x1={ox} y1={oy} x2={xValX} y2={xValY} stroke="#e2e8f0" strokeWidth="1" />
          <line x1={xValX} y1={xValY} x2={xyValX} y2={xyValY} stroke="#94a3b8" strokeWidth="1" strokeDasharray="2,2" />
          <line x1={ox} y1={oy} x2={xyValX - xValX + ox} y2={xyValY - xValY + oy} stroke="#e2e8f0" strokeWidth="1" />
          <line x1={xyValX - xValX + ox} y1={xyValY - xValY + oy} x2={xyValX} y2={xyValY} stroke="#94a3b8" strokeWidth="1" strokeDasharray="2,2" />
          <line x1={xyValX} y1={xyValY} x2={tx} y2={ty} stroke="#94a3b8" strokeWidth="1.2" strokeDasharray="2,2" />

          <line x1={ox} y1={oy} x2={tx} y2={ty} stroke="#1e3a8a" strokeWidth="2.5" markerEnd="url(#arrow-darkblue)" />
          <circle cx={tx} cy={ty} r="4" fill="#3b82f6" />
        </svg>
      </div>

      <div className="grid grid-cols-3 gap-3 mt-3 px-1 text-xs text-stone-600">
        <div>
          <div className="flex justify-between font-mono mb-1">
            <span>X axis</span>
            <span className="font-bold">{x.toFixed(1)}</span>
          </div>
          <input
            type="range"
            min="0"
            max="5"
            step="0.1"
            value={x}
            onChange={(e) => setX(parseFloat(e.target.value))}
            className="w-full accent-stone-600 h-1 bg-stone-200 rounded appearance-none cursor-pointer"
          />
        </div>
        <div>
          <div className="flex justify-between font-mono mb-1">
            <span>Y axis</span>
            <span className="font-bold">{y.toFixed(1)}</span>
          </div>
          <input
            type="range"
            min="0"
            max="5"
            step="0.1"
            value={y}
            onChange={(e) => setY(parseFloat(e.target.value))}
            className="w-full accent-stone-600 h-1 bg-stone-200 rounded appearance-none cursor-pointer"
          />
        </div>
        <div>
          <div className="flex justify-between font-mono mb-1">
            <span>Z axis</span>
            <span className="font-bold">{z.toFixed(1)}</span>
          </div>
          <input
            type="range"
            min="0"
            max="4"
            step="0.1"
            value={z}
            onChange={(e) => setZ(parseFloat(e.target.value))}
            className="w-full accent-stone-600 h-1 bg-stone-200 rounded appearance-none cursor-pointer"
          />
        </div>
      </div>
    </div>
  )
}

export function DotProductDemo() {
  const [ax, setAx] = useState(3.0)
  const [ay, setAy] = useState(2.0)
  
  const scale = 25
  const width = 400
  const height = 200
  const cx = width / 2
  const cy = height / 2

  const bx = 4.0
  const by = 0.0

  const dotProduct = ax * bx + ay * by

  const aPx = cx + ax * scale
  const aPy = cy - ay * scale
  const bPx = cx + bx * scale

  const projX = cx + ax * scale
  const projY = cy

  const [isDragging, setIsDragging] = useState(false)
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging || !svgRef.current) return
      const rect = svgRef.current.getBoundingClientRect()
      const xPx = e.clientX - rect.left
      const yPx = e.clientY - rect.top
      let x = (xPx - cx) / scale
      let y = -(yPx - cy) / scale
      x = Math.max(-7.5, Math.min(7.5, x))
      y = Math.max(-3.5, Math.min(3.5, y))
      setAx(parseFloat(x.toFixed(1)))
      setAy(parseFloat(y.toFixed(1)))
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging || !svgRef.current || e.touches.length === 0) return
      const rect = svgRef.current.getBoundingClientRect()
      const touch = e.touches[0]
      const xPx = touch.clientX - rect.left
      const yPx = touch.clientY - rect.top
      let x = (xPx - cx) / scale
      let y = -(yPx - cy) / scale
      x = Math.max(-7.5, Math.min(7.5, x))
      y = Math.max(-3.5, Math.min(3.5, y))
      setAx(parseFloat(x.toFixed(1)))
      setAy(parseFloat(y.toFixed(1)))
    }

    const handleMouseUp = () => setIsDragging(false)

    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove)
      window.addEventListener("mouseup", handleMouseUp)
      window.addEventListener("touchmove", handleTouchMove, { passive: true })
      window.addEventListener("touchend", handleMouseUp)
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseup", handleMouseUp)
      window.removeEventListener("touchmove", handleTouchMove)
      window.removeEventListener("touchend", handleMouseUp)
    }
  }, [isDragging])

  return (
    <div className="my-6 bg-stone-50 border border-stone-200 rounded-xl p-5 w-full mx-auto shadow-sm">
      <div className="flex justify-between items-center text-xs text-stone-500 font-mono mb-2 px-1">
        <span className="font-bold text-stone-700">DOT PRODUCT DETECTOR</span>
        <span>a · b = {dotProduct.toFixed(1)}</span>
      </div>

      <div className="bg-white border border-stone-200 rounded-lg overflow-hidden relative h-[200px]">
        <svg
          ref={svgRef}
          width="100%"
          height="100%"
          viewBox={`0 0 ${width} ${height}`}
          className="select-none overflow-visible"
        >
          <defs>
            <marker id="arrow-stone-light" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#d6d3d1" />
            </marker>
            <marker id="arrow-orange-dot" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#f97316" />
            </marker>
            <marker id="arrow-green-dot" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#10b981" />
            </marker>
          </defs>

          <GridLines width={width} height={height} step={scale} />

          <line x1={0} y1={cy} x2={width} y2={cy} stroke="#cbd5e1" strokeWidth="1" markerEnd="url(#arrow-stone-light)" />
          <line x1={cx} y1={height} x2={cx} y2={0} stroke="#cbd5e1" strokeWidth="1" markerEnd="url(#arrow-stone-light)" />

          <line x1={cx} y1={cy} x2={bPx} y2={cy} stroke="#10b981" strokeWidth="2.5" markerEnd="url(#arrow-green-dot)" />
          <text x={bPx} y={cy + 15} fill="#10b981" fontSize="9" fontWeight="bold">b [4.0, 0]</text>

          <line x1={aPx} y1={aPy} x2={projX} y2={projY} stroke="#94a3b8" strokeWidth="1.2" strokeDasharray="3,3" />

          {ax !== 0 && (
            <line x1={cx} y1={cy} x2={projX} y2={cy} stroke="#3b82f6" strokeWidth="4" opacity="0.6" />
          )}

          <line x1={cx} y1={cy} x2={aPx} y2={aPy} stroke="#f97316" strokeWidth="2.5" markerEnd="url(#arrow-orange-dot)" />

          <circle
            cx={aPx}
            cy={aPy}
            r="7"
            className="fill-orange-500 hover:fill-orange-600 active:fill-orange-700 stroke-white stroke-2 cursor-grab active:cursor-grabbing transition-colors duration-150"
            onMouseDown={() => setIsDragging(true)}
            onTouchStart={() => setIsDragging(true)}
          />

          <text x={aPx + 10} y={aPy - 5} fill="#f97316" fontSize="9" fontWeight="bold">
            a [{ax.toFixed(1)}, {ay.toFixed(1)}]
          </text>
        </svg>
      </div>
    </div>
  )
}

// Interactive conceptual animation for Combining States in Neural Processing
export function NeuralCombination() {
  const [isPaused, setIsPaused] = useState(false)
  const [speed, setSpeed] = useState<0.5 | 1 | 2>(1)
  const [time, setTime] = useState(0)

  const requestRef = useRef<number>(null)
  const lastRealTimeRef = useRef<number>(performance.now())

  const xPattern = [1.0, 0.2, 0.8]
  const yPattern = [0.1, 0.9, 0.4]

  const cycleTime = 12000
  const elapsedCycle = time % cycleTime

  let a = 0
  let b = 0
  let stepText = ""

  if (elapsedCycle < 3000) {
    a = elapsedCycle / 3000
    b = 0
    stepText = `Scaling Population X: a = ${a.toFixed(2)}, b = 0.00`
  } else if (elapsedCycle < 6000) {
    a = 1 - (elapsedCycle - 3000) / 3000
    b = (elapsedCycle - 3000) / 3000
    stepText = `Shifting weights: a = ${a.toFixed(2)}, b = ${b.toFixed(2)}`
  } else if (elapsedCycle < 9000) {
    a = (elapsedCycle - 6000) / 3000
    b = 1
    stepText = `Linear combination: z = ${a.toFixed(2)}X + ${b.toFixed(2)}Y`
  } else {
    a = 1 - (elapsedCycle - 9000) / 3000
    b = 1 - (elapsedCycle - 9000) / 3000
    stepText = `Resetting state: a = ${a.toFixed(2)}, b = ${b.toFixed(2)}`
  }

  useEffect(() => {
    const loop = (now: number) => {
      const elapsed = now - lastRealTimeRef.current
      lastRealTimeRef.current = now

      if (!isPaused) {
        setTime((prev) => prev + elapsed * speed)
      }
      requestRef.current = requestAnimationFrame(loop)
    }

    requestRef.current = requestAnimationFrame(loop)
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current)
    }
  }, [isPaused, speed])

  const handleReset = () => {
    setTime(0)
  }

  const xNodes = [
    { x: 80, y: 40, weight: xPattern[0] },
    { x: 80, y: 70, weight: xPattern[1] },
    { x: 80, y: 100, weight: xPattern[2] },
  ]

  const yNodes = [
    { x: 80, y: 160, weight: yPattern[0] },
    { x: 80, y: 190, weight: yPattern[1] },
    { x: 80, y: 220, weight: yPattern[2] },
  ]

  const zNodes = [
    { x: 300, y: 100, label: "Neuron 1" },
    { x: 300, y: 130, label: "Neuron 2" },
    { x: 300, y: 160, label: "Neuron 3" },
  ]

  const renderPulses = (fromNodes: typeof xNodes, color: string, activeWeight: number) => {
    if (activeWeight <= 0.05) return null
    const pulses: React.ReactNode[] = []

    fromNodes.forEach((node, fromIdx) => {
      zNodes.forEach((zNode, toIdx) => {
        const pulseCount = 3
        for (let i = 0; i < pulseCount; i++) {
          const delayOffset = (i / pulseCount) * 1.0
          const progress = ((time / 1500) + delayOffset) % 1.0
          const px = node.x + progress * (zNode.x - node.x)
          const py = node.y + progress * (zNode.y - node.y)
          
          pulses.push(
            <circle
              key={`pulse-${fromIdx}-${toIdx}-${i}`}
              cx={px}
              cy={py}
              r={2 + activeWeight * 1.5}
              fill={color}
              opacity={activeWeight * (1 - progress)}
            />
          )
        }
      })
    })

    return pulses
  }

  return (
    <div className="my-6 bg-stone-50 border border-stone-200 rounded-xl p-5 w-full mx-auto shadow-sm select-none">
      
      {/* Header controls and statistics with rounded buttons */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-4 border-b border-stone-200 pb-2 text-xs text-stone-500 font-mono">
        <div className="flex items-center gap-3">
          <span className="font-bold text-stone-800">STATE COMBINATION</span>
          <span className="text-stone-300">/</span>
          <span className="font-bold text-orange-500">a = {a.toFixed(2)}</span>
          <span className="text-stone-300">/</span>
          <span className="font-bold text-emerald-600">b = {b.toFixed(2)}</span>
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

      {/* Main Diagram Area */}
      <div className="bg-white border border-stone-200 rounded-lg p-4 relative overflow-hidden h-[260px]">
        <svg width="100%" height="100%" viewBox="0 0 400 260" className="overflow-visible">
          {xNodes.map((xNode, i) =>
            zNodes.map((zNode, j) => (
              <line
                key={`line-x-${i}-${j}`}
                x1={xNode.x}
                y1={xNode.y}
                x2={zNode.x}
                y2={zNode.y}
                stroke="#fdba74"
                strokeWidth={0.5 + a * 1.5}
                opacity={0.15 + a * 0.45}
              />
            ))
          )}

          {yNodes.map((yNode, i) =>
            zNodes.map((zNode, j) => (
              <line
                key={`line-y-${i}-${j}`}
                x1={yNode.x}
                y1={yNode.y}
                x2={zNode.x}
                y2={zNode.y}
                stroke="#6ee7b7"
                strokeWidth={0.5 + b * 1.5}
                opacity={0.15 + b * 0.45}
              />
            ))
          )}

          {renderPulses(xNodes, "#f97316", a)}
          {renderPulses(yNodes, "#10b981", b)}

          {xNodes.map((node, idx) => (
            <g key={`x-node-${idx}`}>
              <circle
                cx={node.x}
                cy={node.y}
                r="10"
                fill="#fed7aa"
                stroke="#f97316"
                strokeWidth="1.5"
                opacity={0.4 + a * 0.6}
              />
              <circle
                cx={node.x}
                cy={node.y}
                r={node.weight * 6}
                fill="#f97316"
                opacity={a}
              />
            </g>
          ))}
          <text x={80} y={120} fill="#f97316" fontSize="9" fontWeight="bold" textAnchor="middle" opacity={0.6 + a * 0.4}>
            Input X (a = {a.toFixed(1)})
          </text>

          {yNodes.map((node, idx) => (
            <g key={`y-node-${idx}`}>
              <circle
                cx={node.x}
                cy={node.y}
                r="10"
                fill="#a7f3d0"
                stroke="#10b981"
                strokeWidth="1.5"
                opacity={0.4 + b * 0.6}
              />
              <circle
                cx={node.x}
                cy={node.y}
                r={node.weight * 6}
                fill="#10b981"
                opacity={b}
              />
            </g>
          ))}
          <text x={80} y={240} fill="#10b981" fontSize="9" fontWeight="bold" textAnchor="middle" opacity={0.6 + b * 0.4}>
            Input Y (b = {b.toFixed(1)})
          </text>

          {zNodes.map((node, idx) => {
            const zWeight = a * xPattern[idx] + b * yPattern[idx]
            
            return (
              <g key={`z-node-${idx}`}>
                <circle
                  cx={node.x}
                  cy={node.y}
                  r="14"
                  fill="#e0e7ff"
                  stroke="#4f46e5"
                  strokeWidth="1.5"
                />
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={Math.min(12, 3 + zWeight * 8)}
                  fill="#6366f1"
                  opacity={Math.max(0.1, Math.min(1, zWeight))}
                  className="transition-all duration-100"
                />
                <text x={node.x + 22} y={node.y + 4} fill="#6366f1" fontSize="10" fontWeight="bold">
                  {zWeight.toFixed(2)}
                </text>
              </g>
            )
          })}
          <text x={300} y={80} fill="#4f46e5" fontSize="10" fontWeight="bold" textAnchor="middle">
            Resultant Z = aX + bY
          </text>
        </svg>
      </div>

      <div className="mt-3 text-center text-xs text-stone-500 font-medium italic">
        {stepText}
      </div>
    </div>
  )
}
