function hiddenElementID(elementId){
    const element = document.getElementById(elementId)
    element.classList.add('hidden')
}

function showElementId (elementId){
    const element = document.getElementById(elementId)
    element.classList.remove('hidden')
}

// seat count Inner text 
const allbtn = document.querySelectorAll('.seat')
let count = 0;

for(const btn of allbtn ){
    btn.addEventListener("click",function(e){
       count = count + 1;
       document.getElementById('seats-count').innerText = count;

    })
}