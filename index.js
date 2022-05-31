// Import stylesheets
import './style.css';

var allQuetions = document.querySelectorAll(".question");

allQuetions.forEach(function(queationall) {
  var quetion = queationall.querySelector('.question-btn');
  quetion.addEventListener("click", function() {
    queationall.classList.toggle("show-text");
  })
})