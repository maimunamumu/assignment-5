const donationButton = document.getElementById("donationButton");
const historyButton = document.getElementById("historyButton");
const donationSection = document.getElementById("donationSection");
const historySection = document.getElementById("historySection");

donationButton.addEventListener("click", function() {
  donationButton.classList.add("btn-neutral");
  historyButton.classList.remove("btn-neutral");

  donationSection.classList.remove("hidden");
  historySection.classList.add("hidden")                                                     ;
});

historyButton.addEventListener("click", function() {
  donationButton.classList.remove("btn-neutral");
  historyButton.classList.add("btn-neutral");

  historySection.classList.remove("hidden");
  donationSection.classList.add("hidden");
});
