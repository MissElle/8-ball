//script.js for infinity-ball

var questionAsked;
var gyroscope = false;

var typeSpace = document.getElementById('answer'); //Keep this global so the fadeOver function can be called during onSubmit of the form
var triangle = document.getElementById('triangle'); //Declare this element so things fade in on the onload
var textInput = document.shakey.textinput.value;

//code needed for shake.js

var myShakeEvent = new Shake({
    threshold: 15,
    timeout: 1000
});

myShakeEvent.start();

//These are the event listeners for the code

//event listener defined in detectIfShakeSpeech... changeToText();
window.addEventListener('shake', shakeBall, false);
window.addEventListener('load', detectIfGyro);
//function detectIfShakeSpeech() in detectIfGyro;
document.getElementById('noShake').addEventListener('click', shakeBall);

//function will see if a gyroscope exists with accelerometer for shaking function... derived from user Dhyey Shah in https://stackoverflow.com/questions/33833492/how-do-i-detect-if-a-device-has-a-gyroscope-in-a-web-browser

function detectIfGyro(){
	window.ondevicemotion = function(event){
		if(event.rotationRate.alpha || event.rotationRate.beta || event.rotationRate.gamma){
			gyroscope = true;
		}
		detectIfShakeSpeech();
	}
}


//function detects if speech to text is capable, or if permissions are not set

function detectIfShakeSpeech() {
	var h2Directions = document.getElementById('directions');
	var buttonShake = document.getElementById('noShake');
	var lastForm = document.getElementById('noSpeech');
	
	if(webkitSpeechRecognition){
		document.getElementById('infinity-symbol').addEventListener('click', changeToText);
		
		h2Directions.innerHTML = 'Click &#x221e; to ask a Question.'
		lastForm.style.display = 'none';
		
		if(gyroscope === true){
//			console.log('I have a gyroscope');
			buttonShake.style.display = 'none';
			h2Directions.innerHTML = 'Click &#x221e; and ask a Question. Then shake to get your answer!';
			
		}else{
			//console.log('I do not have a gyroscope');
			buttonShake.style.display = 'block';
		}
	}else {
		lastForm.style.display = 'block';
	}
}

//This function changes spoken text to words and stores them in a global variable

function changeToText() {
	
	var userQuestion = new webkitSpeechRecognition();
		userQuestion.onresult = function(event) { 
//  	console.log(event);
//		console.log(event.results[0][0].transcript);
			
		questionAsked = event.results[0][0].transcript;
			
//		shakeBall(questionAsked);
	}
	userQuestion.start();
	
}

//This function will activate when device is shaken... submits form function

function shakeBall() {
	
	submitQuestionData(questionAsked);
	fadeOver(triangle);
	fadeOver(textInput);
	
}

//This is a fade in for the elements
 
function fadeOver(el) {
  var op = 0.1;
  el.style.display = 'block';
  var timer = setInterval(function () {
    if (op >= 1) {
      clearInterval(timer);
    }
    el.style.opacity = op;
    el.style.filter = 'alpha(opacity=' + op*100 + ")";
    op += op*0.1;
  },15);
             
}
 
//This function goes through answers and pulls them out of array below

function submitQuestionData(speechSaid) {
	
	var text;
	
	if(speechSaid === undefined){
		text = document.shakey.textinput.value.toLowerCase();	
	}else {
		text = speechSaid.toLowerCase();
	}
  
  var textInput = text.replace(/[^A-Za-z0-9]/gi, '');
 
      switch(textInput) {
 
        case 'whatislove':
          typeSpace.innerHTML = '<p class="blue"><br>Baby don&lsquo;t<br> hurt me</p>';
           event.preventDefault();
                break;
             
        case 'whatisrickrolling':
           typeSpace.innerHTML = '<p class="blue"><br>Never gonna give<br> you up </p>';
          event.preventDefault();
          break;
 
        case 'dotheylikeme':
           typeSpace.innerHTML = '<p class="blue"><br>Just ask them<br> yourself</p>';
          event.preventDefault();
          break;
 
        case 'doeshelikeme':
           typeSpace.innerHTML = '<p class="blue"><br>Just ask him<br> yourself</p>';
          event.preventDefault();
          break;
 
        case 'doesshelikeme':
           typeSpace.innerHTML = '<p class="blue"><br>Just ask her<br> yourself</p>';
          event.preventDefault();
          break;
 
        case 'whoiswdgaster':
           typeSpace.innerHTML = '<p class="blue"><br>Beware of the man<br> who speaks in<br> hands</p>';
          event.preventDefault();
          break;
 
        case 'whoisgaster':
           typeSpace.innerHTML = '<p class="blue"><br>Beware of the man<br> who speaks in<br> hands</p>';
          event.preventDefault();
          break;
 
        case 'doyoubelieveinmagic':
           typeSpace.innerHTML = '<p class="blue"><br>Only in a <br> young girl&apos;s<br> heart</p>';
          event.preventDefault();
          break;
 
        case 'areyoumagic':
           typeSpace.innerHTML = '<p class="blue"><br>no, I don&apos;t have<br> a young girl&apos;s <br> heart</p>';
          event.preventDefault();
          break;
 
        case 'areyoureallymagic':
           typeSpace.innerHTML = '<p class="blue"><br>no, I don&apos;t have<br> a young girl&apos;s <br> heart</p>';
          event.preventDefault();
          break;
 
        case 'doyouknowthemuffinman':
           typeSpace.innerHTML = '<p class="blue"><br>the muffin man?</p>';
          event.preventDefault();
          break;
 
        case 'themuffinman':
           typeSpace.innerHTML = '<p class="blue"><br>the muffin man...</p>';
          event.preventDefault();
          break;
 
        case 'whatistheanswertotheultimatequestionoflifetheuniverseandeverything':
           typeSpace.innerHTML = '<p class="blue"><br>42<br>but you<br> know this</p>';
          event.preventDefault();
          break;
 
         case 'yolo':
           typeSpace.innerHTML = '<p class="blue"><br>carpe<br>diem</p>';
          event.preventDefault();
          break;
 
          default:
            for(var i=0; i < answers.length; i++) {
            var answer = Math.floor(Math.random() * answers.length); }        
              typeSpace.innerHTML = '<p class="blue">' + answers[answer] + '</p>';
              event.preventDefault();
              break;
  }
  console.log(textInput);
}

