// 1
// var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]

// var score = 0;

// for (var i = 0; i < officeItems.length; i++){
//     if (officeItems[i] === "computer"){
//         score++; 
//     }
// } console.log(score)

// 2

// var peopleWhoWantToSeeMadMaxFuryRoad = [
//     {
//       name: "Mike",
//       age: 12,
//       gender: "male"
//     },{
//       name: "Madeline",
//       age: 80,
//       gender: "female"
//     },{
//       name: "Cheryl",
//       age: 22,
//       gender: "female"
//     },{
//       name: "Sam",
//       age: 30,
//       gender: "male"
//     },{
//       name: "Suzy",
//       age: 4,
//       gender: "female"
//     }
//   ] 

// for(var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++ ){
//     if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male"){
//         console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough. HE's good to see Mad Max Fury Road.")
//     } else if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "female" ){
//         console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough. SHE'S good to see Mad Max Fury Road.")
//     } else if (peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male" ){
//         console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough to see Mad Max Fury Road, don't let HIM in.")
//     } else console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough to see Mad Max Fury Road, don't let HER in."

//     ) 
// }

var array1 = [2, 5, 435, 4, 3] // "The light is on"
var array2 = [1, 1, 1, 1, 3]   // "The light is on"
var array3 = [9, 3, 4, 2]      // "The light is off"

function checkLight (param1) {
    var numberOfTimes = 0;
    for (var i = 0; i < param1.length; i++){
        numberOfTimes = numberOfTimes + param1[i]
    }
    if (numberOfTimes % 2 == 0) {
        console.log("The light is off because it was switched " + numberOfTimes + " times.")
    } else {
        console.log("The light is on because it was switched " + numberOfTimes + " times.")
    }
}

checkLight(array1);
checkLight(array2);
checkLight(array3);

