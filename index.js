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

function addFreelancer(name, occupation, startingPrice) {
    const newFreelancer = {
        name: name,
        occupation: occupation,
        startingPrice: startingPrice
    }
    initialFreelancers.push(newFreelancer);
    
}
addFreelancer('Carol', 'Programmer', 70);
console.log(initialFreelancers);

setInterval(() => {
    addFreelancer("Cody", "Fitness Coach, 60");
}, 4000);

console.log(initialFreelancers);

const listOfFreelancers = document.getElementById('listOfFreelancers');

function renderFreelancers() {
    initialFreelancers.forEach(freelancer => {
        const freelancerDiv = document.createElement('div');
        const name = document.createElement('p');
        const occupation = document.createElement('p');
        const price = document.createElement('p');
    
        name.textContent = `Name: ${freelancer.name}`;
        occupation.textContent = `Occupation: ${freelancer.occupation}`;
        price.textContent = `Starting Price: $${freelancer.startingPrice}`;
    
        freelancerDiv.appendChild(name);
        freelancerDiv.appendChild(occupation);
        freelancerDiv.appendChild(price);
    
        listOfFreelancers.appendChild(freelancerDiv);
    });
}

renderFreelancers();

function calculateAvgStartingPrice(dataArr) {
    let totalStartingPrice = 0;
    dataArr.forEach(freelancer => {
        totalStartingPrice += freelancer.startingPrice;
    });
    return totalStartingPrice / dataArr.length;
}

const avgPrice = calculateAvgStartingPrice(initialFreelancers);
console.log(avgPrice);

const avgPriceDiv = document.getElementById('avgPrice');
const avgStartingPrice = document.createElement('p');
avgStartingPrice.textContent = `Average Starting Price $${avgPrice}`;

avgPriceDiv.appendChild(avgStartingPrice);

