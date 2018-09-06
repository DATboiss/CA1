const searchButton = document.querySelector("#submitto");
const dataField = document.querySelector("#data-field");
var userId = document.getElementById("userId");

searchButton.addEventListener("click", fetchUser);


function fetchUser() {
    var id = userId.value;
    console.log(id);
    
    fetch("https://jsonplaceholder.typicode.com/users/" + id)
        .then(function (response) {
            if (response.status !== 200) {
                console.log("Problem occured... Status Code: " + response.status);
                return;
            }
            response.json().then(function (data) {
                dataField.innerHTML = JSON.stringify(data);
                console.log(JSON.stringify(data));
            });
        })
        .catch(function (error) {
            console.log("Error occured...", error);
        })
}