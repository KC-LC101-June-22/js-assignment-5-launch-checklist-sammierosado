// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    document.querySelector("#missionTarget").innerHTML = `<h2>Mission Destination</h2>
    <ol>
        <li>Name:  ${name}</li>
        <li>Diameter:  ${diameter}</li>
        <li>Star: ${star}</li>
        <li>Distance from Earth:  ${distance}</li>
        <li>Number of Moons:  ${moons}</li>
    </ol>
    <img src="${imageUrl}">`
}

function validateInput(testInput) {

    if (isNaN(testInput)) {
        return ("Not a Number");
    } else if (testInput === "") {
        return ("Empty");
    } else {
        return ("Is a Number");
    }
}


function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number" || validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number") {
        alert("Make sure to enter valid information for each field!");
    }
    if (fuelLevel > 10000) {
        document.querySelector("#launchStatus").innerHTML = `<h2 style="color:red">Shuttle Not Ready for Launch</h2>`;
        document.querySelector("#faultyItems").style.visibility = "visible";
        document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot} is ready for launch`;
        document.querySelector("#copilotStatus").innerHTML = `Copilot ${copilot} is ready for launch`;
        document.querySelector("#fuelStatus").innerHTML = `Fuel level is too low for launch`;
    } else if (cargoLevel < 10000) {
        document.querySelector("#launchStatus").innerHTML = `<h2 style="color:red">Shuttle Not Ready for Launch</h2>`;
        document.querySelector("#faultyItems").style.visibility = "visible";
        document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot} is ready for launch!`;
        document.querySelector("#copilotStatus").innerHTML = `Co-pilot ${copilot} is ready for launch!`;
        document.querySelector("#cargoStatus").innerHTML = `Cargo mass is too high for launch`;
    }


}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
        return response.json();
    });

    return planetsReturned;
}

function pickPlanet(planets) {
    let randomPlanet = Math.floor(Math.random() * planets.length);
    return planets[randomPlanet];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;