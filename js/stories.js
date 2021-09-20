"use strict";
var $ = function(id) { return document.getElementById(id); };

function getFantasy(){
    var fantasyArray = [
        //put all the story together and make new ones to add to the array
        'Fog is all you see while you walk along nothing. There is only darkness, but for the little bit of light coming from the fog. Where the light reflect off the fog is a mystery. An erie feeling in your gut confuses and warps the mind. Leading on trails that make no sense. There is no direction and no way around. Walking feel like forever and going forever nowhere. All that is true, but unknown, is the heart that once was, no longer sings.',
        'She thinks she only tripped over a log. Only it was not. There air was thick and felt weird. A sound could be heard from all around. No sense of direction because the noise came from all around and bounced off of nothing. This made the sound fade away once it reach her. Dread filled her as soon as the idea of being alone grew like a weed in her brain.',
        'She was scared. There were only children there. They never knew when the food would come, or how it came. It just always showed up. She was taken by the street guard. There was someone very powerful taking orphans off the streets. The other kids she ran with left her behind. They left her so that they could get away. Now, she is here fighting for a blanket to sleep with or a scrap of food. There was never enough food for all the kids to eat even if they did share it evenly. This morning she managed to get a small roll before the older, bigger kids showed up to win the fight over food. She ran from the house as fast as she could.',
        'The forest was much more peaceful than the house. Roll in hand she walked on. Taking small bites with plans to eat it slowly, making it last longer. The sounds of fighting from the house were getting softer. The further she went from the house, the more she could hear the birds in the crisp morning and the leaves rustle in the light wind that went through the damp forest. It is rumoured that kids who go in the forest dont come back. She felt this had to be false now that she was here and saw how beautiful it was.',
        'There was no denying the forest was beautiful and full of wonder and life. How could anyone believe that people didnt come back from here when they go in. They made it sounds as if it was a bad thing. Being in the forest now made her think that the people who went in didnt want to go back. The place was so beautiful. She walked on dibbling her roll she was lucky to get a hold of. She wasnt looking at where she was going and slipped. She fell to the ground crushing her roll. It was smashed beyond salvation. There was blooding running down her face. She had hit her head when she fell. She looked around to see what made her fall.',
        'It was not until she saw the thing that she realized she was dead. It was the only explanation of the weird feel of the whole place she was in. Or at. Or on. She did not know. She realized in that same moment that her heart no longer beat. The rush of blood in her body was no longer rushing. There was no cold or hot. No clammy or dry. She wanted to feel scared, sad, angry. But there was no more emotion. Just realizations. And wonder, what next?'
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