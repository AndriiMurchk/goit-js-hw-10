
import Notiflix from 'notiflix';

import debounce from 'lodash.debounce';

import './css/styles.css';

import { fetchCountries } from './js/fetchCountrie';
import { createCountryInfo } from './js/templates/country-list';
import { createCountryList } from './js/templates/country-list';


const DEBOUNCE_DELAY = 300;

const searchBox = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

const searchCountry = e => {
  const searchTerm = searchBox.value.trim();

  fetchCountries(searchTerm)
    .then(data => {
      countriesData(data);
    })
    .catch(error => {
      countryInfo.innerHTML = '';
      countryList.innerHTML = '';
        Notiflix.Notify.failure('Oops, there is no country with that name');
      }
    );

  e.preventDefault();
};

function countriesData(data) {
  if (data.length > 10) {
    clearData(countryList);
    clearData(countryInfo);

    Notiflix.Notify.info(
      'Too many matches found. Please enter a more specific name.'
    );
  } else if (data.length > 1 && data.length <= 10) {
    clearData(countryList);
    clearData(countryInfo);

    return countryList.innerHTML = createCountryList(data);
  } else {
    clearData(countryList);
    clearData(countryInfo);

    return countryInfo.innerHTML = createCountryInfo(data);
  }
}

searchBox.addEventListener('input', debounce(searchCountry, DEBOUNCE_DELAY));

function clearData(output) {
  output.innerHTML = '';
}


document.querySelector('#search-box').placeholder = 'Search for any country...';
