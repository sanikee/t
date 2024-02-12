
// бд 
const db = {
  '': [], 
}

// картинки для фонов 
const backs = [
  'https://sun9-47.userapi.com/impg/uuh39oiO8uIi0YKi18cLN_IgXYztQjEQ-eraFg/iqbyw06jlxU.jpg?size=605x807&quality=95&sign=91be958bc5446098997e75150045c208&c_uniq_tag=Q3f9DoVlQXk_M1UoU9LbNxlLXI1KGBCkHhx0yb2RjKU&type=album',
  'https://i.pinimg.com/564x/89/bb/09/89bb094718bba0b018aa078d775dbc8e.jpg',
  'https://i.pinimg.com/564x/13/bd/a5/13bda57b2406b1ade89675e7c8fdeb48.jpg',
  'https://sun9-39.userapi.com/impg/0DJVHX5F-pHyWKsUTbvBQloFrp8tuG6yD-p3fg/H5Er9tDYE_M.jpg?size=736x1104&quality=95&sign=38341ab5bd038d1eb40268cf9ae5ee0c&type=album',
  'https://sun140-2.userapi.com/impg/8ugXEfB_hQZURv6-8yGgSV5uSO602uuKdH6ciA/azXk_ZBfQks.jpg?size=1620x2160&quality=95&sign=5b2d5094f66fe141b8177f895e6c857f&type=album',
  'https://sun140-2.userapi.com/impg/knyId51nYHUfFVfdBNwKNRACX044llphlmo-Uw/3jP79MMu24M.jpg?size=1620x2160&quality=95&sign=24a84ee0d278c480b3f6c682b76693f9&type=album',
  '',
]

// перемешивание картинок для разного порядка 
shuffle(backs);

// перемешивает массив -------------------------------------------------------------------------

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;
  // While there remain elements to shuffle.
  while (currentIndex > 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
}

