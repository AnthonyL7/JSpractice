function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
  const filtered = birds.filter(bird => !geese.includes(bird));
  return filtered
}

let result = gooseFilter(["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"])
console.log(result)