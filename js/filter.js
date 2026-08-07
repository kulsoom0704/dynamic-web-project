export function showFilter(type) {

    const filterContainer = document.getElementById("dynamic-filter");

    if (type === "year") {

        filterContainer.innerHTML = `
            <label for="year-filter">Year</label>

            <select id="year-filter">
                <option>All Years</option>
                <option>2025</option>
                <option>2024</option>
                <option>2023</option>
                <option>2022</option>
            </select>
        `;

    }

}