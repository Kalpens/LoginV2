$(document).ready(function () {
    $('#toogle-create').click(function () {
        $('form').animate({ height: "toggle", opacity: "toggle" }, "slow");
        return false;
    });

    $('#toogle-signin').click(function () {
        $('form').animate({ height: "toggle", opacity: "toggle" }, "slow");
        return false;
    });

    $('#logon').click(function () {
        var user = $('#name').val();
        var pw = $('#pw').val();
        console.log('user', user);
        console.log('pw', pw);
        var localUsers = JSON.parse(localStorage.getItem("users"));
        localUsers.forEach(function(element) {
             if(element['name'] === user && element['pw'] === pw){
                 localStorage.setItem("loggedInUser", JSON.stringify({ user: user, pw: pw }));
                 logInCheck();
             }
         });
         var loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
        console.log('loggedInUser', loggedInUser);
        if (loggedInUser === null) {
            alert('U not registered!')
            return false;
        }

    });

    $('#logout').click(function () {
        localStorage.setItem("loggedInUser", null);
        logInCheck();
    });

    $('#lostpasw').click(function () {
        alert('To bad');
        return false;
    });

    $('#create').click(function () {
        var user = { name: $('#create-name').val(), email: $('#create-email').val(), pw: $('#create-pw').val() }
        var users = JSON.parse(localStorage.getItem("users"));
        if (users === null) {
            users = [];
        }
        users.push(user);
        console.log('users: ', users);
        localStorage.setItem("users", JSON.stringify(users));
        return false;
    });


    function logInCheck() {
        var localUsers = JSON.parse(localStorage.getItem("users"));
        console.log('usies', localUsers);
        var loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
        console.log('loggedInUser', loggedInUser);
        if (loggedInUser != null) {
            $('.loggedin-page').show();
            $('.login-page').hide();
            if(localUsers != null){
                var userList = $("#userlist");
                userList.empty();
                for(i=0; i<localUsers.length; i++){
                    $("<li class=\"message\"><a >"+localUsers[i].name+"</a></li>").appendTo(userList);
                }
            }
           
        } else {
            $('.loggedin-page').hide();
            $('.login-page').show();

        }
    }

    logInCheck();
});