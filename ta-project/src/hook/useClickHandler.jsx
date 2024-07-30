import { useState } from "react";
import { useCardShuffle } from "./useCardShuffle";

const useClickHandler = () => {
  const [cardList, setCardList] = useState([])
  const { tarotCards,setShuffle } = useCardShuffle()
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

  function CardShuffleHandler(){
    setCardList([])
    setShuffle((pre)=> pre + 1)
    setCards(tarotCards)
  }

  return { CardDrawHandler,CardShuffleHandler, cardList, Cards }
}

export { useClickHandler };

