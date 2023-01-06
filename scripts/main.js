const container = document.getElementById('container');

fetch('data.json')
  .then(response => response.json())
  .then(data => {

    for (let i = 0; i < 3; i++) {
        const wonder = data.wonders[i];

        const card1 = document.createElement('div');
        card1.classList.add('card1');

        const tourBox1 = document.createElement('div');
        tourBox1.classList.add('tourBox1');

        const image = document.createElement('img');
        image.src = wonder.wonderImgUrl;
        image.alt = '';

        tourBox1.appendChild(image);

        const toursInfo1 = document.createElement('div');
        toursInfo1.classList.add('toursInfo1');

        const toursIn12 = document.createElement('div');
        toursIn12.classList.add('toursIn12');

        const Tourtitle = document.createElement('h1');
        Tourtitle.textContent = wonder.title;

        toursIn12.appendChild(Tourtitle);
        toursInfo1.appendChild(toursIn12);

        const toursIn21 = document.createElement('div');
        toursIn21.classList.add('toursIn21');

        const location = document.createElement('p');
        location.textContent = `${wonder.country}, ${wonder.city}`;

        toursIn21.appendChild(location);

        const price = document.createElement('h3');
        price.textContent = `From $${wonder.price}`;

        toursIn21.appendChild(price);
        toursInfo1.appendChild(toursIn21);
        tourBox1.appendChild(toursInfo1);
        card1.appendChild(tourBox1);
        container.appendChild(card1);
    }
});
