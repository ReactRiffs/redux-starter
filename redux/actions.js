export const onBandNameChange = (band) => {
  return {
    type: 'BAND_NAME_CHANGED',
    band: band
  }
}
export const bandSaved = (band) => {
  return {
    type: 'BAND_SAVED',
    band: band
  }
}
