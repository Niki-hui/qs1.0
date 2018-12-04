import _ from 'lodash';
// import './style.css';
// import img from './beauty.jpg';
// import Data from './data.xml';

import printMe from './print.js';

function component() {
  var element = document.createElement('div');
  var btn = document.createElement('button');
  element.innerHTML = _.join(['Hello', 'webpack', 'GoodLuck'], '666');

  btn.innerHTML = 'Click me and check the console';
  btn.onclick = printMe;
  element.appendChild(btn);

  // element.classList.add('hello');

  // 将图片添加进现有的div中
  // var myImage = new Image();
  // myImage.src = img;
  // element.appendChild(myImage);

  // console.log(Data);

  return element;
}
document.body.appendChild(component());

if (module.hot) {
  module.hot.accept('./print.js', function() {
    console.log('Accepting the update printMe mopdule!');
    printMe();
  })
}