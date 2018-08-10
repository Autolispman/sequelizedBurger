$(document).ready(function () {
    //let burgerForm = $("#burgerAddFormId")
    $('#burgerAddFormId').on("submit", function (event) {
        event.preventDefault()
        console.log("Main.js")
        let burgerName = $('#burgerInputId').val().trim()
        console.log(burgerName)
        if (!burgerName) {
            return;
        }
        let newBurger = {
            burger_name: burgerName,
            devoured: false
        };

        $.post("/addBurger", newBurger, function (res) {
            window.location.href = "/";
        });
    })
})