$(document).ready(function(){
    $("#step2").hide();
    $("#step3").hide();
    $("#step4").hide();
    $("#step5").hide();

    // STEP 1 EVENT HANDLING
    $(".next-step2").click(function(event){
        $("#step1").hide();
        $("#step2").show();
        event.preventDefault();  
    });

    // STEP 2 EVEN HANDLING
    $(".previous-step1").click(function(event){
        $("#step2").hide();
        $("#step1").show();
        event.preventDefault();
    });

    $(".next-step3").click(function(event){
        $("#step2").hide();
        $("#step3").show();
        event.preventDefault();
    });

    // STEP 3 EVENT HANDLING
    $(".previous-step2").click(function(event){
        $("#step3").hide();
        $("#step2").show();
        event.preventDefault();
    });

    $(".next-step4").click(function(event){
        $("#step3").hide();
        $("#step4").show();
        event.preventDefault();
    });

    // STEP 4 EVENT HANDLING
    $(".previous-step3").click(function(event){
        $("#step4").hide();
        $("#step3").show();
        event.preventDefault();
    });

    $(".next-step5").click(function(event){
        $("#step4").hide();
        $("#step5").show();
        event.preventDefault();
    });

});