import React from "react"

const Versions = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(function Versions(
  { ...otherProps },
  ref,
) {
  return (
    <span {...otherProps} ref={ref}>
      <svg width="1em" height="1em" viewBox="0 0 24 24"><path d="M10 7a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2zM7 7v10M4 8v8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="1"/></svg>
    </span>
  )
})

export default Versions
