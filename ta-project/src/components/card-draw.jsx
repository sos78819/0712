import { useCardShuffle } from "../hook/useCardShuffle"
import { CardImg } from "./card-img"

import { CardSingle } from "./card-single"
const CardDraw = ({ CardDrawHandler }) => {
  const { tarot } = useCardShuffle()



  return (
    <div className="w-full flex  justify-center"  >
      {tarot.map((card) => (
        <CardSingle onClick={() => CardDrawHandler(card)} key={card}><CardImg number="TarDefault"></CardImg></CardSingle>
      ))}
    </div>
  )

}

export { CardDraw }
