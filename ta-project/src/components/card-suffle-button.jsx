const CardShuffleButton = ({CardShuffleHandler}) =>{
  return <button className="float-end p-2 rounded-md bg-slate-700 text-white my-2 mr-2 hover:bg-slate-400" onClick={()=>CardShuffleHandler()}>ReFresh</button>
}

export { CardShuffleButton }
