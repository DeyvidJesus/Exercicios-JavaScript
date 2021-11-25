let date = new Date()
let day = date.getDate()
let weekdayArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
let weekday = weekdayArray[date.getDay()]

if (day == 13 && weekday == "Friday"){
    console.log("😱")
} else {
    console.log("You're safe!")
}