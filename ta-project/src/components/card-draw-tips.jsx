import { CardShuffleButton } from "./card-suffle-button"


const CardDrawTips = ({ CardShuffleHandler }) => {
    return <div className="flex w-full sticky top-1 bottom-3 z-9">
        <CardShuffleButton CardShuffleHandler={CardShuffleHandler} />
        <p className="pl-2 text-zinc-800 flex font-bold">請憑直覺從下方抽出7張牌</p>
        <div className="animate-bounce bg-white dark:bg-slate-800 p-2 w-9 h-9 ring-1 ring-slate-900/5 dark:ring-slate-200/20 shadow-lg rounded-full flex items-center justify-center ml-3">
            <svg className="w-5 h-5 text-violet-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
        </div>

    </div>

}

export { CardDrawTips }