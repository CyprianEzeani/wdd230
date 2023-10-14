const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}

const url='https://quiet-pirate.github.io/wdd230/chamber/data/members.json';

async function getMembers(){
    const response = await fetch(url);
    const data = await response.json();
    displayMembers(data.members);
}
async function displayMembers(members){
    const cards = document.querySelector('#cards');

    members.forEach((member)=>{
        let card = document.createElement("section");
        let h2 = document.createElement('h2');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let url = document.createElement('a');
        let image = document.createElement('img');
        let level = document.createElement('p');

        h2.textContent = `${member.name}`;
        address.textContent = `${member.address}`;
        phone.textContent = `${member.phoneNumber}`;
        url.textContent = `${member.url}`;
        level.textContent = `${member.level}`;

        image.setAttribute('src', member.image);


        card.appendChild(h2);
        card.appendChild(image);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(url);
        cards.appendChild(level);

        cards.appendChild(card);
    });
}
getMembers();


