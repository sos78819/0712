const CardHistoryMenu = ({ CardHistoryHandler, historyOption }) => {

    return <div className="text-sm text-start rounded-md h-0 overflow-hidden group-hover:h-auto">
        <ul>
            {historyOption.length !== 0 ?
                historyOption.map((list, idx) => {
                    const QuestionName = list.type === "love_1" ? "[感情]單身問未來感情發展" : list.type === "love_2" ? "[感情]與特定對象感情發展" :
                        list.type === "career_1" ? "[事業]當前工作發展" : list.type === "career_2" ? "[事業]求職轉職" :
                            list.type === "fortune_1" ? "[財運]薪資收入" : list.type === "fortune_2" && "[財運]投資理財"

                    return <li onClick={(e) => CardHistoryHandler(list.type, e)} key={`${list.type}_${idx}`} className="bg-sky-50 py-1  hover:bg-white cursor-pointer p-1">{QuestionName}</li>
                }) : <li value="您沒有任何紀錄!" key="noneRecord" className="bg-sky-50 hover:bg-white py-1 cursor-pointer p-1">您沒有任何紀錄!</li>

            }
        </ul>
    </div>
}


export { CardHistoryMenu }