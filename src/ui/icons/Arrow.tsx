import React from "react"

const Arrow = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(function Arrow(
  { ...otherProps },
  ref,
) {
  return (
    <span {...otherProps} ref={ref}>
      <svg width="1em" height="1em" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" fill="currentColor" fillOpacity="1"/></svg>
    </span>
  )
})

export default Arrow
