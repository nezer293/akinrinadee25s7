/*
    Name: Ebenezer
    student num: 3939
    date: 9-7-2025
    decription :

 
 */

    console.log("my name is ebenezer");


    // let name = window.prompt("what is your name?");
    // window.alert("Hello " +name);

    function showGreetingMessage(){
            let name = window.prompt("what is your name?");
    window.alert("Hello " +name);
 
    }

   //showGreetingMessage();
   document.querySelector('#btn').addEventListener('click', showGreetingMessage);