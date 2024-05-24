
document.addEventListener('DOMContentLoaded', () => {
    const countryList = document.getElementById('List');
    const searchInput = document.getElementById('search');
  
  
    fetch('data.json')
      .then(response => response.json())
      .then(data => {

        displayCountries(data.slice(0, 5));

        searchInput.addEventListener('input', () => {
          const query = searchInput.value.toLowerCase();
          const filteredCountries = data.filter(country => 
            country.name.toLowerCase().includes(query)
          );
          displayCountries(filteredCountries);
        });
      })
      .catch(error => console.error('Error', error));
  
    function displayCountries(countries) {
  
      countryList.innerHTML = '';
  
      countries.forEach(country => {
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country');
        countryDiv.innerHTML = `
          <img src="${country.flags.png}" alt="${country.name} flag">
          <div class="country
          ">
            <h2>${country.name}</h2>
            <p><strong>Capital:</strong> ${country.capital}</p>
            <p><strong>Region:</strong> ${country.region}</p>
            <p><strong>Population:</strong> ${country.population.toLocaleString()}</p>
            <p><strong>Languages:</strong> ${country.languages.map(lang => lang.name).join(', ')}</p>
          </div>
        `;
        countryList.appendChild(countryDiv);
      });
    }
  });
  