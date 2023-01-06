fetch('data.json')
  .then(response => response.json())
  .then(data => {
    
    const container = document.createElement('div');
    container.id = 'container';

    data.wonders.forEach(wonder => {
      const card = document.createElement('div');
      card.classList.add('card');

      const tourBox = document.createElement('div');
      tourBox.classList.add('tourBox');

      const image = document.createElement('img');
      image.src = wonder.wonderImgUrl;
      image.alt = '';

      tourBox.appendChild(image);

      const toursInfo = document.createElement('div');
      toursInfo.classList.add('toursInfo');

      const toursIn1 = document.createElement('div');
      toursIn1.classList.add('toursIn1');

      const title = document.createElement('h1');
      title.textContent = wonder.title;

      toursIn1.appendChild(title)
toursInfo.appendChild(toursIn1);

const toursIn2 = document.createElement('div');
toursIn2.classList.add('toursIn2');

const location = document.createElement('p');
location.textContent = `${wonder.country}, ${wonder.city}`;

const price = document.createElement('h3');
price.textContent = `From ${wonder.price}`;

toursIn2.appendChild(location);
toursIn2.appendChild(price);
toursInfo.appendChild(toursIn2);
tourBox.appendChild(toursInfo);
card.appendChild(tourBox);

const content = document.createElement('div');
content.classList.add('content');

const description = document.createElement('p');
description.textContent = wonder.description;

content.appendChild(description);
card.appendChild(content);
container.appendChild(card);
});

document.body.appendChild(container);
});


