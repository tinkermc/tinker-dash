import React from "react"

const RoundStop = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(function RoundStop(
  { ...otherProps },
  ref,
) {
  return (
    <span {...otherProps} ref={ref}>
      <svg width="1em" height="1em" viewBox="0 0 24 24"><path d="M8 6h8c1.1 0 2 .9 2 2v8c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2V8c0-1.1.9-2 2-2" fill="currentColor" fillOpacity="1"/></svg>
    </span>
  )
})

export default RoundStop
