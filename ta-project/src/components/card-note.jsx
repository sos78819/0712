import { cardNote } from "../js/cardNote"
const CardNote = ({ position, number,note_Str }) => {
    console.log(cardNote)
    const cardName = cardNote.filter((card)=> card.id === number)
    console.log(cardName)
    return (
        <div className="absolute top-0 w-full  bg-black z-10 h-[100%] rounded-md p-[2px] opacity-0 flex justify-center items-center hover:opacity-50">
            <div>
            <div className="bg-black"><p className="text-lg text-center   text-white font-bold">{position}</p></div>
            <div className="bg-black"><p className="text-lg  text-pretty text-center text-green-200 font-bold">{cardName[0].name}&{note_Str}</p></div>
            </div>

        </div>)
}

export { CardNote }