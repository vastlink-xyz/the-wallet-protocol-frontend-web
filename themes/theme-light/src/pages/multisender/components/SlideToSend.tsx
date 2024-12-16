import { cn, log } from "@/lib/utils"
import { ChevronsRight, LoaderCircle, SplineIcon } from "lucide-react"
import { useState, useRef, useEffect } from "react"

interface SlideToSendProps extends React.HTMLAttributes<HTMLDivElement> {
  onSuccess?: () => void
  disabled?: boolean
  loading?: boolean
}

export function SlideToSend({
  className,
  onSuccess,
  disabled = false,
  loading = false,
  ...props
}: SlideToSendProps) {
  const [isDragging, setIsDragging] = useState(false)
  const [position, setPosition] = useState(0)
  const [success, setSuccess] = useState(false)
  const trackRef = useRef<HTMLDivElement>(null)
  const thumbRef = useRef<HTMLDivElement>(null)

  const handleMouseDown = (e: React.MouseEvent) => {
    if (disabled || loading) return
    setIsDragging(true)
  }

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging || !trackRef.current || !thumbRef.current) return

    const track = trackRef.current
    const thumb = thumbRef.current
    const trackRect = track.getBoundingClientRect()

    let newPosition = e.clientX - trackRect.left - thumb.offsetWidth / 2

    if (e.clientX - trackRect.left < thumb.offsetWidth / 2) {
      setPosition(0)
      return
    }

    if (newPosition + thumb.offsetWidth >= 379) {
      newPosition = 379 - thumb.offsetWidth
      setSuccess(true)
      setIsDragging(false)
      onSuccess?.()
    }

    setPosition(newPosition)

  }

  const handleMouseUp = () => {
    if (!success) {
      setPosition(0)
    }
    setIsDragging(false)
  }

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove)
      window.addEventListener('mouseup', handleMouseUp)
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
    }
  }, [isDragging])

  useEffect(() => {
    if (!disabled && !loading) {
      setPosition(0)
      setSuccess(false)
    }
  }, [disabled, loading])

  return (
    <div
      ref={trackRef}
      className={cn(
        "relative w-[379px] h-[42px] rounded-full ring-1 ring-[#e0e0e0] ring-offset-[3px] cursor-pointer select-none",
        disabled && "cursor-not-allowed",
        className
      )}
      {...props}
    >
      <div
        className="absolute left-0 h-[42px] bg-black rounded-full"
        style={{ 
          width: `${position + 42}px` 
        }}
      />

      <div
        ref={thumbRef}
        className={cn(
          "absolute z-10 left-0 top-1/2 -translate-y-1/2 w-[42px] h-[42px] bg-black rounded-full flex items-center justify-center cursor-grab",
          isDragging && "cursor-grabbing",
          disabled && "bg-[#f2f2f2]"
        )}
        style={{ transform: `translate(${position}px, -50%)` }}
        onMouseDown={handleMouseDown}
      >
        <ChevronsRight className={cn("w-[20px] h-[20px] text-white")} />
      </div>

      <div className="absolute text-white inset-0 flex items-center justify-center pointer-events-none">
        {loading ? (
          <LoaderCircle className="w-5 h-5 animate-spin" />
        ) : (
          <span className={cn(
            "text-black text-base font-bold leading-tight",
            disabled && "text-[#e0e0e0]"
          )}>Scroll to send</span>
        )}
      </div>
    </div>
  )
}
