document.getElementById("button").addEventListener("click", deliverMoney);

var links = {
  '100': "100bill.jpg",
  '50':  "50bill.jpg"
};

class Bill {
  constructor(value_input, quantity_input){
    this.value = value_input;
    this.quantity = quantity_input;
    // If we have the link, put it
    if(typeof links[String(this.value)] != "undefined"){
      this.image = new Image();
      this.image.src = links[String(this.value)];
    }
    else {
      this.image = false;
    }
  }
}

// The box with money
var box = [];
box.push( new Bill(100,  5) );
box.push( new Bill( 50,  3) );
box.push( new Bill( 20, 10) );
box.push( new Bill( 10,  2) );
box.push( new Bill(  5,  5) );

function deliverMoney(){
  // The bills decomposed
  var delivery = [];
  money = document.getElementById("money").value; // Input type number

  for(var bill of box){
    // The quantity of bills we need (the maximum possible that doesn't exceed the money)
    neededQuantity = Math.floor(money/bill.value);

    if(neededQuantity > 0 && bill.value > 0){
      //If I have enough bills take the needed, if not, take all
      if(bill.quantity > neededQuantity){ howManyBills = neededQuantity; }
      else { howManyBills = bill.quantity; }

      delivery.push( new Bill(bill.value, howManyBills) );

      bill.quantity -= howManyBills;
      money -= howManyBills * bill.value;
    }
  }
  
  // Write to the user
  show = ""
  if(money > 0){
    show = "Sorry. I don't have the bills<br/>";
  }
  else {
    for(var i = 0; i < delivery.length; i++){
      // If it has an image
      if(delivery[i].image){
        for(var images = 0; images < delivery[i].quantity; images++){
          show += "<img src=\"" + links[String(delivery[i].value)] + "\" width=\"30%\"/>  ";
        }
        show += "<br/>";
      }
      else {
        // We don't have the image
        show += String(delivery[i].quantity) + ' bills of $' + String(delivery[i].value) + "<br/>";
      }
    }
  }
  show += "<hr width='40%'/>"
  document.getElementById("result").innerHTML += show;
}
