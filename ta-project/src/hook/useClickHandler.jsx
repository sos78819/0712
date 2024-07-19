import { useState } from "react"

const useClickHandler = () => {
  const [cardList, setCardList] = useState([])
 
  function CardDrawHandler(number) {  
   console.log(number)
    setCardList(preList => [...preList, number])   
  }
 
  return { CardDrawHandler, cardList }
}

export { useClickHandler }
