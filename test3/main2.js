const countryInput = document.getElementById('country-input');
const searchButton = document.getElementById('search-button');
const resetButton = document.getElementById('reset-button');
const tableContainer = document.getElementById('table-container');

searchButton.addEventListener('click', () => {
    const country = countryInput.value.trim().toLowerCase();

    if (country) {
        fetch(`http://universities.hipolabs.com/search?country=${country}`)
            .then(response => response.json())
            .then(data => {
                if (data.length > 0) {
                    displayTable(data);
                } else {
                    alert('Университеты для указанной страны не найдены.');
                }
            })
            .catch(error => {
                console.error('Ошибка запроса:', error);
            });
    }
});

resetButton.addEventListener('click', () => {
    countryInput.value = '';
    tableContainer.innerHTML = '';
});

function displayTable(data) {
    let tableHtml = '<table>';
    tableHtml += '<tr><th>#</th><th>Имя университета</th><th>Домен</th><th>Страна</th></tr>';

    for (let i = 0; i < data.length; i++) {
        const university = data[i];
        const rowNumber = i + 1;

        tableHtml += `<tr><td>${rowNumber}</td><td><a href="${university.web_pages[0]}" target="_blank">${university.name}</a></td><td><a href= "${university.domains[0]}">${university.domains[0]}</a></td><td>${university.country}</td></tr>`;
    }

    tableHtml += '</table>';
    tableContainer.innerHTML = tableHtml;
}