// JavaScript Document
function getResources() {
  var resourcesArray = document.forms["newics"]["resources"].value.replace(/\s/g, '').split(',');
  var resources = '';
  if (resourcesArray.length == 0) {
    resources = '';
  }
  if (resourcesArray.length > 0) {
    for (var i = 0; i < resourcesArray.length; i++) {
      resources = [resources + resourcesArray[i] + ","];
    }
  }
  return ["RESOURCES:" + resources];
}