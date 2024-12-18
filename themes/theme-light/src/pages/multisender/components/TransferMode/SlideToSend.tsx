import { cn } from "@/lib/utils"
import { ChevronsRight, LoaderCircle } from "lucide-react"
import { useState, useRef, useEffect } from "react"

interface SlideToSendProps extends React.HTMLAttributes<HTMLDivElement> {
  onSuccess?: () => void
  disabled?: boolean
  loading?: boolean
}

const TRACK_INNER_WIDTH = 337

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

  const handleDragStart = (clientX: number, e?: TouchEvent | MouseEvent) => {
    if (disabled || loading) return
    e?.preventDefault()
    setIsDragging(true)
  }

  const handleDragMove = (clientX: number) => {
    if (!isDragging || !trackRef.current || !thumbRef.current) return

    const track = trackRef.current
    const thumb = thumbRef.current
    const trackRect = track.getBoundingClientRect()

    let newPosition = clientX - trackRect.left - thumb.offsetWidth / 2

    if (clientX - trackRect.left < thumb.offsetWidth / 2) {
      setPosition(0)
      return
    }

    if (newPosition + thumb.offsetWidth >= TRACK_INNER_WIDTH) {
      newPosition = TRACK_INNER_WIDTH - thumb.offsetWidth
      setSuccess(true)
      setIsDragging(false)
      onSuccess?.()
    }

    setPosition(newPosition)
  }

  const handleDragEnd = () => {
    if (!success) {
      setPosition(0)
    }
    setIsDragging(false)
  }

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => handleDragMove(e.clientX)
    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault()
      handleDragMove(e.touches[0].clientX)
    }

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove)
      window.addEventListener('mouseup', handleDragEnd)
      window.addEventListener('touchmove', handleTouchMove, { passive: false })
      window.addEventListener('touchend', handleDragEnd)
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleDragEnd)
      window.removeEventListener('touchmove', handleTouchMove)
      window.removeEventListener('touchend', handleDragEnd)
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
        "relative h-[42px] rounded-full ring-1 ring-[#e0e0e0] ring-offset-[3px] cursor-pointer select-none touch-none",
        disabled && "cursor-not-allowed",
        className
      )}
      style={{ width: `${TRACK_INNER_WIDTH}px` }}
      {...props}
    >
      <div
        className={cn(
          "absolute left-0 h-[42px] bg-black rounded-full",
          disabled && "bg-[#f2f2f2]"
        )}
        style={{ width: `${position + 42}px` }}
      />

      <div
        ref={thumbRef}
        className={cn(
          "absolute z-10 left-0 top-1/2 -translate-y-1/2 w-[42px] h-[42px] bg-black rounded-full flex items-center justify-center cursor-grab",
          isDragging && "cursor-grabbing",
          disabled && "bg-[#f2f2f2]"
        )}
        style={{ transform: `translate(${position}px, -50%)` }}
        onMouseDown={(e) => handleDragStart(e.clientX)}
        onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
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
