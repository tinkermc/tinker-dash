import React from "react"

const RoundPeople = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(function RoundPeople(
  { ...otherProps },
  ref,
) {
  return (
    <span {...otherProps} ref={ref}>
      <svg width="1em" height="1em" viewBox="0 0 24 24"><path d="M16.67 13.13C18.04 14.06 19 15.32 19 17v3h3c.55 0 1-.45 1-1v-2c0-2.18-3.57-3.47-6.33-3.87" fill="currentColor" fillOpacity="1"/>
<ellipse cx="9" cy="8" rx="4" ry="4" fill="currentColor" fillOpacity="1"/>
<path d="M15 12C14.53 12 14.09 11.9 13.67 11.76A5.98 5.98 0 0 0 13.67 4.24C14.09 4.1 14.53 4 15 4C17.21 4 19 5.79 19 8S17.21 12 15 12 M9 13C11.67 13 17 14.34 17 17V19C17 19.55 16.55 20 16 20H2C1.45 20 1 19.55 1 19V17C1 14.34 6.33 13 9 13" fill="currentColor" fillOpacity="1"/></svg>
    </span>
  )
})

export default RoundPeople
