function clock(){
    const fullDate= new Date();
    let hours = fullDate.getHours();
    let mins = fullDate.getMinutes();
    let secs = fullDate.getSeconds();

    function twoDigit(a){
      if (a<10) return "0"+a;
      return a;
    }
    document.getElementById("h").innerText = twoDigit(hours)+':';
    document.getElementById("m").innerText = twoDigit(mins)+':';
    document.getElementById("s").innerText = twoDigit(secs);
};

setInterval(clock, 100);