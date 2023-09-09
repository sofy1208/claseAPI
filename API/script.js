document.addEventListener("DOMContentLoaded", function () {
  const apiUrl = "https://api.chucknorris.io/jokes/random";
 
  const text = document.getElementById("text");
  const btn = document.getElementById("btn");

  function loadJoke() {
      fetch(apiUrl)
          .then(response => response.json())
          .then(data => {
             
              text.textContent = data.value;
          })
          .catch(error => {
              console.error("Error al cargar la broma:", error);
          });
  }
  loadJoke();

  btn.addEventListener("click", loadJoke);
});