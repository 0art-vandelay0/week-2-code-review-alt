function hideResults() {
    document.getElementById("rust").setAttribute("class", "hidden");
    document.getElementById("python").setAttribute("class", "hidden");
    document.getElementById("javaScript").setAttribute("class", "hidden");
    document.getElementById("errorMessage").setAttribute("class", "hidden");
}

window.onload = function () {
    document.querySelector("form").onsubmit = function (event) {
    event.preventDefault();
    hideResults();
    const q1 = document.querySelector("input#q1").checked;
    const q2 = document.querySelector("input#q2").checked;
    const q3 = document.querySelector("input#q3").checked;
    const q4 = document.querySelector("input#q4").checked;
    const q5 = document.querySelector("input#q5").checked;

    const checkedCount = [q1, q2, q3, q4, q5].filter((checked) => checked).length;

    if (checkedCount === 1) {
        console.log("one boxe checked");
        document.getElementById("rust").removeAttribute("class");
        } else if (checkedCount === 2) {
            console.log("two boxes checked");
            document.getElementById("rust").removeAttribute("class");
        } else if (checkedCount === 3) {
            console.log("three boxes checked");
            document.getElementById("python").removeAttribute("class");
        } else if (checkedCount === 4) {
            console.log("four boxes checked");
            document.getElementById("python").removeAttribute("class");
        } else if (checkedCount === 5) {
            console.log("five boxes checked");
            document.getElementById("javaScript").removeAttribute("class");
        } else {
            document.getElementById("errorMessage").removeAttribute("class", "hidden");
        }
    };
};
