var students = ["Brianna H.", "Kanyce", "Sandra", "Unice C.", "May"]

document.addEventListener("DOMContentLoaded", function (event) {
    console.log("Hey kanyce, its loaded!");

    var name = document.getElementById('button')
    name.addEventListener("click", function(event) {
        console.log("the button was clicked")
        var nametag = document.getElementById("studentName")

        for (var i = 0; i < students.length; i++) {
            console.log(students[i])
        }

    })
    
});