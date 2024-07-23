import { twMerge } from 'tailwind-merge'

const CardImg = ({number,className}) =>{
  const url = `/cards/${number}.jpg`
  return <img className={twMerge("w-full rounded-md",className)} src={url} alt="" />
}

export { CardImg }

