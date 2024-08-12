const CardShuffleButton = ({CardShuffleHandler}) =>{
  return <button className="rounded-md bg-cyan-500 text-slate-800 p-2  mr-2 hover:bg-cyan-300 absolute right-1 z-9 top-1" onClick={()=>CardShuffleHandler()}>ReStart</button>
}

export { CardShuffleButton }
