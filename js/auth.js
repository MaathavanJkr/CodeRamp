var username;
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in.
        username = user.displayName;
        $('#username').html(username);
    } else {
        location.replace('login.html');
    }
});