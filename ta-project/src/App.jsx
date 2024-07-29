import { CardDraw } from './components/card-draw';
import { CardDrawPageContainer } from './components/card-draw-page-container';
import { CardSpread } from './components/card-spread';
import { useClickHandler } from "./hook/useClickHandler";
import './index.css';
function App() {
  const { CardDrawHandler, cardList, Cards } = useClickHandler()

  return (
    <CardDrawPageContainer>
      <CardSpread cardList={cardList} />
      <CardDraw Cards={Cards} CardDrawHandler={CardDrawHandler} />
    </CardDrawPageContainer>
  )
}

export default App
