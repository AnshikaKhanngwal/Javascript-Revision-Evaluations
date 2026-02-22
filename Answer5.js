function startCountdown(second){
    let timeleft = second;

    const timer = setInterval(()=>{
        console.log(timeleft);
        
        timeleft--;
        
        if(timeleft<0){
            clearInterval(timer);
            console.log("Countdown Finished");
        }
    },1000);
}

