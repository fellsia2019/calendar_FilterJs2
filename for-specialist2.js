window.addEventListener("load", function() {

    function bindTabs(tab, info, tabContent , targSome) {
        this.tab = tab,
        this.info = info,
        this.tabContent = tabContent,
        this.targSome = targSome;

        var tab = document.querySelectorAll(tab),
            info = document.querySelector(info),
            tabContent = document.querySelectorAll(tabContent),
            targSome = this.targSome ;

        // console.log(targSome);
        if (info != null) {
            function hideTabContent(a) {
                for (var i = a; i < tabContent.length; i++) {
                    tabContent[i].classList.remove('tabs_show');
                    tabContent[i].classList.add('tabs_hide');
                }
            }
            hideTabContent(1);
        
            function showTabContent(b) {
                if (tabContent[b].classList.contains('tabs_hide')) {
                    tabContent[b].classList.remove('tabs_hide');
                    tabContent[b].classList.add('tabs_show');
                }
            }
        
            info.addEventListener('click', function(event) {
                // event.preventDefault();
                
                var target = event.target;
                
                if (target && target.classList.contains(targSome)) {
                    for(var i = 0; i < tab.length; i++) {
                        if (target == tab[i]) {
                            hideTabContent(0);
                            showTabContent(i);
                            break;
                        }
                    }
                }
            });
        }
    }
    // var tabSome = document.querySelectorAll('.leader-tab__tab'),
    //     infoSome = document.querySelector('.leader-tab'),
    //     tabContentSome = document.querySelectorAll('.leaders-tab');

    // bindTabs(tabSome, infoSome, tabContentSome);

    bindTabs('.myOffice-tab', '.officeTabs-header', '.officeTabs-body', 'myOffice-tab');
    bindTabs('.inviteCard-right__tab-label', '.inviteCard-right__header', '.inviteCard-right__body-tabContent', 'inviteCard-right__tab-label');
    bindTabs('.myOtrainings-tab', '.myOtrainings-tabs', '.officeCard-tabContent', 'myOtrainings-tab');

    // settingOffice adv

$('.settingOffice-body__adv-button').on('click', function(){
 
    $(this).toggleClass("settingADV-opened");
    $('.settingOffice-body__item_adv').toggleClass('settingOffice-item_adv-show');
})



// slick-slider
var statusesSlider = document.querySelector('.statusesSlider');

if (statusesSlider != null) {
    $(statusesSlider).slick({
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: false,
              dots: true
            }
          },
          {
            breakpoint: 575,
            settings: {
              slidesToShow: 2,
              slidesPerRow: 2,
            slidesToScroll: 2,
                arrows:true,
              rows: 2,
            }
          },
          {
            breakpoint: 450,
            settings: {
                slidesToShow: 2,
              slidesPerRow: 2,
            slidesToScroll: 2,

              rows: 2,
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
        
      });
}


});








// mask------------------------------



