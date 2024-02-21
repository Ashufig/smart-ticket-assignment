function change7(){
    document.getElementById('B3').style.background="green"
   
   // ele.classList.add('bg-black')
   // console.log(ele.classList)
   // const irtto =ele.innerText;
   const eleme= document.getElementById('hi-span')
   const txtt= eleme.innerText
   const valuee=parseInt(txtt)
   const newvalue= valuee+1;
   eleme.innerText= newvalue;
   const left=document.getElementById('seat-left')
   const lefty=left.innerText;
   const okvalue=parseInt(lefty);;
   const leftvalue=okvalue-1
   left.innerText=leftvalue ;
//    const pera =document.getElementById('td1')
//    pera.innerText= 'A1'
//  

}
function Data7(){
   var button = document.getElementById('B3');

       // Get the text inside the button
       var buttonText = button.innerText;
    // Get the table body where we will append new rows
    var tableBody = document.getElementById('tablet');
     
   

    // Create a new row
    var newRow = document.createElement('tr');

    // Create new cells for the row and set their content
    var nameCell = document.createElement('td');
    
    nameCell.innerText =  buttonText;

    var ECONOMY = document.createElement('td');
    ECONOMY.textContent = 'economy';

    var MONEY = document.createElement('td');
    MONEY.textContent = '550';

    // Append the cells to the row
    newRow.appendChild(nameCell);
    newRow.appendChild(ECONOMY);
    newRow.appendChild(MONEY);
    


    // Append the new row to the table body
    tableBody.appendChild(newRow);
    pricee7();
   disableBtn7();

     
    
}
function disableBtn7() {
   document.getElementById('B3').disabled=true;
   
  
}
function pricee7(){
   var ticketPrice= document.getElementById('hi-span')
   console.log(ticketPrice.innerText);
 var pricy=ticketPrice.innerText;
 console.log(pricy)

var pricing= document.getElementById('price');
var okprice=pricing.innerText;
console.log(okprice)
okprice=parseInt(pricy);
price=550*okprice;
pricing.innerText=price;

}