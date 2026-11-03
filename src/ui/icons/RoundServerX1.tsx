import React from "react"

const RoundServerX1 = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(function RoundServerX1(
  { ...otherProps },
  ref,
) {
  return (
    <span {...otherProps} ref={ref}>
      <svg width="1em" height="1em" viewBox="0 0 24 24"><path d="M2.586 8.586C3.172 8 4.114 8 6 8H18C19.886 8 20.828 8 21.414 8.586S22 10.114 22 12S22 14.828 21.414 15.414S19.886 16 18 16H6C4.114 16 3.172 16 2.586 15.414S2 13.886 2 12S2 9.172 2.586 8.586 M12.75 12A0.75 0.75 0 0 0 13.5 12.75H18A0.75 0.75 0 0 0 18 11.25H13.5A0.75 0.75 0 0 0 12.75 12 M5.25 13A0.75 0.75 0 0 0 6.75 13V11A0.75 0.75 0 0 0 5.25 11Z M9 13.75A0.75 0.75 0 0 0 9.75 13V11A0.75 0.75 0 0 0 8.25 11V13A0.75 0.75 0 0 0 9 13.75" fill="currentColor" fillOpacity="1"/></svg>
    </span>
  )
})

export default RoundServerX1
