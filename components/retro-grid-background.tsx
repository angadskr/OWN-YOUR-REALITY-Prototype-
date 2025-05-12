"use client"

import { useEffect, useRef } from "react"

interface RetroGridBackgroundProps {
  className?: string
}

export default function RetroGridBackground({ className }: RetroGridBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      drawGrid()
    }

    const drawGrid = () => {
      if (!ctx) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw horizontal lines
      ctx.strokeStyle = "rgba(59, 130, 246, 0.1)" // Neon blue with low opacity
      ctx.lineWidth = 1

      const gridSize = 40
      const perspectiveOriginX = canvas.width / 2
      const perspectiveOriginY = canvas.height * 0.4

      // Horizontal lines (perspective)
      for (let y = perspectiveOriginY; y < canvas.height; y += gridSize) {
        const perspectiveScale = (y - perspectiveOriginY) / 300 + 1

        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }

      // Vertical lines with perspective
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }

      // Add some perspective lines radiating from center
      ctx.strokeStyle = "rgba(79, 70, 229, 0.1)" // Neon pink with low opacity
      for (let angle = 0; angle < Math.PI * 2; angle += Math.PI / 8) {
        const length = Math.max(canvas.width, canvas.height)
        const endX = perspectiveOriginX + Math.cos(angle) * length
        const endY = perspectiveOriginY + Math.sin(angle) * length

        ctx.beginPath()
        ctx.moveTo(perspectiveOriginX, perspectiveOriginY)
        ctx.lineTo(endX, endY)
        ctx.stroke()
      }

      // Add a subtle glow in the center
      const gradient = ctx.createRadialGradient(
        perspectiveOriginX,
        perspectiveOriginY,
        0,
        perspectiveOriginX,
        perspectiveOriginY,
        300,
      )
      gradient.addColorStop(0, "rgba(59, 130, 246, 0.1)")
      gradient.addColorStop(0.5, "rgba(79, 70, 229, 0.1)")
      gradient.addColorStop(1, "rgba(16, 185, 129, 0)")

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)
    }

    window.addEventListener("resize", resizeCanvas)
    resizeCanvas()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className={`fixed inset-0 pointer-events-none z-0 ${className}`} />
}
