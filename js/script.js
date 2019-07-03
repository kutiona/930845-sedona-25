var search = document.querySelector(".button-search-hotels");
var form = document.querySelector(".form-search-hotels");
var arrival = form.querySelector("#arrival-date-input");
var departure = form.querySelector("#date-of-departure-input");


search.addEventListener("click", function (evt) {
	evt.preventDefault();
	form.classList.toggle("form-show");
});

form.addEventListener("submit", function (evt) {
	   if (!arrival.value || !departure.value) {
	     evt.preventDefault();
	    console.log("Нужно дату заезда и выезда");
	  }
  });