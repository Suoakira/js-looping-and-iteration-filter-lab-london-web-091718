// Code your solution in this file

function findMatching (array, name) {
  return array.filter(function(driverName) {
      return driverName.toLowerCase() === name.toLowerCase()
  });
}

function fuzzyMatch(array, name) {
  return  array.filter(function(driverName) {
    return driverName.charAt(0) == name.charAt(0);
  });
}

function matchName(array, name) {
  return array.filter(function(driverNameObject) {
    return driverNameObject.name === name;
  });
}
