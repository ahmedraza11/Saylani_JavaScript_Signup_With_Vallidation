// var arr = [];
var h5 = document.getElementById("h5");
function save(){
     key = document.getElementById("username").value;
     value = document.getElementById("password").value;
        var len  = value.length;
        if(!isNaN(key)){
            h5.innerHTML = "Username cannot be Number!";
            h5.style.color="red";
        }else if(len<8){
            h5.innerHTML = "Password cannot be lessthan 8 Numbers!";
            h5.style.color="red";
        }else{

            localStorage.setItem("Username",key);
            localStorage.setItem("Password",value);
          strin = "Wellcome Mr: <b>"+key+"</b> You have successfully signed up!";
         tab();
        }
}
function tab(){
        
        h5.innerHTML = strin;
        h5.style.color="black";
}