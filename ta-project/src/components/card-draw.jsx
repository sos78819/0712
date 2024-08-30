import { CardImg } from "./card-img"
import { CardSingle } from "./card-single"
const CardDraw = ({ CardDrawHandler,Cards }) => {

 
  
  return (
    <>     
      <div className="w-full flex flex-wrap justify-center py-3 bg-gradient-to-b from-indigo-50 to-transparent opacity-85">
        {Cards.map((card,idx) => (
          idx === 0?          
          !card.hidden ?<CardSingle className="lg:w-[100px] md:w-[89px] sm:w-[58px] xs:w-[50px] cursor-pointer hover:mt-[-10px]"  onClick={() => CardDrawHandler(card.cardId)} key={card.cardId}><CardImg  number="TarDefault"></CardImg></CardSingle>:
          !card.style
          ?<CardSingle className="lg:w-[100px] md:w-[89px] sm:w-[58px] xs:w-[50px] cursor-pointer" key={card.cardId}><CardImg className="opacity-0" number="TarDefault"></CardImg></CardSingle>:
          <CardSingle className="lg:w-[100px] md:w-[89px] sm:w-[58px] xs:w-[50px] cursor-pointer"  key={card.cardId}><CardImg className="up-animation"  number="TarDefault"></CardImg></CardSingle>:
          !card.hidden ?<CardSingle className="lg:w-[100px] md:w-[89px] sm:w-[58px] xs:w-[50px] cursor-pointer hover:mt-[-10px] ml-[-20px]"  onClick={() => CardDrawHandler(card.cardId)} key={card.cardId}><CardImg  number="TarDefault"></CardImg></CardSingle>:
          !card.style
          ?<CardSingle className="lg:w-[100px] md:w-[89px] sm:w-[58px] xs:w-[50px] cursor-pointer ml-[-20px]" key={card.cardId}><CardImg className="opacity-0" number="TarDefault"></CardImg></CardSingle>:
          <CardSingle className="lg:w-[100px] md:w-[89px] sm:w-[58px] xs:w-[50px] cursor-pointer ml-[-20px]"  key={card.cardId}><CardImg className="up-animation"  number="TarDefault"></CardImg></CardSingle>

          
        ))}
      </div></>

  )

}

export { CardDraw }

