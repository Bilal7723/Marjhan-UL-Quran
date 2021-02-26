const initialStateRadio = { radiovalue: "mouseHover" } 
const checkAlign = { check:true }
const displayValue = { number : {tabName: "", number : 20, error : "" }}
  
  // All Reducers:
//Radio Button For Translation Tab
 function radioReducer(state = initialStateRadio, action) {
    if (action.type === 'Fixed') {
        return {
          ...state,
          radiovalue: action.payload.radio
          }
      }
    else return state;
  }
// Input value font size for dispaly Tab
  function displayOptButtonReducer(state = displayValue, action) {
    if (action.type === 'Error') {
        return {
          ...state,
          number: action.payload
          }
      }
      else return state;
  }
  // check box for text align
  function displayOptCheckReducer(state = checkAlign, action) {
    if (action.type === 'Check') {
        return {
          ...state,
          check: action.payload
          }
      }
      else return state;
  }

  export {radioReducer,displayOptButtonReducer,displayOptCheckReducer};