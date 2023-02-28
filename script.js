let familyMembers = [];

function addFamilyMember() {
  
  const memberName = document.getElementById('member').value;
  const budget = parseInt(document.getElementById('budget').value);
  const spending = parseInt(document.getElementById('spending').value);

  


  const member = {
    name: memberName,
    budget: budget,
    spending: spending,

  };

  updateDisplay();

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

function updateDisplay(){
  var totalBudget = 0;
  for(var i = 0; i < familyMembers.length; i++){
      totalBudget += familyMembers[i].budget
  }
}

function calculateTotal() {
  // Get the input values
  const utilityBills = parseInt(document.getElementById("utility-bills").value) || 0;
  const educationPayment = parseInt(document.getElementById("education-payment").value) || 0;
  const otherPayment = parseInt(document.getElementById("other-payment").value) || 0;

  // Calculate the total
  let eduPayment = educationPayment / 12;
  const total = utilityBills + eduPayment + otherPayment;
  // Update the total display
  document.getElementById("total").innerHTML = `Total: $${total}`;
  document.getElementById("budgetlast").innerHTML = `Total: $${totalBudget}`;
}