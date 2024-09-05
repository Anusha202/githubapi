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
  
//         if (data.message === "Not Found") {
//           alert("GitHub ID not found! Try Again");
//         } else {
//           var avatarUrl = data.avatar_url;
//           var name = data.name;
//           var createdAt = data.created_at;
//           var login = data.login;
//           var bio = data.bio;
//           var repos = data.public_repos;
//           var followers = data.followers;
//           var following = data.following;
//           var location = data.location;
//           var twitter = data.twitter_username;
//           var company = data.company;
  
//           const imgElements = document.getElementsByClassName("gitavatar");
//           for (let i = 0; i < imgElements.length; i++) {
//             imgElements[i].src = avatarUrl;
//           }
//           document.getElementById("gitname").innerHTML = name;
//           document.getElementById("creationdate").innerHTML = createdAt;
//           document.getElementById("login").innerHTML = login;
//           document.getElementById("bio").innerHTML = bio;
//           document.getElementById("rval").innerHTML = repos;
//           document.getElementById("fval").innerHTML = followers;
//           document.getElementById("foval").innerHTML = following;
//           if (location != null) {
//             document.getElementById("locval").innerHTML = location;
//           } else {
//             document.getElementById("locval").innerHTML = "not available";
//           }
//           var tw = document.getElementById("twlink");
//           if (twitter != null) {
//             tw.innerHTML = twitter;
//             tw.href = "https://twitter.com/" + twitter;
//           } else {
//             twitter = "#";
//             tw.innerHTML = "not available";
//             tw.href = "https://twitter.com/" + twitter;
//           }
//           var gt = document.getElementById("gtlink");
//           gt.innerHTML = login;
//           gt.href = "https://github.com/" + login;
//           if (company != null) {
//             document.getElementById("ogval").innerHTML = company;
//           } else {
//             document.getElementById("ogval").innerHTML = "not available";
//           }
//         }
//       } catch (error) {
//         if (error.message === "API rate limit exceeded") {
//           alert("API rate limit exceeded. Please try again later.");
//         } else {
//           console.log("Server Error! Try Again");
//         }
//       }
//     }
//   }





interface GitHubUser {
  avatar_url: string;
  name: string | null;
  created_at: string;
  login: string;
  bio: string | null;
  public_repos: number;
  followers: number;
  following: number;
  location: string | null;
  twitter_username: string | null;
  company: string | null;
  message?: string; // To handle error messages
}

async function fetchData(): Promise<void> {
  const user = (document.getElementById("loginid") as HTMLInputElement).value.trim();

  console.log(user);

  if (user === "") {
    alert("Please enter a GitHub ID");
    return;
  }

  try {
    const response = await fetch(`https://api.github.com/users/${user}`);

    if (response.status === 403) {
      throw new Error("API rate limit exceeded");
    }

    const data: GitHubUser = await response.json();

    if (data.message === "Not Found") {
      alert("GitHub ID not found! Try Again");
      return;
    }

    const avatarUrl = data.avatar_url;
    const name = data.name ?? "not available";
    const createdAt = new Date(data.created_at).toLocaleDateString();
    const login = data.login;
    const bio = data.bio ?? " Bio is not available";
    const repos = data.public_repos;
    const followers = data.followers;
    const following = data.following;
    const location = data.location ?? "not available";
    const twitter = data.twitter_username ?? "#";
    const company = data.company ?? "not available";

    const imgElements = document.getElementsByClassName("gitavatar") as HTMLCollectionOf<HTMLImageElement>;
    for (let i = 0; i < imgElements.length; i++) {
      imgElements[i].src = avatarUrl;
    }

    const gitnameElement = document.getElementById("gitname");
    if (gitnameElement) {
      gitnameElement.innerHTML = name;
    }

    const creationdateElement = document.getElementById("creationdate");
    if (creationdateElement) {
      creationdateElement.innerHTML = createdAt;
    }

    const loginElement = document.getElementById("login");
    if (loginElement) {
      loginElement.innerHTML = login;
    }

    const bioElement = document.getElementById("bio");
    if (bioElement) {
      bioElement.innerHTML = bio;
    }

    const rvalElement = document.getElementById("rval");
    if (rvalElement) {
      rvalElement.innerHTML = repos.toString();
    }

    const fvalElement = document.getElementById("fval");
    if (fvalElement) {
      fvalElement.innerHTML = followers.toString();
    }

    const fovalElement = document.getElementById("foval");
    if (fovalElement) {
      fovalElement.innerHTML = following.toString();
    }

    const locvalElement = document.getElementById("locval");
    if (locvalElement) {
      locvalElement.innerHTML = location;
    }

    const twElement = document.getElementById("twlink") as HTMLAnchorElement;
    if (twElement) {
      twElement.innerHTML = twitter === "#" ? "not available" : twitter;
      twElement.href = `https://twitter.com/${twitter}`;
    }

    const gtElement = document.getElementById("gtlink") as HTMLAnchorElement;
    if (gtElement) {
      gtElement.innerHTML = login;
      gtElement.href = `https://github.com/${login}`;
    }

    const ogvalElement = document.getElementById("ogval");
    if (ogvalElement) {
      ogvalElement.innerHTML = company;
    }

  } catch (error) {
    if (error instanceof Error) {
      if (error.message === "API rate limit exceeded") {
        alert("API rate limit exceeded. Please try again later.");
      } else {
        console.log("Server Error! Try Again");
      }
    } else {
      console.error("An unexpected error occurred.");
    }
  }
}
