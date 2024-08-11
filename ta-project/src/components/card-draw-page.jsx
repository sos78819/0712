import { CardDraw } from "./card-draw";
import { CardDrawPageContainer } from "./card-draw-page-container";
import { CardShuffleButton } from "./card-suffle-button";
import { CardSuffleAnimation } from "./card-suffle-animate";
import { CardSpread } from "./card-spread";

const CardDrawPage = ({ cardList, CardShuffleHandler, Cards, CardDrawHandler }) => {
    return (
        <CardDrawPageContainer>
            <CardSuffleAnimation />
            <CardSpread cardList={cardList} />
            <CardShuffleButton CardShuffleHandler={CardShuffleHandler} />
            <CardDraw Cards={Cards} CardDrawHandler={CardDrawHandler} />
        </CardDrawPageContainer>)
}

export { CardDrawPage }