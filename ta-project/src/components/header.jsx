import { CardHistoryButton } from "./card-history-button"
const Header = ({ CardHistoryHandler, historyOption }) => {

    return <div className="flex float-left ml-2 mt-4  md:fixed md:left-2 z-10">
        <CardHistoryButton historyOption={historyOption} CardHistoryHandler={CardHistoryHandler} />

    </div>

}

export { Header }