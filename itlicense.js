/* drivinglicense.js */
(function(){
  function buildQuiz(){
    // variable to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {

        // variable to store the list of possible answers
        const answers = [];

        // and for each available answer...
        for(letter in currentQuestion.answers){

          // ...add an HTML radio button
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }

        // add this question and its answers to the output
        output.push(
          `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join('')} </div>`
        );
      }
    );

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
  }

  function showResults(){

    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach( (currentQuestion, questionNumber) => {

      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if(userAnswer === currentQuestion.correctAnswer){
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = 'lightgreen';
      }
      // if answer is wrong or blank
      else{
        // color the answers red
        answerContainers[questionNumber].style.color = 'red';
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');
  const myQuestions = [
    {
      question: "What does IT stands for?",
      answers: {
        a: "Information Technology",
        b: "IT the clown",
        c: "Internet of things",
      },
      correctAnswer: "c"
    },
    {
      question: "Who is the founder of Razer Inc. ?",
      answers: {
        a: "Jackie Chan",
        b: "Jack Ma",
        c: "Min-Liang Tan",
      },
      correctAnswer: "c"
    },
    {
      question: "Who is the founder of Tesla?",
      answers: {
        a: "Peter Parker",
        b: "Elon Musk",
        c: "Nikola Tesla",
      },
      correctAnswer: "b"
    },
    {
      question: "Which one of these is programming language ?",
      answers: {
        a: "HTML",
        b: "C",
        c: "GOOGLE",
        d: "WINDOWS"
      },
      correctAnswer: "b"
    },
    {
      question: "How many bits makes a byte?",
      answers: {
        a: "16",
        b: "12",
        c: "24",
        d: "8"
      },
      correctAnswer: "d"
    },
    {
      question: "What is the most popular database?",
      answers: {
        a: "MySQL",
        b: "MongoDB",
        c: "Oracle",
        d: "PostgreSQL"
      },
      correctAnswer: "c"
    },
    {
      question: "What is the most popular Linux Distribution 2020?",
      answers: {
        a: "MX Linux",
        b: "Ubuntu",
        c: "Linux Mint",
        d: "Debian"
      },
      correctAnswer: "a"
    },
    {
      question: "Who is the founder of Microsoft Corporation ?",
      answers: {
        a: "Jeremy Clarkson",
        b: "Bill Gates",
        c: "Leonardo Dicaprio",
        d: "Willy Wonka"
      },
      correctAnswer: "b"
    }

  ];

  // Kick things off
  buildQuiz();

  // Event listeners
  submitButton.addEventListener('click', showResults);
})();
