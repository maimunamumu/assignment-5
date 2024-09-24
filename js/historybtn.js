const donationButton = document.getElementById("donationButton");
const historyButton = document.getElementById("historyButton");
const donationSection = document.getElementById("donationSection");
const historySection = document.getElementById("historySection");

donationButton.addEventListener("click", function() {
  donationButton.classList.add("btn-success");
  historyButton.classList.remove("btn-success");

  donationSection.classList.remove("hidden");
  historySection.classList.add("hidden")                                                     ;
});

historyButton.addEventListener("click", function() {
  donationButton.classList.remove("btn-success");
  historyButton.classList.add("btn-success");

  historySection.classList.remove("hidden");
  donationSection.classList.add("hidden");
});
