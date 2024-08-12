const CardShuffleButton = ({CardShuffleHandler}) =>{
  return <div><button className="float-end rounded-md bg-cyan-500 text-slate-800 p-2 my-2 mr-2 hover:bg-cyan-300" onClick={()=>CardShuffleHandler()}>ReStart</button></div>
}

export { CardShuffleButton }
