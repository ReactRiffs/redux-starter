const initialState = {
  bands: ['Wilco', 'Radiohead', 'Lord Huron'],
  band: null
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
  case 'BAND_NAME_CHANGED':
    return { ...state, band: action.band }
  case 'BAND_SAVED':
    return { ...state, bands: state.bands.concat(action.band), band: null }
  default:
    return state;
  }
}
