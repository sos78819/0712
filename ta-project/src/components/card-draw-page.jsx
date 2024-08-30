import { CardDraw } from "./card-draw";
import { CardSuffleAnimation } from "./card-suffle-animate";
import { CardSpread } from "./card-spread";
import { CardDrawTips } from "./card-draw-tips";
import { CardDescriptionButtton } from "./card-description-button";
import { CardDescriptionPage } from "./card-description-page";
import { CardSave } from "./card-save";
import { Header } from "./header";
import { CardShuffleButton } from "./card-suffle-button";
const CardDrawPage = ({
    step,
    cardList,
    CardShuffleHandler,
    Cards,
    openHistory,
    CardDrawHandler,
    stephandler,
    CardSaveHandler,
}) => {
    const finalQuestion = localStorage.getItem("QuestionType");
    console.log('finalQuestion', finalQuestion)
    return (

        <>
            {step === 4 && <CardDescriptionPage stephandler={stephandler} cardList={cardList} />}
            {cardList.length === 7 && <div className="flex float-right mr-4 mt-4  md:fixed md:right-2 z-10">
                {!openHistory && <CardSave cardList={cardList} CardSaveHandler={CardSaveHandler} />}
                <CardShuffleButton CardShuffleHandler={CardShuffleHandler} />
                <CardDescriptionButtton stephandler={stephandler} /></div>}            
            <CardSpread cardList={cardList} />

            {!openHistory && <>
                <CardSuffleAnimation />
                <CardDrawTips CardShuffleHandler={CardShuffleHandler} />
                <CardDraw Cards={Cards} CardDrawHandler={CardDrawHandler} />
            </>
            }
        </>)
}

export { CardDrawPage }