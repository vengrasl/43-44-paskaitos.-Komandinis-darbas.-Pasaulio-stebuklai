fetch('data.json')
  .then(response => response.json())
  .then(data => {
    // create the container element
    const container = document.createElement('div');
    container.id = 'container';

    // loop through the wonders array
    data.wonders.forEach(wonder => {
      // create a card element
      const card = document.createElement('div');
      card.classList.add('card');

      // create the tourBox element
      const tourBox = document.createElement('div');
      tourBox.classList.add('tourBox');

      // create the image element
      const image = document.createElement('img');
      image.src = wonder.wonderImgUrl;
      image.alt = '';

      // append the image to the tourBox element
      tourBox.appendChild(image);

      // create the toursInfo element
      const toursInfo = document.createElement('div');
      toursInfo.classList.add('toursInfo');

      // create the toursIn1 element
      const toursIn1 = document.createElement('div');
      toursIn1.classList.add('toursIn1');

      // create the title element
      const title = document.createElement('h1');
      title.textContent = wonder.title;

      // append the title to the toursIn1 element
      toursIn1.appendChild(title)
      // append the toursIn1 element to the toursInfo element
toursInfo.appendChild(toursIn1);

// create the toursIn2 element
const toursIn2 = document.createElement('div');
toursIn2.classList.add('toursIn2');

// create the location element
const location = document.createElement('p');
location.textContent = `${wonder.country}, ${wonder.city}`;

// create the price element
const price = document.createElement('h3');
price.textContent = `From ${wonder.price}`;

// append the location and price elements to the toursIn2 element
toursIn2.appendChild(location);
toursIn2.appendChild(price);

// append the toursIn2 element to the toursInfo element
toursInfo.appendChild(toursIn2);

// append the toursInfo element to the tourBox element
tourBox.appendChild(toursInfo);

// append the tourBox element to the card element
card.appendChild(tourBox);

// create the content element
const content = document.createElement('div');
content.classList.add('content');

// create the description element
const description = document.createElement('p');
description.textContent = wonder.description;

// append the description to the content element
content.appendChild(description);

// append the content element to the card element
card.appendChild(content);

// append the card element to the container element
container.appendChild(card);
});

// append the container element to the body element
document.body.appendChild(container);
});


