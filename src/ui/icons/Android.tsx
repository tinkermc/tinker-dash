import React from "react"

const Android = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(function Android(
  { ...otherProps },
  ref,
) {
  return (
    <span {...otherProps} ref={ref}>
      <svg width="1em" height="1em" viewBox="0.03 112.41 512 287.17"><path d="m380.93 198.98 42.5-73.6c2.4-4.1.9-9.4-3.1-11.8-4.1-2.4-9.4-1-11.7 3.1l-43 74.5c-32.8-15-69.8-23.4-109.5-23.4s-76.7 8.4-109.5 23.4l-43-74.5c-2.4-4.1-7.6-5.5-11.8-3.1-4.1 2.4-5.5 7.6-3.1 11.8l42.5 73.6c-73.4 39.7-123 113.8-131.2 200.6h512c-8.2-86.8-57.8-160.9-131.1-200.6m-242.5 128.7c-11.9 0-21.5-9.6-21.5-21.5s9.6-21.5 21.5-21.5 21.5 9.6 21.5 21.5c0 11.8-9.6 21.5-21.5 21.5m235.1 0c-11.9 0-21.5-9.6-21.5-21.5s9.6-21.5 21.5-21.5 21.5 9.6 21.5 21.5c0 11.8-9.7 21.5-21.5 21.5" fill="currentColor" fillOpacity="1"/></svg>
    </span>
  )
})

export default Android
