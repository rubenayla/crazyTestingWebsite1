document.getElementById("button").addEventListener("click", deliverMoney);

class Bill {
  constructor(value_input, quantity_input){
    this.value = value_input;
    this.quantity = quantity_input;
  }

}
// The box with money
var box = [];
box.push( new Bill(100, 5) );
box.push( new Bill(50, 3) );
box.push( new Bill(20, 10) );
box.push( new Bill(10, 2) );
box.push( new Bill(5, 5) );

function deliverMoney(){
  // The bills decomposed
  var delivery = [];
  money = document.getElementById("money").value; // Input type number

  for(var bill of box){
    // The quantity of bills we need (the maximum possible that doesn't exceed the money)
    neededQuantity = Math.floor(money/bill.value);

    if(neededQuantity > 0){
      //If I have enough bills take the needed, if not, take all
      if(bill.quantity > neededQuantity){ howManyBills = neededQuantity; }
      else { howManyBills = bill.quantity; }

      delivery.push( new Bill(bill.value, howManyBills) );
      money -= howManyBills * bill.value;
    }
  }

  // Write to the user
  show = ""
  if(money > 0){
    show = "Sorry. I don't have enough bills<br/>";
  }
  else {
    for(var d of delivery){
      show += String(d.quantity) + " bills of $" + String(d.value) + "<br />";
    }
  }
  show += "<hr width='40%'/>"
  document.getElementById("result").innerHTML = show;
}