/**
 * Created by jalance on 17/4/9.
 */
function getImg(val) {
    var len=val.length;
    var images = "";
    for(var i=0;i<len;i++) {
        var num = val.substr(i, 1);
        switch (num) {
            case '0':
                images += "<img src='img/0.png'/>";
                break;
            case '1':
                images += "<img src='img/1.png'/>";
                break;
            case '2':
                images += "<img src='img/2.png'/>";
                break;
            case '3':
                images += "<img src='img/3.png'/>";
                break;
            case '4':
                images += "<img src='img/4.png'/>";
                break;
            case '5':
                images += "<img src='img/5.png'/>";
                break;
            case '6':
                images += "<img src='img/6.png'/>";
                break;
            case '7':
                images += "<img src='img/7.png'/>";
                break;
            case '8':
                images += "<img src='img/8.png'/>";
                break;
            case '9':
                images += "<img src='img/9.png'/>";
                break;
        }
    }
    return images;
}
function times() {
    var Odiv = document.getElementById('m');
    var date = new Date();
    var year = date.getFullYear() + "";
    var months = date.getMonth() + "";
    months = months < 10 ? '0' + months : months + "";
    var day = date.getDate();
    day = day < 10 ? '0' + day : day + "";
    var hours=date.getHours();
    hours = hours < 10 ? '0' + hours : hours + "";
    var minutes = date.getMinutes();
    minutes = minutes < 10 ? '0' + minutes : minutes + "";
    var secodes = date.getSeconds();
    secodes = secodes < 10 ? '0' + secodes : secodes + "";
    Odiv.innerHTML=getImg(year)+'年'+getImg(months)+'月'+getImg(day)+'日'
        +getImg(hours)+'时'+getImg(minutes)+'分'+getImg(secodes)+'秒';
}
var interval = 0;
function autoadd() {
    clearInterval(interval);
    interval = setInterval("times()", 1000);
}

