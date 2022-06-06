//does not create new vars when spelled wrong
'use strict';

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function(){
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

    const className = document.body.className;
    if(className == "light-theme"){
        this.textContent = "Close Tracker";
    }
    else{
        this.textContent = "Open Tracker";
    }

    console.log('current class name: ' + className);
});

