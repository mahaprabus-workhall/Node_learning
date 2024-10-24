// promise all


// const p1 = Promise.resolve('P1');
// const p2 = Promise.resolve('P2');
// const p3 = Promise.reject('Error in P3');

// Promise.all([p1, p2, p3])
//   .then(results => {
//     console.log(results);
//   })
//   .catch(error => {
//     console.error('One or more promises failed:', error);
//   });



// // promise allsettled


// const p1 = Promise.resolve('P1');
// const p2 = Promise.resolve('P2');
// const p3 = Promise.reject('Error in P3');

// Promise.allSettled([p1, p2, p3])
//   .then(results => {
//     results.forEach((result, index) => {
//       if (result.status === 'fulfilled') {
//         console.log(`Promise ${index + 1} fulfilled:`, result.value);
//       } else {
//         console.log(`Promise ${index + 1} rejected:`, result.reason);
//       }
//     });
//   });


// // promise.any

// const p1 = Promise.resolve(' P1');
// const p2 = Promise.resolve('P2');
// const p3 = Promise.reject('Error in P3');

// Promise.any([p1, p2, p3])
//   .then(result => {
//     console.log('First successful promise:', result);
//   })
//   .catch(error => {
//     console.error('All promises failed:', error);
//   });


// // promises.race

// const p1 = new Promise(resolve => setTimeout(resolve, 500, 'P1'));
// const p2 = new Promise(resolve => setTimeout(resolve, 1000, 'P2'));

// Promise.race([p1, p2])
//   .then(result => {
//     console.log('First promise resolved:', result);
//   })
//   .catch(error => {
//     console.error('First promise rejected:', error);
//   });


