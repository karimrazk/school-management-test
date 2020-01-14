import firebase from 'react-native-firebase'; 


export function addAdmin(food, addComplete) {
    food.createdAt = firebase.firestore.FieldValue.serverTimestamp(); 
    firebase.firestore()
      .collection('Admins')
      .add(admin)
      .then((snapshot) => {
        food.id = snapshot.id;
        snapshot.set(admin);
      }).then(() => addComplete(admin))
      .catch((error) => console.log(error));
  }



export async function getAdmins(adminsRetreived) {

  var adminsList = [];

  var snapshot = await firebase.firestore()
    .collection('Admins')
    .orderBy('createdAt')
    .get()

  snapshot.forEach((doc) => {
    const adminItem = doc.data();
    admintem.id = doc.id;
    adminsList.push(adminItem);
  });

  adminsRetreived(adminsList);
}


// export function login({ email, password }) {
//   firebase.auth().signInWithEmailAndPassword(email, password)
//     .then((value) => console.log(value))
// }

// export function signup({ email, password, displayName }) {
//   firebase.auth().createUserWithEmailAndPassword(email, password)
//     .then((userInfo) => {
//       console.log(userInfo)
//       userInfo.user.updateProfile({ displayName: displayName.trim() })
//         .then(() => { })
//     })
// }

// export function subscribeToAuthChanges(authStateChanged) {
//   firebase.auth().onAuthStateChanged((user) => {
//     authStateChanged(user);
//   })
// }

// export function signout(onSignedOut) {
//   firebase.auth().signOut()
//     .then(() => {
//       onSignedOut();
//     })
// }

// export function updateFood(food, updateComplete) {
//   food.updatedAt = firebase.firestore.FieldValue.serverTimestamp();
//   console.log("Updating food in firebase");

//   firebase.firestore()
//     .collection('Foods')
//     .doc(food.id).set(food)
//     .then(() => updateComplete(food))
//     .catch((error) => console.log(error));
// }

// export function deleteFood(food, deleteComplete) {
//   console.log(food);

//   firebase.firestore()
//     .collection('Foods')
//     .doc(food.id).delete()
//     .then(() => deleteComplete())
//     .catch((error) => console.log(error));
// }

// export function uploadFood(food, onFoodUploaded, { updating }) {

//   if (food.imageUri) {
//     const fileExtension = food.imageUri.split('.').pop();
//     console.log("EXT: " + fileExtension);

//     var uuid = uuid4();

//     const fileName = `${uuid}.${fileExtension}`;
//     console.log(fileName);

//     var storageRef = firebase.storage().ref(`foods/images/${fileName}`);

//     storageRef.putFile(food.imageUri)
//       .on(
//         firebase.storage.TaskEvent.STATE_CHANGED,
//         snapshot => {
//           console.log("snapshot: " + snapshot.state);
//           console.log("progress: " + (snapshot.bytesTransferred / snapshot.totalBytes) * 100);

//           if (snapshot.state === firebase.storage.TaskState.SUCCESS) {
//             console.log("Success");
//           }
//         },
//         error => {
//           unsubscribe();
//           console.log("image upload error: " + error.toString());
//         },
//         () => {
//           storageRef.getDownloadURL()
//             .then((downloadUrl) => {
//               console.log("File available at: " + downloadUrl);

//               food.image = downloadUrl;

//               delete food.imageUri;

//               if (updating) {
//                 console.log("Updating....");
//                 updateFood(food, onFoodUploaded);
//               } else {
//                 console.log("adding...");
//                 addFood(food, onFoodUploaded);
//               }
//             })
//         }
//       )
//   } else {
//     console.log("Skipping image upload");

//     delete food.imageUri;

//     if (updating) {
//       console.log("Updating....");
//       updateFood(food, onFoodUploaded);
//     } else {
//       console.log("adding...");
//       addFood(food, onFoodUploaded);
//     }
//   }
// }
