const CardContainer = ({ children }) => {
  return <div className="relative transition-transform duration-[2s] [transform-style:preserve-3d] rotate-animation [animation-fill-mode:forwards]">
    {children}
  </div>
}

export { CardContainer }
