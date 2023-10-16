// // console.log('person1: shows ticket');
// // console.log('person2: shows ticket');

// // const promiseWifeBringingTickets = new Promise((resolve,reject)=>{
// //     setTimeout(() => {
// //         resolve('ticket');
// //     }, 3000)
// // })          // doesn't wait for anything async

// // promiseWifeBringingTickets.then((t)=>{
// //     console.log(`person3: shows ${t}`);
// // })

// // console.log('person4: shows ticket');
// // console.log('person5: shows ticket');













// // more complex

// // console.log('person1: shows ticket');
// // console.log('person2: shows ticket');

// // const promiseWifeBringingTickets = new Promise((resolve,reject)=>{
// //     setTimeout(() => {
// //         resolve('ticket');
// //     }, 3000)
// // })          // doesn't wait for anything async

// // const getPopcorn = promiseWifeBringingTickets.then((t)=>{
// //     console.log('husband: we should go in');
// //     console.log('wife: no i am hungry')
// //     return new Promise((resolve,reject) => resolve(`${t} popcorn`));
// // })

// // getPopcorn.then((t)=>console.log(t))

// // console.log('person4: shows ticket');
// // console.log('person5: shows ticket');









// // bit more complex


// console.log('person1: shows ticket');
// console.log('person2: shows ticket');

// const promiseWifeBringingTickets = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve('ticket');
//     }, 3000)
// })          // doesn't wait for anything async

// const getPopcorn = promiseWifeBringingTickets.then((t)=>{
//     console.log('wife: i have the tickets');
//     console.log('husband: we should go in');
//     console.log('wife: no i am hungry')
//     return new Promise((resolve,reject) => resolve(`${t} popcorn`));
// })

// const getButter = getPopcorn.then((t)=>{
//     console.log('husband: i got some popcorn');
//     console.log('husband: we should go in');
//     console.log('wife: i need butter on my popcorn')
//     return new Promise((resolve,reject) => resolve(`${t} butter`));
// })

// getButter.then((t)=>console.log(t))

// console.log('person4: shows ticket');
// console.log('person5: shows ticket');



// // order 
// // get ticket -> get pop corn -> get butter  (we can not put between then it looks ugly)
// //  we can fix it with async await




























// // everything we did we gonna put into separate function

// console.log('person1: shows ticket');
// console.log('person2: shows ticket');

// // unlike regular function async always returns a promise
// const preMovie = async() => 'preMovie';

// preMovie().then((m) => console.log(m));


// console.log('person4: shows ticket');
// console.log('person5: shows ticket');










// console.log('person1: shows ticket');
// console.log('person2: shows ticket');

// // unlike regular function async always returns a promise
// const preMovie = async() => {


//     const promiseWifeBringingTickets = new Promise((resolve,reject)=>{
//         setTimeout(() => resolve('ticket'), 3000);
//     })    

//     const getPopcorn =  new Promise((resolve,reject) => resolve(`popcorn`));
  
//     const getButter = new Promise((resolve,reject) => resolve(`butter`));



//     let ticket =  await promiseWifeBringingTickets;   // get resolved thing

//     console.log(`wife: i have the ${ticket}`);
//     console.log('husband: we should go in');
//     console.log('wife: no i am hungry')

//     let popcorn = await getPopcorn;

//     console.log(`husband: i got some ${popcorn}`);
//     console.log('husband: we should go in');
//     console.log('wife: i need butter on my popcorn')

//     let butter = await getButter;

//     console.log(`husband: i got some ${butter} on popcorn`);
//     console.log(`husband: anything else darling?`);
//     console.log(`wife: lets go we are getting late`);
//     console.log(`husband: thank you for the reminder *grins*`);




//     return ticket;

// }


// preMovie().then((m) => console.log(`person3: shows ${m}`));


// console.log('person4: shows ticket');
// console.log('person5: shows ticket');








// // this looks like synchronous code in an ansynchronous form because it's wait




















console.log('person1: shows ticket');
console.log('person2: shows ticket');

// unlike regular function async always returns a promise
const preMovie = async() => {


    const promiseWifeBringingTickets = new Promise((resolve,reject)=>{
        setTimeout(() => resolve('ticket'), 3000);
    })    

    const getPopcorn =  new Promise((resolve,reject) => resolve(`popcorn`));
  
    const getButter = new Promise((resolve,reject) => resolve(`butter`));

    const getColdDrinks = new Promise((resolve,reject) => resolve(`cold drink`));


    let ticket =  await promiseWifeBringingTickets;   // get resolved thing

    console.log(`wife: i have the ${ticket}`);
    console.log('husband: we should go in');
    console.log('wife: no i am hungry')

    let popcorn = await getPopcorn;

    console.log(`husband: i got some ${popcorn}`);
    console.log('husband: we should go in');
    console.log('wife: i need butter on my popcorn')

    let butter = await getButter;

    console.log(`husband: i got some ${butter} on popcorn`);
    console.log('husband: we should go in');
    console.log('wife: i need cold drink')

    let colddrink = await getColdDrinks;



    console.log(`husband: i got some ${colddrink} `);
    console.log(`husband: anything else darling?`);
    console.log(`wife: lets go we are getting late`);
    console.log(`husband: thank you for the reminder *grins*`);




    return ticket;

}


preMovie().then((m) => console.log(`person3: shows ${m}`));


console.log('person4: shows ticket');
console.log('person5: shows ticket');









