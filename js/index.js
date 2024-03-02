console.log("phone hunting project");

// 1. get the api data or fetch data
const loadPhones = async (searchText) => {
  try {
    const res = await fetch(
      `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    );
    const data = await res.json();
    const phones = data.data;
    displayData(phones);
  } catch (error) {
    console.error(error);
  }
};
const displayData = (phones) => {
  console.log(phones);
  //2. get where the elements will be displayed
  const phonesContainer = document.getElementById("card-container");
  phonesContainer.textContent = "";
  phones.forEach((phone) => {

    // 3. create the element
    const phoneDiv = document.createElement("div");
    phoneDiv.classList.add("card", "p-8", "bg-base-100", "shadow-xl");
    phoneDiv.innerHTML = `
        <figure class="px-10 pt-10">
        <img src="${phone.image}" alt="Shoes" class="rounded-xl" />
    </figure>
    <div class="card-body items-center text-center">
        <h2 class="card-title">${phone.brand}</h2>
        <h2 class="card-title">${phone.phone_name}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div class="card-actions">
        <button class="btn btn-primary">Buy Now</button>
        </div>
    </div>
        `;
    // 4. append the element
    phonesContainer.appendChild(phoneDiv);
  });
};

// loadPhones();


function searchFunction() {
    
    const searchBtn = document.getElementById("search-btn");
    const handleSearchBtn = () =>{
        const searchField = document.getElementById("search-field");
        const searchText = searchField.value;
        loadPhones(searchText);
    }
    searchBtn.addEventListener("click", handleSearchBtn);

}
searchFunction()