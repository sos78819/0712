import { CardImg } from "./card-img"
import { CardSingle } from "./card-single"
const CardDraw = ({ CardDrawHandler,Cards }) => {

 
  
  return (
    <>
     
      <div className="w-full flex flex-wrap justify-center"  >
        {Cards.map((card) => (
          !card.hidden ?<CardSingle onClick={() => CardDrawHandler(card.cardId)} key={card.cardId}><CardImg number="TarDefault"></CardImg></CardSingle>:
          !card.style
          ?<CardSingle key={card.cardId}><CardImg className="hidden"  number="TarDefault"></CardImg></CardSingle>:
          <CardSingle  key={card.cardId}><CardImg className="up-animation"  number="TarDefault"></CardImg></CardSingle>
        ))}
      </div></>

  )

}

export { CardDraw }

