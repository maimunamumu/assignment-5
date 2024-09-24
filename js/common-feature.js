const totalDonationNeed = document.getElementById("totalDonationNeed");
const donationDataHistory = document.getElementById("donationDataHistory");
const modal = document.getElementById("modal_dialog_box");
const CommonFeature = function(donateAmount, id, title)  {
  // Get the input field element
  const inputElement = document.getElementById(donateAmount);

  // Get the value from the input field
  const inputFiled = parseFloat(inputElement.value);

  // card amount taka
  const floodDonateAmount = parseFloat(document.getElementById(id).innerText);

  // validation data
  if (inputFiled < 0 || isNaN(inputFiled)) {
   alert ('failed to add money');
   return;
  }

  // card taka + input filed data increment
  const totalDonateAmount = inputFiled + floodDonateAmount;
  document.getElementById(id).innerText = totalDonateAmount;

  // total donation amount need decrement
  totalDonationNeed.innerText =parseFloat(totalDonationNeed.innerText-inputFiled);
  // show modal
  modal.showModal();

  const div = document.createElement("div");
  div.className ="bg-white p-[25px] rounded-2xl border border-[rgba(17,17,17,0.1)] border-solid mb-2";
  div.innerHTML = `<h4 class="text-sm font-bold text-[rgb(17,17,17)]">
                ${inputFiled} Taka is ${title}</h4>
              <div class=" font-light text-[rgba(17,17,17,0.7)] mt-4">
                <span class=" text-[rgb(17,17,17)]"> Date :</span>${new Date()}</div>`;
  donationDataHistory.appendChild(div);
};