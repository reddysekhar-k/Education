$(document).ready(function () {
    $("#menu-btn").click(function (e) {
        e.stopPropagation(); 
        // Prevents the click event from reaching the document body
        $('nav .navigation ul').addClass('active');
    });

    $("#menu-close").click(function () {
        $('nav .navigation ul').removeClass('active');
    });

    // Close the menu when clicking anywhere on the document body
    $(document).on("click", function (e) {
        if (!$(e.target).closest('nav .navigation').length) {
            // Check if the click is outside the navigation menu
            $('nav .navigation ul').removeClass('active');
        }
    });
});
