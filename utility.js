function hiddenElementID(elementId){
    const element = document.getElementById(elementId)
    element.classList.add('hidden')
}

function showElementId (elementId){
    const element = document.getElementById(elementId)
    element.classList.remove('hidden')
}




//   
const allbtn = document.querySelectorAll('.seat')
let count = 0;

for(const btn of allbtn ){
    btn.addEventListener("click",function(e){
       if(count < 4){      
        count = count + 1;    
      const seatName = e.target.parentNode.childNodes[1].innerText;
      
      const selectedSetContainer = document.getElementById("selected-seat-container");
      const li = document.createElement("li");
      li.style.display = "flex"
      li.style.justifyContent = "space-between";
      const p = document.createElement('p');
       p.innerText = seatName;
       const p2 = document.createElement('p');
        p2.innerText = 'economy';
        const p3 = document.createElement('p');
        const price = p3.innerText = parseInt("550")
        e.target.parentNode.childNodes[1].style.backgroundColor="green";

                li.appendChild(p);
                li.appendChild(p2);
                li.appendChild(p3);

                const seatLeft = document.getElementById("seat-left").innerText;
                const convertedSeatLeft =parseInt(seatLeft);
                
                document.getElementById("seat-left").innerText = convertedSeatLeft - 1;
             
              selectedSetContainer.appendChild(li);

           
            totalprice("total-price",parseInt(price))
            grandTotalCost("grand-total",parseInt(price));
                
              setInnerText("seats-count",count)
       }
       else{
        alert("donot select more seat")
       }
    })
}



function setInnerText(id, value){
    document.getElementById(id).innerText = value;
}


function totalprice(id, value){
    const totalprice = document.getElementById(id).innerText;
    const convertedtotalcost = parseInt(totalprice);
    const sum = convertedtotalcost + parseInt(value); 
    setInnerText("total-price",sum );
}

function grandTotalCost(id, value){
    const totalPrice = document.getElementById(id).innerText;
    const convertedtotalcost = parseInt(totalPrice);
    const sum = convertedtotalcost + parseInt(value); 
    setInnerText("grand-total", sum);
}




const btnaply = document.getElementById("apply-button")
btnaply.addEventListener("click", function(){
  const couponElement =document.getElementById("input-field").value;
  const couponcode = couponElement.split(" ").join("").toUpperCase();
  const discountText = document.getElementById("discount");
  discountText.innerText = "discount price:"
  if (parseInt(price)>=2200){
   if(couponcode === "NEW15"){
    const discountElement = document.getElementById("discount-price");
    const discountAmount = parseInt(price) * 0.15;
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






