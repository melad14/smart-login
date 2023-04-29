var nameInput = document.getElementById("userName");
var emailInput = document.getElementById("userEmail");
var passInput = document.getElementById("userPass");
var loginEmail = document.getElementById("signEmail");
var loginPass = document.getElementById("signPass");


var usersList=[] ;
 
if(localStorage.getItem("users")!=null){
       usersList = JSON.parse(localStorage.getItem("users"));
}

function getUser(){
    if (checkExistUser()){
        document.getElementById('existAlert').classList.remove("d-none")
    }
    else{
        if(validInput()){
            let user={
        name:nameInput.value,
        email:emailInput.value,
        password:passInput.value
    }
    usersList.push(user);
    localStorage.setItem("users",JSON.stringify(usersList));

              location.replace("index.html");

    }
    else{
        window.alert('invalid inputs please enter correct inputs (name and password started with [A-Z]) ')
    }
        }
 
   
}

function signInCheck(){
    if(checkLogin()){
        location.replace("home.html");

    }
    else{
        document.getElementById('incorrect').classList.remove("d-none")
    }
   
     
}

function checkExistUser(){
    for(var i=0;i<usersList.length;i++){
        if(usersList[i].email==emailInput.value && usersList[i].password==passInput.value){
           
   return true;
     
        }
        else{
            return false;
        }
     }

    }

function checkLogin(){
    for(var i=0;i<usersList.length;i++){
        if(usersList[i].email==loginEmail.value && usersList[i].password==loginPass.value){
         return true;
         
        }
       
            
        }
        return false;
} 




function validInput(){

    var nameRegex=/^[A-Z][a-z]{3,8}$/;
    var emaiRejex=/^[a-z0-9_]{3,}@(gmail|yahoo)\.[a-z]{3}$/
    var passwordRegex=/^[A-Z]{1,8}[a-z0-9@?_]{3,10}$/
    
    if (nameRegex.test(nameInput.value)==true && emaiRejex.test(emailInput.value)==true && passwordRegex.test(passInput.value)){
    
    return true;
    
    }
    else{
        return false ;
    }
    
    }
    
























// function addUser(){
//     if(!checkIsEmpty()){
//         if(exist()){
//             displayExist();
//         }
//         else{
//         var user = {
//             name:userNameInput.value,
//             email:userEmailInput.value,
//             password:userPassInput.value,
//         }
//         users.push(user);
//         localStorage.setItem("usersList",JSON.stringify(users));
//         displaySucess()
        
//     }
        
//     }
//     else{
//         displayRequired();
//     }
   
   
// };
// function  welcome(){
//     document.getElementById("welcome").innerHTML = `Welcome ${JSON.parse(localStorage.getItem("homeList"))}`;

// };
// function exist(){
//     for(var i=0;i<users.length;i++){
//         if(users[i].email==userEmailInput.value ){
//             return true; 
//         }
//     }
//     return false;
// }
// function existLogin(){
// for(var i=0;i<users.length;i++){
//     if(users[i].email==signEmailInput.value && users[i].password==signPassInput.value){
//         console.log(users[i].name);
//         var name=users[i].name;
//         localStorage.setItem("homeList",JSON.stringify(name));
//         location.replace("home.html");
        
        
       
       
//        return true;
//     }
// }
// };
// function searchUser(){
//     if(checkIsEmptySign()){
//         displayRequiredSign();
      
//     }
//     else{
//         if( existLogin()){

//         }
//         else{
//             displayIncorrect();
//         }
        
//     }

// };
// function clearForm(){
//    userNameInput.value="";
//    userEmailInput.value="";
//    userPassInput.value="";
  

// };

// function checkIsEmpty(){
//     if(userNameInput.value!="" && userPassInput.value !="" && userEmailInput.value !=""){
//         return false;
//     }
//     else{
//         return true;
//     }
// }
// function checkIsEmptySign(){
//     if(signEmailInput.value=="" || signPassInput.value=="" ){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// // email already exists
// function displayRequired(){
//     document.getElementById("required").innerHTML=`<span class=' text-danger'>All inputs is required</span>`;
// };
// function displayExist(){
//     document.getElementById("required").innerHTML=`<span class=' text-danger'>email already exists</span>`;

// };
// function displayIncorrect(){
//     document.getElementById("result-sign").innerHTML=`<span class=' text-danger'>incorrect email or password</span>`;
// };
// function displayRequiredSign(){
//     document.getElementById("result-sign").innerHTML=`<span class=' text-danger'>All inputs is required</span>`;
// };
// function displaySucess(){
//     document.getElementById("required").innerHTML=`<span class=' text-success'>Success</span>`;
// };
