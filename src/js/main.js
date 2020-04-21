var opener = document.querySelector('.burger-opener');
var menu = document.querySelector('.main-menu');

function clickHandler(event) {
   console.log('Opener was clicked');
   menu.classList.toggle('is-active');
}

opener.addEventListener('click', clickHandler);


var ul = document.createElement('ul');
var li1 = document.createElement('li');
var li2 = document.createElement('li');

ul.append(li1, li2);

var parent = document.querySelector('body');

parent.appendCild(node);