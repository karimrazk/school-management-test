import * as firebase from 'firebase';
 
try {
  let config = {
    apiKey: "AIzaSyCVjpQLE4iC37kJFajN-15vopk7RoByCw0",
    authDomain: "school-management-test-a8ab7.firebaseapp.com",
    databaseURL: "https://school-management-test-a8ab7.firebaseio.com",
    projectId: "school-management-test-a8ab7",
    storageBucket: "school-management-test-a8ab7.appspot.com",
    messagingSenderId: "304375277180",
    appId: "1:304375277180:web:4b1bc79c439ec39c2c4bf9",
    measurementId: "G-W1HLPCT93R"
};


firebase.initializeApp(config);

} catch (error) {
  
}  
export const myDatabase = firebase.database();

 
  // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
//   firebase.analytics(); 