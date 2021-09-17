"use strict";
var $ = function(id) { return document.getElementById(id); };

//generate a random story thing to pop up when clicked
// const myArray = ["stone","paper","scissors"];
// const embedElements = () => {
//    myArray.forEach(element => {
//       document.getElementById('result').innerHTML +=
//       `<div>${element}</div><br />`;
//       // here result is the id of the div present in the DOM
//    });
// };
const fantasyArray = [
    'Something',
    'Another',
    'All things',
    'Your Mom',
    'Sorry for your face',
    'Alright'
];
const embedElements = () =>
{
    fantasyArray.forEach(element => {
        document.getElementById('fan').innerHTML +=
        `<div>${element}</div><br />`;
    });
};
    let fantasy = fantasyArray[Math.floor(Math.random() * fantasyArray.length)]; 
console.log(fantasy);


var scifiArray = [
    'meow',
    'bats',
    'big spiders',
    'tree people',
    'outer space'
]

let scifi = scifiArray[Math.floor(Math.random() * scifiArray.length)]; 
console.log(scifi);

var dramaArray =[
    'love',
    'hate',
    'family',
    'friends',
    'animals'
]

let drama = dramaArray[Math.floor(Math.random() * dramaArray.length)]; 
console.log(drama);

var crimeArray = [
    'death',
    'serial killers',
    'pineapple on pizza',
    'long pointy nails',
    'eating fried crickets',
    'kicking puppies'
]
let crime = crimeArray[Math.floor(Math.random() * crimeArray.length)]; 
console.log(crime);

var challengeArray = [
    'Compliment someone',
    'Compliment Yourself',
    'Call a friend (not text)',
    'Smile at someone',
    'Help someone without being asked',
    'Leave the mail person a present in the mailbox'
]
let challenge = challengeArray[Math.floor(Math.random() * challengeArray.length)]; 
console.log(challenge);

//help code
// window.onload = function() {
//     // get the a tags
//     var faqs = $("faqs");
//     var linkElements = faqs.getElementsByTagName("a");
    
//     // attach event handler for each a tag	    
//     for (var i = 0; i < linkElements.length; i++ ) {
//     	linkElements[i].onclick = toggle;
//     }
//     // set focus on first h2 tag's <a> tag
//     linkElements[0].focus();       
// };

// var randomImg = [
//     '/img/darkflower.png',

// ]

//make it generate a new story each time it is clicked, randomly

//have a daily personal challenge goal that is random