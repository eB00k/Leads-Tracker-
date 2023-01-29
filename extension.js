let myLeads = [];
const inputBtn = document.getElementById("input-btn");
const deleteBtn = document.getElementById("delete-btn");
const listEl = document.getElementById("ul-l");
const input = document.querySelector("#input-el");

// adds Leads links to the ducuments
const render = (leads) => {
  let listIems = "";
  for (let i = 0; i < leads.length; ++i) {
    listIems += `
    <li>
        <a href="${leads[i]}" target="_blank">${leads[i]}</a>
    </li>`;
  }
  listEl.innerHTML = listIems;
};

// geting leads list from local storage of browser
const storedLeads = JSON.parse(localStorage.getItem("myLeads"));
if (storedLeads) {
  myLeads = storedLeads;
  render(myLeads);
}

// deletes the all the saved links
deleteBtn.addEventListener("dblclick", function () {
  localStorage.clear();
  myLeads = [];
  render(myLeads);
});

// saves the links from input
inputBtn.addEventListener("click", function () {
  const inputValue = input.value;
  input.value = "";
  if (inputValue !== "") {
    myLeads.push(inputValue);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
  }
});
