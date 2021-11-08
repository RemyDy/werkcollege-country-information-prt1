import axios from "axios";

// Op basis van de informatie uit de REST Countries API, haal je data op over _alle_ landen ter wereld

// Pseudo code:
// [x] schrijf asynchrone functie voor een axios get request voor end point "all countries"
// - Schrijf de functie en roep deze in de global scope aan
// - vang het resultaat van de get request in functie op in een variabel
// - zet await in de variabel zodat code  pas inwerking treed als het resultaat van de get request ontvangen is
// - vang de variabel op in een try and catch blok
// - Log de variabel,check in de console wat nog meer gelogd moet worden voor het verkrijgen van de info die we nodig hebben, zet dit in de log
// [x] Zet het resultaat van alle landen als lijst op de pagina
// - We hebben van de endpoint een array met objecten ontvangen, map over de array en return de naam en vang op in een variabel.
// - zet tag in index.html om naar toe te verwijzen en verwijs de variable daarnaar toe met HTML.


async function fetchAllCountries() {
    try {
        const resultFetchAllcountries = await axios.get("https://restcountries.com/v2/all");
        // console.log(resultFetchAllcountries);

        const countryArray = resultFetchAllcountries.data;
        console.log(countryArray);

        countryArray.sort((a, b) => a.population - b.population);

        const countryInfo = countryArray.map(countryObject => {
            return `
            <li> <img class="flag" src="${countryObject.flag}" alt="Vlag"></li>  
            <li>${countryObject.name}</li>  
            <li>Has a population of ${countryObject.population} people</li>
        `;
        });

        const listCountries = document.getElementById("list-countries");
        listCountries.innerHTML = `${countryInfo.join("")}`;

    } catch
        (e) {
        console.error(e);
    }
}

fetchAllCountries();

// async function fetchRegion() {
//     try {
//         const regionArray = countr
//     } catch {
//
//     }
// }
//
// fetchRegion();




