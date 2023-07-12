function convert() {
    var sgpaInput = document.getElementById("sgpaInput");
    var creditInput = document.getElementById("creditInput");
    var convertedPercentage = document.getElementById("convertedPercentage");
    var marksObtained = document.getElementById("marksObtained");
    var convertedCrosscheckSGPA = document.getElementById("convertedCrosscheckSGPA");

    var sg = parseFloat(sgpaInput.value);
    var sem = parseInt(creditInput.value);

    var st = [700, 700, 750, 750, 750, 750, 750, 750];
    var sc = [25, 25, 25, 25, 23, 23, 22, 22];


    if (isNaN(sg) || sg <= 0.0 || sg > 10.0) {
        alert("Enter a valid SGPA.");
        return;
    }

    if (isNaN(sem) || sem <= 0 || sem > 8) {
        alert("Enter a valid Semester.");
        return;
    }

    var prc = sg * 8.8;
    var res = (prc * (sc[sem - 1] * (st[sem - 1] / sc[sem - 1]))) / 100;
    var cnvtchk = Math.round(res);

    convertedPercentage.innerText = "Converted Percentage: " + prc.toFixed(2);
    marksObtained.innerText = "Marks Obtained: " + cnvtchk + "\n\nTotal Marks: " + st[sem-1];
    convertedCrosscheckSGPA.innerText = "Converted Crosscheck SGPA: " + ((cnvtchk / (sc[sem - 1] * (st[sem - 1] / sc[sem - 1]))) * 100 / 8.8).toFixed(2);
}

function clearInputs() {
    var sgpaInput = document.getElementById("sgpaInput");
    var creditInput = document.getElementById("creditInput");

    sgpaInput.value = "";
    creditInput.value = "";

    var outputElements = document.querySelectorAll("#outputSection p");
    for (var i = 0; i < outputElements.length; i++) {
        outputElements[i].innerText = "";
    }
}

function toggleDarkMode() {
    var body = document.body;
    var header = document.getElementById("header");
    var footer = document.getElementById("footer");
    var darkModeToggle = document.getElementById("darkModeToggle");

    body.classList.toggle("dark-mode");
    header.classList.toggle("dark-mode");
    footer.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        darkModeToggle.innerHTML = "&#9788;";
    } else {
        darkModeToggle.innerHTML = "&#9790;";
    }
}