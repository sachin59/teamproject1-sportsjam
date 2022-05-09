var dropdown2 = document.getElementsByClassName("drop_down_container2");
var i;
for (var i = 0; i < dropdown2.length; i++) {
    dropdown2[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var dropdown_content = this.nextElementSibling;
        if (dropdown_content.style.display === "block") {
            dropdown_content.style.display == "none";
        } else {
            dropdown_content.style.display = "block";
        }
    });
}