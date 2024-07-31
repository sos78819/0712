
import { twMerge } from 'tailwind-merge'
const CardSingle = ({children,onClick,className,id}) => {
  return (<div onClick={onClick} id={id} className={twMerge('lg:w-[120px]  md:w-[90px]  sm:w-[85px] ] xs:w-[80px] bg-black border-l-2 border-white rounded-md',className)}>
    {children}
  </div>)

}

export { CardSingle }

