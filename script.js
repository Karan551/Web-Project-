const userName = document.querySelector('input')
const genderName = document.querySelector('#gender-name')
const contactNum = document.querySelector('#contact-num')
const typeWriterContent = document.querySelector(".typewriter-content")

// To clear the value
const clear = ''
const form = document.querySelector('form')


// we can also change the input field value with the help of onkeyup event.
// userName.addEventListener('onkeyup',functionName)

// this function is used to convert an user name to the upper case.
function upperName() {
    userName.value = userName.value.toUpperCase()
}
// adding event listener to the userName field
userName.addEventListener("input", upperName)


// this function is used to convert string into upperCase.

// ye abhi fix karna baki hai.
function nameUpper(element) {
    console.log(element)
    let upName = element.value.toUpperCase()
    element.value = upName
    console.log(upName)
    // console.log(element.value)
}
// userName.addEventListener('input',nameUpper(userName))


// this function is used to check user's name does not contain any number.
function validName() {
    let str = userName.value
    // To check that user name can not contain any number
    if (str.match(/[0-9]/g)) {
        // console.log('Name cannot contain number.')
        alert('User name cannot contain number.')
        userName.value = clear

    }
}
// adding event to the user name to validate userName.
userName.addEventListener("focusout", validName)

// this function is used to check user gender.
function checkGender() {
    let genderArr = ['male', 'female', 'other']
    // get the value of user's gender.
    // convert user gender into lowercase And remove the whitespace from both side like start and end.
    let user_gender = genderName.value.toLowerCase().trim()
    if (!(genderArr.includes(user_gender))) {
        // console.log('Gender is correct.')
        alert('Gender is incorrect.')
        console.log(user_gender)
        // To clear the value of the user.
        genderName.value = clear
    }
    else if (user_gender = '') {
        console.log(user_gender)
        alert('Gender name cannot be empty.')

    }
}
// adding event to the gender field.
genderName.addEventListener('focusout', checkGender)
// genderName.addEventListener()

// Contact number is fixed by me to the user.
function validNum() {
    let user_num = contactNum.value
    // convert user number into the Number because by default it is string.
    user_num = Number(user_num)
    // console.log(Number(user_num),typeof user_num)
    if (isNaN(user_num)) {
        // clear the contact number if ivalid format.
        alert('Contact Number must be a number')
        contactNum.value = clear
    }
}
// adding event to the contact number.
contactNum.addEventListener('focusout', validNum)

// this js will apply to the registration form.
const registerBtn = document.querySelector('#register')
const formContainer = document.querySelector('.form-container')


// To hide the registration form by default.
formContainer.style.display = 'none'
function show() {
    if (formContainer.style.display != 'none') {
        formContainer.style.display = 'none'
    }
    else {
        formContainer.style.display = 'block'
    }
}
// adding event to the register button.
registerBtn.addEventListener('click', show)



// this will apply to the focus in into the input field.(when user click to the input field.)
form.addEventListener("focusin", (event) => {
    event.target.style.background = "yellow";
});
//   this will apply when user focusout to the input field. 
form.addEventListener("focusout", (event) => {
    event.target.style.background = "";
});
