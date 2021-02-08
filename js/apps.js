//REVISION:
const searchFoods = ()=>{
    const searchText = document.getElementById('search-field').value;
    console.log(searchText);

    const url = `https://www.themealdb.com/api/json/v1/1/categories.php/:${searchText}`
    //Load Categories
    fetch(url)
    .then(res => res.json())
    .then(data =>displayMeals(data.categories))

}

const displayMeals = categories =>{    
    const mealsDiv = document.getElementById('meals')
    categories.forEach(eachMeal => {
        const mealDiv = document.createElement('div')

        mealDiv.className = "meal-menu"
        const mealInfo = `
        <img src="${eachMeal.strCategoryThumb}">
        <h3> <a href="displayIngredient('meals.idMeal')">${eachMeal.strCategory}</a></h3>
        `
        mealDiv.innerHTML = mealInfo;

        mealsDiv.appendChild(mealDiv)       
    });
}

const displayIngredient = (id) =>{
    const url = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}'
    fetch(url)
    .then(res => res.json())
    .then(data => renderMealInfo(data.meals));
}

const renderMealInfo = ingredient =>{
    const ingredientDiv = document.getElementById('ingredientDetails');
    ingredientDiv.innerHTML = `
        <h2> ${ingredient.strIngredient1}</h2>
        <p> ${ingredient.strIngredient2}</p>
        <p> ${ingredient.strIngredient3}</p>
        <p> ${ingredient.strIngredient4}</p>
        <p> ${ingredient.strIngredient5}</>
    `
}

//SAVEED
    // for (let i = 0; i < categories.length; i++) {
    //     const eachMeal = categories[i];

    //     const mealDiv = document.createElement('div')

    //     // const h3 = document.createElement('h3')
    //     // h3.innerText = eachMeal.strCategory;
    //     // mealDiv.appendChild(h3)
    //     mealDiv.className = "meal-menu"
    //     const mealInfo = `
    //     <h3>${eachMeal.strCategory} </h3>

    //     `
    //     mealDiv.innerHTML = mealInfo;

    //     mealsDiv.appendChild(mealDiv)
    // }
// }


//REST COUNTRIES:
// fetch('https://restcountries.eu/rest/v2/all')
//     .then(res => res.json())
//     .then(data => displayCountries(data))

// const displayCountries = countries => {
//     const countriesDiv = document.getElementById('countries');

//     countries.forEach(country => {
//         // const country = countries[i];
//         const countryDiv = document.createElement('div');
//         countryDiv.className = 'country';

//         const countryInfo = `
//             <h3 class="country-name">${country.name}</h3>
//             <p>${country.capital}</p>
//             <button onclick ="displayCountryDetail('${country.name}')">Details </button>
//         `;
//         countryDiv.innerHTML = countryInfo;
//         countriesDiv.appendChild(countryDiv);
//     });
// };

// const displayCountryDetail = name =>{
//     const url = `https://restcountries.eu/rest/v2/name/${name}`
//     fetch(url)
//     .then(res => res.json())
//     .then(data => renderCountryInfo(data[0]));

// }

// const renderCountryInfo = country =>{
//     const countryDiv = document.getElementById('country-detail');
//     countryDiv.innerHTML =`
//         <h1>Country Name :  ${country.name} </h1>
//         <p1> Total Area: ${country.area} </p>
//         <p1> Population : ${country.population} </p>
//         <img class="image" src="${country.flag}">

//     `

// }
