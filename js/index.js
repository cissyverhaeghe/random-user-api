const veld = document.querySelector("#zoekString");
const lijst = document.querySelector(".columns");

//get 200 people when opening the page
getData();

//if anything is typed in the searchfield, render
veld.oninput = function (e) {
  if (e.target.value.length >= 3) {
    render(e.target.value);
  }
  if (e.target.value.length < 3) {
    getData();
  }
};

//function to get 200 people from the database
async function getData() {
  const response = await fetch("https://randomuser.me/api/?results=200");
  const data = await response.json();
  lijst.innerHTML = data.results
    .map(
      (Person) => `<div class="column is-half-tablet is-one-quarter-desktop">
        <div class="card">
          <div class="card-image">
            <figure class="image is-1by1">
              <img
                src="${Person.picture.thumbnail}"
                alt="${Person.name.first} ${Person.name.last}"
              />
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-4">${Person.name.first} ${Person.name.last}</p>
                <p class="subtitle is-6">${Person.email}</p>
              </div>
            </div>
            <div class="content">
              <p>Country: ${Person.location.country}</p>
            </div>
          </div>
        </div>
      </div>`
    )
    .join("");
}

async function render(zoekStr = "") {
  const response = await fetch("https://randomuser.me/api/?results=200");
  const data = await response.json();
  lijst.innerHTML = data.results
    .filter(
      (Person) =>
        Person.name.first.indexOf(zoekStr) !== -1 ||
        Person.name.last.indexOf(zoekStr) !== -1
    )
    .map(
      (Person) => `<div class="column is-half-tablet is-one-quarter-desktop">
        <div class="card">
          <div class="card-image">
            <figure class="image is-1by1">
              <img
                src="${Person.picture.thumbnail}"
                alt="${Person.name.first} ${Person.name.last}"
              />
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-4">${Person.name.first} ${Person.name.last}</p>
                <p class="subtitle is-6">${Person.email}</p>
              </div>
            </div>
            <div class="content">
              <p>Country: ${Person.location.country}</p>
            </div>
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
