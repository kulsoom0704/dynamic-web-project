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
            <td>${record.total_commune}</td>
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