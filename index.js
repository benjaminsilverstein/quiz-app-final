const STORE = [{
    question: 'Michael wrote, directed and starred in a film that is screened in season seven. What is the name of his film?',
    answers: [
      'Zero Dark Thirty',
      'Paper By the Dozen',
      'Somehow I Manage',
      'Threat Level Midnight'
    ],
    correctAnswer: 'Threat Level Midnight',
    correctAnswerInfo: 'Who could forget Jim as Goldface? The answer, of course, is Threat Level Midnight.',
    img: 'images/tlm.jpg', 
    alt: 'Scene from Michael\'s film'
  },


  {
    question: 'After returning from Jamaica, Michael tries to prove his relationship with Jan by emailing a member of the office a NSFW photo. Which email address does he accidentally send it to?',
    answers: [
      'accounting@dundermifflin.com',
      'Paper By the Dozen',
      'toby.henderson@dundermifflin.com',
      'packaging@dundermifflin.com'
    ],
    correctAnswer: 'packaging@dundermifflin.com',
    correctAnswerInfo: 'After sending the photo to packaging@dundermifflin.com, instead of packer@dundermifflin.com, Darrel forwards it to \' many, many people.\'',
    img: 'images/steel-drum.jpg',
    alt: 'Michael plays the steel drum'
  },
  {
    question: 'In “The Dinner Party,” Jim tells Pam, “You know, babe, I should have told you but... I did something bad.” What did he do?',
    answers: [
      'He invited Dwight to the party',
      'He broke Michael\’s prized 9 inch plasma screen',
      'He put Jan\’s candles in jello',
      'He stole Jan\’s CD',
    ],
    correctAnswer: 'He stole Jan\’s CD',
    correctAnswerInfo: 'Jim stole Jan\'s CD "The Hunted," featuring the single "That one Night."',
    img: 'images/dinner-party.jpg',
    alt: 'Pam gives Jim a horrified look in a scene from The Dinner Party'
  },
  {
    question: 'Ten years after promising a class of underprivileged students he’ll pay their college tuition if they graduate high school, Michael is unable to fulfill his pledge. What does he give them instead?',
    answers: [
      'Laptop batteries',
      'Salt water taffy',
      '4 reams of paper',
      '1,000 Schrute Bucks'
    ],
    correctAnswer: 'Laptop batteries',
    correctAnswerInfo: 'Michael gives all the students laptop batteries.',
    img: 'images/scotts-tots.jpg', 
    alt: 'Michael sits in a classroom surrounded by his tots.'
  },
  {
    question: 'What is the ratio of Stanley Nickels to Schrute Bucks?',
    answers: [
      'The ratio of bigfoots to mermen',
      'We never know; Stanley fell asleep before answering',
      'The ratio of unicorns to leprechauns',
      'The ratio of rainbows to fairy farts'
    ],
    correctAnswer: 'The ratio of unicorns to leprechauns',
    correctAnswerInfo: 'The ratio of Stanley Nickels to Schrute Bucks is the ratio of unicorns to leprechauns.',
    img: 'images/schrute-buck.jpg', 
    alt: 'Dwight holds up a Schrute buck'
  },
  {
    question: 'Which actor never appears on the office?',
    answers: [
      'Amy Adams',
      'Will Ferrell',
      'Maggie Gyllenhaal',
      'Jim Carrey'
    ],
    correctAnswer: 'Maggie Gyllenhaal',
    correctAnswerInfo: 'There were many amazing guest stars on the office, but Maggie Gyllenhaal was not one of them.',
    img: 'images/office-cast.jpg',
    alt: 'cast photo'
  }
]

let questionNumber = 0;
let $score = 0;

function Questions(questionNumber) {
  let $questionCode = `
            <div id="q1">
               <img src="${STORE[questionNumber].img}" alt="${STORE[questionNumber].alt}">
               <div class="question-num"><span class="displayQuestionNumber">${questionNumber}</span>/<span class="total-qs">6</span>
               </div>
               <h2>${STORE[questionNumber].question}
               </h2>
               <form>
                  <fieldset>
                     <label class="possAnswer">
                     <span>${STORE[questionNumber].answers[0]}</span>
                     <input type="radio" value="${STORE[questionNumber].answers[0]}" name="answer" required>
                     </label>
                     <label class="possAnswer">
                     <span>${STORE[questionNumber].answers[1]}</span>
                     <input type="radio" value="${STORE[questionNumber].answers[1]}" name="answer" required>
                     </label>
                     <label class="possAnswer">
                     <span>${STORE[questionNumber].answers[2]}</span>
                     <input type="radio" value="${STORE[questionNumber].answers[2]}" name="answer" required>
                     </label>
                     <label class="possAnswer">
                     <span>${STORE[questionNumber].answers[3]}</span>
                     <input type="radio" value="${STORE[questionNumber].answers[3]}" name="answer" required>
                     </label>
                     <p class="error hide">You must select an answer!</p>
                     <button type="submit" class="submitButton">Submit</button>
                  </fieldset>
               </form>
         </div>`;
  return $questionCode;
}

