import { CardDraw } from './components/card-draw';
import { CardDrawPageContainer } from './components/card-draw-page-container';
import { CardSpread } from './components/card-spread';
import { CardShuffleButton } from './components/card-suffle-button';
import { useClickHandler } from "./hook/useClickHandler";
import { QuestionType } from './components/question-form/question-type-form';


import './index.css';
function App() {
  const { CardDrawHandler, CardShuffleHandler,typehandler,stephandler,step,Option, cardList, Cards } = useClickHandler()
  
 
  return (
    parseInt(step) < 3 ? 
    <QuestionType step={step} typeChange={typehandler} typeOption={Option} stephandler={stephandler}/>
    :
      <CardDrawPageContainer>
        <CardSpread cardList={cardList} />
        <CardShuffleButton CardShuffleHandler={CardShuffleHandler} />        
        <CardDraw Cards={Cards} CardDrawHandler={CardDrawHandler} />
      </CardDrawPageContainer>


  )
}

export default App
