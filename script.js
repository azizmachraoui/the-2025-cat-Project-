var wakeuptime = 7;// Wake up time set to 7 AM
var noon = 12;// Constant for noon
var lunchtime = 12;// Lunch time set to 12 PM
var naptime = lunchtime + 2;// Nap time is 2 hours after lunch (2 PM)
var partytime;// Party time will be set dynamically
var evening = 18;// Evening starts at 6 PM (18 in 24-hour format)

// Getting it to show the current time on the page
var showCurrentTime = function()
{
    // display the string on the webpage
    var clock = document.getElementById('clock'); // Get clock element
 
    var currentTime = new Date();// Get current time
 
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";// Default to AM
 
    // Set hours
    // Convert from 24-hour to 12-hour format
    if (hours >= noon) {
      meridian = "PM";
    }

    if (hours > noon)
    {
      hours = hours - 12;
    }
 
    // Set Minutes
     // Add leading 0 to single-digit minutes/seconds
    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }
 
    // Set Seconds
    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }
 
    // put together the string that displays the time
    var clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian ;
  // Display the time on the webpage
    clock.innerText = clockTime;
};

// Getting the clock to increment on its own and change out messages and pictures
var updateClock = function() 
{
  var time = new Date().getHours();// Current hour only
  var messageText;
  var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";
  var timeEventJS = document.getElementById("timeEvent");// Message area
  var lolcatImageJS = document.getElementById('lolcatImage');// Image area
   // Check the time and set appropriate image/message
  if (time == partytime)
  {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/partyTime.jpg";
    messageText = "Let's party";
  }
  else if (time == wakeuptime)
  {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
    messageText = "Wake up";
  }
  else if (time == lunchtime)
  {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
    messageText = "Let's have some lunch";
  }
  else if (time == naptime)
  {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
    messageText = "Sleep tight";
  }
  else if (time < noon)
  {
    image = "https://thoughtcatalog.com/wp-content/uploads/2021/07/Cat-Jokes.jpg?w=1280";
    messageText = "Good morning";
  }
  else if (time >= evening)
  {
    image = "https://upload.wikimedia.org/wikipedia/commons/8/8c/Cat_sleep.jpg";
    messageText = "Good evening";
  }
  else
  {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";
    messageText = "Good afternoon";
  }

  console.log(messageText); 
  timeEventJS.innerText = messageText;// Display the message
  lolcatImage.src = image;// Update the image
  
  showCurrentTime();// Also update the clock time
};
updateClock();// Initial call

// Getting the clock to increment once a second
//updateClock every second to keep things updated
var oneSecond = 1000;
setInterval( updateClock, oneSecond);


// Getting the Party Time Button To Work
var partyButton = document.getElementById("partyTimeButton");

var partyEvent = function()
{
    playSound();
    if (partytime < 0) // If party time not set
    {
        partytime = new Date().getHours();// Set current hour as party time
        partyTimeButton.innerText = "Party Over";
        partyTimeButton.style.backgroundColor = "#0A8DAB";
    }
    else
    {
        partytime = -1;// Disable party time
        partyTimeButton.innerText = "Party Time";
        partyTimeButton.style.backgroundColor = "#ebdada";
    }
};

partyButton.addEventListener("click", partyEvent);
partyEvent(); // Initialize button state

// Getting the lunch Time Button To Work
var lunchButton = document.getElementById("lunchTimeButton");

var lunchEvent = function()
{
  playSound();
  if (lunchtime < 0)
  {
    lunchtime = new Date().getHours();// Set to current hour
    lunchButton.innerText = "Lunch Over";
    lunchButton.style.backgroundColor = "#0A8DAB";
  }
  else
  {
    lunchtime = -1;
    lunchButton.innerText = "Lunch Time";
    lunchButton.style.backgroundColor = "#ebdada";
  }
};

lunchButton.addEventListener("click", lunchEvent);
lunchEvent();// Initialize button
// Getting the Nap Time Button To Work
var napButton = document.getElementById("napTimeButton");

var napEvent = function()
{
    if (naptime < 0)
    {
        naptime = new Date().getHours();
        napButton.innerText = "Nap Over";
        napButton.style.backgroundColor = "#0A8DAB";
    }
    else
    {
        naptime = -1;
        napButton.innerText = "Nap Time";
        napButton.style.backgroundColor = "#ebdada";
    }
};

napButton.addEventListener("click", napEvent);
napEvent();
// Getting the Wake Up Time Button To Work
var wakeUpButton = document.getElementById("wakeUpTimeButton");

var wakeUpEvent = function()
{
    playSound();
    if (wakeuptime < 0)
      { 
        wakeuptime = new Date().getHours();
        wakeUpButton.innerText = "Wake Up Over";
        wakeUpButton.style.backgroundColor = "#0A8DAB";
    }
    else
    {
        wakeuptime=-1;
        wakeUpButton.innerText = "Wake Up Time";
        wakeUpButton.style.backgroundColor = "#ebdada";
    }
};

wakeUpButton.addEventListener("click", wakeUpEvent);
wakeUpEvent();
// Getting the meow Button To Work
var meowbutton=document.querySelector("#meowTimeButton")
meowbutton.addEventListener("click",playSound)
function playSound() {
var sound = new Audio("./audio/meow.wav");
console.log(sound);
sound.play();

}


document.querySelector(".button").addEventListener("click", playSound)

