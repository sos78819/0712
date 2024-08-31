import { QuestionForm } from "./question-form";
import { QuestionSelect } from "./question-select";
import { Button } from "../ui/button";
import { Arrow } from "../ui/arrow";

// eslint-disable-next-line react/prop-types
const QuestionType = ({ step, typeChange, typeOption, stephandler }) => {

    return (<div>
        <div className="w-full h-[100vh] flex justify-center items-center group font-bold">
            <div className="w-[60%] md:w-[40%] relative">
                <div className="w-full flex  pb-5">
                    <div className="w-12 group-hover:rotate-12 ">
                        <img className="w-full border-sky-100 border-2 rounded-md" src="/cards/TarDefault.jpg" alt="" />
                    </div>

                    <h1 className="text-7xl ml-2 text-center [text-shadow:_0_2px_0_rgb(0_0_0_/_40%)] font-bold">Tarot online</h1>
                </div>
                <QuestionForm>
                    <QuestionSelect step={step} typeChange={typeChange} typeOption={typeOption} />
                </QuestionForm>
                <Button onClick={stephandler} className="absolute right-[-4%] bottom-[-3%] rounded-full bg-emerald-200 p-2 hover:bg-green-100 font-bold drop-shadow-lg"><Arrow /></Button>
            </div>
        </div>
    </div>

    )

}

export { QuestionType }