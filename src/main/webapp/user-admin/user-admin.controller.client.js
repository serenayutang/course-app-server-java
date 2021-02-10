let $usernameFld
let $passwordFld
let $firstnameFld
let $lastnameFld
let $roleFld
let $createIcon
let $updateIcon
let $tableBody
let userService = new UsersServiceClient()

let selectedUser = null

var users = [
    // {username: 'tlee', password: '', firstname: 'Tim', lastname: 'Birns Lee', role: 'Faculty'},
    // {username: 'alovelace', password: '', firstname: 'Ada', lastname: 'Lovelace', role: 'Faculty'},
    // {username: 'cgarcia', password: '', firstname: 'Charlie', lastname: 'Garcia', role: 'Student'},
    // {username: 'dcraig', password: '', firstname: 'Dan', lastname: 'Craig', role: 'Student'},
    // {username: 'sbolivar', password: '', firstname: 'Simon', lastname: 'Bolivar', role: 'Faculty'}
]

function editUser(event) {
    let selectIcon = jQuery(event.target)
    let theId = selectIcon.attr("id")
    selectedUser = users.find(user => user._id === theId)
    $usernameFld.val(selectedUser.username)
    $passwordFld.val(selectedUser.password)
    $firstnameFld.val(selectedUser.firstname)
    $lastnameFld.val(selectedUser.lastname)
    $roleFld.val(selectedUser.role)
}

function renderUsers(users) {
    $tableBody.empty()
    for (let i = 0; i < users.length; i++) {
        let user = users[i]
        $tableBody.prepend(
            `<tr class="wbdv-template wbdv-user">
                        <td class="wbdv-username">${user.username}</td>
                        <td>&nbsp;</td>
                        <td class="wbdv-first-name">${user.firstname}</td>
                        <td class="wbdv-last-name">${user.lastname}</td>
                        <td class="wbdv-role">${user.role}</td>
                         <td class="wbdv-actions">
                                <span class="float-right">
                                  <i class="fa-2x fa fa-times wbdv-remove" id="${i}"></i>
                                  <i class="fa-2x fa fa-pencil wbdv-edit" id="${user._id}"></i>
                                </span>
                        </td>
                    </tr>`)
    }
    jQuery(".wbdv-remove").click(removeUser)
    jQuery(".wbdv-edit").click(editUser)
}

function createUser(user) {
    userService.createUser(user).then(function (actualUser) {
        users.push(actualUser)
        renderUsers(users)
    })
}

function removeUser(event) {
    let removeIcon = jQuery(event.target)
    let removeIconIndex = removeIcon.attr("id")
    let removeIconId = users[removeIconIndex]._id
    userService.removeUser(removeIconId).then(function (status) {
        users.splice(removeIconIndex, 1)
        renderUsers(users)
    })
}

function updateUser() {
    selectedUser.username = $usernameFld.val()
    selectedUser.password = $passwordFld.val()
    selectedUser.firstname = $firstnameFld.val()
    selectedUser.lastname = $lastnameFld.val()
    selectedUser.role = $roleFld.val()
    userService.updateUser(selectedUser._id, selectedUser)
        .then(function (status) {
            let index = users.findIndex(user => user._id === selectedUser._id)
            users[index] = selectedUser
            renderUsers(users)
        })
    $usernameFld.val("")
    $passwordFld.val("")
    $firstnameFld.val("")
    $lastnameFld.val("")
    $roleFld.val("")
}

function main() {
    $usernameFld = $(".wbdv-username-fld")
    $passwordFld = $(".wbdv-password-fld")
    $firstnameFld = $(".wbdv-firstname-fld")
    $lastnameFld = $(".wbdv-lastname-fld")
    $roleFld = $(".wbdv-role-fld")
    $createIcon = $(".wbdv-create-icon")
    $updateIcon = $(".wbdv-update-icon")
    $tableBody = $("tbody")

    $createIcon.click(function () {
        let newUser = {
            username: $usernameFld.val(),
            password: $passwordFld.val(),
            firstname: $firstnameFld.val(),
            lastname: $lastnameFld.val(),
            role: $roleFld.val()
        }
        createUser(newUser)
        $usernameFld.val("")
        $passwordFld.val("")
        $firstnameFld.val("")
        $lastnameFld.val("")
        $roleFld.val("")
    })

    $updateIcon.click(updateUser)

    userService.findAllUsers().then(function (actualUsersFromServer) {
        users = actualUsersFromServer
        renderUsers(users)
    })
}

jQuery(main)
