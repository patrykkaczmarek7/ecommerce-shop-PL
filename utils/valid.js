const valid = (name, email, password, cf_password) => {
    if(!name || !email || !password)
    return 'Wypełnij wszystkie pola.'

    if(!validateEmail(email))
    return 'Nieprawidłowy e-mail.'

    if(password.length < 6)
    return 'Hasło musi się składać z co najmniej 6 znaków.'

    if(password !== cf_password)
    return 'Hasła nie są takie same.'
}


function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

export default valid