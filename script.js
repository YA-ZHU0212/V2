const output = document.getElementById("bootOutput");
const cursor = document.getElementById("cursor");
const bootBtn = document.getElementById("bootBtn");

const bootLines = [
    "BOOTING SYSTEM...",
    "CONNECTING SMART BRAIN...",
    "VERIFYING USER DATABASE...",
    "ACCESS GRANTED"
];

let lineIndex = 0;

function typeLine(text, callback){

    let i = 0;

    const timer = setInterval(()=>{

        output.innerHTML += text.charAt(i);

        i++;

        if(i >= text.length){

            clearInterval(timer);

            output.innerHTML += "\n> ";

            setTimeout(callback,500);

        }

    },40);

}

function nextLine(){

    if(lineIndex >= bootLines.length){

        cursor.style.display="none";

        bootBtn.classList.remove("hidden");

        setTimeout(()=>{

            bootBtn.classList.add("show");

        },50);

        return;

    }

    typeLine(bootLines[lineIndex],()=>{

        lineIndex++;

        nextLine();

    });

}

output.innerHTML="> ";

setTimeout(nextLine,800);
