const veld = document.querySelector("#zoekString");
const lijst = document.querySelector(".columns");

//if anything is typed in the searchfield, render
veld.oninput = function (e) {
  if (e.target.value.length >= 3) {
    getData();
    //console.log(e.target.value);
  }
};

async function getData() {
  const response = await fetch("https://randomuser.me/api/?results=200");
  const data = await response.json();
  lijst.innerHTML = data.results
    .map(
      (
        Person
      ) => `<div class="column is-half-tablet is-one-third-desktop is-one-quarter-widescreen is-fifth-fullhd">
  <div class="card">
    <div class="card-image">
      <h2>${Person.name.first}</h2>
      <figure class="image is-3by4">
        <img src="${Person.picture.thumbnail}" alt="${Person.name.first}" />
      </figure>
    </div>
  </div>
</div>`
    )
    .join("");
}

// document.querySelector('#voornaam').oninput = function(e){
//     console.log(e.target.value);
// }

// document.querySelector('#voornaam').oninput = function(e){
// 	if(e.target.value.length >= 3){
// 		render(e.target.value)
// 	}
// }

// function render(zoekStr=""){
// 	data.filter().map()
// }
