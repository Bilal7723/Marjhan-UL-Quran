//All Actions for Reducer

//Radio For Translation Tab
function Radio(value) {
  return {
    type: "Fixed",
    payload: value,
  };
}

// Input value font size for dispalyOption Tab
function displayoption (value){
  return {
    type: "Error",
    payload: value
  };
}

//Check box for AlignData for displayOption Tab
function AlignCheck (value){
  return {
    type: "Check",
    payload: value
  };
}

export {displayoption,Radio,AlignCheck}
