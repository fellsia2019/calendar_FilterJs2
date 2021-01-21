window.addEventListener("load", function() {
   
    $("#alconSurvey-start").on("click", function(e){
        e.preventDefault();

        $(".alconSurvey-start").addClass("alconSurvey-start_hide");
        $(".alconSurvey-end").removeClass("alconSurvey-end_hide");

    })
    $("#alconSurvey-start__btn-back").on("click", function(e){
        $(".alconSurvey-start").removeClass("alconSurvey-start_hide");
        $(".alconSurvey-end").addClass("alconSurvey-end_hide");
    })


    $(function(){
        $("#alconSurvey-input-tel").mask("+7 (999) 999-99-99");
        $("#alconSurvey-input-code").mask("9 9 9 9 9 9");
       
    });

    $(document).ready(function() {
        var select213 = document.querySelectorAll('.alcon-select2__item');
        var select2_ID = document.querySelectorAll('.customSelect2-ID');
        var select2_SFID = document.querySelectorAll('.customSelect2-SFID');
        var customSelect2_default = document.querySelectorAll('.customSelect2-default');
        var selectOffice = document.querySelectorAll('.aboutWork-select2__select');


        // $('.alcon-select2__item').select2();
        $(select213).select2({
            // placeholder: {
            //     id: "-1",
            //     placeholder: "Select an option"
            // },
            // placeholder: "Введите ID специалиста",
            // allowClear: true,
            dropdownCssClass : "select2Custom-alcon"
        });
        $(select2_ID).select2({
           
            placeholder: "Введите ID специалиста",
            dropdownCssClass : "select2Custom-alcon"

        });
        $(select2_SFID).select2({
           
            placeholder: "Введите ID точки",
            dropdownCssClass : "select2Custom-alcon",
            multiple: true

        });
        $(customSelect2_default).select2({


            placeholder: "Выберите вариант",
            minimumResultsForSearch: -1,
            dropdownCssClass : "select2Custom-alcon"
        });
        $(selectOffice).select2({


            placeholder: "Выберите из списка",
            minimumResultsForSearch: -1,
            dropdownCssClass : "aboutWork-select2__dropdown"
        });
    });

    
    // modal-----------------------



    $("#modalAlcon-saveBtn").on("click", function(e){
        e.preventDefault();

        $(".modalAlcon").addClass("modalAlcon_active");
        $(".modalAlcon-content").addClass("modalAlcon-content_active");
        $("body").addClass("lock");
    })
    $(".modalAlcon-close").on("click", function(e){
        e.preventDefault();

        $(".modalAlcon").removeClass("modalAlcon_active");
        $(".modalAlcon-content").removeClass("modalAlcon-content_active");
        $("body").removeClass("lock");
    })
    $(".modalAlcon-btn").on("click", function(e){
        e.preventDefault();

        $(".modalAlcon").removeClass("modalAlcon_active");
        $(".modalAlcon-content").removeClass("modalAlcon-content_active");
        $("body").removeClass("lock");
    })
});


