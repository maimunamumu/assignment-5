  document.getElementById("floodAtNoakhaliSubmitBtn")
.addEventListener("click", function(event) {
    event.preventDefault();
    // flood at at Noakhali
    const donationName =document.getElementById("donation_name").innerText;CommonFeature("donateAmountOfNoakhali",
"floodAtNoakhaliDonateAmount",donationName);
  });
  
  // donation btn decler
  document.getElementById("floodAtFeniSubmitBtn").
  addEventListener("click", function(event) {
    event.preventDefault();
    // flood at at feni compain name
    const donationName =document.getElementById("feni").innerText;
  CommonFeature("donateAmountOfFeni",
      "floodAtFeniDonateAmount",
      donationName
    );
  });
  // donation btn 
  document.getElementById("AtQuotaSubmitBtn")
  .addEventListener("click",  function(event){
    event.preventDefault();
    // flood at AtQuota company
    const donationName =document.getElementById("quota").innerText;
    CommonFeature("donateAmountOfQuota",
      "AtQuoteDonateAmount",
      donationName);
  });