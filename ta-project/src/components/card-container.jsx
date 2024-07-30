const CardContainer = ({ children }) => {
  return <div className="relative transition-transform duration-[2s] [transform-style:preserve-3d] rotate-animation [animation-fill-mode:forwards] rounded-md shadow-2xl shadow-slate-800">
    {children}
  </div>
}

export { CardContainer }
