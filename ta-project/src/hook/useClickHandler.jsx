import { useState } from "react";

const useClickHandler = () => {
  const [cardList, setCardList] = useState([])

  function CardDrawHandler(number) {
    const position = Math.random() < 0.5;
    const newCard = {
      card:number,
      position:position
    }
    console.log(number)
    if (cardList.length < 7) {
      setCardList(preList => [...preList, newCard])
    }
  }

  return { CardDrawHandler, cardList }
}

export { useClickHandler };

