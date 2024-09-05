// async function fetchData() {
//     var user = document.getElementById("loginid").value;
//     console.log(user);
//     if (user === "") {
//       alert("Please enter a GitHub ID");
//     } else {
//       try {
//         const response = await fetch(`https://api.github.com/users/${user}`);
//         if (response.status === 403) {
//           throw new Error("API rate limit exceeded");
//         }
//         const data = await response.json();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
function fetchData() {
    return __awaiter(this, void 0, void 0, function () {
        var user, response, data, avatarUrl, name_1, createdAt, login, bio, repos, followers, following, location_1, twitter, company, imgElements, i, gitnameElement, creationdateElement, loginElement, bioElement, rvalElement, fvalElement, fovalElement, locvalElement, twElement, gtElement, ogvalElement, error_1;
        var _a, _b, _c, _d, _e;
        return __generator(this, function (_f) {
            switch (_f.label) {
                case 0:
                    user = document.getElementById("loginid").value.trim();
                    console.log(user);
                    if (user === "") {
                        alert("Please enter a GitHub ID");
                        return [2 /*return*/];
                    }
                    _f.label = 1;
                case 1:
                    _f.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, fetch("https://api.github.com/users/".concat(user))];
                case 2:
                    response = _f.sent();
                    if (response.status === 403) {
                        throw new Error("API rate limit exceeded");
                    }
                    return [4 /*yield*/, response.json()];
                case 3:
                    data = _f.sent();
                    if (data.message === "Not Found") {
                        alert("GitHub ID not found! Try Again");
                        return [2 /*return*/];
                    }
                    avatarUrl = data.avatar_url;
                    name_1 = (_a = data.name) !== null && _a !== void 0 ? _a : "not available";
                    createdAt = new Date(data.created_at).toLocaleDateString();
                    login = data.login;
                    bio = (_b = data.bio) !== null && _b !== void 0 ? _b : " bio not available";
                    repos = data.public_repos;
                    followers = data.followers;
                    following = data.following;
                    location_1 = (_c = data.location) !== null && _c !== void 0 ? _c : "not available";
                    twitter = (_d = data.twitter_username) !== null && _d !== void 0 ? _d : "#";
                    company = (_e = data.company) !== null && _e !== void 0 ? _e : "not available";
                    imgElements = document.getElementsByClassName("gitavatar");
                    for (i = 0; i < imgElements.length; i++) {
                        imgElements[i].src = avatarUrl;
                    }
                    gitnameElement = document.getElementById("gitname");
                    if (gitnameElement) {
                        gitnameElement.innerHTML = name_1;
                    }
                    creationdateElement = document.getElementById("creationdate");
                    if (creationdateElement) {
                        creationdateElement.innerHTML = createdAt;
                    }
                    loginElement = document.getElementById("login");
                    if (loginElement) {
                        loginElement.innerHTML = login;
                    }
                    bioElement = document.getElementById("bio");
                    if (bioElement) {
                        bioElement.innerHTML = bio;
                    }
                    rvalElement = document.getElementById("rval");
                    if (rvalElement) {
                        rvalElement.innerHTML = repos.toString();
                    }
                    fvalElement = document.getElementById("fval");
                    if (fvalElement) {
                        fvalElement.innerHTML = followers.toString();
                    }
                    fovalElement = document.getElementById("foval");
                    if (fovalElement) {
                        fovalElement.innerHTML = following.toString();
                    }
                    locvalElement = document.getElementById("locval");
                    if (locvalElement) {
                        locvalElement.innerHTML = location_1;
                    }
                    twElement = document.getElementById("twlink");
                    if (twElement) {
                        twElement.innerHTML = twitter === "#" ? "not available" : twitter;
                        twElement.href = "https://twitter.com/".concat(twitter);
                    }
                    gtElement = document.getElementById("gtlink");
                    if (gtElement) {
                        gtElement.innerHTML = login;
                        gtElement.href = "https://github.com/".concat(login);
                    }
                    ogvalElement = document.getElementById("ogval");
                    if (ogvalElement) {
                        ogvalElement.innerHTML = company;
                    }
                    return [3 /*break*/, 5];
                case 4:
                    error_1 = _f.sent();
                    if (error_1 instanceof Error) {
                        if (error_1.message === "API rate limit exceeded") {
                            alert("API rate limit exceeded. Please try again later.");
                        }
                        else {
                            console.log("Server Error! Try Again");
                        }
                    }
                    else {
                        console.error("An unexpected error occurred.");
                    }
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
