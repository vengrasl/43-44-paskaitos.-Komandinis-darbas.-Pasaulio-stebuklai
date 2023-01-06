const container = document.getElementById('container');

fetch('data.json')
  .then(response => response.json())
  .then(data => {
    
    for (let i = 0; i < 3; i++) {
        const wonder = data.wonders[i];
        
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
        
        const Tourtitle = document.createElement('h1');
        Tourtitle.textContent = wonder.title;
        
        toursIn1.appendChild(Tourtitle);
        toursInfo.appendChild(toursIn1);
        
        const toursIn2 = document.createElement('div');
        toursIn2.classList.add('toursIn2');
        
        const location = document.createElement('p');
        location.textContent = `${wonder.country}, ${wonder.city}`;
        
        toursIn2.appendChild(location);
        
        const price = document.createElement('h3');
        price.textContent = `From $${wonder.price}`;
        
        toursIn2.appendChild(price);
        toursInfo.appendChild(toursIn2);
        tourBox.appendChild(toursInfo);
        card.appendChild(tourBox);
        container.appendChild(card);
    }
});
      
