
function element(tag, classname, id, text) {
    let tags = document.createElement(tag);
    tags.classList = classname; 
    tags.id = id;
    tags.innerHTML = text;
    return tags;
}

let h1 = element("h1", "text-center", "title", "DOM with Forms And Tables");

let p = element("p", "text-center", "description", "This is done using DOM");

let formGroup = document.createElement("div");
formGroup.classList.add("form-group");

let form = document.createElement("form");
form.id = "form";

let label_firstname = document.createElement("label");
label_firstname.textContent = "First Name:";
label_firstname.setAttribute("for", "first-name");

let input_firstname = document.createElement("input");
input_firstname.id = "first-name";
input_firstname.type = "text";
input_firstname.required = true; 
input_firstname.placeholder = "Enter your first name";

formGroup.appendChild(label_firstname);
formGroup.appendChild(input_firstname);

let label_lastname = document.createElement("label");
label_lastname.textContent = "Last Name:";
label_lastname.setAttribute("for", "last-name");

let input_lastname = document.createElement("input");
input_lastname.id = "last-name";
input_lastname.type = "text";
input_lastname.required = true; 
input_lastname.placeholder = "Enter your last name";

formGroup.appendChild(label_lastname);
formGroup.appendChild(input_lastname);

form.appendChild(formGroup);

let label_pincode = document.createElement("label");
label_pincode.textContent = "Pincode:";
label_pincode.setAttribute("for", "pincode");

let input_pincode = document.createElement("input");
input_pincode.id = "pincode";
input_pincode.type = "text";
input_pincode.required = true;
input_pincode.placeholder = "Enter your pincode";

form.appendChild(label_pincode);
form.appendChild(input_pincode);
formGroup.appendChild(label_pincode);
formGroup.appendChild(input_pincode);

let label_gender = document.createElement("label");
label_gender.textContent = "Gender:";
label_gender.setAttribute("for", "gender");

let radio_male = document.createElement("input");
radio_male.type = "radio";
radio_male.name = "gender";
radio_male.value = "male";
radio_male.setAttribute("id", "male");

let label_male = document.createElement("label");
label_male.textContent = "Male";
label_male.setAttribute("for", "male");

let radio_female = document.createElement("input");
radio_female.type = "radio";
radio_female.name = "gender";
radio_female.value = "female";
radio_female.setAttribute("id", "female");

let label_female = document.createElement("label");
label_female.textContent = "Female";
label_female.setAttribute("for", "female");

form.appendChild(label_gender);
form.appendChild(radio_male);
form.appendChild(label_male);
form.appendChild(radio_female);
form.appendChild(label_female);
form.appendChild(document.createElement("br"));

let label_address = document.createElement("label");
label_address.textContent = "Address:";
label_address.setAttribute("for", "address");

let textarea_address = document.createElement("textarea");
textarea_address.id = "address";
textarea_address.required = true; 
textarea_address.placeholder = "Enter your address";

form.appendChild(label_address);
form.appendChild(textarea_address);
formGroup.appendChild(label_address);
formGroup.appendChild(textarea_address);

let dish = document.createElement("h6");
dish.textContent = "Dishes";

form.appendChild(dish);

let dishes = ["Pizza", "Burger", "Pasta", "Sushi", "Salad"];
for (let dish of dishes) {
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = "dish";
    checkbox.value = dish;
    
    let label = document.createElement("label");
    label.textContent = dish;
    label.setAttribute("for", dish.toLowerCase());
    
    form.appendChild(checkbox);
    form.appendChild(label);
    form.appendChild(document.createElement("br"));
}

let label_state = document.createElement("label");
label_state.textContent = "State:";
label_state.setAttribute("for", "state");

let input_state = document.createElement("input");
input_state.id = "state";
input_state.type = "text";
input_state.required = true;

form.appendChild(label_state);
form.appendChild(input_state);
form.appendChild(document.createElement("br"));

