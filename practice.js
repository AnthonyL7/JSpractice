function isAnagram(a,b) {
 a = a.toLowerCase().split('').sort().join('');
 b = b.toLowerCase().split('').sort().join('');

 return a === b;
}

let result =  isAnagram("Buckethead", "DeathCubeK")
console.log(result)