
const myQuestions = [
	{
    
    'question': 'WHAT IS THE OFFICE AWARDS NIGHT CALLED?',
	 'answers': ["DORKIES","DUNDIES","DWEEBIES","DINGLES"],
	 'correct': 1
	},
	{
	 'question': 'WHAT IS THE GIANT POT THAT KEVIN DROPS ALL OVER THE OFFICE FLOOR?',
	 'answers': ["GRAVY", "SOUP", "MAC & CHEESE", "CHILI"],
	 'correct':  3
	},
	{
	 'question': "HOW LONG HAD JIM AND PAM BEEN DATING BEFORE HE BOUGHT HER ENGAGEMENT RING",
	 'answers': ["ONE WEEK","ONE MONTH","ONE YEAR","TWO YEARS"],
	 'correct':  0
	},
	{
	'question': "WHAT DOES MICHAEL CHOOSE AS HIS USERNAME WHEN HE SIGNS UP FOR AN ONLINE DATING SITE?",
	'answers': ["LITTLEKIDLOVER","IAMTHEBOSS","DUNDERMIFF","READYFORMARRIAGE"],
	'correct':  0
	},
	{
	'question': "WHAT IS ERIN'S REAL FIRST NAME?",
  'answers': ["BRITTANY", "CHRISTINE", "BECCA" , "KELLY"],
	'correct': 3
	},
	{
	 'question': "WHICH COUNTRY DOES TOBY MOVE TO WHEN HE LEAVES HIS JOB AT DUNDER MIFLIN ONLY TO RETURN LATER?",
	 'answers': ["JAMAICA","COSTA RICA","ITALY","CUBA"],
	 'correct': 1
	},
	{
	 'question': "DWIGHT AND ANDY HAVE A DUEL OVER WHICH WOMAN IN THE OFFICE?",
	 'answers': ["ANGELA", "ERIN", "KELLY", "MEREDITH"],
	 'correct': 0
	},
	{
	 'question':"WHAT IS THE NAME OF THE CAT THAT ANGELA THROWS AT OSCAR DURING THE FIRE DRILL?",
	 'answers': ["SPRINKLES", "CUPCAKE", "BANDIT", "TINKERBELL"],
	 'correct':  2
	},
	{
	 'question':"WHAT DOES JAN NAME THE BABY SHE HAS VIA SPERM DONOR?",
	 'answers': ["AXON", "ALLY", "APPLE", "ASTRID"],
	 'correct': 3  
	},
	{
	 'question': "WHAT IS THE NAME OF MICHAEL'S INFAMOUS SCREENPLAY?",
	 'answers': ["THE CHRONICLES OF MICHAEL SCARN","THREAT LEVEL MIDNIGHT","LIFE IN SCRANTON", "MICHAEL SCARN MADDNESS"],
	 'correct': 1
	}
	];

let score = 0;
let current = 0;


$(document).ready(function(){
  // Start button event listener
  $(".start-button").click(function(){
     $('.start-quiz').hide();
     $('.next').hide();
     $('.questions').show();
     displayQuestion();
      $('.score').text('CURRENT SCORE: '+score);
    console.log("Start Quiz button clicked");
  });
  
  // Click on next button event listener
  $(".next-button").click(function(event){
    console.log("Next button clicked");
    displayQuestion();
    $('.next').hide();
    $('.submit').show();
  });
  
  $(".submit-button").click(function(event){
    event.preventDefault();
    if($('input.selected').length){
      let answer = $('input.selected').attr('id');
      checkAnswer(answer);
      $('.next').show();
      $('.submit').hide();
    } else {
      alert('Please select an answer');
    }
  });


  // Retake button event listener 
  $(".retake-button").click(function(){
  location.reload();
    console.log("Retake button clicked");
  });
  
  //Click listener to make questions change on hover
  $('form.list').on('click', 'input', function(event) {
    $('.selected').removeClass();
    $(this).addClass('selected');
  });
  
});

//FUNCTIONS 
function displayQuestion(){
  $('.question-number').text('QUESTION NUMBER: '+(current + 1)+"/10" );
  if(current < myQuestions.length){
    let listQuestion = myQuestions[current];
    $('h2').text(listQuestion.question);
    $('form.list').html('');
    for (let i = 0; i < listQuestion.answers.length; i++) {
      $('form.list').append('<input id = "'+i+'">'+listQuestion.answers[i] +'</li>');
      
    }
  } else {
    // show summary that says how many you got correct
    displayScore();
  }
}

// function stub to check answer 
function checkAnswer(answer){
  let listQuestion = myQuestions[current];
  if(listQuestion.correct == answer){
    score++;
    $('input.selected').addClass('correct');
  } else {
    $('input.selected').addClass('incorrect');
    $('listQuestion.correct').addClass('correct');
  }
  $('.score').text('CURRENT SCORE: '+score);
  current++;
}

//Display score
function displayScore(){
  $('.questions').hide();
  $('.end-quiz').show();
  $('.end-score').text("YOUR SCORE IS: " +score + '/10');
  if(score >= 8){
    $('.comment').text('SOMEONE KNOWS THEIR STUFF!')
    ;
  } else {
    $('.comment').text('BETTER LUCK NEXT TIME!')
  
  }
};



