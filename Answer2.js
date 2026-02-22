function createRateLimiter(limit,windowTime){
    let requestCount =0;
    let windowActive =false;

    return function (){
        if (!windowActive){
            windowActive =true;

            setTimeout(()=>{
                requestCount =0;
                windowActive = false;
            },windowTime)
        }
    }
}