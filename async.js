const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Hi Adi');
  }, 5000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Hi Adi from 2nd promise');
  }, 10000);
});
// old traditional way to resolve a promise
// function getData() {
//   p.then((res) => console.log(res));
//   console.log('Your promise has been resolved');
// }
// getData();

// async await way
//await is always used inside async fn,cant be used separately
async function handlePromise() {
  console.log('this is above await');
  const data = await p;
  //if here in place of p there is p2 then p2 will resolve first then p will resolve
  //the handlePromise() will get out of call stack when it sees await so as to not block other functions,when its promise is resolved it will again come inside the call stack.
  //if p is not resolved it wont go to p2
  //interchange the intervals of timeout and u will understand
  console.log(data);
  console.log('Your promise has been resolved');

  const data2 = await p2;
  console.log(data2);
  console.log('Your 2nd promise has been resolved');
}
// handlePromise();

//fetch too returns promise so we use await before it
//fetch()=> Response
//we convert that to json using Response.json() which again is a promise so we use await

async function githubData() {
  const response = await fetch('https://api.github.com/users/itsadi-24');
  const data = await response.json();
  console.log(data);
}
githubData();
