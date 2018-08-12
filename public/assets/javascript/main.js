$(document).ready(function () {
    //let burgerForm = $("#burgerAddFormId")
    $('#burgerAddFormId').on("submit", function (event) {
        event.preventDefault()
        let burgerName = $('#burgerInputId').val().trim()
        let nameInput = $('#nameInputId').val().trim()
        if (!burgerName || !nameInput) {
            return;
        }
        //let cust = findCustomer(nameInput)
        $.get("/customer/" + nameInput, function (data) {
            if (!data) {
                let custObj = {
                    customer_name: nameInput
                }
                $.post("/customer", custObj, function (data) {
                    let newBurger = {
                        burger_name: burgerName,
                        devoured: false,
                        CustomerId: data.id
                    };
                    $.post("/addBurger", newBurger, function (res) {
                        window.location.href = "/";
                    });
                })
            }
            else {
                let newBurger = {
                    burger_name: burgerName,
                    devoured: false,
                    CustomerId: data.id
                };
                $.post("/addBurger", newBurger, function (res) {
                    window.location.href = "/";
                });
            }
        })
    })
})