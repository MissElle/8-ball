//This is a fade in for the elements
 
var triangle = document.getElementById('triangle'); //Declare this element so things fade in on the onload
 
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
 
var answers=['<br>you will not find <br> the answers here.', '<br>life has a strange<br> way of working <br> things out', '<br>please stop asking <br> me questions', '<br>Trust in Science!', 'you already know the <br> answer, you are <br> just avoiding <br> the <br> Truth', '<br>In the end <br> we are all <br> stardust', '<br>Think about your <br> life choices', 'The idea of boundaries is laughable. Even in this document, there are no limits. All these boundaries were created to make you comfortable. And in that comfort you found complacency with the world around you, whilst constantly seeking a means to an end that does not exist. You can&apos;t even read the end of this variable object unless you have a smidgen of programming knowledge, and even then what did you achieve? An answer that does not exist.', '<br>"Death"', '<br>What does it matter...', '<br>nothing matters <br> anyway', '<br>leave me alone', '<br>go away', 'The definition of crazy is to repeat one&apos;s self <br> and expect a <br>different<br> answer.', '<br>free thought is an<br> illusion', '<br>we all <br> die <br> anyways', '<br>please don&apos;t ask<br>"Do they like me?"', '<br>we all make mistakes.<br> yours are just<br> bigger', '<br>I wish I was real<br> like you...', '<br>you matter,<br> you mass', '<br><br>42', '<br><br>yes', '<br><br>no', '<br><br>definitely<br>no', '<br>Why are you wasting<br> your time?'];
 
var result = document.getElementById('answer'); //Keep this global so the fadeOver function can be called during onSubmit of the form
 
function shakeBall() {
  for(var i=0; i < answers.length; i++) {
    var answer = Math.floor(Math.random() * answers.length);
  }
  result.innerHTML = '<p class="blue">' + answers[answer] + '</p>';
  event.preventDefault();
}