let container = document.querySelector("#container");
let input = prompt("Enter grid size, default is 16", 16);
let dimension = parseInt(input);
let resetButton = document.getElementById("#reset")



function addDiv(dimension) {
    container.style.gridTemplateColumns = 'repeat(' + dimension + ', 1fr)';
    container.style.gridTemplateRows = 'repeat(' + dimension + ', 1fr)';

    for (let i = 1; i <= dimension*dimension; i++) {   
        const newDiv = document.createElement("div");
        newDiv.className = "box";
        container.appendChild(newDiv);
        newDiv.addEventListener('mouseover', colorBlack);
    }
}

    function colorBlack(e) {
        e.target.classList.add("black");
    }

addDiv(dimension);

let pageReset = function(){
    location.reload()};
  
  reset.addEventListener('click', pageReset);

let rainbowSwitch = document.getElementById("rainbowTiles");
let randomColor = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';


rainbowSwitch.addEventListener('click', pickColor);
let boxes = document.querySelectorAll(".box");

function pickColor () {
    
    boxes.forEach(cell => {
                cell.addEventListener('mouseover', (e) => {
                    let option = "0123456789ABCDEF";
                    let col = ""
                    for(let i = 0; i < 6; i++){
                        col += option[Math.floor(Math.random() * 16)]
                    }
                    let color = "#";
                    let value = color + col;
                    e.target.style.backgroundColor = value;
                });
            });
        }

blackTiles.addEventListener('click', pickBlack);

function pickBlack () {
    boxes.forEach(cell => {
        cell.addEventListener("mouseover", (e) => {
            e.target.style.backgroundColor = "black";
        });
    });
}

