
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
  const couponElement =document.getElementById("input-field").value;
  const couponcode = couponElement.split(" ").join("").toUpperCase();
  console.log(couponcode)
  // const p4 = document.createElement("p")
  // p4.innerText ='discount price:';
  const discountText = document.getElementById("discount");
  discountText.innerText = "discount price:"
  if(totalPrice >=2200){
   if(couponcode === "NEW15"){
    const discountElement = document.getElementById("discount-price");
    const discountAmount = totalPrice * 0.15;
    discountElement.innerText = discountAmount.toFixed(2);

    // Grand calcul 
    const grandTotal = document.getElementById("grand-total")
    
   }else{
    alert("invalid coupon")
   }
  }else{
    alert("four tickets have been selected and will not be sold")
  } 
})