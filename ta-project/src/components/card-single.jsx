const CardSingle = ({children,onClick}) => {
  return (<div onClick={onClick}  className="w-[150px] bg-black border-2 border-cyan-700 h-auto rounded-md">
    {children}
  </div>)

}

export { CardSingle }
