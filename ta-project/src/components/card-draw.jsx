import { useCardShuffle } from "../hook/useCardShuffle"
import { CardImg } from "./card-img"
import { CardSingle } from "./card-single"
const CardDraw = ({ CardDrawHandler }) => {

  const { tarotCards, CardShuffleHandler } = useCardShuffle()

  return (
    <>
      <button onClick={() => CardShuffleHandler()} type="button">洗牌</button>
      <div className="w-full flex  justify-center"  >

        {tarotCards.map((card) => (
          !card.hidden ?<CardSingle className="bg-black" onClick={() => CardDrawHandler(card.cardId)} key={card.cardId}><CardImg  number="TarDefault"></CardImg></CardSingle>
          :<CardSingle className="bg-black"  key={card.cardId}><CardImg className="hidden"  number="TarDefault"></CardImg></CardSingle>
        ))}
      </div></>

  )

}

export { CardDraw }
