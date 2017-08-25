var input = document.getElementById("suwak"); //pobiera element o id suwak
    suwak.addEventListener("change", updateValue); // nasłuchiwanie zdarzeń (change albo click np)
    suwak.addEventListener("mousemove", updateValue); // naśłuchiwanie kolejnego zdarzenia 

    function updateValue() {
      console.log(this.value);
      var percent = document.getElementById("perc"); // pobiera element o id suwak w procentach
      percent.textContent = this.value; // włąściwość wyświetlająca wartośc 
      document.documentElement.style.setProperty("--light", this.value / 100) // szukamy elementu w stylach o własciwości light (setProperty dodaj właściwość)
      document.documentElement.style.setProperty("--glow", this.value / 4 + "px") // szukamy elementu w stylach o własciwości glow
    }