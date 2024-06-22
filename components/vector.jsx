"use client"
import "mafs/core.css"
import "mafs/font.css"

import { Mafs, Coordinates, useMovablePoint, Vector, vec } from "mafs"

function VectorExample() {
  const tip = useMovablePoint([0.4, 0.6])

  const vec1 = tip.point
  const angle = Math.atan2(tip.y, tip.x)
  const vec2 = vec.add(vec1, vec.rotate(vec1, angle))
  const vec3 = vec.add(vec1, vec.rotate(vec2, -2 * angle))

  return (
    <Mafs height={300}>
      <Coordinates.Cartesian />
      <Vector tip={vec1} color="orange" />
      <Vector tail={vec1} tip={vec2} color="green" />
      <Vector tail={vec2} tip={vec3} />

      {tip.element}
    </Mafs>
  )
}

export default VectorExample
