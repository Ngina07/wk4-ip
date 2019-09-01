//  Toggle to order section
$(document).ready(function () {
    $("#tablehead").click(function () {
        $(this).next("div").slideToggle("slow");
    });
});

// validate ordering forms and toppings' radios

var price, crust_price, topping_price;
let total = 0;
function Getpizza(type, size, crust, topping, total) {
    this.type = type;
    this.size = size;
    this.crust = crust;
    this.topping = topping;
    this.total = total;
}
$(document).ready(function () {
    $("button#continue").click(function (event) {
        let psize = $("#size option:selected").val();
        let pcrust = $("#crust option:selected").val();
        let ptopping = [];
        $.each($("input[name='toppings']:checked"), function () {
            ptopping.push($(this).val());
        });
        console.log(ptopping.join(", "));
        switch (psize) {
            case "Large":
                price = 1000;
                alert(price);
                break;
            case "Medium":
                price = 800;
                alert(price);
                break;
            case "Small":
                price = 600;
                console.log(price);
            default:
                alert("error");
        }
        switch (pcrust) {
            case "Regular":
                crust_price = 100;
                break;
            case "Crispy":
                crust_price = 150;
                break;
            case "Gluten-free":
                crust_price = 200;
                break;
            case "Stuffed":
                crust_price = 250;
                break;

            default:
                alert("No price");
        }
        let topping_value = ptopping.length * 70;
        alert("toppings value" + topping_value);
        total = price + crust_price + topping_value;
        alert(total);
        let completeTotal = 0;
        completeTotal = completeTotal + total;
        $("#pizzatype").innerHTML($("#type option:selected").val());
        $("#pizzasize").innerHTML($("#size option:selected").val());
        $("#pizzacrust").innerHTML($("#crust option:selected").val());
        $("#pizzatopping").innerHTML(ptopping.join(", "));
        $("#totals").innerHTML(total);

        // To enable user to add pizza

        $("button.add-pizza").click(function () {
            let ptype = $("#type option:selected").val();
            let psize = $("#size option:selected").val();
            let pcrust = $("#crust option:selected").val();
            let ptopping = [];
            $.each($("input[name='toppings']:checked"), function () {
                ptopping.push($(this).val());
            });
            console.log(ptopping.join(", "));
            switch (psize) {
                case "Large":
                    price = 1000;
                    alert("The price is " + price);
                    break;
                case "Medium":
                    price = 800;
                    alert("The price is " + price);
                    break;
                case "Small":
                    price = 600;
                    alert("The price is " + price);
                default:
                    alert("error");
            }
            switch (pcrust) {
                case "Regular":
                    crust_price = 100;
                    break;
                case "Crispy":
                    crust_price = 150;
                    break;
                case "Gluten-free":
                    crust_price = 200;
                    break;
                case "Stuffed":
                    crust_price = 250;
                    break;
                default:
                    alert("No price");
            }
            let topping_value = ptopping.length * 70;
            alert("The toppings selected add up to " + topping_value);
            total = price + crust_price + topping_value;
            alert(total);
            completeTotal = completeTotal + total;
            alert(completeTotal);

            var newOrder = new Getpizza(ptype, psize, pcrust, ptopping, total);
            $("#inputorder").append('<tr><td id="pizzatype">' + newOrder.type + '</td><td id="pizzasize">' + newOrder.size + '</td><td id="pizzacrust">' + newOrder.crust + '</td><td id="pizzatopping">' + newOrder.topping + '</td><td id="total">' + newOrder.total + '</td></tr>');
            alert(newOrder);


        });

//         $("button#complete").click(function () {
//             $("button#complete").hide();
//             $("button.add-pizza").hide();
//             $("button.deliver").slideDown(1000);
//             $("#plusdelivery").slideDown(1000);
//             console.log("Your total bill is Kshs. " + completeTotal);
//             $("#pizzatotal").append("Your bill is sh. " + completeTotal);
//         });
//         $("button.deliver").click(function () {
//             $(".table").hide();
//             $(".choice h2").hide();
//             $(".delivery").slideDown(1000);
//             $("#plusdelivery").hide();
//             $("button.deliver").hide();
//             $("#pizzatotal").hide();
//             let deliveryamount = completeTotal + 200;
//             console.log("You will pay Ksh. " + deliveryamount + " on delivery");
//             $("#totalbill").append("Your total is: " + deliveryamount);
//         });
//         $("button#final-order").click(function (event) {
//             event.preventDefault();
//             $("#pizzatotal").hide();
//             $(".delivery").hide();
//             $("button#final-order").hide();
//             let deliveryamount = completeTotal + 200;
//             console.log("Your final bill is Kshs. " + deliveryamount);
//             let person = $("input#name").val();
//             let phone = $("input#phone").val();
//             let location = $("input#location").val();
//             if ($("input#name").val() && $("input#phone").val() && $("input#location").val() != "") {

//                 $("#finalmessage").append(person + ", We have recieved your order. It will be delivered to " + location + ". Make sure you have Ksh. " + deliveryamount);
//                 $("#totalamount").hide();
//                 $("#finalmessage").slideDown(1200);
//             }
//             else {
//                 alert("Please fill in the delivery details and try again.");
//                 $(".delivery").show();
//                 $("button#final-order").show();
//             }
//         });
//         event.preventDefault();
//     });
// });