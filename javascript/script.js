function showTime(){
    requestAnimationFrame(showTime);
    let date=new Date();
    let h=date.getHours();  //show hour in a clock
    let m=date.getMinutes(); //show minute in a clock
    let s=date.getSeconds();  //show second in a clock
    let session = "AM";
    if (h==0) {
        h=12;
    }
    if (h>12) {
        h=h-12;
        session = "PM";
    }
    h=(h<10)? "0" +h : h;
    m=(m<10)? "0" +m : m;
    s=(s<10)? "0" +s : s;

    let time= h + ":" + m + ":" + s +" " + session;

    document.getElementById("MyClockDisplay").innerText=time;
    document.getElementById("MyDisitalClock").textContent=time;
    setTimeout(showTime, 1000);
}
 showTime();
