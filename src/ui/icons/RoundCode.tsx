import React from "react"

const RoundCode = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(function RoundCode(
  { ...otherProps },
  ref,
) {
  return (
    <span {...otherProps} ref={ref}>
      <svg width="1em" height="1em" viewBox="0 0 24 24"><path d="M8.7 15.9 4.8 12l3.9-3.9a.984.984 0 0 0 0-1.4.984.984 0 0 0-1.4 0l-4.59 4.59a.996.996 0 0 0 0 1.41l4.59 4.6c.39.39 1.01.39 1.4 0a.984.984 0 0 0 0-1.4m6.6 0 3.9-3.9-3.9-3.9a.984.984 0 0 1 0-1.4.984.984 0 0 1 1.4 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.6a.984.984 0 0 1-1.4 0 .984.984 0 0 1 0-1.4" fill="currentColor" fillOpacity="1"/></svg>
    </span>
  )
})

export default RoundCode
