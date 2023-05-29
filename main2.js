var firebaseConfig = {
  apiKey: "AIzaSyCjQoK_0sSBoTxCu_dfML3GdlymJfPCTuQ",
  authDomain: "chitty-chat-98329.firebaseapp.com",
  databaseURL: "https://chitty-chat-98329-default-rtdb.firebaseio.com",
  projectId: "chitty-chat-98329",
  storageBucket: "chitty-chat-98329.appspot.com",
  messagingSenderId: "163742983075",
  appId: "1:163742983075:web:e9aae9e063e9ce8a34f016"
  };

  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("buttuser");
  document.getElementById("hbutt2").innerHTML = "welcome  "+user_name;

  function addRoom() {
    room_name = document.getElementById("textbutt2").value;
    firebase.database().ref("/").child(room_name).update({
      purpose: "adding room name"
    });
  
    localStorage.setItem("room_name", room_name);
  
    window.location = "index3.html";
  }