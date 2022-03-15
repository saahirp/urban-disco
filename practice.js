var firebaseConfig = {
    apiKey: "AIzaSyD_OhCuQTejOC3XrlzChYFrCzuUwxHq5kE",
    authDomain: "kwitter-1eb7d.firebaseapp.com",
    databaseURL: "https://kwitter-1eb7d-default-rtdb.firebaseio.com",
    projectId: "kwitter-1eb7d",
    storageBucket: "kwitter-1eb7d.appspot.com",
    messagingSenderId: "867151647162",
    appId: "1:867151647162:web:6408dbfde251c66d398d83"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Initialize Firebase
//ADD YOUR FIREBASE LINKS
function addUser(){
    user_name = document.getElementById("ygyg").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}