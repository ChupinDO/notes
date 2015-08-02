function getXmlHttp(){var xmlhttp;try{xmlhttp=new ActiveXObject("Msxml2.XMLHTTP");}catch(e){try{xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");}catch(E){xmlhttp=false;}}if(!xmlhttp&&typeof XMLHttpRequest!='undefined'){xmlhttp=new XMLHttpRequest();}return xmlhttp;}
var thumbdown = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OEQ2NjY0NTQ4MjNEMTFFMzkzODBFNUM2QTE2M0FEM0UiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OEQ2NjY0NTU4MjNEMTFFMzkzODBFNUM2QTE2M0FEM0UiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4RDY2NjQ1MjgyM0QxMUUzOTM4MEU1QzZBMTYzQUQzRSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo4RDY2NjQ1MzgyM0QxMUUzOTM4MEU1QzZBMTYzQUQzRSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PltEHCgAAANsSURBVHja7JnNbtNAEMfXTtrGjQCHuiEXaJCKWtRDoooTkquKI6eIFyA8AXkEeALoiRsEpIobQogHSBOJAwKUIlUCqYJUvaAqIulHmpa6NjNlHbau6QdxKteekVZe2+u19+fd/87sSpZlsTCbzEJuBIAAEAACQAAIAAEgAASAABAAAkAAwmhRLyqRJInput45r1QqruWgzAgc0pCykFR+Oc0TWhNS1ZGvQn2rYj1ermFIXlTGATyCbMHRCNHERp/UapBKkIoAY86vAI6sKFPfPHBNlY2mtruzg/mNSET6YfZrzjLz2uC+R8rl8qqvhoDYwJuba40Vpc9w3ku2d6LamhHTGobiZHBYnfVEtD1qtTcWJWWYw8jDYcaXANDGl7YS42zLs/oQ2FRjXZli6+zp9SQT9IJmgVAB+DISawiCGD4AG32RXWF6DB+AG4stTfAbwgdgU5GNUGvAh5F4g/sD1XAOgaVWgjtSOd/FAuAF3rXzfK5mA/Jue2x7qzX5rTUkm0zq9h2DbTPaCw3wyhFSXVxW5T07p3zui7OU/Kt+e6GpdTUERuN19IsgvfYjgKJjbE7zP5UDKCqrs64ab8rMApAa1FXj7/JfMIT2iV3ed/2+nr6A87YdI6Cb/L/veDE2vPIxGU9CNCh5GQ32VARnKjWM2oo4NN4Nnk+c5I9jEGSnPx9qtXy7IHKEFbhyq68mLjbvLPxUD2t4cSyJ3UkCaEonhE7t3b7qtRd4KtMg7wWoBaxpRlUuZu5CAo3HcqKY2uf8WuFMOkIAYQ4/HhuBYrZ8qX/dLe4XTlHpVXhOwsRFNQv5515/W09F0Gkgis/gkMdunf+6Yon+AUZ7T66kbJ2Y5tAO2CRbZmdGBF16wj04lLAn8LH+d+FjzYi5LZkFcT0gZ8f0sxNDbXHlRyiTDSwALop57AXbZkT5hyjmgtwDbFEs2qLY8adloxn4HiDYYztjzwoxZhpibBFoANAL5u15/ntiYG8ZWdgTKAUeAEyJmU6oa5jOcLkaaAA8SOpEdY3t6JuX17QFt+HRa/M0FkAn5VgLKCxdEIXubTpxS1joeAAR39JkwIeAM6ixG4+bnw9P80M8dYVPYrquZ/h8n+VjvoQ7v8d51ne7w2fZaG+QABAAAkAACAABIAAEgAAQAAJAAAhACO23AAMAZgo7z2dvQMQAAAAASUVORK5CYII=';
var thumbup = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTNDM0Y4NDI4MjNEMTFFM0I0QTZEMjk3QzE3OURDNkQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTNDM0Y4NDM4MjNEMTFFM0I0QTZEMjk3QzE3OURDNkQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5M0MzRjg0MDgyM0QxMUUzQjRBNkQyOTdDMTc5REM2RCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5M0MzRjg0MTgyM0QxMUUzQjRBNkQyOTdDMTc5REM2RCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PhIpm54AAAODSURBVHja7JpLTxNRFIDvPNpaKm0NSqSgrRt8LKRhIUZsZMHCpTFRt/gLitHElZGdS+EXiP/AxIUuXJQUNT5CimxUUOuDRxQCpVQtdHo9Z3KH3PShLZnidOaeZHrPPDv3u/ece85pJUopcbLIxOEiAAgAAoAAIAAIAAKAACAACAACgAAgADhRVDMeIklS3ffEYrEeaC7AFoUtBVsimUxO1HKvmTUMyYyH1QsAOh+HZrTCqXGAcHU3AfwvEwiW7KdZOwRwbjvBB4yyac/vJ5g+AhDCu/Ui5pvA1GBtZhDP9xgQls4oLz5cVPf138h3G0CSY55rZTf1PrGNCRDo4LShu7LUU3SRbu501PbLIJsBuqwekzPYrkfkd+zQgBPigGFD+dGr6E7RtUF97NCarQHA6J9Dj2/Yf6GF6LPBu0y72CUp2wKAzgdwvUcdOp6ZvayeQN2zSl9ylz2w8wzAzkVQeXXLkyYSaUW99TP9xV1jzxkAo3/PcHBTN91PjamP4lssKrZOhqDzccPu5y6pE7mQ1M+fz3XIGu8gmals+wx+1Wi6QIg5vYTh9GavqH1lI7FF3nOBUDUZglzhflMFQmwkdaf2a7/0zXB6pYKBEJpFDSG09dLhGl5aX+dT190r4PS6ql2IZjF517PQskQ/eb/TgnE8G5a8p0Y23Y2IENVdGH3d7r+cVybB6Z39Z6orkxCAwI07SLLwuWLZgghkb4Ht0YnnjVA2wgoeuiydVtw7fb5vkb6BBp1mmn1XxmozYOhv9okxfj4oHd/pw3Md0kl0ngefaX3su8asBqAsdscobzmqvF2IKYXSJa/+ZYa0wtJ5CAAQNqusBQCXJpiaenj7/I5nWttDDqAtw26fWS/q/1icgybEVY+s6QT56M5M6Uxo/kbkCU1TFp8fUNYbUSxpGgC5kBywW0GkLjnysPCbqWlHAtj0ky2mBh0J4Oug2s7UiCMBNEpMXwbDjwqTvnm6t8yJdUobmPOvdctBLk6oPjKQHrs26BpWitpfa4G2mWK0ET7AdACHH2sVE562GfzUyo5jivyzQ1pG3ZUlXn+6eJSdqlYbGLcqAMwFhllYXKmmF63kwLASzFWDq0maFVTwx9OMmQBMqwhBKMyHxtWyxjBzYjyMCOfYeHiGnirttOV+Hm9mEX+REQAEAAFAABAABAABQAAQAAQAAUAAEAAcKH8EGAB1VicXxa2IQAAAAABJRU5ErkJggg==';

var Support = {
    button_id: null,
    maindiv: null,
    imgs: null,
    ln: "en",
    rating: "plus",
    lang: {
		ru: {title: "Введите текст", ok: "Отправить", close: "Закрыть", wait: "Подождите...", thanks: "Спасибо" },
        ch: {title: "输入你的信息", ok: "反应 ", close: "关闭 ", wait: "请稍等...", thanks: "谢谢" },
        de: {title: "tippen Sie Ihre Nachricht", ok: "senden", close: "schließen", wait: "Bitte warten Sie ...", thanks: "Vielen Dank" },
        en: {title: "Type your message", ok: "Send", close: "Close", wait: "Please wait...", thanks: "Thank you" },
        es: {title: "Escriba su mensaje", ok: "Enviar", close: "Cerrar", wait: "Por favor, espere ...", thanks: "Gracias" },
        fr: {title: "Tapez votre message", ok:"Envoyer ", close:"proche", wait:"Veuillez attendre...", thanks: "Merci" },
        it: {title: "Scrivi il messaggio", ok: "Invia", close:"Chiudi", wait:"Attendere prego ...", thanks:"Grazie" },
        jp: {title: "メセージを書き入れてください", ok: "送る", close: "閉める", wait: "少々お待ちください", thanks: "ありがとうございます" },
        kr: {title:"앱에게 점수를 주세요", ok:"네 ", close:"닫기 ", wait:"기다려 주세요", thanks:"감사합니다" },
        po: {title: "Escrever mensagem", ok: "Envio", close: "Fechar", wait: "Aguarde por favor", thanks: "Obrigado" },
        
        pt: {title: "Type your message", ok: "Send", close: "Close", wait: "Please wait...", thanks: "Thank you" },
        ko: {title: "메시지를 입력하세요", ok: "보냅니다", close: "닫힙니다", wait: "기다려 주세요", thanks: "감사합니다" }
    },
    init: function(but_id, lang){
        Support.ln = lang || "en";

        //document.getElementById(but_id).innerText = this.lang[Rate.ln].title;
        
        Support.maindiv = document.createElement('DIV');
        Support.maindiv.id = "it_wrap_support";
        Support.maindiv.innerHTML = '<div><h3>'+Support.lang[Support.ln].title+'</h3><img id="support_minus" src="'+thumbdown+'" /><img id="support_plus" src="'+thumbup+'" /><textarea id="supporttext"></textarea><a href="#" id="support_ok">'+Support.lang[Support.ln].ok+'</a><a href="#" id="support_cancel">'+Support.lang[Support.ln].close+'</a></div>';
        '<div><h3>'+Support.lang[Support.ln].title+'</h3><img id="itr1" src="'+thumbdown+'" /><img id="itr2" src="'+thumbdown+'" /><img id="itr3" src="'+thumbdown+'" /><img id="itr4" src="'+thumbdown+'" /><img id="itr5" src="'+thumbdown+'" /><a href="#" id="rating_ok">'+Support.lang[Support.ln].ok+'</a><a href="#" id="rating_cancel">'+Support.lang[Support.ln].close+'</a></div>';
        Support.maindiv.style.display = "none";
        document.body.appendChild(Support.maindiv);
        
        Support.imgs = document.querySelectorAll('#it_wrap_support img');
        
        Support.button_id = but_id;
        
        Support.maindiv.addEventListener("touchstart", Support.select, false);
        Support.maindiv.addEventListener("touchmove", function(e){e.preventDefault();}, false);
        
        document.getElementById(Support.button_id).addEventListener("touchend", function(e){ Support.open(e); }, false);
        document.getElementById("support_ok").addEventListener("touchend", Support.send, false);
        document.getElementById("support_cancel").addEventListener("touchend", Support.close, false);
        
        document.getElementById("support_minus").style.opacity = ".2";
        document.getElementById("support_plus").style.opacity = "1";
    },
    open: function(e){
        e.preventDefault();
        Support.maindiv.style.display = "block";
        Support.maindiv.style.top = document.body.scrollTop+"px";
    },
    close: function(e){
        e.preventDefault();
        Support.maindiv.style.display = "none";
    },
    select: function(e){
        if(e.target.tagName=="IMG"){
            Support.rating = e.target.id.replace('support_','');
            
            document.getElementById("support_minus").style.opacity = ".2";
            document.getElementById("support_plus").style.opacity = ".2";
            
            e.target.style.opacity = "1";
            console.log(Support.rating);
        }
    },
    send: function(e){
        e.preventDefault();
        var stext = document.getElementById("supporttext");
        if(stext.value.trim()==""){
            stext.focus();
            return;
        }
        Support.maindiv.removeEventListener("touchstart", Support.select);
        document.getElementById("support_ok").removeEventListener("touchend", Support.send);
        
        var req = getXmlHttp();
        var statusElem = document.getElementById("support_ok"); 
        
        req.onreadystatechange = function(){
            if(req.readyState == 4){
                statusElem.innerHTML = req.statusText;
                if(req.status == 200){
                    statusElem.innerHTML = Support.lang[Support.ln].thanks; //+"|"+req.responseText;
                }
            }
        }
        
        var postData = 'app_name='+document.title.split(';')[0]+'&acc_name='+document.title.split(';')[1]+'&rate='+Support.rating+'&message='+document.getElementById("supporttext").value;
        req.open('POST', 'http://mobile_game.ittop.mobi/apps/feedback.php', true);
        req.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        req.send(postData);
        
        statusElem.innerHTML = Support.lang[Support.ln].wait;
    }
}