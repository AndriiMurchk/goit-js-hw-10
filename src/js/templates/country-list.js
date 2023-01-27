export const createCountryInfo = arr => {
    return arr.map(
        item => 
        `
                
            <div class = 'country-card'>
            
                <div class = 'card-title'>
                <img class='flag-card' src = '${item.flags.svg}' />
                <h3 class='title-country'>${item.name}</h3>
                </div>
                <div class = 'country-body'>
                                            
                    <p><b>Capital: </b> ${item.capital}</p>
                    <p><b>Population: </b> ${item.population.toLocaleString()}</p>
                    <p><b>Languages: </b> ${item.languages[0].name}</p>
                </div>
    
            </div>
                
        `
      )
      .join('')
    };

    export const createCountryList = arr => {
        return arr.map(
            item => 
            `
                <li class = 'country'>
                <img class='flag' src = '${item.flags.svg}' />
                <p>${item.name}</p>
                </li>
                    
        `
          )
          .join('')
        };