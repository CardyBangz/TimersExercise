function Countdown(num){
    let timer= setInterval(function() {
        num -- ;
        if(num<=0){
            clearInterval(num);
            console.log('DONE!');
        }
        else {
            console.log(num);
        }
    
    }, 1000)

}