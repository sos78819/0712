
import { twMerge } from 'tailwind-merge'
const CardSingle = ({children,onClick,className,id}) => {
  return (<div onClick={onClick} id={id} className={twMerge('bg-black p-[1px] border-l-2 border-white rounded-md relative',className)}>
    {children}
  </div>)

}

export { CardSingle }

