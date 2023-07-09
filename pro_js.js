

function validatePassword(){
    let pwd = document.getElementById("psd").value;
    //alert(pwd)
    let uppercaseCondition = document.getElementById("uppercase");
    let characterLength = document.getElementById("charLength")
    let lowercaseCondition = document.getElementById("lowercase");
    let numberCondition = document.getElementById("number");
    let specialCondition = document.getElementById("special");
    
    
    // Check if password contains uppercase letters
      if (/[A-Z]/.test(pwd)) {
        uppercaseCondition.classList.remove("invalid");
        uppercaseCondition.classList.add("valid");
      } else {
        uppercaseCondition.classList.remove("valid");
        uppercaseCondition.classList.add("invalid");
      }
      
      
      // Check if password contains min 8 in length
      if (pwd.length >= 8) {
        characterLength.classList.remove("invalid");
        characterLength.classList.add("valid");
      } else {
        characterLength.classList.remove("valid");
        characterLength.classList.add("invalid");
      }
      
      
      // Check if password contains lowercase letters 
      if (/[a-z]/.test(pwd)) { lowercaseCondition.classList.remove("invalid"); lowercaseCondition.classList.add("valid"); } else { lowercaseCondition.classList.remove("valid"); lowercaseCondition.classList.add("invalid"); }
      
     
     
      // Check if password contains numbers 
      if (/\d/.test(pwd)) { numberCondition.classList.remove("invalid"); numberCondition.classList.add("valid"); } else { numberCondition.classList.remove("valid"); numberCondition.classList.add("invalid"); }
      
      
      
      
      // Check if password contains special characters
      if (/[!@#$%^&*]/.test(pwd)) {
        specialCondition.classList.remove("invalid");
        specialCondition.classList.add("valid");
      } else {
        specialCondition.classList.remove("valid")
        }
      
      
      

}



//validatePassword()



function showPassword(){
    let pwd = document.getElementById("psd").value;
   let showpsd = document.getElementById("eye")
   
   showpsd.addEventListener("click", function(){
       if(pwd.type === 'password'){
           pwd.type = "text"
           showpsd.innerHTML = '<i class="fa fa-eye-slash"></i>'
       }
       else{
           pwd.type = "password"
           showpsd.innerHTML = '<i class="fa fa-eye"></i>'
       }
   }
   )
}



const pswd = document.querySelector("#psd")
const showpsd = document.querySelector("#showPwd")
    
showpsd.addEventListener("click", function(){
        this.classList.toggle("fa-eye")
        this.classList.toggle("fa-eye-slash")
        const type = pswd.getAttribute("type") === "password" ? "text" : "password";
        pswd.setAttribute("type", type);
        
    })
