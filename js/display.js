export function displayTable(data) {

    const tableBody = document.getElementById("table-body");

    tableBody.innerHTML = "";

    data.results.forEach(record => {
        const educationPercentage = record.niveau_d_etudes_eleve_pc;

const educationLevel =
    educationPercentage >= 25
        ? "High"
        : educationPercentage >= 15
        ? "Medium"
        : "Low";

const educationClass =
    educationPercentage >= 25
        ? "high"
        : educationPercentage >= 15
        ? "medium"
        : "low";
        
        tableBody.innerHTML += `
        <tr>
            <td>${record.commune}</td>
            <td>${record.annee}</td>
            <td>${record.total_commune.toLocaleString()}</td>
            <td>${record.hommes_pc.toFixed(2)}%</td>
            <td>${record.femmes_pc.toFixed(2)}%</td>
            <td>
                <span class="education-badge ${educationClass}">
                ${educationLevel} (${educationPercentage.toFixed(2)}%)
                </span>
            </td>
        </tr>
        `;

    });

}
export function displayStatistics(data) {

    const highestMunicipalityElement = document.getElementById("highest-municipality");
    const highestJobseekersElement = document.getElementById("highest-jobseekers");

    const lowestMunicipalityElement = document.getElementById("lowest-municipality");
    const lowestJobseekersElement = document.getElementById("lowest-jobseekers");

    const highestMunicipality = data.results.reduce((highest, current) => {
        return current.total_commune > highest.total_commune ? current : highest;
    });

    const lowestMunicipality = data.results.reduce((lowest, current) => {
        return current.total_commune < lowest.total_commune ? current : lowest;
    });

    highestMunicipalityElement.textContent = highestMunicipality.commune;
    highestJobseekersElement.textContent =
        highestMunicipality.total_commune.toLocaleString();

    lowestMunicipalityElement.textContent = lowestMunicipality.commune;
    lowestJobseekersElement.textContent =
        lowestMunicipality.total_commune.toLocaleString();
}