
import { CardImg } from "./card-img";
import { CardInSpread } from "./card-in-spread";
import { CardSingle } from "./card-single";
const CardSpread = ({ cardList }) => {
  console.log('cardList', cardList)
  return (
    <div className="w-full  flex justify-center items-center">
      <div className="xl:w-[20%] lg:w-[35%] md:w-[40%] sm:w-[50%] xs:w-[90%] flex py-5">
        <div className="w-[33%] flex items-center">
          <div className="w-full  flex flex-wrap items-center justify-end">
            {cardList[3] ?
              <CardInSpread CardInfo={cardList[3]} />
              : <CardSingle><CardImg number="board"></CardImg></CardSingle>}
            {cardList[2] ?
              <CardInSpread CardInfo={cardList[2]} />
              : <CardSingle><CardImg number="board"></CardImg></CardSingle>}
          </div>
        </div>
        <div className="w-[33%] flex flex-wrap justify-center items-center">
          {cardList[0] ?
            <CardInSpread CardInfo={cardList[0]} />
            : <CardSingle><CardImg number="board"></CardImg></CardSingle>}
          {cardList[6] ?
            <CardInSpread CardInfo={cardList[6]} />
            : <CardSingle><CardImg number="board"></CardImg></CardSingle>}
          {cardList[5] ?
            <CardInSpread CardInfo={cardList[5]} />
            : <CardSingle><CardImg number="board"></CardImg></CardSingle>}
        </div>
        <div className="w-[33%] flex  items-center">
          <div className="w-full flex flex-wrap">
            {cardList[4] ?
              <CardInSpread CardInfo={cardList[4]} />
              : <CardSingle><CardImg number="board"></CardImg></CardSingle>}
            {cardList[1] ?
              <CardInSpread CardInfo={cardList[1]} />
              : <CardSingle><CardImg number="board"></CardImg></CardSingle>}
          </div>
        </div>
      </div>
    </div>)

}

export { CardSpread };

