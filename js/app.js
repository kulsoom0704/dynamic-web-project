import { fetchEmploymentData } from "./api.js";
import { displayTable } from "./display.js";

console.log("App.js is connected successfully!");

const totalRecordsElement = document.getElementById("total-records");

async function initializeApp() {

    const data = await fetchEmploymentData();

    totalRecordsElement.textContent = data.total_count;

    displayTable(data);
}

initializeApp();