const API_URL = "https://opendata.brussels.be/api/explore/v2.1/catalog/datasets/evolution-moyenne-annuelle-demandeurs-d-emploi-inoccupes-par-commune-genre-niveau-etudes-rbc/records?limit=20";

export async function fetchEmploymentData() {

    const response = await fetch(API_URL);

    const data = await response.json();

    return data;
}
// fetchEmploymentData();