
import { CardImg } from "./card-img";
import { CardSingle } from "./card-single";

const CardSpread = ({cardList}) => {
  const cardStyle = "w-[200px] bg-black border-2 border-cyan-700 h-64 mb-[20px] rounded-md";
  console.log('cardList',cardList)
  
  return (

    <div className="w-full  flex justify-center items-center">
      
      <div className="w-[40%] flex py-5">
        <div className="w-[33%] flex items-center">
          <div className="w-full  flex flex-wrap items-center justify-end">          
          {cardList[3]?<CardSingle><CardImg number={cardList[3]}></CardImg></CardSingle>:<CardSingle><CardImg number="board"></CardImg></CardSingle>}
          {cardList[2]?<CardSingle><CardImg number={cardList[2]}></CardImg></CardSingle>:<CardSingle><CardImg number="board"></CardImg></CardSingle>}
          </div>
        </div>
        <div className="w-[33%] flex flex-wrap justify-center items-center">
        {cardList[0]?<CardSingle><CardImg number={cardList[0]}></CardImg></CardSingle>:<CardSingle><CardImg number="board"></CardImg></CardSingle>}
        {cardList[6]?<CardSingle><CardImg number={cardList[6]}></CardImg></CardSingle>:<CardSingle><CardImg number="board"></CardImg></CardSingle>}
        {cardList[5]?<CardSingle><CardImg number={cardList[5]}></CardImg></CardSingle>:<CardSingle><CardImg number="board"></CardImg></CardSingle>}
        </div>
        <div className="w-[33%] flex  items-center">
          <div className="w-full flex flex-wrap">
          {cardList[4]?<CardSingle><CardImg number={cardList[4]}></CardImg></CardSingle>:<CardSingle><CardImg number="board"></CardImg></CardSingle>}
          {cardList[1]?<CardSingle><CardImg number={cardList[1]}></CardImg></CardSingle>:<CardSingle><CardImg number="board"></CardImg></CardSingle>}
          </div>
        </div>
      </div>
    </div>)

}

export { CardSpread };

