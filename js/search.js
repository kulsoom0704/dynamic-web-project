export function searchMunicipality(data, searchText) {

    return data.results.filter(record =>
        record.commune.toLowerCase().includes(searchText.toLowerCase())
    );

}