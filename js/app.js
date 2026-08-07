import { fetchEmploymentData } from "./api.js";
import { displayTable, displayStatistics } from "./display.js";
import { searchMunicipality } from "./search.js";
import { showFilter } from "./filter.js";

console.log("App.js is connected successfully!");

const totalRecordsElement = document.getElementById("total-records");

async function initializeApp() {

    const data = await fetchEmploymentData();

    const searchInput = document.getElementById("search-input");
    const yearFilter = document.getElementById("year-filter");
    const sortFilter = document.getElementById("sort-filter");

    const years = [...new Set(data.results.map(item => item.annee))].sort((a, b) => b - a);

    years.forEach(year => {
        const option = document.createElement("option");
        option.value = year;
        option.textContent = year;
        yearFilter.appendChild(option);
    });

    function applyFiltersAndSort() {

        let filteredData = [...data.results];

        // Search
        if (searchInput.value !== "") {
            filteredData = searchMunicipality(
                { results: filteredData },
                searchInput.value
            );
        }
        // Year Filter
        if (yearFilter.value !== "") {
        filteredData = filteredData.filter(
        item => String(item.annee) === yearFilter.value
    );
}
        // Sort
switch (sortFilter.value) {

    case "municipality-asc":
        filteredData.sort((a, b) =>
            a.commune.localeCompare(b.commune)
        );
        break;

    case "municipality-desc":
        filteredData.sort((a, b) =>
            b.commune.localeCompare(a.commune)
        );
        break;

    case "highest-jobseekers":
        filteredData.sort((a, b) =>
            b.total_commune - a.total_commune
        );
        break;

    case "lowest-jobseekers":
        filteredData.sort((a, b) =>
            a.total_commune - b.total_commune
        );
        break;
}
    const noResultsMessage = document.getElementById("no-results-message");

    if (filteredData.length === 0) {
        noResultsMessage.style.display = "block";
    } else {
        noResultsMessage.style.display = "none";
    }

        displayTable({ results: filteredData });
    }

    // Event listeners
    searchInput.addEventListener("input", applyFiltersAndSort);
    yearFilter.addEventListener("change", applyFiltersAndSort);
    sortFilter.addEventListener("change", applyFiltersAndSort);
    
    // Statistics
    totalRecordsElement.textContent = data.total_count;
    displayStatistics(data);

    // Initial table
    applyFiltersAndSort();
}

initializeApp();