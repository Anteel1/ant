    // js loading trang
    var a =  document.getElementById("wrap"); 
    window.addEventListener("load",function(){
        a.style.display ="none";
    });
    // run text 
var text ="Chào mừng các bạn đã đến trang web";
var i = 0;
function typing(){
    if(i<text.length){
        document.getElementById("runtext").innerHTML+=text.charAt(i);
        i++;
        setTimeout(typing,500); 
    }
}
typing();