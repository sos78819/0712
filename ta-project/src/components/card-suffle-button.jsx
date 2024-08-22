import { ReSet } from "./ui/reset"
const CardShuffleButton = ({ CardShuffleHandler }) => {
  return <button className="font-bold rounded-md absolute right-1 text-xs flex bg-violet-300 text-gray-700 p-2  mr-2 hover:bg-violet-200" onClick={() => CardShuffleHandler()}>
    <ReSet/>
    ReStart
  </button>
}

export { CardShuffleButton }
