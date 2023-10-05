      function showSelectedCountry(event) {
        if (event.target.value.length > 0) {
          if (event.target.value === "france") {
            alert("Bonjour!");
          }
          if (event.target.value === "italy") {
            alert("Ciao!");
          }
          if (event.target.value === "usa") {
            alert("Hi!");
          }
        }
      }

      let countriesSelect = document.querySelector("#countries");
      countriesSelect.addEventListener("change", showSelectedCountry);