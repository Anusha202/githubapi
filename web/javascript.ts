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

// //                 const imgElements = document.getElementsByClassName('uavatar');
// //                 for (let i = 0; i < imgElements.length; i++) {
// //                     imgElements[i].src = avatarUrl;
// //                 }
// //                 document.getElementById("uid").innerHTML=id;
// //                 document.getElementById("uname").innerHTML=name;
// //                 document.getElementById("date").innerHTML=createdAt;
// //                 document.getElementById("gitrepo").innerHTML=repos;
// //                 document.getElementById("gitfoller").innerHTML=followers;
// //                 document.getElementById("gitfollow").innerHTML=following;
// //                 if(location!=null)
// //                 {
// //                     document.getElementById("gitlocation").innerHTML=location;
// //                 }
// //                 else
// //                 {
// //                     document.getElementById("gitlocation").innerHTML="not available";
// //                 }
// //                 var tw=document.getElementById("gittwitter");
// //                 if(twitter!=null)
// //                 {
// //                     tw.innerHTML=twitter;
// //                     tw.href="https://twitter.com/"+twitter;
// //                 }
// //                 else
// //                 {
// //                     twitter="#";
// //                     tw.innerHTML="not available";
// //                     tw.href="https://twitter.com/"+twitter;
// //                 }
// //                 var gt=document.getElementById("gitprofile");
// //                 gt.innerHTML=login;
// //                 gt.href="https://github.com/"+login;
// //                 if(company!=null)
// //                 {
// //                     document.getElementById("gitwork").innerHTML=company;
// //                 }
// //                 else
// //                 {
// //                     document.getElementById("gitwork").innerHTML="not available";
// //                 }
// //             }
// //         })
// //         .catch(error => {
// //             console.log("Server Error! Try Again");
// //         });
// //     }
// //   }





interface GitHubUser {
    avatar_url: string;
    name: string | null;
    created_at: string;
    login: string;
    id: number;
    public_repos: number;
    followers: number;
    following: number;
    location: string | null;
    twitter_username: string | null;
    company: string | null;
    message?: string; // To handle error messages
  }
  
  function getData(): void {
    const user = (document.getElementById("loginid") as HTMLInputElement).value.trim();
    console.log(user);
  
    if (user === "") {
      alert("Please enter a GitHub ID");
      return;
    }
  
    fetch(`https://api.github.com/users/${user}`)
      .then(response => response.json())
      .then((data: GitHubUser) => {
        if (data.message === "Not Found") {
          alert("GitHub ID not found! Try Again");
          return;
        }
  
        const avatarUrl = data.avatar_url;
        const name = data.name ?? "not available";
        const createdAt = new Date(data.created_at).toLocaleDateString();
        const login = data.login;
        const id = data.id;
        const repos = data.public_repos;
        const followers = data.followers;
        const following = data.following;
        const location = data.location ?? "not available";
        const twitter = data.twitter_username ?? "#";
        const company = data.company ?? "not available";
  
        const imgElements = document.getElementsByClassName('uavatar') as HTMLCollectionOf<HTMLImageElement>;
        for (let i = 0; i < imgElements.length; i++) {
          imgElements[i].src = avatarUrl;
        }
  
        const uidElement = document.getElementById("uid");
        if (uidElement) {
          uidElement.innerHTML = id.toString();
        }
  
        const unameElement = document.getElementById("uname");
        if (unameElement) {
          unameElement.innerHTML = name;
        }
  
        const dateElement = document.getElementById("date");
        if (dateElement) {
          dateElement.innerHTML = createdAt;
        }
  
        const gitrepoElement = document.getElementById("gitrepo");
        if (gitrepoElement) {
          gitrepoElement.innerHTML = repos.toString();
        }
  
        const gitfollerElement = document.getElementById("gitfoller");
        if (gitfollerElement) {
          gitfollerElement.innerHTML = followers.toString();
        }
  
        const gitfollowElement = document.getElementById("gitfollow");
        if (gitfollowElement) {
          gitfollowElement.innerHTML = following.toString();
        }
  
        const gitlocationElement = document.getElementById("gitlocation");
        if (gitlocationElement) {
          gitlocationElement.innerHTML = location;
        }
  
        const gittwitterElement = document.getElementById("gittwitter") as HTMLAnchorElement;
        if (gittwitterElement) {
          gittwitterElement.innerHTML = twitter === "#" ? "not available" : twitter;
          gittwitterElement.href = `https://twitter.com/${twitter}`;
        }
  
        const gitprofileElement = document.getElementById("gitprofile") as HTMLAnchorElement;
        if (gitprofileElement) {
          gitprofileElement.innerHTML = login;
          gitprofileElement.href = `https://github.com/${login}`;
        }
  
        const gitworkElement = document.getElementById("gitwork");
        if (gitworkElement) {
          gitworkElement.innerHTML = company;
        }
      })
      .catch(error => {
        console.error("Server Error! Try Again", error);
      });
  }
  