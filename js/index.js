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

function getFantasy(){
    var fantasyArray = [
        'Fog is all you see while you walk along nothing. There is only darkness, but for the little bit of light coming from the fog. Where the light reflect off the fog is a mystery. An erie feeling in your gut confuses and warps the mind. Leading on trails that make no sense. There is no direction and no way around. Walking feel like forever and going forever nowhere. All that is true, but unknown, is the heart that once was, no longer sings.',
        'She thinks she only tripped over a log. Only it was not. There air was thick and felt weird. A sound could be heard from all around. No sense of direction because the noise came from all around and bounced off of nothing. This made the sound fade away once it reach her. Dread filled her as soon as the idea of being alone grew like a weed in her brain.',
        'Trees',
        'Your Mom',
        'Farting ducks',
        'College Professor'
    ];
    let fantasy = fantasyArray[Math.floor(Math.random() * fantasyArray.length)];
    document.getElementById("fan").innerHTML = fantasy;
    console.log(fantasy);
};

function getSci() {
    var scifiArray = [
        'running around',
        'with many cats',
        'barfing gas',
        'cuddling',
        'opening toilets',
        'with stinky feet'
    ]
    
    let scifi = scifiArray[Math.floor(Math.random() * scifiArray.length)]; 
    document.getElementById("sci").innerHTML = scifi;
    console.log(scifi);
};

function getDrama() {
    var dramaArray =[
        'outside',
        'hate',
        'antagonize',
        'meditating',
        'meowing',
        'staring'
    ]
    let drama = dramaArray[Math.floor(Math.random() * dramaArray.length)]; 
    document.getElementById("drama").innerHTML = drama;
    console.log(drama);
};
    
function getCrime() {
    var crimeArray = [
        'and eating ice cream cones on fire.',
        'and casting shadows.',
        'and smelling the ear wax.',
        'and developing a new strain of human animal DNA.',
        ', eating fried crickets.',
        ', kicking puppies.'
    ]
    let crime = crimeArray[Math.floor(Math.random() * crimeArray.length)]; 
    document.getElementById("crime").innerHTML = crime;
    console.log(crime);
};

function getChallenge() {    
    var challengeArray = [
        'Compliment someone',
        'Compliment Yourself',
        'Call a friend (not text)',
        'Smile at someone',
        'Help someone without being asked',
        'Leave the mail person a present in the mailbox'
    ]
    let challenge = challengeArray[Math.floor(Math.random() * challengeArray.length)]; 
    document.getElementById("daily").innerHTML = challenge;
    console.log(challenge);
};

    
// function getValue() {
//     getElementById("fantasy").innerHTML = fantasyArray[Math.floor(Math.random() * fantasyArray.length)];
// }
    // let fantasy = fantasyArray[Math.floor(Math.random() * fantasyArray.length)]; 

/* <div id="fantasy"></div>
            <a href="#">Fantasy</a>
            <input type="button" onclick="getItem()" value="Fantasy"/> */

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