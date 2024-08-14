
import { CardImg } from "./card-img";
import { CardInSpread } from "./card-in-spread";
import { CardSingle } from "./card-single";
const CardSpread = ({ cardList }) => {
  console.log('cardList', cardList)
  return (
    <div className="w-full md:sticky md:top-0  flex justify-center items-center">
      <div className="w-[55%] xl:w-[23%] lg:w-[40%] md:w-[45%]  flex py-5">
        <div className="w-[33%] px-[1px] flex items-center">
          <div className="w-full  flex flex-wrap items-center justify-end">
            {cardList[3] ?
              <CardInSpread position="環境" CardInfo={cardList[3]} />
              : <CardSingle><CardImg number="board"></CardImg></CardSingle>}
            {cardList[2] ?
              <CardInSpread position="未來" CardInfo={cardList[2]} />
              : <CardSingle><CardImg number="board"></CardImg></CardSingle>}
          </div>
        </div>
        <div className="w-[33%] px-[1px] flex flex-wrap justify-center items-center">
          {cardList[0] ?
            <CardInSpread position="過去" CardInfo={cardList[0]} />
            : <CardSingle><CardImg number="board"></CardImg></CardSingle>}
          {cardList[6] ?
            <CardInSpread position="結果" CardInfo={cardList[6]} />
            : <CardSingle><CardImg number="board"></CardImg></CardSingle>}
          {cardList[5] ?
            <CardInSpread position="該如何做" CardInfo={cardList[5]} />
            : <CardSingle><CardImg number="board"></CardImg></CardSingle>}
        </div>
        <div className="w-[33%] px-[1px] flex  items-center">
          <div className="w-full flex flex-wrap">
            {cardList[4] ?
              <CardInSpread position="內心想法" CardInfo={cardList[4]} />
              : <CardSingle><CardImg number="board"></CardImg></CardSingle>}
            {cardList[1] ?
              <CardInSpread position="現在" CardInfo={cardList[1]} />
              : <CardSingle><CardImg number="board"></CardImg></CardSingle>}
          </div>
        </div>
      </div>
    </div>)

}

export { CardSpread };

