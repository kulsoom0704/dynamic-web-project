import { fetchEmploymentData } from "./api.js";
import { displayTable, displayStatistics } from "./display.js";
import { searchMunicipality } from "./search.js";

console.log("App.js is connected successfully!");

const totalRecordsElement = document.getElementById("total-records");

async function initializeApp() {

    const data = await fetchEmploymentData();

    totalRecordsElement.textContent = data.total_count;

    displayTable(data);
    displayStatistics(data);

    const searchInput = document.getElementById("search-input");

    searchInput.addEventListener("input", () => {

        const filteredData = searchMunicipality(data, searchInput.value);

        displayTable({ results: filteredData });

    });

}

initializeApp();