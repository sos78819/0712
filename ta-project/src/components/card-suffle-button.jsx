const CardShuffleButton = ({CardShuffleHandler}) =>{
  return <div className="flex z-1 h-12 w-full"><button className="rounded-md bg-cyan-500 text-slate-800 p-2 my-2 mr-2 hover:bg-cyan-300 absolute right-0 z-9" onClick={()=>CardShuffleHandler()}>ReStart</button></div>
}

export { CardShuffleButton }
