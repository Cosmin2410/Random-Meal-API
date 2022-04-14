const containerMeal = document.querySelector('meal-container');

const button = document.querySelector('.generate-meal');
button.addEventListener('click', () => {
  fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then((res) => res.json())
    .then((res) => {
      createMeal(res.meals[0]);
    });
});

function createMeal(meal) {
  containerMeal.innerHTML = `<img src="${meal.strMealThumb}" />`;
}