let label_country = document.createElement("label");
label_country.textContent = "Country:";
label_country.setAttribute("for", "country");

let input_country = document.createElement("input");
input_country.id = "country";
input_country.type = "text";
input_country.required = true;

form.appendChild(label_country);
form.appendChild(input_country);
form.appendChild(document.createElement("br"));

let submit_button = document.createElement("button");
submit_button.id = "submit";
submit_button.type = "submit";
submit_button.className="btn btn-primary"
submit_button.textContent = "Submit";

form.appendChild(submit_button);

let reset_button = document.createElement("button");
reset_button.id = "reset";
reset_button.className = "btn btn-danger";
reset_button.type = "reset";
reset_button.textContent = "Reset";

form.appendChild(reset_button);

let table = document.createElement("table");
table.classList.add("table");

let thead = document.createElement("thead");
let tr = document.createElement("tr");
let th1 = document.createElement("th");
let th2 = document.createElement("th");
let th3 = document.createElement("th");
let th4 = document.createElement("th");
let th5 = document.createElement("th");
let th6 = document.createElement("th");
let th7 = document.createElement("th");
let th8 = document.createElement("th");

th1.textContent = "First Name";
th2.textContent = "Last Name";
th3.textContent = "Pincode";
th4.textContent = "Gender";
th5.textContent = "Address";
th6.textContent = "Dishes";
th7.textContent = "State";
th8.textContent = "Country";
tr.appendChild(th1);
tr.appendChild(th2);
tr.appendChild(th3);
tr.appendChild(th4);
tr.appendChild(th5);
tr.appendChild(th6);
tr.appendChild(th7);
tr.appendChild(th8);
thead.appendChild(tr);
table.appendChild(thead);

let tbody = document.createElement("tbody");
table.appendChild(tbody);

document.body.appendChild(h1);
document.body.appendChild(p);
document.body.appendChild(form);
document.body.appendChild(table);

form.addEventListener("submit", function(event) {
    event.preventDefault();
    
    let firstName = input_firstname.value;
    let lastName = input_lastname.value;
    let pincode = input_pincode.value;
    let gender = radio_male.checked ? "Male" : radio_female.checked ? "Female" : "";
    let address = textarea_address.value;
    let selectedDishes = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(checkbox => checkbox.value).join(", ");
    let state = input_state.value;
    let country = input_country.value;
    
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    td1.textContent = firstName;
    let td2 = document.createElement("td");
    td2.textContent = lastName;
    let td3 = document.createElement("td");
    td3.textContent = pincode;
    let td4 = document.createElement("td");
    td4.textContent = gender;
    let td5 = document.createElement("td");
    td5.textContent = address;
    let td6 = document.createElement("td");
    td6.textContent = selectedDishes;
    let td7 = document.createElement("td");
    td7.textContent = state;
    let td8 = document.createElement("td");
    td8.textContent = country;
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tr.appendChild(td6);
    tr.appendChild(td7);
    tr.appendChild(td8);
    tbody.appendChild(tr);
    
    form.reset();
});

reset_button.addEventListener("click", function() {
    // Clear input values
    input_firstname.value = "";
    input_lastname.value = "";
    input_pincode.value = "";
    textarea_address.value = "";
    input_state.value = "";
    input_country.value = "";
    // Uncheck radio buttons
    radio_male.checked = false;
    radio_female.checked = false;
    // Uncheck checkboxes
    Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).forEach(checkbox => checkbox.checked = false);
    // Clear table
    tbody.innerHTML = "";
});

// Event listener to limit selection to maximum 2 checkboxes
let checkboxes = document.querySelectorAll('input[type="checkbox"]');
let checkedCount = 0;
checkboxes.forEach(checkbox => {
    checkbox.addEventListener("change", function() {
        if (this.checked) {
            checkedCount++;
            if (checkedCount > 2) {
                this.checked = false;
                checkedCount--;
            }
        } else {
            checkedCount--;
        }
    });
});
