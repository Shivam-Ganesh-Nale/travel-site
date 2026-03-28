function seterror(){
    element=document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML= error;
    const fname=document.getElementById('fname').value
    const lname=document.getElementById('lname').value
    const password1=document.getElementById('cpassword').value
    const email=document.getElementById('email').value
    const password=document.getElementById('password').value
    if (fname === "" || email === "" || password === "" || phone === "") {
        alert("All fields must be filled out");
        return false;
    }

    if (!/^[a-zA-Z ]+$/.test(fname)) {
        alert("Name must contain only letters and spaces");
        return false;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
        alert("Please enter a valid email address");
        return false;
    }

    if (password.length < 8) {
        alert("Password must be at least 8 characters long");
        return false;
    }

    if (password==password1) {
        alert("Please check password number must be 10 digits");
        return false;
    }

    return true;
}
function validateform(){
    var name = document.forms['myform']['name'].value;
    if(name.length<5){
        seterror("name","length of name is too short")
        returnval=false;

    }
}
