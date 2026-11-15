import React from "react"

const ChevronRight12Filled = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(function ChevronRight12Filled(
  { ...otherProps },
  ref,
) {
  return (
    <span {...otherProps} ref={ref}>
      <svg width="1em" height="1em" viewBox="0 0 12 12"><path d="M4.47 2.22a.75.75 0 0 0 0 1.06L7.19 6 4.47 8.72a.75.75 0 0 0 1.06 1.06l3.25-3.25a.75.75 0 0 0 0-1.06L5.53 2.22a.75.75 0 0 0-1.06 0" fill="currentColor" fillOpacity="1"/></svg>
    </span>
  )
})

export default ChevronRight12Filled
