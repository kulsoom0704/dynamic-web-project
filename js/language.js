const translations = {

    en: {
        searchMunicipality: "Search Municipality",
        year: "Year",
        sort: "Sort",

        statistics: "Statistics",
        employmentData: "Employment Data",

        totalRecords: "Total Records",
        highestJobseekers: "Highest Jobseekers",
        lowestJobseekers: "Lowest Jobseekers",

        municipality: "Municipality",
        totalJobseekers: "Total Jobseekers",
        men: "Men (%)",
        women: "Women (%)",
        educationLevel: "Education Level (%)",

        noResults: "No matching records found. Try another municipality or select another year."
    },

    fr: {
        searchMunicipality: "Rechercher une commune",
        year: "Année",
        sort: "Trier",

        statistics: "Statistiques",
        employmentData: "Données sur l'emploi",

        totalRecords: "Nombre total d'enregistrements",
        highestJobseekers: "Plus grand nombre de demandeurs d'emploi",
        lowestJobseekers: "Plus petit nombre de demandeurs d'emploi",

        municipality: "Commune",
        totalJobseekers: "Total des demandeurs d'emploi",
        men: "Hommes (%)",
        women: "Femmes (%)",
        educationLevel: "Niveau d'études (%)",

        noResults: "Aucun résultat trouvé. Essayez une autre commune ou une autre année."
    },

    nl: {
        searchMunicipality: "Zoek gemeente",
        year: "Jaar",
        sort: "Sorteren",

        statistics: "Statistieken",
        employmentData: "Werkgelegenheidsgegevens",

        totalRecords: "Totaal aantal records",
        highestJobseekers: "Hoogste aantal werkzoekenden",
        lowestJobseekers: "Laagste aantal werkzoekenden",

        municipality: "Gemeente",
        totalJobseekers: "Totaal aantal werkzoekenden",
        men: "Mannen (%)",
        women: "Vrouwen (%)",
        educationLevel: "Opleidingsniveau (%)",

        noResults: "Geen resultaten gevonden. Probeer een andere gemeente of een ander jaar."
    }

};

export function initializeLanguage() {

    const languageSelect = document.getElementById("language-select");

    const savedLanguage = localStorage.getItem("language") || "en";

    languageSelect.value = savedLanguage;

    changeLanguage(savedLanguage);

    languageSelect.addEventListener("change", () => {

        localStorage.setItem("language", languageSelect.value);

        changeLanguage(languageSelect.value);

    });

}

function changeLanguage(language) {

    const elements = document.querySelectorAll("[data-translate]");

    elements.forEach(element => {

        const key = element.dataset.translate;

        if (translations[language][key]) {
            element.textContent = translations[language][key];
        }

    });

}