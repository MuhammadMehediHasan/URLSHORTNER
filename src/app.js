// console.log("Alhamdulillah!")
const app = document.querySelector("#app");
const generate = document.querySelector("#generate");
const url = document.querySelector("#url");

let hashedUrl = window.location.hash.split("").slice(1).join("");

if(!hashedUrl) {
    let link = window.location.href.replace(/\#/gi, "");
    generate.addEventListener("click", (e) => {
        link += '#' + url.value;
        url.value = "";
        url.value = link;
        url.select()
    })

} else {
    location = hashedUrl;
}

app.textContent = `You're About to Redirect to ${hashedUrl}`;
