import { Button } from "./ui/button"
import { CardHistoryMenu } from "./card-history-menu"
import { useState } from "react"
const CardHistoryButton = ({ CardHistoryHandler }) => {


    const [menu, setMenu] = useState(false)
    const handleBlur = () => {
       // alert('onblur')
        setMenu(false)
    };
    return <div>          
        <Button  onClick={() => setMenu(prev => prev ? false : true)} className=" bg-white font-bold rounded-md p-1 border-2 border-cyan-600">
            歷史紀錄▾          
        </Button>        
        <CardHistoryMenu  CardHistoryHandler={CardHistoryHandler} menu={menu} />
    </div>

}

export { CardHistoryButton }