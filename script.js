const toggle_btn = document.querySelector('#checkbox')

toggle_btn.addEventListener('change', ()=>{
if(toggle_btn.checked){
    document.body.classList.add('dark-mode')
    console.log("Checked")
}
else{
    document.body.classList.remove('dark-mode')
    console.log("Unchecked")
}
});

let btn = document.getElementById("btn")
let output = document.getElementById("output")

let number = [Math.floor(Math.random() * 100)]

btn.addEventListener('click', function(){
    let input = document.getElementById("userInput").value;
    let gif = document.getElementById("gif")

    if(input == number){
        output.innerHTML = `You Guessed Correct Number`
        gif.innerHTML = `<img src="4A5.gif" alt="firework" id="gif">`
    }
    else if(input > number){
        output.innerHTML = `You Guessed too High`
    }
    else if(input < number){
        output.innerHTML = `You Guessed too Low`
    }
    else{
        output.innerHTML = `Please Enter a Number Between 1 to 100`
    }
});




