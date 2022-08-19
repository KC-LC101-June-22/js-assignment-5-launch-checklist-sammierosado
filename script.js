window.addEventListener("load", function () {
    let form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        let pilot = document.querySelector("input[name=pilotName]").value;
        let copilot = document.querySelector("input[name=copilotName]").value;
        let fuel = document.querySelector("input[name=fuelLevel]").value;
        let cargo = document.querySelector("input[name=cargoMass]").value;
        let list = document.querySelector("ol");

        if(pilot === "" || copilot === "" || fuel === "" || cargo === "") {
            alert("Please fill out all fields");
        } else {
            formSubmission(document, list, pilot, copilot, fuel, cargo);
        }
    });

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        addDestinationInfo(document, pickPlanet(listedPlanets).name, pickPlanet(listedPlanets).diameter, pickPlanet(listedPlanets).star, pickPlanet(listedPlanets).distance, pickPlanet(listedPlanets).moons, pickPlanet(listedPlanets).image);

    })
});