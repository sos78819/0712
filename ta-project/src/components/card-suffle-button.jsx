const CardShuffleButton = ({CardShuffleHandler}) =>{
  return <button className="absolute float-end z-1 p-2 rounded-md bg-slate-700 text-white my-2 mr-2 hover:bg-slate-400" onClick={()=>CardShuffleHandler()}>ReStart</button>
}

export { CardShuffleButton }
