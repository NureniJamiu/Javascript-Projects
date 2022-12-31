const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let outputEl1 = document.getElementById("passwd-output1")
let outputEl2 = document.getElementById("passwd-output2")
let passwd1 = []
let passwd2 = []

function generate() {
    
    for (let i = 0; i < characters.length; i++) {
        let randPass1 = Math.floor(Math.random() * characters.length)
        let randPass2 = Math.floor(Math.random() * characters.length)
        
        passwd1.push(characters[randPass1])
        passwd2.push(characters[randPass2])
        
        if ( passwd1.length === 15 && passwd2.length === 15) {
            for ( let i = 0; i < passwd1.length; i++) {
                outputEl1.textContent += passwd1[i]
                outputEl2.textContent += passwd2[i]
            }
        } 
    }
}
