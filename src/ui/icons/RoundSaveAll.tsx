import React from "react"

const RoundSaveAll = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(function RoundSaveAll(
  { ...otherProps },
  ref,
) {
  return (
    <span {...otherProps} ref={ref}>
      <svg width="1em" height="1em" viewBox="0 0 24 24"><path d="M21 10V19C21 20.1 20.1 21 19 21H8A2 2 0 0 1 6 19V8A2 2 0 0 1 8 6H17Z M8 9.5A1.5 1.5 0 0 0 9.5 11H13.5A1.5 1.5 0 0 0 13.5 8H9.5A1.5 1.5 0 0 0 8 9.5 M13.5 19A2.5 2.5 0 1 0 13.5 14A2.5 2.5 0 0 0 13.5 19" fill="currentColor" fillOpacity="1"/>
<path d="M2 4a2 2 0 0 1 2-2h9a1 1 0 1 1 0 2H5a1 1 0 0 0-1 1v8a1 1 0 1 1-2 0z" fill="currentColor" fillOpacity="1"/></svg>
    </span>
  )
})

export default RoundSaveAll
