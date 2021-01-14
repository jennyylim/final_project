function store() {
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var userName = document.getElementById('userName').value;
    var email = document.getElementById('email').value;
    var pw = document.getElementById('pw').value;
    var address = document.getElementById('address').value;
    var country = document.getElementById('country').value;
    var state = document.getElementById('state').value;
    var postal = document.getElementById('postal').value;
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;

    if (userName.length == 0) {
        alert('Please fill in Username');
    } else if (pw.length == 0) {
        alert('Please fill in password');
    } else if (userName.length == 0 && pw.value.length == 0) {
        alert('Please fill in username and password');
    } else if (pw.length > 8) {
        alert('Max of 8');
    } else if (!pw.match(numbers)) {
        alert('please add 1 number');
    } else if (!pw.match(upperCaseLetters)) {
        alert('please add 1 uppercase letter');
    } else if (!pw.match(lowerCaseLetters)) {
        alert('please add 1 lowercase letter');
    }
    let stored_users = JSON.parse(localStorage.getItem('users'));

    if (stored_users) {
        stored_users.push({
            name: firstName,
            lastName,
            user: userName,
            password: pw,
            add: address,
            country: country,
            state: state,
            postal: postal
        });
        localStorage.setItem('users', JSON.stringify(stored_users));
    } else {
        localStorage.setItem('users', JSON.stringify([{
            name: firstName,
            lastName,
            user: userName,
            password: pw,
            add: address,
            country: country,
            state: state,
            postal: postal
        }]));
        alert('Account Created');
    }
}

//     if (stored_users) {
//         stored_users.push({
//             name: firstName,
//             lastName,
//             user: userName,
//             password: pw,
//             add: address,
//             country: country,
//             state: state,
//             postal: postal
//         });
//         localStorage.setItem('users', JSON.stringify(stored_users));
//     } else {
//         localStorage.setItem('users', JSON.stringify([{
//             name: firstName,
//             lastName,
//             user: userName,
//             password: pw,
//             add: address,
//             country: country,
//             state: state,
//             postal: postal
//         }]));
//         alert('Account Created');
//     }
// }

store();