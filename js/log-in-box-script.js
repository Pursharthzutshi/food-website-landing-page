const logInBtn = document.querySelector(".log-in-button");

logInBtn.addEventListener("click", showLogInBox);

const topBarContainer = document.querySelector(".top-bar-container");

const logInBoxContainer = document.querySelector('.log-in-box-container');

const logInBoxDiv = document.createElement("div");

logInBoxDiv.classList.add('log-in-box-div');

const closeLogInBoxIcon = document.createElement("button");
closeLogInBoxIcon.classList.add("close-log-in-box-icon");
closeLogInBoxIcon.innerHTML = '<ion-icon name="close"></ion-icon>';

const logInHeading = document.createElement("h2");
logInHeading.classList.add("log-in-heading");
logInHeading.innerHTML = 'LOG IN'

const logInInputEmailId = document.createElement("input");
logInInputEmailId.type = 'text';
logInInputEmailId.placeholder = 'Email-ID';
logInInputEmailId.classList.add("log-in-input");

const logInInputPassword = document.createElement("input");
logInInputPassword.type = 'password';
logInInputPassword.placeholder = 'Password';
logInInputPassword.classList.add("log-in-input");

const boxLogInButton = document.createElement("button");
boxLogInButton.classList.add("box-log-in-button");
boxLogInButton.innerHTML = 'Log In';

const createAccountHeading = document.createElement("h3");
createAccountHeading.classList.add("create-account-heading");
createAccountHeading.innerHTML = 'Or Simply Create Your New Account';

const createYourAccount = document.createElement("button");
createYourAccount.classList.add("create-your-account");
createYourAccount.innerHTML = 'Create your account';

const showLogInError = document.createElement("p");
showLogInError.classList.add("show-log-in-error");
showLogInError.innerHTML = '';

logInBoxDiv.appendChild(closeLogInBoxIcon);

logInBoxDiv.appendChild(logInHeading);

logInBoxDiv.appendChild(logInInputEmailId);

logInBoxDiv.appendChild(logInInputPassword);

logInBoxDiv.appendChild(boxLogInButton);

logInBoxDiv.appendChild(createAccountHeading);

logInBoxDiv.appendChild(createYourAccount);

logInBoxDiv.appendChild(showLogInError);

boxLogInButton.addEventListener("click", logInAuthentication);

closeLogInBoxIcon.addEventListener("click", closeLogInBox);

function logInAuthentication() {

    if (logInInputEmailId.value == '' && logInInputPassword.value == '') {
        showLogInError.innerHTML = 'Please Fill The Form';
        logInInputEmailId.style.boxShadow = 'red 0px 0px 1px 1px';
        logInInputPassword.style.boxShadow = 'red 0px 0px 1px 1px';

    } else if (logInInputEmailId.value != '' && logInInputPassword.value != '') {
        showLogInError.innerHTML = 'Logged In';
        showLogInError.style.color = 'black';
        logInInputEmailId.style.boxShadow = ' .2px .2px 12px .2px lightgray';
        logInInputPassword.style.boxShadow = ' .2px .2px 12px .2px lightgray';

    } else {
        return;
    }
}

function closeLogInBox() {

    logInBoxContainer.removeChild(logInBoxDiv);

    document.body.style.marginTop = '0px';

    logInBtn.style.pointerEvents = 'auto';

}

function showLogInBox() {

    logInBtn.style.pointerEvents = 'none';

    logInBoxContainer.appendChild(logInBoxDiv);

    topBarContainer.opacity = '.1';

    logInBoxContainer.style.opacity = '1';

}