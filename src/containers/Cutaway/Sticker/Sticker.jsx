import { StyledStiker } from "./StyledStiker"

export const Sticker = ({name, surname, text}) => {
   return (
      <StyledStiker className="stickerBox">
         <img className="sticker" src="https://raw.githubusercontent.com/Leone510/cutaway/gh-pages/img/note.png" alt="note" />
         <div className="greetingsBox">
            <h1>Hi, my name is<br/>{`${surname} ${name}`}</h1>
            <h2>{text}</h2>
         </div>
      </StyledStiker>
   )
}