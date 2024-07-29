import { CardImg } from "./card-img"
import { CardSingle } from "./card-single"
const CardDraw = ({ CardDrawHandler,Cards }) => {

 
  
  return (
    <>
     
      <div className="w-full flex flex-wrap justify-center"  >
        {Cards.map((card) => (
          !card.hidden ?<CardSingle className="lg:w-[100px] md:w-[90px] sm:w-[60px] xs:w-[50px]"  onClick={() => CardDrawHandler(card.cardId)} key={card.cardId}><CardImg  number="TarDefault"></CardImg></CardSingle>:
          !card.style
          ?<CardSingle className="lg:w-[100px] md:w-[90px] sm:w-[60px] xs:w-[50px]" key={card.cardId}><CardImg className="opacity-0" number="TarDefault"></CardImg></CardSingle>:
          <CardSingle className="lg:w-[100px] md:w-[90px] sm:w-[60px] xs:w-[50px]"  key={card.cardId}><CardImg className="up-animation"  number="TarDefault"></CardImg></CardSingle>
        ))}
      </div></>

  )

}

export { CardDraw }

