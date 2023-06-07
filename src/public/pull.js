setInterval(fetchAndUpdateData, 2000); // Fetch data every 5 seconds (adjust as needed)

function fetchAndUpdateData() {
  fetch('/data')
    .then(response => response.json())
    .then(jsonData => updateCardList(jsonData))
    .catch(error => console.log('Error:', error));
}

// Local array of data
const spotteds = [];

function updateCardList(jsonData) {

  // Check if the data has changed 
  if (JSON.stringify(jsonData) === JSON.stringify(spotteds)) {
    return;
  }

  // Update the local array of data
  spotteds.length = 0;
  jsonData.forEach(item => spotteds.push(item));


  const cardList = document.getElementById('card-list');

  // Get last child of cardList
  const lastCard = cardList.lastElementChild;
  // Create a new element to be added after last child
  const newCard = document.createElement('li');

  // If there is no last child, append the new element
  if (!lastCard) {
    cardList.appendChild(newCard);
  } else {
    // If there is a last child, insert the new element after it
    cardList.insertBefore(newCard, lastCard.nextSibling);
  }

  newCard.innerHTML = '';

  jsonData.forEach(item => {
    const cardItem = document.createElement('li');
    console.log(item);
    newCard.innerHTML = `
    <div class="card">
    <div class="card-header">
    <h3>Novo Spotted! *${item.text.split(" ")[1]}*</h3>
    </div>
    <div class="card-body ">
    <img src="anjo.png" alt="Italian Trulli">
      <blockquote class="blockquote mb-0">
        <p>${item.command_params.join(" ")}</p>
        <footer class="blockquote-footer">Apaixonado <cite title="Source Title">${item.command_options[0] ?? "misterioso"}</cite></footer>
      </blockquote>
    </div>
    </div>`;
    cardList.appendChild(newCard);

    window.scrollTo(0, document.body.scrollHeight);

  });
}
