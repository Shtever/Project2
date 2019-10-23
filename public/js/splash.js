let $enterButton = $("#enterButton");

$enterButton.on("click", function() {
    $(this).css("display","none");
    $("#buttonContainer").css("display","flex")
    run();
})