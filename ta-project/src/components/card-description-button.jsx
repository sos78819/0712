import { Button } from "./ui/button"

const CardDescriptionButtton = ({stephandler}) => {
    return <div  className="fixed z-20 right-6 top-5">
        <Button onClick={stephandler} className="bg-white cursor-pointer z-10 relative rounded-md p-2 border-2 bordercyan-600  font-bold">
            看解釋
            <span className="absolute flex h-4 w-4 right-[-8px] top-[-8px]">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-700 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-cyan-700"></span>
            </span>
        </Button>

    </div>
}
export { CardDescriptionButtton }