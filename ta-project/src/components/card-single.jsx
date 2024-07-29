
import { twMerge } from 'tailwind-merge'
const CardSingle = ({children,onClick,className,id}) => {
  return (<div onClick={onClick} id={id} className={twMerge('lg:w-[120px] md:w-[60px] sm:w-[55px] xs:w-[40px]  bg-black border-2 border-white h-auto rounded-md',className)}>
    {children}
  </div>)

}

export { CardSingle }

