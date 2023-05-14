const body = document.body

// boxes

var box1 = document.querySelector('.box1')

var box3 = document.querySelector('.box3')

var box2 = document.querySelector('.box2')

var box5 = document.querySelector('.box5')

var box4 = document.querySelector('.box4')

var box6 = document.querySelector('.box6')


// events

box1.addEventListener('click', () => {
   var alert1 = window.confirm('do you want to continue?')
   
   if(alert1) {
   // 
        window.location.href = "./Games/Blackjack/dist/index.html"
   }else {
       alert("could not continue")
   }
});
box2.addEventListener('click', () => {
    var alert2 = window.confirm('Do You Want To Continue?')
    
    if(alert2) {
    // 
         window.location.href = "./Games/Duck-hunt/dist/index.html"
    }else {
        alert('could not continue')
    }
});
box3.addEventListener('click', () => {
    var alert3 = confirm('Do You Want To Continue?')
    
    if(alert3) {
    // 
         window.location.href = "./Games/Hangman/dist/index.html"
    }else {
        alert('could not continue')
    }
});
box4.addEventListener('click', () => {
    var alert4 = confirm('Do You Want To Continue?')
    
    if(alert4) {
    //
         window.location.href = "./Games/Sudoku/dist/index.html"
    }else {
        alert('could not continue')
    }
});
box5.addEventListener('click', () => {
    var alert5 = confirm('Do You Want To Continue?')
    
    if(alert5) {
    // 
         window.location.href = "./Games/Word Scrabble/index.html"
    }else {
        alert('could not continue')
    }
});
box6.addEventListener('click', () => {
    var alert6 = confirm('Do You Want To Continue?')
    
    if(alert6) {
    // 
         window.location.href = "./Games/Solitaire/dist/index.html"
    }else {
        alert('could not continue')
    }
});


