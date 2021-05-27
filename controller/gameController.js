const  Tambola  = require('tambola-generator');
const User = require('../module/User')

exports.creategame = async (req,res) => {
// take a 2d matrix [board] with empty values (9 rows and 10 columns), take an empty array [arr]
// take first element of matrix and replace with it any number between 1 to 90 and save it in the [arr]
// now for a new one, generate new random number, if it is not in the arr then go ahead else generate new random number
// and return gameId ;   
}

exports.createTicket = async(req,res) =>{
   // Create ticket for every users
   Tambola.getTickets(100) //This generates 100 tambola tickets
   Tambola.getDrawSequence() //Returns numbers 1-90 scrambled

   // this method return ticket for every uesrs;
}

exports.printTambolaTicket= async(req,res)=>{
 //  take a 2d matrix [board] with empty values (9 rows and 10 columns)
 // show timbola ticket
}

exports.randomNumber = async(req,res) =>{
   // 9*10 matrix me pick a random coordinate, extract the number and show the number
}