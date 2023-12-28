const initialFreelancers = [
    {
        name: "Alice",
        occupation: "Writer",
        startingPrice: 30,
    },
    {
        name: "Bob",
        occupation: "Teacher",
        startingPrice: 50,
    }
]

console.log(initialFreelancers);

const listOfFreelancers = document.getElementById('listOfFreelancers');

function renderFreelancers() {
    const listOfFreelancers = document.getElementById('listOfFreelancers');
    listOfFreelancers.innerHTML = '';

    initialFreelancers.forEach(freelancer => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <p>Name: ${freelancer.name}</p>
            <p>Occupation: ${freelancer.occupation}</p>
            <p>Starting Price: $${freelancer.startingPrice}</p>
        `;
        listOfFreelancers.appendChild(listItem);
    });
}

function addFreelancer(name, occupation, startingPrice) {
    const newFreelancer = {
        name: name,
        occupation: occupation,
        startingPrice: startingPrice
    }
    initialFreelancers.push(newFreelancer);
    renderFreelancers();
}

addFreelancer('Carol', 'Programmer', 70);
console.log(initialFreelancers);

const possibleNames = ["Larry", "Jordan", "Ben", "Tiffany"];
const possibleOccupations = ["Painter", "Poet", "Fitness Coach", "Repairman"];

function generateRandomFreelancer() {
    const randomNameIndex = Math.floor(Math.random() * possibleNames.length);
    const randomOccupationIndex = Math.floor(Math.random() * possibleOccupations.length);
    const randomName = possibleNames[randomNameIndex];
    const randomOccupation = possibleOccupations[randomOccupationIndex];
    const randomStartingPrice = Math.floor(Math.random() * 100) + 30;

    return {
        name: randomName,
        occupation: randomOccupation,
        startingPrice: randomStartingPrice,
    };
}

setInterval(() => {
    const newRandomFreelancer = generateRandomFreelancer();
    addFreelancer(newRandomFreelancer.name, newRandomFreelancer.occupation, newRandomFreelancer.startingPrice);
    updateAveragePrice();
}, 4000);

function calculateAvgStartingPrice(dataArr) {
    let totalStartingPrice = 0;
    dataArr.forEach(freelancer => {
        totalStartingPrice += freelancer.startingPrice;
    });
    return totalStartingPrice / dataArr.length;
}

function updateAveragePrice() {
    const avgPriceDiv = document.getElementById('avgPrice');
    const avgPrice = calculateAvgStartingPrice(initialFreelancers);
    const avgStartingPrice = document.createElement('p');
    avgStartingPrice.textContent = `Average Starting Price $${avgPrice}`;
    avgPriceDiv.innerHTML = '';
    avgPriceDiv.appendChild(avgStartingPrice);
}

renderFreelancers();
updateAveragePrice();