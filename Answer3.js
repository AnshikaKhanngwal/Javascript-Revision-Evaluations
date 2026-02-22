function customSetInterval(callback,delay){
    let timerId;

    function run(){
        callback();
        timerId = setTimeout(run,delay);
    }

    timerId = setTimeout(run, delay);
    return()=> clearTimeout(timerId)
}