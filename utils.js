

// (чёрный/белый) тоггл цвета по яркости -------------------------------------------------------------------------

function toggleColor(color) {
  
  let r = parseInt(color.substr(1, 2), 16);
  let g = parseInt(color.substr(3, 2), 16);
  let b = parseInt(color.substr(5, 2), 16);
  let luma = 0.2126 * r + 0.7152 * g + 0.0722 * b; // per ITU-R BT.709
  let newcolor;
  
  if (luma < 100) {
    // pick a different colour
    newcolor = 'white';
  } else {
    newcolor = 'black';
  }
  
  return newcolor;  
}
