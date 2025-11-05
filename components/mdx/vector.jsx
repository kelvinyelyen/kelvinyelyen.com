"use client"

import React from 'react'
import "mafs/core.css"
import "mafs/font.css"

import { Mafs, Coordinates, useMovablePoint, Vector, vec, Text, Plot, Theme } from "mafs"

function ArrowInSpace({ vector }) {
  const [x, y] = vector

  return (
    <Mafs height={300}>
      <Coordinates.Cartesian />
      <Vector tip={[x, y]} color="red" />
    </Mafs>
  )
}

function UnitVectorDemo() {
  const im = useMovablePoint([5, 0], {
    constrain: "horizontal",
    color: "red",
  })
  const jm = useMovablePoint([0, 2], { constrain: "vertical", color: "green" })

  const i = [1, 0]
  const j = [0, 1]

  const scaledI = vec.scale(i, im.x)
  const scaledJ = vec.scale(j, jm.y)
  const resultant = vec.add(scaledI, scaledJ)

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      im.setPoint([Math.round(im.x), im.y])
      jm.setPoint([jm.x, Math.round(jm.y)])
    }, 100)

    return () => clearTimeout(timeout)
  }, [im, jm])

  return (
    <Mafs height={300}>
      <Coordinates.Cartesian />

      <Vector color="orange" tip={scaledI} />
      <Vector color="blue" tip={scaledJ} />

      <Vector color="red" opacity={0.5} tip={i} />
      <Vector color="green" opacity={0.5} tip={j} />

      <Vector style="dashed" tip={resultant} />

      {im.element}
      {jm.element}

      <Text x={1} y={-0.5} size={14}>
        i(1,0)
      </Text>
      <Text x={-0.5} y={1} size={14}>
        j(0,1)
      </Text>

      <Text x={scaledI[0]} y={-0.5} size={14}>
        p={Math.round(im.x)}
      </Text>
      <Text x={-0.5} y={scaledJ[1]} size={14}>
        q={Math.round(jm.y)}
      </Text>

      <Text x={resultant[0]} y={[resultant[1] + 0.25]} size={14}>
        {Math.round(im.x)}i + {Math.round(jm.y)}j
      </Text>
    </Mafs>
  )
}

function Vector3D() {
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


export { ArrowInSpace, UnitVectorDemo, Vector3D  }
