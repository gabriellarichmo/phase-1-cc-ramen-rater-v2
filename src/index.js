// index.js
const ramenUrl = 'http://localhost:3000/ramens'
const ramenMenu = document.querySelector('#ramen-menu');
const ramenDetail = document.querySelector('#ramen-detail');
const newRamenForm = document.querySelector('#new-ramen');
const detailImage = ramenDetail.querySelector("img");
const detailName = ramenDetail.querySelector("h2");
const detailRestaurant = ramenDetail.querySelector("h3");
const ratingDisplay = document.querySelector('#rating-display');
const commentDisplay = document.querySelector('#comment-display');

let ramenArray = [];

// Callbacks
const handleClick = (e) => {
  console.log(e)
  let ramenId = e.target.id;
  let ramenData = ramenArray.find(r => r.id == ramenId);
  console.log(ramenData);
  detailRestaurant.innerHTML = ramenData.restaurant;
      detailName.innerHTML = ramenData.name;
      detailImage.src = ramenData.image;
      ratingDisplay.innerHTML = ramenData.rating;
      commentDisplay.innerHTML = ramenData.comment;
};

const addSubmitListener = () => {
  // Add code
  newRamenForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(newRamenForm);

    
    const name = formData.get('name');
    const restaurant = formData.get('restaurant');
    const image = formData.get('image');
    const rating = formData.get('rating');
    const comment = formData.get('new-comment');

    let ramenImg = document.createElement('img');
    ramenImg.src = image;
    ramenImg.alt = name;
    ramenImg.id = ramenArray.length +1;

    ramenArray.push({
      id: ramenArray.length +1,
      name: name,
      restaurant: restaurant,
      image: image,
      rating: rating,
      coment: comment
    })

    ramenImg.addEventListener('click', (e) => handleClick(e))
    ramenMenu.append(ramenImg);
  })
 
  
}

const displayRamens = () => {
  console.log(ramenArray)
  // Add code
  ramenArray.forEach(ramen => {
    let ramenImg = document.createElement('img');
    ramenImg.src = ramen.image;
    ramenImg.alt = ramen.name;
    ramenImg.id = ramen.id;
    ramenImg.addEventListener('click', (e) => handleClick(e))
    ramenMenu.append(ramenImg);
  })
};



const main = () => {
  fetch(ramenUrl)
    .then(resp => resp.json())
    .then(ramens => {
      ramenArray = ramens; 
      displayRamens()
    })
    .catch(err => console.log(err))
  addSubmitListener()

}

main();

// Export functions for testing
export {
  handleClick,
  displayRamens,
  main,
  addSubmitListener
}