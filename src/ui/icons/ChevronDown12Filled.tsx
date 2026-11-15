import React from "react"

const ChevronDown12Filled = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(function ChevronDown12Filled(
  { ...otherProps },
  ref,
) {
  return (
    <span {...otherProps} ref={ref}>
      <svg width="1em" height="1em" viewBox="0 0 12 12"><path d="M2.22 4.47a.75.75 0 0 1 1.06 0L6 7.19l2.72-2.72a.75.75 0 0 1 1.06 1.06L6.53 8.78a.75.75 0 0 1-1.06 0L2.22 5.53a.75.75 0 0 1 0-1.06" fill="currentColor" fillOpacity="1"/></svg>
    </span>
  )
})

export default ChevronDown12Filled
