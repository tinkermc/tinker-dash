import React from "react"

const Windows11 = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(function Windows11(
  { ...otherProps },
  ref,
) {
  return (
    <span {...otherProps} ref={ref}>
      <svg width="1em" height="1em" viewBox="0 0 482 482"><rect x="0" y="0" width="230" height="230" rx="0" ry="0" fill="currentColor" fillOpacity="1"/>
<rect x="252" y="0" width="230" height="230" rx="0" ry="0" fill="currentColor" fillOpacity="1"/>
<rect x="0" y="252" width="230" height="230" rx="0" ry="0" fill="currentColor" fillOpacity="1"/>
<rect x="252" y="252" width="230" height="230" rx="0" ry="0" fill="currentColor" fillOpacity="1"/></svg>
    </span>
  )
})

export default Windows11
