$(document).ready(function () {
    //let burgerForm = $("#devourBurgerId")
    $(document).on("click", "#devourBurgerId", function (event) {
        event.preventDefault()
        let burgerId = $(this).data('devourid')

        $.ajax({
            url: "/devour/" + burgerId,
            type: "put",
            success: function (res) {
                window.location.href = "/";
            }
        });
    })

    $(document).on("click", "#trashButtonId", function (event) {
        event.preventDefault()
        let burgerId = $(this).data('trashid')
        $.ajax({
            url: "/trash/" + burgerId,
            type: "delete",
            success: function (res) {
                window.location.href = "/";
            }
        });
    })
})