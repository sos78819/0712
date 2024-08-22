import { CardDraw } from "./card-draw";
import { CardDrawPageContainer } from "./card-draw-page-container";
import { CardSuffleAnimation } from "./card-suffle-animate";
import { CardSpread } from "./card-spread";
import { CardDrawTips } from "./card-draw-tips";
import { CardDescriptionButtton } from "./card-description-button";
import { CardDescriptionPage } from "./card-description-page";
const CardDrawPage = ({step, cardList, CardShuffleHandler, Cards, CardDrawHandler,stephandler }) => {
const finalQuestion = localStorage.getItem("QuestionType");
console.log('finalQuestion',finalQuestion)
    return (     
        
        <CardDrawPageContainer>    
            {step === 4 && <CardDescriptionPage stephandler={stephandler} cardList={cardList}/>}        
            {cardList.length === 7 && <CardDescriptionButtton stephandler={stephandler}/>}
            <CardSuffleAnimation />           
            <CardSpread cardList={cardList} />
            <CardDrawTips CardShuffleHandler={CardShuffleHandler}/>
            <CardDraw Cards={Cards} CardDrawHandler={CardDrawHandler}/>
        </CardDrawPageContainer>)
}

export { CardDrawPage }