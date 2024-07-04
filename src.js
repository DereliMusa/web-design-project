function greetUser() {
    var name = document.getElementById('name').value;
    var container = document.querySelector('.container');
    var wrapper = document.getElementById('welcome');
    if (name.trim() !== '') {
        //alert("Welcome " + name);
        container.style.display = 'none';
        wrapper.innerHTML = "<h1>Hoşgeldiniz " + name + "</h1>";
    } else {
        alert("Lütfen bir isim girin.");
    }
}


function loadPage(pageName) {
    var contentDiv = document.querySelector('.content');
    var pageUrl = pageName + '.html'; 

    fetch(pageUrl)
        .then(response => response.text())
        .then(html => {
            contentDiv.innerHTML = html; 
            setActiveButton(pageName)
        })
        .catch(error => {
            console.error('Sayfa yüklenirken bir hata oluştu: ', error);
        });
}

function setActiveButton(activePage) {
    var buttons = document.querySelectorAll('.but button');
    buttons.forEach(button => {
        button.style.backgroundColor = ''; 
        button.style.color = ''; 
    });

    var activeButton = document.querySelector('.' + activePage + ' button');
    activeButton.style.backgroundColor = 'white'; 
    activeButton.style.color = 'blue'; 
}