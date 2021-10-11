
//ADD YOUR FIREBASE LINKS HERE

// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyCOw1k4O-66FL5WQAMRcF6kZUVcqlQva9s",
      authDomain: "chat-bot-app-33870.firebaseapp.com",
      databaseURL: "https://chat-bot-app-33870-default-rtdb.firebaseio.com",
      projectId: "chat-bot-app-33870",
      storageBucket: "chat-bot-app-33870.appspot.com",
      messagingSenderId: "45366787354",
      appId: "1:45366787354:web:95b619849270185ac3c0a3"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
