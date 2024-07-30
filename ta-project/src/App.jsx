import { CardDraw } from './components/card-draw';
import { CardDrawPageContainer } from './components/card-draw-page-container';
import { CardSpread } from './components/card-spread';
import { CardShuffleButton } from './components/card-suffle-button';
import { useClickHandler } from "./hook/useClickHandler";
import './index.css';
function App() {
  const { CardDrawHandler,CardShuffleHandler, cardList, Cards } = useClickHandler()

  return (
    <CardDrawPageContainer>
      <CardSpread cardList={cardList} />
      <CardShuffleButton CardShuffleHandler={CardShuffleHandler}/>
      <CardDraw Cards={Cards} CardDrawHandler={CardDrawHandler} />
    </CardDrawPageContainer>
  )
}

export default App
