const getCountries = async function () {
    const response = await fetch("https://restcountries.com/v3.1/all")

    const data = await response.json()
    console.log(data)

    renderCountry(data)
}

getCountries()


function renderCountry(data) {
    const tbody = document.querySelector("tbody")
    let index = 1

    data.forEach((country) => {
        const tr = `    
            <tr onclick=countryInfo("${country.name.common}")>
                <th scope="col">${index}</th>
                <td><img src=${country.flags.png} alt="" width="50px" height="30px"></td>
                <td>${country.name.common}</td>
                <td>${country.capital}</td>
                <td>${country.continents}</td>
                <td>${country.population}</td>
                <td>${country.area}</td>
                <td>${getCurrencies(country.currencies)}</td>
                <td>${getMap(country.latlng)}</td>
            </tr>
        `

        tbody.insertAdjacentHTML("beforebegin", tr)

        index++

    });
}

function getCurrencies(currencies) {
    for (let curren in currencies) {
        return currencies[curren].name + " [" + currencies[curren].symbol + "]"
    }
}

function getLanguages(languages) {
    let s = ""
    for (let language in languages) {
        s = s + languages[language] + " "
    }
    return s
}

function getMap(maps) {
    return maps[0].toFixed(0) + "," + maps[1].toFixed(0)
}

function countryInfo(value) {
    alert(value)
}
