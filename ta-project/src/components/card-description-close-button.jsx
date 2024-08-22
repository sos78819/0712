import { Button } from "./ui/button"
const CardDescriptionCloseButtton = ({stephandler}) =>{
    return <Button onClick={stephandler} className="rounded-full h-10 w-10 bg-slate-400 absolute right-2 top-2 z-50">X</Button >
}

export { CardDescriptionCloseButtton}