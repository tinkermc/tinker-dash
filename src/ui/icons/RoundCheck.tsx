import React from "react"

const RoundCheck = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(function RoundCheck(
  { ...otherProps },
  ref,
) {
  return (
    <span {...otherProps} ref={ref}>
      <svg width="1em" height="1em" viewBox="0 0 24 24"><path d="M9 16.17 5.53 12.7a.996.996 0 1 0-1.41 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71a.996.996 0 1 0-1.41-1.41z" fill="currentColor" fillOpacity="1"/></svg>
    </span>
  )
})

export default RoundCheck