window.addEventListener("load", function() {

    $(function(){
        $("#sampleOrder-input-INN").mask("999-999-999-999", {placeholder: "XXX-XXX-XXX-XXX" });
        $("#sampleOrder-input-OGRN").mask("9999999999999", {placeholder: "XXXXXXXXXXXXX" });
        $(".aboutWork-input__input_tel").mask("9 999 999 99 99", {placeholder: "XXXXXXXXXXXXX" });

    });
    var arrLeft = document.querySelector(".myAchievements-statuses__body button.slick-prev"),
        arrRight = document.querySelector(".myAchievements-statuses__body button.slick-next"),
        dots = document.querySelector(".myAchievements-statuses__body ul.slick-dots"),
        arrContainer = document.querySelector(".myAchievements-statuses__header-arr");

        
    var arrLeft_iconSvg =  document.createElement('svg');
    var arrRight_iconSvg =  document.createElement('svg');

    if (arrContainer != null) {
        
        arrLeft_iconSvg.className = "arr-left-icon";
        arrLeft_iconSvg.innerHTML = `<use xlink:href="#arr-left-icon">
                                        <svg id="arr-left-icon" viewBox="0 0 12 10" width="12px" hight="10px">
                                            <g>
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.15932 0L5.80422 0.625003L1.74582 4.55808H12V5.44196H1.74582L5.80416 9.375L5.15926 10L0.644901 5.62502L0 5.00001L0.644845 4.37498L5.15932 0Z"></path>
                                            </g>
                                        </svg></use>`;
        
            
        arrRight_iconSvg.className = "arr-right-icon";
        arrRight_iconSvg.innerHTML = `<use xlink:href="#arr-left-icon">
                                        <svg id="arr-right-icon" viewBox="0 0 12 10" width="12px" hight="10px">
                                            <g>
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.84068 0L6.19578 0.625003L10.2542 4.55808H0V5.44196H10.2542L6.19584 9.375L6.84074 10L11.3551 5.62502L12 5.00001L11.3552 4.37498L6.84068 0Z"></path>
                                            </g>
                                        </svg>
                                    </use>`;

        arrContainer.prepend(arrLeft);
        arrContainer.append(dots);
        arrContainer.append(arrRight);
        arrLeft.append(arrLeft_iconSvg);
        arrRight.append(arrRight_iconSvg);




        var status_slider_dots_mob = document.querySelector(".statusesSlider-dots-mobile"),
        status__header = document.querySelector(".myAchievements-statuses__header"),
        status_slider_dots = document.querySelector(".myAchievements-statuses__header-arr");

    
        if (window.matchMedia("(max-width:575px)").matches) {
            status_slider_dots_mob.append(status_slider_dots);
        } 
        window.addEventListener("resize", function() {
            if (window.matchMedia("(max-width: 575px)").matches) {
                status_slider_dots_mob.append(status_slider_dots);
            } 
        
        }, false);
        if (window.matchMedia("(min-width: 576px)").matches) {
            status__header.append(status_slider_dots);
        };
        window.addEventListener("resize", function() {
            if (window.matchMedia("(min-width: 576px)").matches) {
                status__header.append(status_slider_dots);
            } 
        
        }, false);
    }

    

    $(".open-modal-modalTraining").on("click", function(){

        $(".modalTraining-start").addClass('modalTraining_active');
        $("body").addClass('lock');
    })
    $(".modalTraining-start-clickClose").on("click", function(){

        $(".modalTraining-start").removeClass('modalTraining_active');
        $("body").removeClass('lock');

    })  
    $(".modalTraining-start-content-close").on("click", function(){

        $(".modalTraining-start").removeClass('modalTraining_active');
        $("body").removeClass('lock');

    })  





    $(".modalTraining-form__submit-btn").on("click", function(){

        $(".modalTraining-end").addClass('modalTraining_active');
        $(".modalTraining-start").removeClass('modalTraining_active');

        $("body").addClass('lock');
    })
    $(".modalTraining-end-clickclose").on("click", function(){

        $(".modalTraining-end").removeClass('modalTraining_active');
        // $(".modalTraining-start").removeClass('modalTraining_active');

        $("body").removeClass('lock');

    })  
    $(".modalTraining-end-content-close").on("click", function(){

        $(".modalTraining-end").removeClass('modalTraining_active');
        // $(".modalTraining-start").removeClass('modalTraining_active');

        $("body").removeClass('lock');

    })  




    $(".modalTraining-unlogin-btn-close-modal").on("click", function(){

        $(".modalTraining-unlogin").removeClass('modalTraining_active');
        $("body").removeClass('lock');

    })  
    $(".modalTraining-unlogin-content-close").on("click", function(){

        $(".modalTraining-unlogin").removeClass('modalTraining_active');
        $("body").removeClass('lock');

    }) 
    $(".modalTraining-unlogin-clickclose").on("click", function(){

        $(".modalTraining-unlogin").removeClass('modalTraining_active');
        $("body").removeClass('lock');

    }) 


    $(".open-modal-modal-unLogin").on("click", function(){

        $(".modalTraining-unlogin").addClass('modalTraining_active');
        $("body").addClass('lock');

    })  
    $(".modalTraining-unlogin-clickclose").on("click", function(){

        $(".modalTraining-unlogin").removeClass('modalTraining_active');
        $("body").removeClass('lock');

    })  
    $(".modalTraining-unlogin-content-close").on("click", function(){

        $(".modalTraining-unlogin").removeClass('modalTraining_active');
        $("body").removeClass('lock');

    }) 

    $(".open-menu-pesonal-cabinet").on("click", function(){

        $(".wrapper-custom__menu").addClass('wrapper-custom__menu_show-mob');
        $("body").addClass('lock');
        $(this).addClass('d-none');
        $(".close-menu-pesonal-cabinet").removeClass('d-none');

    }) 
    $(".close-menu-pesonal-cabinet").on("click", function(){

        $(".wrapper-custom__menu").removeClass('wrapper-custom__menu_show-mob');
        $("body").removeClass('lock');
        $(this).addClass('d-none');
        $(".open-menu-pesonal-cabinet").removeClass('d-none');
    }) 

  

    $(".radioTab-labelFigure").on("click", function(even){
        even.preventDefault();
        if ($("#radioTab-userType-first").is(':checked') && $("#radioTab-userType-second").is(':checked') == false) {
            $("#radioTab-userType-first").removeAttr('checked');
            $("#radioTab-userType-second").prop('checked', "true");

        } else if ($("#radioTab-userType-second").is(':checked') && $("#radioTab-userType-first").is(':checked') == false) {
            $("#radioTab-userType-second").removeAttr('checked');
            $("#radioTab-userType-first").prop( "checked", "true");
        }
    }) 
    
    

    function add_star(){
        var select2__placeholder = document.querySelectorAll('.aboutWork-select2-with-star .select2-selection__placeholder'),
        leng_select2__placeholder = document.getElementsByClassName('aboutWork-select2-with-star').length;

        // console.log(select2__placeholder);
        if (select2__placeholder != null) {
            function createPlaceholer(a) {
                for (var i = a; i < select2__placeholder.length; i++) {
                    select2__placeholder[i].innerHTML = `<span class="span-into-placeholder span-into-placeholder_text">Выберите из списка</span>
                                                            <span class="span-into-placeholder span-into-placeholder_star">+1 звезда</span>`;
                    
                }
            }
            createPlaceholer(0);
        }
    }


    setTimeout(add_star, 1);


    isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
      };


    if (isMobile.any()) {
        var printBtn = document.querySelectorAll(".linkPrint");

        $(printBtn).addClass("hide");
    }









// test массив




    


    
});




