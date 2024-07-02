const textareaEl = document.getElementById("textarea");

const totalCounterEl = document.getElementById("total-counter");
const remainingCounterEl = document.getElementById("remaining-counter");
const maxLengthEl = textareaEl.getAttribute("maxlength");

textareaEl.addEventListener("keyup", ()=>{
  updateCounter();
  updateRemainder();
});

function updateCounter (){
    totalCounterEl.innerHTML = textareaEl.value.length
}

function updateRemainder() {
    remainingCounterEl.innerHTML = maxLengthEl - textareaEl.value.length;
}