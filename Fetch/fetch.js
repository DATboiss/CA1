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
                var dataString = 
                "Name: " + data.name + "<br>" +
                "Phone: " + data.phone + "<br><br>" +
                "<b>Adress</b><br>" +
                "Street: " + data.address.street + "<br>" + 
                "City: " + data.address.city + "<br>" +
                "Zip: " + data.address.zipcode + "<br>" +
                "Geo (lat,lng): " + data.address.geo.lat + ", " + data.address.geo.lng + "<br>";

                dataField.innerHTML = dataString;
            });
        })
        .catch(function (error) {
            console.log("Error occured...", error);
        })
}