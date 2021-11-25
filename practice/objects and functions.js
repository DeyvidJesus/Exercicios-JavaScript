// Create a person object that contains three keys: name, age and country.
// Use yourself as an example

let person = {
    name: 'Deyvid',
    age: 16,
    country: 'Brazil'
}

// Create a function, logData(), that uses the person object to create a string in the following format:
// "Name is age years old and lives in country"

function logData(){
    let phrase = `${person.name} is ${person.age} years old and lives in ${country}`
    console.log(phrase)
}

// Call the logData() function and see if it works.

logData()