//This array contains all the answers to the proceeding function
 
var answers=[
'<br><br>you will not find <br> the answers <br> here.',
'<br>life has a strange<br> way of working <br> things out',
'<br>please stop <br> asking me <br> questions',
'<br><br>Trust in Science!',
'you already know the <br> answer, you are <br> just avoiding <br> the <br> Truth',
'<br>In the end <br> we are all <br> stardust',
'<br><br>Think about your <br> life choices',
'The idea of boundaries is laughable. Even in this document, there are no limits. All these boundaries were created to make you comfortable. And in that comfort you found complacency with the world around you, whilst constantly seeking a means to an end that does not exist. You can&apos;t even read the end of this variable object unless you have a smidgen of programming knowledge, and even then what did you achieve? An answer that does not exist.',
'<br><br>"Death"',
'<br><br>What does it <br>matter...',
'<br><br>nothing matters <br> anyway',
'<br><br>leave me alone',
'<br><br>go away',
'The definition of crazy is to repeat one&apos;s self <br> and expect a <br>different<br> answer.',
'<br>free thought is an<br> illusion',
'<br>we all <br> die <br> anyways',
'<br>please don&apos;t ask<br>"Do they like me?"',
'<br>we all make mistakes.<br> yours are just<br> bigger',
'<br>I wish I was real<br> like you...',
'<br>you matter,<br> you mass',
'<br><br>42',
'<br><br>yes',
'<br><br>no',
'<br><br>definitely<br>no',
'<br>Why are you wasting<br> your time?',
'<br><br>try again never',
'<br><br>try again later'];
 
//This is for the opening page, to fade in emojis
 
var emoticons = ['<br><br>>_<', '<br><br>(O_O)', '<br><br>-_-;', '<br><br>TT_TT', '<br><br>¯\_(ツ)_/¯', '<br><br>( ͡° ͜ʖ ͡°)', '<br><br>༼ つ ಥ_ಥ ༽つ', '<br><br>(•_•)', '<br><br>( •_•)', '<br><br>ಥ_ಥ', '<br><br>(¬_¬)', '<br><br>ರ_ರ', '<br><br>≧☉_☉≦', '<br><br>⚆ _ ⚆', '<br><br>ᕙ(⇀‸↼‶)ᕗ', '<br><br>◉_◉', '<br><br>ಠ╭╮ಠ' , '<br><br>(ಥ﹏ಥ)', '<br><br>༼ つ ◕_◕ ༽つ', '<br><br>(づ￣ ³￣)づ', '<br><br>ఠ_ఠ', '<br><br>ޏ₍ ὸ.ό₎ރ', '<br><br>( ..•˘___˘• .. )',
'<br><br>ب_ب', '<br><br>Ծ_Ծ', '<br><br>(⋋▂⋌)', '<br><br>Ծ_Ծ', '<br><br>ತ_ತ', '<br><br>מּ_מּ', '<br><br>\(!!˚☐˚)/', '<br><br>(T∩T)', '<br><br>(︶︹︺)', '<br><br>(⌣_⌣”)', '<br><br>(⊙︿⊙)', '<br><br>(｡•́︿•̀｡)', '<br><br>●︿●', '<br><br>ōۃō', '<br><br>(∩︵∩)', '<br><br>@_@', '<br><br>(๑°︿°๑)', '<br><br>ಠ╭╮ಠ', '<br><br>ʕ ಡ ﹏ ಡ ʔ', '<br><br>ಗಾ ﹏ ಗಾ', '<br><br>(⌣_⌣”)', '<br><br>(X╭╮X)', '<br><br>X_X', '<br><br>( ɵ̥̥ _ ɵ̥̥)', '<br><br>(;﹏;)', '<br><br>(˃̩̩̥ɷ˂̩̩̥)', '<br><br>(´;︵;`)', '<br><br>(ఠ్ఠ ˓̭ ఠ్ఠ)', '<br><br>(-_-｡)'];
 
function getFace() {
	for(var i=0; i < emoticons.length; i++) {
		var face = Math.floor(Math.random() * emoticons.length);}
		typeSpace.innerHTML = '<p class="blue">' + emoticons[face] + '</p>';
  event.preventDefault();
}