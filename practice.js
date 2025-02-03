function removeUrlAnchor(url) {
  return url.split('#')[0]
}

let result =  removeUrlAnchor('www.codewars.com#about')
console.log(result)