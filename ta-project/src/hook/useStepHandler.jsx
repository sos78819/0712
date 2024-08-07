
import { useState } from "react"

const useStepHandler = () => {
    const defaultOption =
        [
            {
                id: 1,
                title: "愛情",

            },
            {
                id: 2,
                title: "事業",

            },
            {
                id: 3,
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
            {
                id: "love_3",
                title: "婚姻",

            }]
    const careerOption =
        [
            {
                id: "career_1",
                title: "求職/轉職",

            },
            {
                id: "career_2",
                title: "當前工作發展",

            },
            {
                id: "career_3",
                title: "創業",

            }]
    const fortuneOption =
        [
            {
                id: "fortune_1",
                title: "整體財運",

            },
            {
                id: "fortune_2",
                title: "投資理財",

            },
            {
                id: "fortune_3",
                title: "薪資收入",

            }]
    const [step, setStep] = useState(1)
    const [QuestionType, setQuestionType] = useState('1')
    const [Option, setOption] = useState(defaultOption)
    function typehandler(type) {
        console.log(type)
        setQuestionType(type)
    }
    function stephandler() {

        if (parseInt(QuestionType) === 1) {
            setOption(loveOption)
        } else if (parseInt(QuestionType) === 2) {
            setOption(careerOption)
        } else if (parseInt(QuestionType) === 3) {
            setOption(fortuneOption)
        }
        if(step === 1){setStep(2)}else{
            setStep(3)
        }
    }
    return { step, Option, typehandler, stephandler }
}

export {useStepHandler}

