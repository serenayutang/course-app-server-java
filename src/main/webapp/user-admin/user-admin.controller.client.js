//alert("welcome")

var addUserBtn = jQuery("#wbdv-add-user")
addUserBtn.click(function () {
    user({
        username: 'Alison',
        password: ' ',
        firstname: 'Alison',
        lastname: 'Garcia',
        role: 'student'
    })
})

var user = [
    {username: 'emma', password: ' ', firstname: 'emma', lastname: 'lee', role: 'faculty'},
    {username: 'emma', password: ' ', firstname: 'emma', lastname: 'lee', role: 'faculty'},
    {username: 'emma', password: ' ', firstname: 'emma', lastname: 'lee', role: 'faculty'},
]
console.log(user)

// var theHeading = jQuery("h2")
// //theHeading.html("hey")
// theHeading.css("background-color", "red")
// console.log(theHeading)

var theTableBody = jQuery("tbody")
// theTableBody.remove()

function createUser(user) {
    user.push(user)
    renderUser(user)
}

function renderUser(users) {
    theTableBody.empty()
    for (var i = 0; i < users.length; i++) {
        var user = users[i]
        theTableBody.append(

        )
    }
}

