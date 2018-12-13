//var t=alert("finek")
//var name=prompt("ahla bike")
//var a=confirm("jayy")
document.querySelector(".haja").style.backgroundColor ="yellow";
document.querySelector(".haja").style.fontSize="50px";

var button = document.getElementById('test');
var para = document.getElementById('para');

/*tton.addEventListener('click', function(){
    para.style.backgroundColor="yellow";
})*/
document.getElementById("img").setAttribute("src","res/image.jpg")
document.getElementById("self").innerHTML="i am here"
function youahh(){
    //alert('you ahh');
}
setTimeout(youahh,2000);
setInterval(youahh,100000)

//var mot = prompt('ecrire mot');

function hello(t){
    //alert(t);
}
hello('mot');

$("p").css("back-ground","yallow");

$("button").click(function(){
    $("h6").html("koli 3ada");
});

$('#mariem').click(function(){
    $('h6').css("background-color","pink");
});
$(function(){
    $("#demo").append("i wish i had one");

});
//.prepend //.after//.before
$("#toto").append("2");
$("#toto").prepend('3');
$(function(){
$("#lala").before("hi");
$("#lala").after("hola");})
$(function(){
    alert($("#kolo").css("background-color"));
    $("#kolo").css("background-color","pink")
});
    $("#opps").click(function(){
        $("#zizo").toggleClass("red");
    });
$("#btn").click(function(){
    $("#here").val("New Value");
});
//mafhemtech el val
$(function(){
    $("#demo").click(function(){
        $("body").html(Date());
    });
});
//$("#kolo").click(function(){
//alert("clicked!");
//});
$("#kolo").trigger("click");
$(function(){
    $("#jojo").click(function(){
        $("#submenu").slideToggle(1000);
    });
});
function myfunction(){
document.getElementById("bobo").style.frontsize="35px"}//mahabech ye5dem

var price1 = 5;
var price2 = 6;
var total = price1 + price2;
document.getElementById("bflo").innerHTML =
"The total is: " + total;

x = 5 + 2 + 3;
document.getElementById("mo").innerHTML = x;//ken nektbo "5"+2+3=523  wo ken nektbo 2+3+"5"=55
var cars = ["Saab","Volvo","BMW"];

document.getElementById("hay").innerHTML = cars[0];//ti nektbo 0 no9sdo saab   ou 1  volvo  ou2 bmw

var person = {
  firstName : "John",
    lastName  : "Doe",
    age     : 50,
    eyeColor  : "blue"}

document.getElementById("zeze").innerHTML =
person.firstName + " is " + person.age + " years old."

function myFunction(p1, p2) {
    return p1+ p2;
  }
  document.getElementById("b").innerHTML = myFunction(4, 3);//enatija 12 

  var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
document.getElementById("demo").innerHTML = txt.length;//bech ijima  3dad el 5orof

var cars = ["Saab", "Volvo", "BMW"];
cars[0] = "Opel";
document.getElementById("demo").innerHTML = cars;//3oth mayekteb saab kteb opel
