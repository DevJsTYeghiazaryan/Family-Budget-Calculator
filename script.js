let familyMembers = [];

function addFamilyMember() {
  const memberName = document.getElementById('member').value;
  const budget = parseInt(document.getElementById('budget').value);
  const spending = parseInt(document.getElementById('spending').value);

  const member = {
    name: memberName,
    budget: budget,
    spending: spending,
    rembudget: budget - spending
  };



  familyMembers.push(member);

  const familyTableBody = document.getElementById('familyTableBody');
  const row = familyTableBody.insertRow(-1);
  const nameCell = row.insertCell(0);
  const budgetCell = row.insertCell(1);
  const spendingCell = row.insertCell(2);
  const remainingBudgetCell = row.insertCell(3);

  nameCell.innerHTML = memberName;
  budgetCell.innerHTML = budget;
  spendingCell.innerHTML = spending;
  remainingBudgetCell.innerHTML = budget - spending;

  document.getElementById('member').value = '';
  document.getElementById('budget').value = '';
  document.getElementById('spending').value = '';
}



function calculateTotal() {
  const utilityBills = parseInt(document.getElementById("utility-bills").value) || 0;
  const educationPayment = parseInt(document.getElementById("education-payment").value) || 0;
  const otherPayment = parseInt(document.getElementById("other-payment").value) || 0;

  

  let eduPayment = educationPayment / 12;
  const total = utilityBills + eduPayment + otherPayment;

  
  if(total == 0){
    alert("Enter the spends!");
    return 0;
  }

  let budgetSum = 0;
  for (let i = 0; i < familyMembers.length; i++) {
    budgetSum += familyMembers[i].budget;
  }

  let spendsSum = 0;
  for (let j = 0; j < familyMembers.length; j++) {
    spendsSum += familyMembers[j].spending;
  }

  let lastSum = 0;
  for (let k = 0; k < familyMembers.length; k++) {
    lastSum = familyMembers[k].budget - familyMembers[k].spending
  }

  let remSum = 0;
  for (let m = 0; m < familyMembers.length; m++) {
    remSum += familyMembers[m].rembudget
  }



  document.getElementById("budgetlast").innerHTML = `Members Budget: $${budgetSum}`;
  document.getElementById("total").innerHTML = `Total Family Spends: $${Math.floor(total)}`;
  document.getElementById("members-spends").innerHTML = `Members' spends: $${spendsSum}`;
  document.getElementById("mem-remain").innerHTML = `Budget: $${remSum}`
}