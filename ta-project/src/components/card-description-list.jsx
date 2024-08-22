import { CardImg } from "./card-img"
import { cardDeccription } from "../js/cardDescription "
const CardDescriptionList = ({ cardList }) => {
    const QuestionType = localStorage.getItem("QuestionType");

    const QuestionName = QuestionType ==="love_1" ?"[感情]單身問未來感情發展":QuestionType ==="love_2" ?"[感情]與特定對象感情發展":
    QuestionType ==="career_1" ? "[事業]當前工作發展":QuestionType ==="career_2" ? "[事業]求職轉職":
    QuestionType ==="fortune_1" ? "[財運]薪資收入":QuestionType ==="fortune_2" && "[財運]投資理財"

    const cardImg = cardList.map((card, idx) => {
        const cardPosition = idx == 0 ? "過去" : idx === 1 ? "現在" : idx === 2 ? "未來" : idx === 3 ? "你的作為" :
            idx == 4 ? "環境" : idx === 5 ? "內心想法" : idx === 6 && "結果"
       const singleCardDeccription = cardDeccription.filter((singleCard) => singleCard.id === card.card)
        return card.position ?
            <div className="flex bg-slate-200 opacity-80 rounded-md p-1 mb-2">
                <CardImg key={card.card} className="w-24 p-2 rounded-sm" number={card.card} />
                <div className="p-2">
                    <p>{cardPosition}</p>
                    <p>{singleCardDeccription[0].name}(正位)</p>
                    <p>{singleCardDeccription[0].cardDeccription[QuestionType].U}</p>
                </div>
            </div>
            :
            <div className="flex bg-slate-200 opacity-80 rounded-md p-1 mb-2">
                <CardImg key={card.card} className="w-24 p-2 rounded-sm rotate-180" number={card.card} />
                <div className="p-2">
                <p>{cardPosition}</p>
                    <p>{singleCardDeccription[0].name}(逆位)</p>
                    <p>{singleCardDeccription[0].cardDeccription[QuestionType].R}</p>
                    </div>
            </div>

    }
    )
    return <div className="w-[80%] bg-slate-400 opacity-80 h-auto mt-10 p-2">
        <h1 className="text-center block w-full text-5xl py-3">{QuestionName}</h1>
        {cardImg}
    </div>

}
export { CardDescriptionList }