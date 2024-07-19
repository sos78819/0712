const CardContainer = ({ children }) => {
  return <div className="relative transition-transform duration-[2s] [transform-style:preserve-3d] hover:[transform:rotateY(180deg)] [animation-fill-mode:forwards]">
    {children}
  </div>
}

export { CardContainer }
