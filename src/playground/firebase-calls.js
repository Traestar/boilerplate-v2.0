// IMPORT FOR FIREBASE
// import * as firebase from 'firebase';

// VARIABLE for FIREBASE DATABASE CONFIG (DO NOT CHANGE!!)

// const config = {
//     apiKey: process.env.FIREBASE_API_KEY,
//     authDomain: process.env.FIREBASE_AUTH_DOMAIN,
//     databaseURL: process.env.FIREBASE_DATABASE_URL,
//     projectId: process.env.FIREBASE_PROJECT_ID,
//     storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
//   };

//   firebase.initializeApp(config);


// VARIABLE for FIREBASE DATABASE CALL
// const database = firebase.database();

// VARIABLE for GOOGLE AUTHENTICATOR
//  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
  // export { firebase, googleAuthProvider, database as default };

  // // child_removed
  // database.ref('expenses').on('child_removed', (snapshot) => {
  //   console.log(snapshot.key, snapshot.val());
  // });

  // // child_changed
  // database.ref('expenses').on('child_changed', (snapshot) => {
  //   console.log(snapshot.key, snapshot.val());
  // });

  // // child_added
  // database.ref('expenses').on('child_added', (snapshot) => {
  //   console.log(snapshot.key, snapshot.val());
  // });

// FIREBASE DATABASE CALL FOR DATABASE
//   database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = [];

//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });

//         console.log(expenses);
//     });

// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });

//         console.log(expenses);
// });


// FIREBASE DATABASE CALL FOR DATABASE (PUSH VALUES TO DATABASE)    
//   database.ref('expenses').push({
//     description: 'Rite Aid Store',
//     note: 'Purchase from Rite Aid Store',
//     amount: 599,
//     createdAt: 1891849273
//   });

// FIREBASE DATABASE CALL FOR DATABASE (UPDATE VALUES TO DATABASE) 
//   database.ref('expenses/-LBvZwE5ioyothN8Zi0T').update({
//     description: 'Grocery Food',
//     note: 'Shoprite',
//     amount: 5310,
//     createdAt: 1328392971
//   });


// FIREBASE DATABASE CALL FOR DATABASE (REMOVE VALUES FROM DATABASE) 
//   database.ref('notes/-LBvU944P1vvx215YwkJ').remove();
//   database.ref('notes').push({
//       title: 'Course Topics',
//       body: 'React Native, Angular, Python'
//   });

//   const firebaseNotes = {

// FIREBASE DATABASE CALL FOR DATABASE (OTHER CALLS) 

//   database.ref().on('value', (snapshot) => {
//       const val = snapshot.val();
//       console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
//   })

  // Setup data sub -> Howard is a Software Developer at Amazon

  // Change the data and make sure it reprints

//   const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
//   }, (e) => {
//     console.log('Error with data fetching', e);
//   });

//   setTimeout(() => {
//     database.ref('age').set(33);
//   }, 3500);

//   setTimeout(() => {
//     database.ref().off(onValueChange);
//   }, 7000);

//   setTimeout(() => {
//     database.ref('age').set(30);
//   }, 10500);

//   database.ref('location/city')
//     .once('value')
//     .then((snapshot) => {
//       const val = snapshot.val();
//       console.log(val);
//     })
//     .catch((e) => {
//         console.log('Error fetching data', e);
//     })
//   database.ref().set({
//     name: 'Howard Tibbs',
//     age: 32,
//     stressLevel: 6,
//     job:{
//         title: 'Software Developer',
//         company: 'Google'
//     },
//     location: {
//         city: 'Philadelphia',
//         country: 'United States'
//     }
//   }).then(() => {
//       console.log('Data is saved!');
//   }).catch((e) => {
//       console.log('This failed.', e);
//   });

//   database.ref().update({
//       stressLevel: 9,
//       'job/company': 'Amazon',
//       'location/city': 'Seattle'
//   });

// database.ref()
//     .remove()
//     .then(() => {
//         console.log('Data is removed!');
//     }).catch((e) => {
//         console.log('Did not remove data', e);
//     });

