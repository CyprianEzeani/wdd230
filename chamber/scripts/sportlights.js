const url='https://cyprianezeani.github.io/wdd230/chamber/data/spotlights.json';

async function getSpotlights(){
    const response = await fetch(url);
    const data = await response.json();
    displaySpotlights(data.spotlights);
}
async function displaySpotlights(spotlights){
    const cards = document.querySelector('#cards');

    spotlights.forEach((spotlight)=>{
        let card = document.createElement("section");
        let h2 = document.createElement('h2');
        let level = document.createElement('p');
        let message = document.createElement('p');

        h2.textContent = `${spotlight.name}`;
        level.textContent = `${spotlight.level}`;
        message.textContent = `${spotlight.message}`



        card.appendChild(h2);
        cards.appendChild(message);

        cards.appendChild(card);
    });
}
getMembers();

