
const myQuestions = [
	{
    
	 'question': 'What is the office employee awards night called?',
	 'answers': ["Dorkies","Dundies","Dweebies","Dingles"],
	 'correct': 1
	},
	{
	 'question': 'What is the giant pot that Kevin drops all over the office floor?',
	 'answers': ["Gravy", "Soup", "Mac & Cheese", "Chili"],
	 'correct':  3
	},
	{
	 'question': "How long had Jim and Pam been dating before he bought her engagement ring?",
	 'answers': ["One week","One month","One year","Two years"],
	 'correct':  0
	},
	{
	'question': "What does Michael choose as his user name when he signs up for an online dating site?",
	'answers': ["LittleKidLover","IamTheBoss","DunderMiff","ReadyforMarriage"],
	'correct':  0
	},
	{
	'question': "What is Erin's real first name?",
  'answers': ["Brittany", "Christine", "Becca" , "Kelly"],
	'correct': 3
	},
	{
	 'question': "Which country does Toby move to when he leaves his job at Dunder Mifflin, only to return later?",
	 'answers': ["Jamaica","Costa Rica","Italy","Cuba"],
	 'correct': 1
	},
	{
	 'question': "Dwight and Andy have a duel over which woman in the office?",
	 'answers': ["Angela", "Erin", "Kelly", "Meredith"],
	 'correct': 0
	},
	{
	 'question':"What is the name of the cat that Angela throws to Oscar during the fire drill?",
	 'answers': ["Sprinkles", "Cupcake", "Bandit", "Tinkerbell"],
	 'correct':  2
	},
	{
	 'question':"What does Jan name the baby she has via a sperm donor?",
	 'answers': ["Axon", "Ally", "Apple", "Astrid"],
	 'correct': 3  
	},
	{
	 'question': "What is the name of Michael's infamous screenplay?",
	 'answers': ["The Chronicles of Michael Scarn","Threat Level Midnight","Life in Scranton", "Michael Scarn Maddness"],
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
      $('.score').text('Current Score: '+score);
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
    if($('li.selected').length){
      let answer = $('li.selected').attr('id');
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
  $('ul.list').on('click', 'li', function(event) {
    $('.selected').removeClass();
    $(this).addClass('selected');
  });
  
});

//FUNCTIONS 
function displayQuestion(){
  $('.question-number').text('Question Number: '+(current + 1)+"/10" );
  if(current < myQuestions.length){
    let listQuestion = myQuestions[current];
    $('h2').text(listQuestion.question);
    $('ul.list').html('');
    for (let i = 0; i < listQuestion.answers.length; i++) {
      $('ul.list').append('<li id = "'+i+'">'+listQuestion.answers[i] +'</li>');
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
    $('li.selected').addClass('correct');
  } else {
    $('li.selected').addClass('incorrect');
    $('listQuestion.correct').addClass('correct');
  }
  $('.score').text('Current Score: '+score);
  current++;
}

//Display score
function displayScore(){
  $('.questions').hide();
  $('.end-quiz').show();
  $('.end-score').text("Your score is: " +score + '/10');
  if(score >= 8){
    $('.comment').text('Someone knows their stuff!')
    ;
  } else {
    $('.comment').text('Better luck next time!')
  
  }
};



