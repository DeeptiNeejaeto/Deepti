player1_name=localStorage.getItem("player_1");
player2_name=localStorage.getItem("player_2");

player1_score=0;
player2_score=0;

document.getElementById("score_name1").innerHTML=player1_name + ": " ;
document.getElementById("score_name2").innerHTML=player2_name + ": " ;

document.getElementById("score1").innerHTML=player1_score;
document.getElementById("score2").innerHTML=player2_score;

document.getElementById("player_question").innerHTML="Question : "+player1_name;
document.getElementById("player_question").innerHTML="Question : "+player2_name;