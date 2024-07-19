import { CardDraw } from './components/card-draw';
import { CardSpread } from './components/card-spread';
import { useClickHandler } from "./hook/useClickHandler";
import './index.css';
function App() {
  const {CardDrawHandler,cardList} = useClickHandler()
 
  return (
    <>
   <CardSpread cardList={cardList}/>
   <CardDraw CardDrawHandler={CardDrawHandler}/>
    </>
  )
}

export default App
