// Code your solutions in this file
function writeCards(names, eventName) {
    const thankYouMessages = [];
  
    for (let i = 0; i < names.length; i++) {
      const message = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`;
      thankYouMessages.push(message);
    }
  
    return thankYouMessages;
}
const namesArray = ["Guadalupe", "Ollie", "Aki"];
const eventName = "the birthday party";
const thankYouMessages = writeCards(namesArray, eventName);

console.log(thankYouMessages);


function countDown(number){
    let i = number;
    while(i>=0){
        console.log(i);
        i--;
    }
    return number;
}
countDown(10);
  

  
