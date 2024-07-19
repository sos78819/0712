const CardImg = ({number}) =>{
  const url = `/public/cards/${number}.jpg`
  return <img className="w-full" src={url} alt="" />

}

export { CardImg }
