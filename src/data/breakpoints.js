const size = {
   mobileS: '320px',
   mobile: '425px',
   tablet: '768px',
   laptop: '1024px',
   laptopL: '1440px',
}

export const device = {
   mobileS: `(min-width: ${size.mobileS})`,
   mobile: `(min-width: ${size.mobile})`,
   tablet: `(min-width: ${size.tablet})`,
   laptop: `(min-width: ${size.laptop})`,
   laptopL: `(min-width: ${size.laptopL})`,

   landscape: `(orientation: landscape)`,
 };