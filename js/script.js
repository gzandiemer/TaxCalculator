function tax_calc() {
//it gets the input as string. Below with replace, even when user writes the number with comma it will replace it with comma
//and with parseInt it will convert the string to number
//Attention to bracket use! It tells which method to use first, when there is a couple in one string
var brutto_input = parseInt((document.getElementById("brutto").value).replace(",", "."));
console.log(brutto_input);//check console.log to test

var tax_type = document.getElementById("tax_type");
console.log(tax_type);
// configure the "getElementById" so he gets the "value" and not the "content" (so he gets "7" or "19" and not "normal" or "Ermäßigt"
// see https://stackoverflow.com/questions/1085801/get-selected-value-in-dropdown-list-using-javascript
var tax_typeOut = tax_type.options[tax_type.selectedIndex].value;
console.log(tax_typeOut);


// TAX CALCULATION WHEN SELECT OPTION IS = 19
var normal_tax_value = 19
var reduced_tax_value = 7
if(tax_typeOut == normal_tax_value){

  console.log("tax type: normal"); // to test
  var result_netto;
  result_netto = brutto_input / 1.19;
  console.log("netto: " + result_netto);
  var result_tax = brutto_input - result_netto;
  console.log("tax: " + result_tax);
}
else if(tax_typeOut == reduced_tax_value){

  console.log("tax type: ermäßigt");
  var result_netto;
  result_netto = brutto_input / 1.07;
  console.log("netto: " + result_netto);
  var result_tax = brutto_input - result_netto;
  console.log("tax: " + result_tax);

}

// cut results to two numbers after point (e.g. 99.9999 -> 99.99) varName.toFixed(2)
// OUTPUT TO INNER.HTML (...) AFTER CALCULATING !!!!! NOT INSIDE THE "IF"-CALCULATIONS
document.getElementById("output_netto").innerHTML = result_netto.toFixed(2) + " €";
document.getElementById("output_tax").innerHTML = result_tax.toFixed(2) + " €";

var iframe = document.createElement('iframe');
iframe.frameBorder=0;
iframe.width="240";
iframe.height="160";
iframe.id="randomid";

var gifPlace = document.getElementById("gif-place")
while (gifPlace.hasChildNodes()) {
gifPlace.removeChild(gifPlace.firstChild);
}

if(result_tax < 10) {
 //document.getElementById("gif-place").removeChild(iframe)
 iframe.setAttribute("src", 'https://giphy.com/embed/oYtVHSxngR3lC');
document.getElementById("gif-place").appendChild(iframe);
}
else if(result_tax >= 10 && result_tax < 20) {
 iframe.setAttribute("src", 'https://giphy.com/embed/3o7abBP0nMjrdIvaCY');
document.getElementById("gif-place").appendChild(iframe);
}
else if(result_tax >= 20 && result_tax < 40) {
 iframe.setAttribute("src", 'https://giphy.com/embed/gVE7nURcnD9bW');
document.getElementById("gif-place").appendChild(iframe);
}

else if(result_tax >= 40 && result_tax < 80) {
 iframe.setAttribute("src", 'https://giphy.com/embed/aWPGuTlDqq2yc');
document.getElementById("gif-place").appendChild(iframe);
}
else if(result_tax >= 80) {
 iframe.setAttribute("src", 'https://giphy.com/embed/wxw2e19ZMsjio');
document.getElementById("gif-place").appendChild(iframe);
}

}

function hideInfo(){

var  hideButton= document.getElementById('hideButton');
var  gif= document.getElementById('gif');

setTimeout (function(){
     hideButton.style.display ='none';
},3000);
setTimeout (function(){
     hideImage.style.display ='inline';
},3000);
}
