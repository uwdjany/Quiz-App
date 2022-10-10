const quizData =[
    {
        question:'How old is Florin?',
        a:'10',
        b:'17',
        c:'26',
        d:'110',
        correct:'c'

    },{
        question:'What is the most used programming language in 2019?',
        a:'Java',
        b:'C',
        c:'Python',
        d:'JavaScript',
        correct:'a'

    },{
        question:'What does CSS stand for?',
        a:'Cascading Stylish Shot',
        b:'Course Style Sheets',
        c:'Class Style Sheets',
        d:'Cascading Style Sheets',
        correct:'d'

    },
    {
        question:'What does HTML stand for?',

        a:'Hypertxt Markup Language',
        b:'Cascading Style Sheets',
        c:'Jason Object Notation',
        d:'height Making Language',
        correct:'a',
    },
    {
        question:'What tear was JavaScript Launched?',
        a:'1996',
        b:'1995',
        c:'1994',
        d:'none of the above',
        correct:'d'
    }

]
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let scrore = 0;
loadQuiz();

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText =  currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
   


} 

function getSelected(){
    const answerEls = document.querySelectorAll(".answer");
    
let answer = undefined;

    answerEls.forEach((answerEl) => {
       if(answerEl.checked){
        answer = answerEl.id;

       }
    }
    );
 return answer;

} 

function deselectAnswers() {
 answerEls.forEach((answerEl) => {
    answerEl.checked = false
 }
 )
   

}
submitBtn.addEventListener("click" , () => {
    // check to see the answer
    const answer = getSelected();
  



    if(answer)
    {
        if(answer === quizData[currentQuiz].correct){
            scrore++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length){
            loadQuiz();
        } else{
            //TODO Results
            alert("You finish !!")
        }
    }




   
  
   
    

   
 
    

})