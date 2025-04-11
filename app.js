const textareaEl = document.getElementById("textarea");
const  total =  document.getElementById("total-counter");
const remaining = document.getElementById("remaining-counter");
textareaEl.addEventListener("keyup", ()=>{
    
    updateCounter();
})
function updateCounter(){
 total.innerText = textareaEl.value.length;
 remaining.innerText = textareaEl.getAttribute("maxlength") - textareaEl.value.length;
}
