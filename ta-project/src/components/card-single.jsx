
import { twMerge } from 'tailwind-merge'
const CardSingle = ({children,onClick,className,id}) => {
  return (<div onClick={onClick} id={id} className={twMerge('w-[120px] bg-black border-2 border-white h-auto rounded-md',className)}>
    {children}
  </div>)

}

export { CardSingle }

