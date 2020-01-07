import Firebase from 'firebase';

let config = {
    apiKey: "AIzaSyAEKHL0NN1ZOKqZbUTbPwGUnzZtqVUr_1g",
    authDomain: "grill-stanica.firebaseapp.com",
    databaseURL: "https://grill-stanica.firebaseio.com",
    projectId: "grill-stanica",
    storageBucket: "grill-stanica.appspot.com",
    messagingSenderId: "470855177160",
    appId: "1:470855177160:web:3407d98df2b011ebde26fd"
};
let app = Firebase.initializeApp(config);
export const firebase = app.database();
