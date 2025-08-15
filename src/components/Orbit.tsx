import React from "react"
import { motion } from "motion/react"

interface OrbitProps {
  children: React.ReactNode
  orbitingObjects?: React.ReactNode[]
  durationSeconds?: number
  radiusPx?: number
  keepUpright?: boolean
}

export function Orbit({
  children,
  orbitingObjects = [],
  durationSeconds = 20,
  radiusPx = 100,
  keepUpright = false,
}: OrbitProps) {
  return (
    <div className="relative" style={{ width: `${radiusPx * 2}px`, height: `${radiusPx * 2}px` }}>
      {/* Center content */}
      <div className="absolute inset-0 flex items-center justify-center">
        {children}
      </div>
      
      {/* Orbiting objects */}
      {orbitingObjects.map((obj, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{
            left: "50%",
            top: "50%",
            x: "-50%",
            y: "-50%",
          }}
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: durationSeconds,
            repeat: Infinity,
            ease: "linear",
            delay: (index / orbitingObjects.length) * durationSeconds,
          }}
        >
          <div
            style={{
              width: `${radiusPx * 2}px`,
              height: `${radiusPx * 2}px`,
              position: "relative",
            }}
          >
            <motion.div
              className="absolute"
              style={{
                left: "50%",
                top: "0%",
                x: "-50%",
                y: "-50%",
              }}
              animate={keepUpright ? { rotate: -360 } : {}}
              transition={
                keepUpright
                  ? {
                      duration: durationSeconds,
                      repeat: Infinity,
                      ease: "linear",
                      delay: (index / orbitingObjects.length) * durationSeconds,
                    }
                  : {}
              }
            >
              {obj}
            </motion.div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}