import { CardContainer } from "./card-container";
import { CardImg } from "./card-img";
import { CardSingle } from "./card-single";

const CardInSpread = ({CardInfo}) => {
  const class_Str = CardInfo.position?"":"rotate-180"

  return (
    <CardContainer>      
      <CardSingle className="[backface-visibility:hidden]"><CardImg number="TarDefault"></CardImg></CardSingle>      
      <CardSingle className="absolute top-1 [backface-visibility:hidden] [transform:rotateY(180deg)]"><CardImg className={class_Str} number={CardInfo.card}></CardImg></CardSingle>
    </CardContainer>
  )
}

export { CardInSpread };
