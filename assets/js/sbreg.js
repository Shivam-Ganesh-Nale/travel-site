function setError(id, error) {
    document.getElementById(id + '-error').innerText = error;
}

function validateForm() {
    const fname = document.getElementById('fname').value.trim();
    const lname = document.getElementById('lname').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const cpassword = document.getElementById('cpassword').value.trim();
    let isValid = true;

    
    
    document.querySelectorAll('.formerror').forEach(el => el.innerText = '');

    if (fname === "" || lname === "" || email === "" || password === "" || cpassword === "") {
        setError('fname', 'All fields must be filled out');
        isValid = false;
    }

    if (!/^[a-zA-Z ]+$/.test(fname)) {
        setError('fname', 'First name must contain only letters and spaces');
        isValid = false;
    }

    if (!/^[a-zA-Z ]+$/.test(lname)) {
        setError('lname', 'Last name must contain only letters and spaces');
        isValid = false;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
        setError('email', 'Please enter a valid email address');
        isValid = false;
    }

    if (password.length < 8) {
        setError('password', 'Password must be at least 8 characters long');
        isValid = false;
    }

    if (password !== cpassword) {
        setError('cpassword', 'Passwords do not match');
        isValid = false;
    }

    return isValid;
}
