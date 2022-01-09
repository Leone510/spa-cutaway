import { StyledStiker } from "./StyledStiker"

export const Sticker = ({name, surname, text}) => {
   return (
      <StyledStiker className="stickerBox">
         <img className="sticker" src="img/note.png" alt="note" />
         <div className="greetingsBox">
            <h1>Hi, my name is<br/>{`${surname} ${name}`}</h1>
            <h2>{text}</h2>
         </div>
      </StyledStiker>
   )
}