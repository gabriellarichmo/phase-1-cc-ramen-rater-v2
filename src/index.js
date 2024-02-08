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
let ramenArray = null;

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

const addSubmitListener = (e) => {
  // Add code
  newRamenForm.addEventListener('submit', (e) =>{ e.preventDefault()
  
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

  // Invoke displayRamens here
  // Invoke addSubmitListener here
}

main();

// Export functions for testing
export {
  handleClick,
  displayRamens,
  main,
  addSubmitListener
}