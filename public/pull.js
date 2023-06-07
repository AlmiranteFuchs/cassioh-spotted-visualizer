setInterval(fetchAndUpdateData, 5000); // Fetch data every 5 seconds (adjust as needed)

function fetchAndUpdateData() {
  fetch('/data')
    .then(response => response.json())
    .then(jsonData => updateCardList(jsonData))
    .catch(error => console.log('Error:', error));
}

function updateCardList(jsonData) {
  const cardList = document.getElementById('card-list');
  cardList.innerHTML = '';

  jsonData.forEach(item => {
    const cardItem = document.createElement('li');
    cardItem.innerHTML = `
      <div>
        <h3>${item.title}</h3>
        <p>${item.description}</p>
      </div>
    `;
    cardList.appendChild(cardItem);
  });
}
