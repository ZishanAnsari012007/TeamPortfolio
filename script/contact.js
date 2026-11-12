
function changeBodyBackground() {

    // 1. Find elements by their ID
    const body = document.getElementById("main-body");
    const headerTitle = document.getElementById("header-title");
    const username1 = document.getElementById("user-name1");
    const username2 = document.getElementById("user-name2");
    const Subject = document.getElementById("Subject");
    const YourMessage = document.getElementById("Your-Message");
    const mainbox = document.getElementById("mainbox");
    const submit = document.getElementById("submit");
    const maintitle = document.getElementById("maintitle");

    // 2. Change background and text colors
    body.style.backgroundColor = "red";
    headerTitle.style.color = "white";

    username1.style.backgroundColor = "green";
    username2.style.backgroundColor = "green";
    Subject.style.backgroundColor = "green";
    YourMessage.style.backgroundColor = "lightblue";
    mainbox.style.backgroundColor = "lightpink";
    submit.style.backgroundColor = "blue";
    maintitle.style.color = "black";

    // 3. Change only Your Name placeholder color
    const style = document.createElement("style");
style.textContent = `
    #user-name1::placeholder,
    #user-name2::placeholder {
        color: red;
    }
`;

document.head.appendChild(style);

}