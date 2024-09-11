// acess body
let body = document.querySelector('body');
let modeOption = document.querySelector('#modeOption');
let footer = document.querySelector('footer');
// our sevice section heading acess
let heading = document.querySelector('.service-heading');
let serviceLine = document.querySelector('.services-line');
let footerA = document.querySelectorAll('.footerA')
// darkmode function
function darkmode() {
   
     body.style.backgroundColor = "black";
     body.style.color = "white";
     heading.style.color = "black";
     serviceLine.style.borderBottom = "2px solid white";
     footer.style.backgroundColor = "black";
     footerA.forEach(e => {
        e.style.color = "white";
     });
}

// crimsonMode function
function crimsonmode() {
    body.style.backgroundColor = "crimson";
     body.style.color = "white";
     footer.style.backgroundColor = "crimson";
     heading.style.color = "black";
}

// greenmode function
function greenmode() {
    body.style.backgroundColor = "#606c38";
    body.style.color = "white";
    footer.style.backgroundColor = "#606c38";
    heading.style.color = "black";
}

// yellowMode function
function yellowmode() {
    body.style.backgroundColor = "#ff9b54";
    body.style.color = "white";
    footer.style.backgroundColor = "#ff9b54";
}

function brownmode() {
    body.style.backgroundColor = "#a98467";
    body.style.color = "white";
    footer.style.backgroundColor = "#a98467";
}