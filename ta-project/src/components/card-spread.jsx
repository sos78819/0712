import { CardSingle } from "./card-single"

const CardSpread = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-[50%] flex">
        <div className="w-[33%] flex items-center">
          <div className="w-full  flex flex-wrap items-center justify-end">
            <CardSingle/>
            <CardSingle/>
          </div>
        </div>
        <div className="w-[33%] flex flex-wrap justify-center items-center">
          <CardSingle/>
          <CardSingle />
          <CardSingle />
        </div>
        <div className="w-[33%] flex  justify-center items-center">
          <div className="w-full">
            <CardSingle />
            <CardSingle />
          </div>
        </div>
      </div>
    </div>)

}

export { CardSpread }
