const baseURL = "https://cyprianezeani.github.io/wdd230/"; 
const linksURL = baseURL + "data/links.json";

async function getLinks() {
  try {
    const response = await fetch(linksURL);
    if (response.ok) {
      const data = await response.json();
      displayLinks(data.weeks);
    } else {
      console.error("Failed to fetch data.");
    }
  } catch (error) {
    console.error(error);
  }
}

function displayLinks(weeks) {
  const activityList = document.querySelector(".card1 ul");
  activityList.innerHTML = ""; // Clear the existing static links

  weeks.forEach((weekData) => {
    const weekItem = document.createElement("li");
    weekItem.innerHTML = `${weekData.week}:`;
    const linksList = document.createElement("ul");

    weekData.links.forEach((linkData) => {
      const linkItem = document.createElement("li");
      const link = document.createElement("a");
      link.href = baseURL + linkData.url;
      link.textContent = linkData.title;
      linkItem.appendChild(link);
      linksList.appendChild(linkItem);
    });

    weekItem.appendChild(linksList);
    activityList.appendChild(weekItem);
  });
}

getLinks(); // Fetch and display the dynamic links
