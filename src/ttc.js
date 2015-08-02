var ttcReq, ttcData, ttcTimer;
function ttcGetXmlHttp(){var xmlhttp;try{xmlhttp=new ActiveXObject("Msxml2.XMLHTTP");}catch(e){try{xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");}catch(E){xmlhttp=false;}}if(!xmlhttp&&typeof XMLHttpRequest!='undefined'){xmlhttp=new XMLHttpRequest();}return xmlhttp;}
function sendData(){
    ttcReq.open('POST', 'http://mobile_game.ittop.mobi/apps/spenttime.php', true);
    ttcReq.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    ttcReq.send(ttcData);
}
document.addEventListener("DOMContentLoaded", function(){
    ttcTimer = false;
    var ttc_bundle = document.title.split(';')[3],
        ttc_name = document.title.split(';')[0],
        ttc_market = document.title.split(';')[2],
        ttc_product_id = document.title.split(';')[4],
        ttc_developer = "WEB",
        ttc_time = "10",
        ttc_uid = "";
    if(window.localStorage.getItem('ttcuid')){ttc_uid = window.localStorage.getItem('ttcuid');}else{ttc_uid = '_'+(Math.floor(Math.random()*(99999999-10000000+1))+10000000);window.localStorage.setItem('ttcuid', ttc_uid);}
    ttcData = 'bundle='+ttc_bundle+'&name='+ttc_name+'&market='+ttc_market+'&developer='+ttc_developer+'&time='+ttc_time+'&uid='+ttc_uid+'&product_id='+ttc_product_id;
    ttcReq = ttcGetXmlHttp();    
    ttcReq.open('POST', 'http://mobile_game.ittop.mobi/apps/spenttime.php', true);
    ttcReq.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    ttcReq.send('bundle='+ttc_bundle+'&name='+ttc_name+'&market='+ttc_market+'&developer='+ttc_developer+'&time=5&uid='+ttc_uid+'&product_id='+ttc_product_id);
    if(ttcTimer == false) ttcTimer = setInterval(sendData, 10*1000);
}, false);
window.addEventListener("blur", function(e){
    clearInterval(ttcTimer);
    ttcTimer = false;
}, true);
window.addEventListener("focus", function(e){
    if(ttcTimer == false) ttcTimer = setInterval(sendData, 10*1000);
}, true);