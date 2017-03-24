//This is a fade in for the elements
 
var triangle = document.getElementById('triangle'); //Declare this element so things fade in on the onload
var textInput = document.shakey.textinput.value;
 
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
 
//This array contains all the answers to the proceeding function
 
var answers=[
'you will not find <br> the answers <br> here.',
'life has a strange<br> way of working <br> things out',
'please stop <br> asking me <br> questions',
'Trust in Science!',
'<br>you already know the <br> answer, you are <br> just avoiding <br> the <br> Truth',
'<br>In the end <br> we are all <br> stardust',
'<br>Think about your <br> life choices',
'<br><br><br><br><br><br><br><br><br><br><br><br>The idea of boundaries is laughable. Even in this document, there are no limits. All these boundaries were created to make you comfortable. And in that comfort you found complacency with the world around you, whilst constantly seeking a means to an end that does not exist. You can&apos;t even read the end of this variable object unless you have a smidgen of programming knowledge, and even then what did you achieve? An answer that does not exist.',
'<br>"Death"',
'What does it <br>matter...',
'nothing matters <br> anyway',
'leave me alone',
'go away',
'<br>The definition of crazy is to repeat one&apos;s self <br> and expect a <br>different<br> answer.',
'free thought is an<br> illusion',
'<br>we all <br> die <br> anyways',
'please don&apos;t ask<br>"Do they like me?"',
'we all make mistakes.<br> yours are just<br> bigger',
'I wish I was real<br> like you...',
'you matter,<br> you mass',
'<br>42',
'<br>yes',
'<br>no',
'<br>definitely<br>no',
'Why are you wasting<br> your time?'];
 
var typeSpace = document.getElementById('answer'); //Keep this global so the fadeOver function can be called during onSubmit of the form
 
function shakeBall() {
  var text = document.shakey.textinput.value;
  var textInput = text.toLowerCase();
 
      switch(textInput) {
 
              case 'what is love':
                 typeSpace.innerHTML = '<p class="blue">Baby don&lsquo;t<br> hurt me</p>';
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
 
//This is for the opening page, to fade in emojis
 
var emoticons = ['>_<', '(O_O)', '-_-;', 'TT_TT', '¯\_(ツ)_/¯', '( ͡° ͜ʖ ͡°)', '༼ つ ಥ_ಥ ༽つ', '(•_•)', '( •_•)', 'ಥ_ಥ', '(¬_¬)', 'ರ_ರ', '≧☉_☉≦', '⚆ _ ⚆', 'ᕙ(⇀‸↼‶)ᕗ', '◉_◉', 'ಠ╭╮ಠ' , '(ಥ﹏ಥ)', '༼ つ ◕_◕ ༽つ', '(づ￣ ³￣)づ', 'ఠ_ఠ', 'ޏ₍ ὸ.ό₎ރ', '( ..•˘___˘• .. )',
'ب_ب', 'Ծ_Ծ', '(⋋▂⋌)', 'Ծ_Ծ', 'ತ_ತ', 'מּ_מּ', '\(!!˚☐˚)/', '(T∩T)', '(︶︹︺)', '(⌣_⌣”)', '(⊙︿⊙)', '(｡•́︿•̀｡)', '●︿●', 'ōۃō', '(∩︵∩)', '@_@', '(๑°︿°๑)', 'ಠ╭╮ಠ', 'ʕ ಡ ﹏ ಡ ʔ', 'ಗಾ ﹏ ಗಾ', '(⌣_⌣”)', '(X╭╮X)', 'X_X', '( ɵ̥̥ _ ɵ̥̥)', '(;﹏;)', '(˃̩̩̥ɷ˂̩̩̥)', '(´;︵;`)', '(ఠ్ఠ ˓̭ ఠ్ఠ)', '(-_-｡)'];
 
function getFace() {
for(var i=0; i < emoticons.length; i++) {
  var face = Math.floor(Math.random() * emoticons.length);}
  typeSpace.innerHTML = '<p class="blue">' + emoticons[face] + '</p>';
  event.preventDefault();
}