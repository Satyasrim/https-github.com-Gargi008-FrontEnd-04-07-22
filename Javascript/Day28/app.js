/* 

jQuery is a js library
lightweight
"write less do more"

the purpose the jQuery is to make it easeier to use JS on ur website


jQuery is taking  lots of common tasks that requires many lines of javascript code
//and wraps them into methods that u can call with a single line of code


jQuery can also simplify lots of the complicated things from javascript like animation , DOM manipulation , AJAX

$('selector').action()
*/



$(document).ready(function(){


    /* 
$('p').click(function(){
    console.log("my para is being shown -- element selector",this)
}) */
/* $('#para2').click(function(){
    console.log("id selector",this)
}) */
/* $('.para').click(function(){
    console.log("class selector",this)
}) */

/* 
$('*').hover(function(){
    console.log(`did u just hover on ${this} , how dare u!!!!`)
}) */
/* $('*').mouseenter(function(){
    console.log(`did u just use mouseenter event on  ${this} , how dare u!!!!`)
})
 */

//on method


$(".para").on({
    mouseover: function(){
        console.log("mouse over event")
    },
    dblclick: function(){
        console.log("double click event")

    }
})

})


