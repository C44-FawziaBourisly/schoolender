//sign up
document.querySelector('.signupbtn').addEventListener('click', (e) => {
   
    e.preventDefault();
  

    //get inf
    const email = document.getElementById('signup-email'); 
   const inputv = email.value;

    const password = document.getElementById('signup-password');
    const inputvl = password.value;
    //sign up user
    firebase.auth().createUserWithEmailAndPassword(inputv, inputvl).then(cred => {   
    console.log(cred.user) 
    alert(`done`);
    window.location.href = "./index.html";
        });
});
 
 document.querySelector('.loginbtn').addEventListener('click', (e) => {
     e.preventDefault();

//      //inf
     const emaill = document.getElementById('login-email'); 

     const inputva = emaill.value;

    const passwordd = document.getElementById('login-password');
    const inputvla = passwordd.value;
 
 firebase.auth().signInWithEmailAndPassword(inputva, inputvla).then(cred => {
        
    console.log(cred.user) 
    alert(`done`);
     window.location.href = "./index.html";


   
});

firebase.auth().signInWithEmailAndPassword(inputva, inputvla).catch(function(error){
    // Handle Errors here.
    var errorCode = error.code;
    var errorMsg = error.message;
    // [START_EXCLUDE]
    if (errorCode ==='auth/wrong-password'){
     alert('Wrong password.');
    } else {
     alert(errorMsg);
    }
    console.log(error);
    document.getElementById('btnLogin').disabled = false;
   });
   // [END authwithemail]
   //disables the button after logging in
   document.getElementById('btnLogin').disabled = true;  
  
   const logoutBtn = document.getElementById('#login-email');
  const logoutBtn = document.querySelector('#logout-btn');
   logoutBtn.addEventListener('click', e => {
     e.preventDefault();
    
     firebase.auth().signOut()
     .then(function() {
        alert('Sign-out successful.');
       // Sign-out successful.
     })
     .catch(function(error) {
       // An error happened
       alert('An error happened')
     });


   }) 
}
// (function(){//initialize the firebase app
//     var config = {
                  
//         }; 

//         firebase.initializeApp(config);
//         var auth = null;
//         var loginBtn= document.getElementById('btnLogin');
//         firebase.auth.Auth.Persistence.SESSION;

//     //Login
//     loginBtn.addEventListener('click', e => {
//         e.preventDefault();
//         if( $('#email').val() != '' && $('#password').val() != '' ){
//         //login the user
//         var data = {
//             email: $('#email').val(),
//             password: $('#password').val()
//         };

//         firebase.auth().signInWithEmailAndPassword(data.email, data.password)
//             .then(function(authData) {
//             auth = authData;
//             })
//             .catch(function(error) {
//             console.log("Login Failed!", error);
//             window.alert("Login Failed!", error);
//             });
//         }
//     });
// })();


// function check(){
// if(document.getElementById("victory").value == "victory")
//     return true;
// else 
//    return false;
// firebase.auth().onAuthStateChanged(function(user){
//     if(user){
//         window.location.href = "patientDashboard.html";
//         console.log(user);
//     }
//     else{
//         console.log('no user present');
//     }
// })
 )