export const Flag = (props) => {
   const country = props.country.toLowerCase()

   return (
      <img
         src={`https://flagcdn.com/16x12/${country}.png`}
         width="20"
         height="14"
         alt="Flag"
      ></img>
   )
}