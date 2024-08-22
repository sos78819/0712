import { useState } from "react";
import { useCardShuffle } from "./useCardShuffle";

const useClickHandler = () => {
  const [cardList, setCardList] = useState([])
  const { tarotCards, setShuffle } = useCardShuffle()
  const [Cards, setCards] = useState(tarotCards)

  const defaultOption =
    [
      {
        id: "love",
        title: "愛情",

      },
      {
        id: "career",
        title: "事業",

      },
      {
        id: "fortune",
        title: "財運",

      }]
  const loveOption =
    [
      {
        id: "love_1",
        title: "單身問未來感情發展",

      },
      {
        id: "love_2",
        title: "與特定對象感情發展",

      },
      // {
      //     id: "love_3",
      //     title: "婚姻",

      // }
    ]
  const careerOption =
    [
      {
        id: "career_1",
        title: "當前工作發展",

      },
      {
        id: "career_2",
        title: "求職/轉職",

      },
      // {
      //     id: "career_3",
      //     title: "創業",

      // }
    ]
  const fortuneOption =
    [
      {
        id: "fortune_1",
        title: "薪資收入",

      },
      {
        id: "fortune_2",
        title: "投資理財",

      },
      // {
      //     id: "fortune_3",
      //     title: "薪資收入",

      // }
    ]
  const [step, setStep] = useState(1)
  const [QuestionType, setQuestionType] = useState('love')
  const [Option, setOption] = useState(defaultOption)
  
  function typehandler(type) {
    console.log('QuestionType', type)
    setQuestionType(type)
  }
  function stephandler() {
    console.log("click")
    if (QuestionType === "love") {
      setOption(loveOption)
      setQuestionType("love_1")
    } else if (QuestionType === "career") {
      setOption(careerOption)
      setQuestionType("career_1")
    } else if (QuestionType === "fortune") {
      setOption(fortuneOption)
      setQuestionType("fortune_1")
    }
    if (step === 1) { setStep(2) } else if (step === 2) {
      setStep(3)
      //儲存最後QuestionType
      localStorage.setItem("QuestionType", QuestionType);
    } else if (step === 3) {
      setStep(4)
    }else if (step === 4){
      setStep(3)
    }
  }

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

  function CardShuffleHandler() {
    setCardList([])
    setShuffle((pre) => pre + 1)
    setCards(tarotCards)
    setStep(1)
    setQuestionType("love")
    setOption(defaultOption)
  }

  return { CardDrawHandler, CardShuffleHandler, typehandler, stephandler, step, Option, cardList, Cards }
}

export { useClickHandler };

