// JavaScript source code

var editTitle = "";

var page = {
    prevpage: '',
    open: function (page) {
        if (page == this.prevpage) return false;     // предотвращаем повторное открытие уже открытой страницы
        switch (page) {       // выполняем нужный код при открытии страницы
            case 'main_menu':
                do_list();
                break;
            case 'add_menu':
                break;
            case 'view_menu':
                break;
        }

        if (document.getElementById(this.prevpage)) document.getElementById(this.prevpage).style.display = 'none';       // если какая-либо страница открыта, то прячем ее
        document.getElementById(page).style.display = 'block';      //открываем нужную страницу

        this.prevpage = page;
    }
}

document.addEventListener('DOMContentLoaded', ready, false);        // функция загрузки документа, срабатывает при прогрузке всей страницы (все элементы доступны)
function ready() {
    // вешаем тапы на все кнопки меню с классом go
    var go = document.getElementsByClassName('go'),
        goLength = go.length;
    for (var i = 0; i < goLength; i++) {
        new Tap(go[i]);
        go[i].addEventListener('tap', function (e) { e.preventDefault(); page.open(e.target.dataset['page']); }, false);
    }

    page.open('main_menu');      // при загрузке открываем нужную страницу
}

var storage = window['localStorage'];

function do_add() {
    event.preventDefault();
    var noteTitle = document.getElementById('title');
    var note = document.getElementById('note');
    var mark = document.getElementById('checkbox');
	var options = {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		timezone: 'UTC',
		hour: 'numeric',
		minute: 'numeric'
	};
    var currentDate = new Date().toLocaleString("ru", options);
	
    if (noteTitle.value === '') {
		noteTitle.focus();
        return;
    }
	
	var spanTitle = "";
	var spanDate = "<span class='noteDate'>" + currentDate + "</span>";
	var spanNote = "<span class='noteBody'>" + note.value + "</span>";
    
    if (mark.checked) {
		spanTitle = "<span style='color: red' class='noteTitle'>" + noteTitle.value + "</span> <br />";
    } else {
		spanTitle = "<span class='noteTitle'>" + noteTitle.value + "</span> <br />";
    }
	//по ключу (заголовок заметки) будем выдавать всю заметку
	storage.setItem("myTitle|" + noteTitle.value, spanTitle + spanDate + spanNote);
	
	do_cancel();
}

function do_cancel() {
    event.preventDefault();
    var noteTitle = document.getElementById('title');
    var note = document.getElementById('note');
    var mark = document.getElementById('checkbox');
	
	noteTitle.value = "";
    noteTitle.placeholder = "Title...";
	
	note.value = "";
    note.placeholder = "Text...";

    mark.checked = false;
	
	page.open('main_menu');
}

function do_delete() {
	var noteTitle = document.getElementById('title').value,
		key = 'myTitle|' + noteTitle;
	
	if (storage.getItem(key) !== null) storage.removeItem(key);
	do_cancel();
}

function do_list() {
    var key = "";
    var text = "";
	var noteTitle = "";
	var arrow = "";
	
    for (var i = 0; i < storage.length; i++) {
        key = storage.key(i);
        if (key.indexOf('myTitle|') !== -1) {
			//storage.removeItem(key);
			
			noteTitle = key.substring(8);
			
			arrow = "<div class='div_arr'>" +
						"<img class='arrow " + noteTitle + "' ontouchend='do_view();' src='img/rarr.png'>" +
					"</div>";
			
            text += "<div class='div_list'> <div class='list_item'>" +
				storage.getItem(key) + "</div>" + arrow + "</div>";
        } 
    }
    if (text === "")
        text = "<div style='text-align:center'>There are no notes...</ div>";
    document.getElementById('main_window').innerHTML = text;
}

function do_view(){
	document.body.ontouchend = 
		function(event){
			var targetClass = event.target.className;
			
			if (targetClass.indexOf('arrow') === -1) return; //нажатый элемент не стрелка - выходим
			
			var noteTitle = targetClass.substring(6);
			editTitle = noteTitle; // запоминаем просматриваемую заметку в глобальную переменную
			
			text = storage.getItem('myTitle|' + noteTitle);
			
			document.getElementById('view_window').innerHTML = text;
			
			page.open('view_menu');
		}
}

function do_edit() {
	var storageItem = storage.getItem('myTitle|' + editTitle);
	var noteTitle = editTitle;
	var note = storageItem.substring(storageItem.indexOf('noteBody') + 10, storageItem.length - 7);
	
	document.getElementById('title').value = noteTitle;
	document.getElementById('note').value = note;
	
	page.open('add_menu');
}

