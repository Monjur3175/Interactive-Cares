async function fetchData() {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`);
    const data = await response.json();
  console.log(data)
  document.getElementById("getdata").innerHTML=
    `<div class="bg-green-300 p-5">
        <h2>Name ${data.strMeal}</h2>
        <h2>Instruction ${data.strInstructions}</h2>
        <h2>Image ${data.strMealThumb}</h2>
      </div>`
  ;
}

fetchData()

