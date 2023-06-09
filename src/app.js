const body = document.body

// boxes

var box1 = document.querySelector('.box1')

var box3 = document.querySelector('.box3')

var box2 = document.querySelector('.box2')

var box5 = document.querySelector('.box5')

var box4 = document.querySelector('.box4')

var box6 = document.querySelector('.box6')

var box7 = document.querySelector('.box7')

var box8 = document.querySelector('.box8')

// events

box1.addEventListener('click', () => {
   var alert1 = window.confirm('do you want to continue?')
   
   if(alert1) {
   // edit this 🙂
        window.location.href = "./Games/Blackjack/dist/index.html"
   }else {
       alert("could not continue")
   }
});
box2.addEventListener('click', () => {
    var alert2 = window.confirm('Do You Want To Continue?')
    
    if(alert2) {
    // edit this 🙂
         window.location.href = "./Games/Duck-hunt/dist/index.html"
    }else {
        alert('could not continue')
    }
    
});
box3.addEventListener('click', () => {
    var alert3 = confirm('Do You Want To Continue?')
    
    if(alert3) {
    // edit this 🙂
         window.location.href = "./Games/Hangman/dist/index.html"
    }else {
        alert('could not continue')
    }
});
box4.addEventListener('click', () => {
    var alert4 = confirm('Do You Want To Continue?')
    
    if(alert4) {
    // edit this 🙂
         window.location.href = "./Games/Sudoku/dist/index.html"
    }else {
        alert('could not continue')
    }
});
box5.addEventListener('click', () => {
    var alert5 = confirm('Do You Want To Continue?')
    
    if(alert5) {
    // edit this 🙂
         window.location.href = "./Games/Word Scrabble/index.html"
    }else {
        alert('could not continue')
    }
});
box6.addEventListener('click', () => {
    var alert6 = confirm('Do You Want To Continue?')
    
    if(alert6) {
    // edit this 🙂
         window.location.href = "./Games/Solitaire/dist/index.html"
    }else {
        alert('could not continue')
    }
});
box7.addEventListener('click', () => {

    var alert7 = confirm('Do You Want To Continue?')

    

    if(alert7) {

    // edit this 🙂

         window.location.href = "./Games/Quiz game/dist/index.html"

    }else {

        alert('could not continue')

    }

});
box8.addEventListener('click', () => {

    var alert8 = confirm('Do You Want To Continue?')

    

    if(alert8) {

    // edit this 🙂

         window.location.href = "./Games/Ludo/index.html"

    }else {

        alert('could not continue')

    }

});
// THIS IS THE HAMBURGER SECTION

const toggle = document.querySelector('#toggle');
const show = document.querySelector('.show');

toggle.onclick = () => {
    show.classList.toggle('hide')
};

console.log(innerWidth);

//nav onclick 🙂

const list1 = document.querySelector('#list1')
const list2 = document.querySelector('#list2')
const list3 = document.querySelector('#list3')
const list4 = document.querySelector('#list4')
const list5 = document.querySelector('#list5')
const list6 = document.querySelector('#list6')

list1.onclick = () => {
   const alert7 = confirm('Do You Want To Continue?')
    if(alert7) {
        window.location.href = "#"
    }else {
        alert('could not continue:(')
    }
};

list2.onclick = () => {
    const alert8 = confirm('would you like to continue?')
    
    if(alert8) {
        window.location.href = "https://coding-family-portfolio.netlify.app/"
    }else {
        alert('could not continue:(')
    }
};

list3.onclick = () => {
    const alert9 = confirm('would you like to continue?')
    
    if(alert9) {
        window.location.href = "index.html"
    }else {
        alert('could not continue:(')
    }
};

list4.onclick = () => {
     const jail = document.querySelector('.none')
     jail.classList.toggle('free')
};


list5.onclick = () => {
   const alert10 = confirm('Do You Want To Continue?')
   
   if(alert10) {
       body.style.backgroundColor ="#000"
       head.style.color ="#fff"
   }else {
       alert('Failed:(')
   }
};

list6.onclick = () => {
   const alert0 = confirm('Do You Want To Continue?')
   
   if(alert0) {
       body.style.backgroundColor ="#fff"
       head.style.color ="#000"
   }else {
       alert('Failed:(')
   }
       
};
