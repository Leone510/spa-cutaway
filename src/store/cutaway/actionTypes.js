const actionTypes = {
   TOGGLE_MENU_ACTIVE: 'TOGGLE_MENU_ACTIVE',
   CLOSE_MENU: 'CLOSE_MENU',
}

export const cutawayActions = {
   toggleMenu: () => ({type: actionTypes.TOGGLE_MENU_ACTIVE}),
   closeMenu: () => ({type: actionTypes.CLOSE_MENU}),
}