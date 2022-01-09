const initState = {
   menuActive: false,
}

const storeControl = {
   TOGGLE_MENU_ACTIVE: (state) => {
      return {
         ...state,
         menuActive: !state.menuActive,
      }
   },

   CLOSE_MENU: (state) => {
      return {
         ...state,
         menuActive: false,
      }
   },
}

export const cutawayReducer = (state = initState, action) => {
   const {type, payload} = action;
   if (!(type in storeControl)) return state;
   return storeControl[type](state, payload);
}