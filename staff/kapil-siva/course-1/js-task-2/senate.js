let x = 0;
function read() {
    if (!x) {
        document.getElementById("more-para").style.display = "inline";
        document.getElementById("dots").style.display = "none";
        document.getElementById("myBtn").innerHTML = "Read Less"
            x = 1;
    } else {
        document.getElementById("more-para").style.display = "none";
        document.getElementById("dots").style.display = "inline";
        document.getElementById("myBtn").innerHTML = "Read More"
            x = 0;
    }
}


