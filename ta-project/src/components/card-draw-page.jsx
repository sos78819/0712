import { CardDraw } from "./card-draw";
import { CardDrawPageContainer } from "./card-draw-page-container";

import { CardSuffleAnimation } from "./card-suffle-animate";
import { CardSpread } from "./card-spread";
import { CardDrawTips } from "./card-draw-tips";
const CardDrawPage = ({ cardList, CardShuffleHandler, Cards, CardDrawHandler }) => {
    return (
        <CardDrawPageContainer>
            <CardSuffleAnimation />            
            <CardSpread cardList={cardList} />
            <CardDrawTips CardShuffleHandler={CardShuffleHandler}/>
            <CardDraw Cards={Cards} CardDrawHandler={CardDrawHandler} />
        </CardDrawPageContainer>)
}

export { CardDrawPage }