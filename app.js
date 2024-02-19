
function play(){
hiddenElementID('banner-screen')
showElementId('Select-tick-container')
}

const leftSeatConntent = document.querySelectorAll('.seat')
// console.log(leftSeatConntent)
let totalPrice = 0;

for ( let index = 0; index < leftSeatConntent.length; index++){
    const seats = leftSeatConntent[index];
    seats.addEventListener('click', function(){
      const seattitle = seats.querySelector("button").innerText;
      const p2 = document.createElement('p')
       const economytitle = p2.innerText = 'economy';
       const p3 = document.createElement('p');
       const priceTitle = p3.innerText = parseFloat("550")
       const titleContainer = document.getElementById("title-constianer")
       const p = document.createElement('p')
       p.innerText = seattitle
       titleContainer.appendChild(p)
       titleContainer.appendChild(p2)
       titleContainer.appendChild(p3)
       
      //  calculate 
      totalPrice +=priceTitle
      document.getElementById("total-price").innerText = totalPrice.toFixed(2)
 
    })
}


const btn = document.getElementById("apply-button")
btn.addEventListener("click", function(){
  console.log("clic")
  const couponElement =document.getElementById("input-field");
 
})