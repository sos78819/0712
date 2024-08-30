import { CardHistoryButton } from "./card-history-button"
import { CardDescriptionButtton } from "./card-description-button"
import { CardShuffleButton } from "./card-suffle-button"
import { CardSave } from "./card-save"
const Header = ({
    openHistory,
    CardHistoryHandler,
    historyOption,
    cardList,
    CardShuffleHandler,
    stephandler,
    CardSaveHandler }) => {

    return <div className="fixed w-full">
        <div className="">
        <div className="flex float-left">
            <CardHistoryButton historyOption={historyOption} CardHistoryHandler={CardHistoryHandler} />
        </div>
        {
        cardList.length === 7 &&
            <div className="flex float-right mr-4">
                {!openHistory && <CardSave cardList={cardList} CardSaveHandler={CardSaveHandler} />}
                <CardShuffleButton CardShuffleHandler={CardShuffleHandler} />
                <CardDescriptionButtton stephandler={stephandler} />
            </div>
        }

        </div>

    </div>


}

export { Header }