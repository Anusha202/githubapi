// // function getData() {
// //     var user=document.getElementById("loginid").value;
// //     console.log(user);
// //     if(user==""){
// //         alert("Please enter a GitHub ID");
// //     }
// //     else{
// //         fetch(`https://api.github.com/users/${user}`)
// //         .then(response => response.json())
// //         .then(data => {
// //             if(data.message=="Not Found"){
// //                 alert("GitHub ID not found! Try Again");
// //             }
// //             else{
// //                 var avatarUrl = data.avatar_url;
// //                 var name = data.name;
// //                 var createdAt = data.created_at;
// //                 var login = data.login;
// //                 var id = data.id;
// //                 var repos = data.public_repos;
// //                 var followers = data.followers;
// //                 var following = data.following;
// //                 var location = data.location;
// //                 var twitter = data.twitter_username;
// //                 var company = data.company;
function getData() {
    var user = document.getElementById("loginid").value.trim();
    console.log(user);
    if (user === "") {
        alert("Please enter a GitHub ID");
        return;
    }
    fetch("https://api.github.com/users/".concat(user))
        .then(function (response) { return response.json(); })
        .then(function (data) {
        var _a, _b, _c, _d;
        if (data.message === "Not Found") {
            alert("GitHub ID not found! Try Again");
            return;
        }
        var avatarUrl = data.avatar_url;
        var name = (_a = data.name) !== null && _a !== void 0 ? _a : "not available";
        var createdAt = new Date(data.created_at).toLocaleDateString();
        var login = data.login;
        var id = data.id;
        var repos = data.public_repos;
        var followers = data.followers;
        var following = data.following;
        var location = (_b = data.location) !== null && _b !== void 0 ? _b : "not available";
        var twitter = (_c = data.twitter_username) !== null && _c !== void 0 ? _c : "#";
        var company = (_d = data.company) !== null && _d !== void 0 ? _d : "not available";
        var imgElements = document.getElementsByClassName('uavatar');
        for (var i = 0; i < imgElements.length; i++) {
            imgElements[i].src = avatarUrl;
        }
        var uidElement = document.getElementById("uid");
        if (uidElement) {
            uidElement.innerHTML = id.toString();
        }
        var unameElement = document.getElementById("uname");
        if (unameElement) {
            unameElement.innerHTML = name;
        }
        var dateElement = document.getElementById("date");
        if (dateElement) {
            dateElement.innerHTML = createdAt;
        }
        var gitrepoElement = document.getElementById("gitrepo");
        if (gitrepoElement) {
            gitrepoElement.innerHTML = repos.toString();
        }
        var gitfollerElement = document.getElementById("gitfoller");
        if (gitfollerElement) {
            gitfollerElement.innerHTML = followers.toString();
        }
        var gitfollowElement = document.getElementById("gitfollow");
        if (gitfollowElement) {
            gitfollowElement.innerHTML = following.toString();
        }
        var gitlocationElement = document.getElementById("gitlocation");
        if (gitlocationElement) {
            gitlocationElement.innerHTML = location;
        }
        var gittwitterElement = document.getElementById("gittwitter");
        if (gittwitterElement) {
            gittwitterElement.innerHTML = twitter === "#" ? "not available" : twitter;
            gittwitterElement.href = "https://twitter.com/".concat(twitter);
        }
        var gitprofileElement = document.getElementById("gitprofile");
        if (gitprofileElement) {
            gitprofileElement.innerHTML = login;
            gitprofileElement.href = "https://github.com/".concat(login);
        }
        var gitworkElement = document.getElementById("gitwork");
        if (gitworkElement) {
            gitworkElement.innerHTML = company;
        }
    })
        .catch(function (error) {
        console.error("Server Error! Try Again", error);
    });
}
