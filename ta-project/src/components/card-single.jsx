
import { twMerge } from 'tailwind-merge'
const CardSingle = ({children,onClick,className}) => {
  return (<div onClick={onClick}  className={twMerge('w-[150px] bg-black border-2 border-cyan-700 h-auto rounded-md',className)}>
    {children}
  </div>)

}

export { CardSingle }

