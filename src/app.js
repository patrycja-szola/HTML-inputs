      function showSelectedCountry(event) {
        if (event.target.value.length > 0) {          //checking the lenght of option's value; it will only show alert when the value is not blank (empty)
          if (event.target.value === "france") {
            alert("Bonjour!");
          }
          if (event.target.value === "italy") {
            alert("Ciao!");
          }
          if (event.target.value === "usa") {
            alert("Hi!");
          }
          if (event.target.value === "poland") {
            alert("Witaj!");
          }
          if (event.target.value === "spain") {
            alert("Hola!");
          }
        }
      }

      let countriesSelect = document.querySelector("#countries");
      countriesSelect.addEventListener("change", showSelectedCountry);