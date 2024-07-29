import { useState } from "react";
import { useCardShuffle } from "./useCardShuffle";

const useClickHandler = () => {
  const [cardList, setCardList] = useState([])
  const { tarotCards } = useCardShuffle()
  const [Cards, setCards] = useState(tarotCards)
  function CardDrawHandler(number) {
    const position = Math.random() < 0.5;
    const newCard = {
      card: number,
      position: position
    }
    const newCards = Cards.map((card) =>
      card.cardId === number ? { ...card, hidden: true, style: true } : { ...card, style: false }
    );
    if (cardList.length < 7) {
      setCardList(preList => [...preList, newCard])
      setCards(newCards)
    }



  }

  return { CardDrawHandler, cardList, Cards }
}

export { useClickHandler };

