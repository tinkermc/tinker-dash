import React from "react"

const Flathub = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(function Flathub(
  { ...otherProps },
  ref,
) {
  return (
    <span {...otherProps} ref={ref}>
      <svg width="1em" height="1em" viewBox="0.04 -1.13 62.99 60.24"><path d="M.041 14.209a14.204 14.204 0 1 0 28.41 0 14.204 14.204 0 1 0-28.41 0" fill="currentColor" fillOpacity="1"/>
<path d="M8.426 34.12h11.631a6.646 6.646 0 0 1 6.646 6.646v11.631a6.646 6.646 0 0 1-6.646 6.646H8.427a6.646 6.646 0 0 1-6.647-6.646v-11.63a6.646 6.646 0 0 1 6.646-6.647" fill="currentColor" fillOpacity="1"/>
<path d="m59.53 10.821-2.548-1.47L42.322.885a4.038 4.038 0 0 0-6.057 3.497v19.87a4.038 4.038 0 0 0 6.057 3.497l17.208-9.935a4.038 4.038 0 0 0 0-6.994z" fill="currentColor" fillOpacity="1"/>
<path d="M58.675 46.648a2.487 2.487 0 0 1-2.493 2.493H36.244a2.487 2.487 0 0 1-2.492-2.493 2.487 2.487 0 0 1 2.492-2.492h19.938a2.487 2.487 0 0 1 2.493 2.492m-12.462-12.46a2.487 2.487 0 0 1 2.493 2.491v19.938a2.487 2.487 0 0 1-2.493 2.493 2.487 2.487 0 0 1-2.492-2.493V36.68a2.487 2.487 0 0 1 2.492-2.492" fill="currentColor" fillOpacity="1"/></svg>
    </span>
  )
})

export default Flathub
