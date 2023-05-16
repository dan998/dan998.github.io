// media queries 😂

const span1 = document.querySelector('.span1');
const span2 = document.querySelector('.span2');
const span3 = document.querySelector('.span3');
const box0 = document.querySelector('#box0');
const box$ = document.querySelector('#box2')
const head = document.querySelector('#head');
const big = document.querySelector('#big');
const big2 = document.querySelector('.big');
const card = document.querySelector(".card");
const footer = document.querySelector("#foot")


if(innerWidth >= 768) {
    big.style.fontSize = "90px"
    big2.style.borderBottom = "4px solid firebrick"
    big2.style.height = "125px"
    span1.style.width = '70px'
    span2.style.width = "70px"
    span3.style.width = "70px"
    head.style.marginTop = "200px"
    head.style.fontSize = "60px"
    box0.style.marginLeft = "20px"
    box$.style.marginRight = "20px"
    span1.style.height = '10px'
    footer.style.fontSize = "55px"
    span2.style.height = '10px'
    span3.style.height = '10px'
    span1.style.transform = "translateY(-19px)"
    span3.style.transform = "translateY(19px)"
    toggle.style.transform = "translateY(20px)"
    
}else {
    console.log(innerWidth);
    big2.style.borderBottom = "4px solid firebrick"

};

if(innerWidth >= 600) {
    card.style.background = "#000"
    card.style.height ="500px"
    card.style.scrollSnapType = 'x'
    card.style.overflowX = "auto"
    card.style.display = "flex"
}else {
    console.log("Coding family".toUpperCase());
};

/* NAV ONLY */

if(innerWidth >= 768) {
    show.style.textAlign = "left"
    show.style.padding = "20px"
    show.style.backgroundColor = "#000"
    show.style.borderBottom = "4px solid firebrick"
    
}else {
    console.log("Coding family".toUpperCase());
    show.style.textAlign = "left"
    show.style.backgroundColor = "#000"
    show.style.borderBottom = "4px solid firebrick "
};

if(innerWidth >= 768) {
    list5.onclick = () => {
   const alert9 = confirm('Do You Want To Continue?')
   alert9 ?  card.style.backgroundColor = "#444": console.log("coding family".toUpperCase());
};
}else {
    console.log("codung family".toUpperCase());
}
