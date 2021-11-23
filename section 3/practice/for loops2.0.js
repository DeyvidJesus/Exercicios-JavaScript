let largeCountries = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"]

// You need to help me fixup the largeCountries array so that China and Pakistan are added back into 
// their respective places

let china = "China"
let pakistan = "Pakistan"

largeCountries.pop()
largeCountries.push(pakistan)
largeCountries.shift()
largeCountries.unshift(china)

console.log(largeCountries)