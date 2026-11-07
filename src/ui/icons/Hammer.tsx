import React from "react"

const Hammer = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(function Hammer(
  { ...otherProps },
  ref,
) {
  return (
    <span {...otherProps} ref={ref}>
      <svg width="1em" height="1em" viewBox="0 0 24 24"><path d="m11.414 10-7.383 7.418a2.09 2.09 0 0 0 0 2.967 2.11 2.11 0 0 0 2.976 0L14.414 13m3.707 2.293 2.586-2.586a1 1 0 0 0 0-1.414l-7.586-7.586a1 1 0 0 0-1.414 0L9.121 6.293a1 1 0 0 0 0 1.414l7.586 7.586a1 1 0 0 0 1.414 0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="1"/></svg>
    </span>
  )
})

export default Hammer
