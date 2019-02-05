let time = 0;
let trivia = {
    form1 : 0,
    form2 : 0,
    points: 0,
    seconds: 1000,
}
let assess = function(){
    if ( trivia.form1 == 1){
        trivia.points++;
    } 
    if ( trivia.form2 == 1){
        trivia.points ++;
    } 
}
let count = function(){
    time ++;
    if(time == 5){
        clearInterval(intervalID);
        $("#display").text("time's up! You scored " + trivia.points + " points.");
    }
    else{
        $("#display").text(time);
    }

}
//on click function that returns form value
$('#select1').on('change', function(){
    trivia.form1 = $('#select1').val();
    console.log(trivia.form1);
});

$('#select2').on('change', function(){
    trivia.form2 = $('#select2').val()
    console.log(trivia.form2);
});
setTimeout(assess, 7*trivia.seconds)
intervalID = setInterval(count, 1000)
