// JavaScript Document
function showNone(){
  document.getElementById('noneDiv').style.display = 'block';
  document.getElementById('dailyDiv').style.display = 'none';
  document.getElementById('weeklyDiv').style.display = 'none';
  document.getElementById('monthlyDiv').style.display = 'none';
  document.getElementById('yearlyDiv').style.display = 'none';
}
function showDaily(){
  document.getElementById('noneDiv').style.display = 'none';
  document.getElementById('dailyDiv').style.display = 'block';
  document.getElementById('weeklyDiv').style.display = 'none';
  document.getElementById('monthlyDiv').style.display = 'none';
  document.getElementById('yearlyDiv').style.display = 'none';
}
function showWeekly(){
  document.getElementById('noneDiv').style.display = 'none';
  document.getElementById('dailyDiv').style.display = 'none';
  document.getElementById('weeklyDiv').style.display = 'block';
  document.getElementById('monthlyDiv').style.display = 'none';
  document.getElementById('yearlyDiv').style.display = 'none';
}
function showMonthly(){
  document.getElementById('noneDiv').style.display = 'none';
  document.getElementById('dailyDiv').style.display = 'none';
  document.getElementById('weeklyDiv').style.display = 'none';
  document.getElementById('monthlyDiv').style.display = 'block';
  document.getElementById('yearlyDiv').style.display = 'none';
}
function showYearly(){
  document.getElementById('noneDiv').style.display = 'none';
  document.getElementById('dailyDiv').style.display = 'none';
  document.getElementById('weeklyDiv').style.display = 'none';
  document.getElementById('monthlyDiv').style.display = 'none';
  document.getElementById('yearlyDiv').style.display = 'block';
}