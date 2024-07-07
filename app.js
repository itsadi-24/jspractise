// to append directly in body
// const body = document.body.append('hello');

// to append in a div in same way we can appwnd h1,span,etc
// const body = document.body;
// const div = document.createElement('div');
// div.innerText = 'hello';
// body.append(div);

// diff btw textContent,innerHTML,innerText
// const div = document.querySelector('div');
// console.log('1' + div.textContent); // prints the indentation
// console.log('2' + div.innerText); // prints only text
// console.log('3' + div.innerHTML); // prin6ts indentation,tags,text

//for rendering HTML inside we use innerHTML
const body = document.body.append();
const div = document.querySelector('div');
div.innerHTML = '<strong>Hello world 2</strong>';
body.append(div);
