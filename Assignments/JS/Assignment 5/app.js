
function generatePassword(length) {
    var str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
    var password = "";
    for (var i = 0; i < length; i++) {
        password += str.charAt(Math.floor(Math.random() * str.length));
    }
    return password;
}

document.write("<h1> RANDOM PASSWORD GENERATOR:</h1>");
for (var i = 1; i <= 5; i++) {
    document.write("<p><b><br>" + i + ") Password:</b> " + generatePassword(8) + "</p>");
}