function correctAnswerCode (questionNumber) {
  let answerCode =
 `
 <div class="container">
 <section class="correctorincorrect correct" title="Michael and Dwight raise the roof">
 </section>
               <h2>That's correct!</h2>
               <p class="answer-feedback">${STORE[questionNumber].correctAnswerInfo}</p>
               <button class="next-btn">Next</button>
               </div>`;
  return answerCode;}

function incorrectAnswerCode (questionNumber) {
let answerCode = `
    <div class="container">
    <section class="correctorincorrect incorrect" title="Dwight shakes his head.">
          </section>
               <h2>That's incorrect.</h2>
               <p class="answer-feedback">${STORE[questionNumber].correctAnswerInfo}</p>
               
               <button class="next-btn">Next</button>
               </div>`;
    return answerCode;
}


function restartQuiz() {
  $('.question-container').on('click', '.restart', function (event) {
    location.reload();
  })
};

function increaseQuestionNumber() {
  questionNumber++;
}

function increaseDisplayedNumber() {
  $('.displayQuestionNumber').text(questionNumber + 1);
}

function increaseScore() {
  $('.score-num').text($score)
  $score = $score + 1
}

function scoreFeedback (){
if ($score <= 3) {$('.scoreFeedback').text(`Do you even watch The Office, bro?`)}
else if ($score <= 4) {$('.scoreFeedback').text(`Not bad. You'd make a fine assistant to the regional manager.`)}
else if ($score <= 5) {$('.scoreFeedback').text(`Great work. Corporate may want to interview you for a job.`)}
  
}



function launchQuiz() {
  $('.launch').on('click', '.launch-btn', event => {
    console.log('quiz launched');
    $('.launch').remove();
    $('.question-container').removeClass('hide').html(Questions(questionNumber))
    $('.displayQuestionNumber').text(questionNumber + 1);

  })
}


function submitAnswer() {
  $('.question-container').on('click', '.submitButton', function (event) { 
    if ($('input:checked').val() === undefined) {
      $('.error').removeClass('hide')
    }
  })
  $('.question-container').on('submit', 'form', function (event) {
    event.preventDefault();
    $('.question-container').addClass('hide')
    $('footer').removeClass('hide')
    let val = $('input:checked').val()
    if (val === STORE[questionNumber].correctAnswer) {
      $('.grading-box').removeClass('hide').html(correctAnswerCode(questionNumber))
      $score++
      $('.score-num').text($score)
    } else {
      $('.grading-box').removeClass('hide').html(incorrectAnswerCode(questionNumber))
    }
  }
  )
}

function generateNextQuestion() {
  $('.grading-box').on('click', '.next-btn', function (event) {
    if (questionNumber < STORE.length - 1) {
      $('.grading-box').addClass('hide');
      $('.question-container').removeClass('hide');
      increaseQuestionNumber();
      console.log(questionNumber);
      $('.question-container').html(Questions(questionNumber));
      increaseDisplayedNumber();
    } else {
      let scorecode =
  `<img src="images/clapping.gif"><div id="final-score">
  <h2>You got <span class="score-num">${$score}</span>/6 right.</h2>
  <p class="scoreFeedback"></p>
  <button class="restart">Want to give it another go?</button>
</div>`;
      $('.grading-box').addClass('hide');
      $('.question-container').removeClass('hide');
      $('.question-container').html(scorecode)
      scoreFeedback ();
    }
  })
}

$('.question-container').on('click', '.possAnswer', event => {
  $(event.currentTarget).css({'background-color': 'black', 'color': 'white'}, 500);
  $(event.currentTarget).siblings().css({'background-color': 'white', 'color': 'black'}, 200);
  })




function quiz() {
  launchQuiz()
  submitAnswer()
  generateNextQuestion(400)
  restartQuiz()
}

$(quiz);
