function randomGame() {
    let num;
    let times=0;
    let timer= setInterval(function(){

    num=Math.random();
    times++
if (num> .75){
    clearInterval(timer);
    console.log("It took" + time + "try/tries");
}
} ,1000)

}