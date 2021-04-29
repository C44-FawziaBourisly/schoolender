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

 }) 