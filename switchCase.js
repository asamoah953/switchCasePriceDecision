//asking user for prize input from 0 to 10;
let prize = prompt("enter price between 0 to 10\n");

//converting prize to Number;
let prizeEntered = Number(prize);

//variable holding message for the user selection
let selection = "My selection is:";

//the switch case to switch between the user input
switch(prizeEntered) {
    case 0:
        console.log(`${selection} ${prizeEntered} \n You have rewarded with a toffee`);
        break;
    case 1:
        console.log(`${selection} ${prizeEntered} \n You have rewarded with a ice cream`);
        break;
    case 2:
        console.log(`${selection} ${prizeEntered} \n You have rewarded with a Cake`);
        break;
    case 3:
        console.log(`${selection} ${prizeEntered} \n You have rewarded with a Bread and Egg`);
        break;
    case 4:
        console.log(`${selection} ${prizeEntered} \n You have rewarded with a Watch`);
        break;
    case 5:
        console.log(`${selection} ${prizeEntered} \n You have rewarded with a Android`);
        break;
    case 6:
        console.log(`${selection} ${prizeEntered} \n You have rewarded with a Samsung`);
        break;
    case 7:
        console.log(`${selection} ${prizeEntered} \n You have rewarded with a Iphone`);
        break;
    case 8:
        console.log(`${selection} ${prizeEntered} \n You have rewarded with a car`);
        break;
    case 0:
        console.log(`${selection} ${prizeEntered} \n You have rewarded with a jet`);
        break;{
            console.log("decision not availage now");
        }

    default:
}