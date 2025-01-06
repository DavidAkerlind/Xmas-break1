const input = document.getElementById("textInput");
const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", function (event) {
    event.preventDefault();
    const inputValue = input.value;

    if (!isNaN(inputValue) && inputValue.trim() !== "") {
        console.log(inputValue);
    } else if (inputValue !== "") {
        let encryptedMessage = window.atob(inputValue);
        console.log(encryptedMessage);
        document.getElementById("encryptText").textContent = encryptedMessage;
        let decryptedMessage = window.btoa(encryptedMessage);
        document.getElementById("decryptText").textContent = decryptedMessage;
    } else {
        window.alert("type something please");
    }
});

submitBtn.addEventListener("mouseover", function () {
    console.log("Muspekaren är över knappen!");
    document.getElementById("changingText").textContent = "Button Hovered!";
});

input.addEventListener("mouseover", function () {
    console.log("Muspekaren är över inputfältet!");
    document.getElementById("changingText").textContent =
        "Input field Hovered!";
    encryptText.animate(
        [{ color: "white" }, { color: "green" }, { color: "white" }],
        {
            duration: 800,
            iterations: 3,
        }
    );
});
