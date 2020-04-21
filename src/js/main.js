var ad = document.createElement('div');
var img = document.createElement('img');
var btn = document.createElement('button');
var txt = document.createElement('p');


var body = document.querySelector('body');
var placeholder = document.querySelector('#ad');

txt.innerText = 'Мечтаете освоить новую профессию или прокачать навыки? Приходите в IT-Academy. Мы не продаем курсы. Мы продаем профессию! 20 различных программ.';
btn.innerText = 'click me!';
img.src = 'https://vignette1.wikia.nocookie.net/callofduty/images/d/d0/Elmo_150px.png/revision/latest?cb=20120118200227'

ad.classList.add('banner');

ad.appendChild(img);
ad.appendChild(txt);
ad.appendChild(btn);

body.replaceChild(ad, placeholder);

