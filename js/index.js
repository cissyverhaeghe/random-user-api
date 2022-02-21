const veld = document.querySelector("#zoekString");
const lijst = document.querySelector(".columns");

getData();

async function getData() {
  try {
    const response = await fetch("https://randomuser.me/api/?results=200");
    const data = await response.json();
    render(data);
    veld.oninput = function (e) {
      if (e.target.value.length >= 3) {
        render(data, e.target.value);
      } else {
        render(data);
      }
    };
  } catch (error) {
    console.log(error);
  }
}

async function render(data, zoekStr = "") {
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
                src="${Person.picture.large}"
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
