
import { twMerge } from 'tailwind-merge'
const CardSingle = ({children,onClick,className,id}) => {
  return (<div onClick={onClick} id={id} className={twMerge('bg-black border-l-2 border-white rounded-md',className)}>
    {children}
  </div>)

}

export { CardSingle }

