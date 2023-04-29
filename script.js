var navBar = document.querySelector('.navbar');
navBar.style.visibility = 'hidden';


var listIcon = document.querySelector('.list-icon');
listIcon.addEventListener('click', (e) => {
    navBar.style.visibility = 'visible';
    listIcon.style.visibility = 'hidden';
    var pageFirst = document.querySelector('.container');
    pageFirst.addEventListener('click', (e) => {
        listIcon.style.visibility = 'visible';
        navBar.style.visibility = 'hidden';}
    );
    })

