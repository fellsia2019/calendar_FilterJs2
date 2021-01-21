
window.addEventListener("load", function() {

var objCalendar = {
        0: {'bg': `background-image:url('/local/templates/alcon/images/for-specialists2/5.png')`},
        1: {'pos': "город-местоположение"},
        2: {'date': 'дата'},
        3: {'title': 'заголовок'},
        4: {'titleHref': '#test'},
        5: {'btn': 'кнопка'},
        6: {'typeEvent': 'тип мероприятия'},
        7: {'status': 'статус'},


    };
    var btn_reg = document.querySelector("#id2 .open-modal-modal-unLogin"),
        bgItm = document.querySelector("#id2 .officeCard-item__bg"),
        Itm = document.querySelector("#id2 .officeCard-item"),
        posItm = document.querySelector("#id2 .officeCard-item__header-category"),
        typeEventItm = document.querySelector("#id2 .officeCard-item__header-date"),
        titleItm = document.querySelector("#id2 .officeCard-item__main-link");

    var divEx = document.createElement("div");
    divEx.className = "officeCard-item";
    // console.log(divEx);

    var Itm_bg;
    var Itm_status ;
    var Itm_typeEvent ;
    var Itm_pos ;
    var Itm_date ;
    var Itm_title ;
    var Itm_btn ;

    for (var k in objCalendar) {
        // console.log(k + objCalendar[k]);
        var arr = (objCalendar[k]);
        // console.log(arr);
        for (var j in arr) {
            // console.log(arr[j]);

            if(arr[j] == arr.bg){
                // console.log(j + ': ' + arr[j])

                function fncItm_bg(){
                    divItm_bg = `${arr[j]}`;
                    Itm_bg = divItm_bg;
                }
                fncItm_bg();
            }
            else if(arr[j] == arr.status){
                // console.log(arr[j])

                function fncItm_status(){
                    divStatus = `${arr[j]}`;
                    Itm_status = divStatus;
                }
                fncItm_status();
            }
            else if(arr[j] == arr.typeEvent){
                // console.log(arr[j])

                function fncItm_status(){
                    divTypeEvent = `${arr[j]} `;
                    Itm_typeEvent = divTypeEvent;
                }
                fncItm_status();
            }
            else if(arr[j] == arr.pos){
                // console.log(arr[j])

                function fncItm_pos(){
                    divPos = `${arr[j]} `;
                    Itm_pos = divPos;
                }
                fncItm_pos();
            }
            else if(arr[j] == arr.date){
                // console.log(arr[j])

                function fncItm_date(){
                    divDate = `${arr[j]} `;
                    Itm_date = divDate;
                }
                fncItm_date();
            }
            else if(arr[j] == arr.title){
                // console.log(arr[j])

                function fncItm_title(){
                    divTitle = `${arr[j]} `;
                    Itm_title = divTitle;
                }
                fncItm_title();
            }
            else if(arr[j] == arr.btn){
                // console.log(arr[j])

                function fncItm_btn(){
                    divBtn = `${arr[j]} `;
                    Itm_btn = divBtn;
                }
                fncItm_btn();
            }
        }
    } 
    function createDiv(status, typeEvent, pos, date){

        if (status !== undefined) {
            // alert('undefined1');
            // status
            Itm_status = status;
        }
        if (typeEvent !== undefined) {
            // alert('undefined2');
            // status
            Itm_typeEvent = typeEvent;
        }
        if (pos !== undefined) {
            // alert('undefined3');
            // status
            Itm_pos = pos;
        }
        if (date !== undefined) {
            // alert('undefined4');
            // status
            Itm_date = date;
        }

        var div = `
                <div class="officeCard-item">
                        <div class="officeCard-item__bg" style="${Itm_bg}" >
                            <div class="officeCard-item__stars">
                                <p class="officeCard-item__stars-text 
                                color-white openSans16 openSans-normal">
                                    ${Itm_status}
                                </p>
                                <p class="officeCard-item__stars-text 
                                color-white openSans16 openSans-normal">
                                    ${Itm_typeEvent}
                                </p>
                            </div>
                        </div>
                        <div class="officeCard-item__header ">
                            <p class="officeCard-item__header-category openSans12 openSans-normal color-secondary">
                                ${Itm_pos}
                            </p>
                            <time class="officeCard-item__header-date openSans12 openSans-normal color-secondary">
                                ${Itm_date}
                            </time>
                        </div>
                        <div class="officeCard-item__main">
                            <a href="#" class="officeCard-item__main-link openSans16 color-black openSans-bold">
                                ${Itm_title}
                            </a>
                        </div>
                        <div class="officeCard-item__main-btns btn">
                            <button type="button" class="officeCard-item__main-btn openSans14 color-white openSans-semiBold btnEX btnEX-nr btnEX-primary open-modal-modal-unLogin">
                                ${Itm_btn}
                            </button>
                        </div>
                </div>
        `;
        // console.log(div);
        $('#id2').html(div);

    }
    // createDiv('Новое!', 'Семинар', 'Москва', '2021 март');
    // createDiv('Новое!', 'Семинар', 'Новосибирск', '2021 март');

    var Select_pos_Moscow = document.querySelector("#officeTabs-4001"),
        Select_pos_Novosib = document.querySelector("#officeTabs-4002");
    
    var Select_status_online = document.querySelector("#officeTabs-3001"),
        Select_status_offline = document.querySelector("#officeTabs-3002");

    var positionTest = document.querySelectorAll(".officeCard-item__header-category"),
        status_offline_or_online = document.querySelectorAll("#officeCard-item_status");


    var msk ;
    var novosib;


    
    if (Select_pos_Moscow != null) {

    var online ;
    var ofline;
    }
    function add_status_block() {
        for (var i in status_offline_or_online) {
            function is_online() {
                
                if (status_offline_or_online[i].innerText === "Онлайн") {
                    var i_online = status_offline_or_online[i].innerText;
                    online = i_online;
                    var elt = status_offline_or_online[i].closest(".officeCard-item");
                    elt.classList.add("block_online");
                    return true;
                } else if (status_offline_or_online[i].innerText === "Оффлайн") {
                    var i_online = status_offline_or_online[i].innerText;
                    online = i_online;
                    var elt = status_offline_or_online[i].closest(".officeCard-item");
                    elt.classList.add("block_offline");
                    return true;
                }
            }
            is_online();
        }
        for (var i in positionTest) {
         
            function is_msk() {
                if (positionTest[i].innerText === "Москва") {
    
                  var i_msk = positionTest[i].innerText;
                  msk = i_msk;
                  var elt = positionTest[i].closest(".officeCard-item");
                  elt.classList.add("block_msk");
                //   elt.classList.remove("block_hide");
                  return true;
    
                } else if (positionTest[i].innerText === "Новосибирск") {
                    var i_novosob = positionTest[i].innerText;
                    novosib = i_novosob;
                    var elt = positionTest[i].closest(".officeCard-item");
                    elt.classList.add("block_novosib");
                    // elt.classList.remove("block_hide");
                    return true;
                }
            }
            is_msk();
        }
    }
    
    function filter_test_1() {
    var online_msk = document.querySelectorAll(".officeCard-item.block_online.block_msk"),
        offline_msk = document.querySelectorAll(".officeCard-item.block_offline.block_msk"),
        offline_novosib = document.querySelectorAll(".officeCard-item.block_offline.block_novosib"),
        online_novosib = document.querySelectorAll(".officeCard-item.block_online.block_novosib"),
        all_i = document.querySelectorAll(".officeCard-item");

    function selectStatus() {
        if (Select_status_online.checked && Select_pos_Moscow.checked) {
            $(all_i).addClass('hide');
            $(online_msk).removeClass('hide');

        } else if (Select_status_online.checked && Select_pos_Novosib.checked) {
            $(all_i).addClass('hide');
            $(online_novosib).removeClass('hide');

        } else if (Select_status_offline.checked && Select_pos_Novosib.checked) {
            $(all_i).addClass('hide');
            $(offline_novosib).removeClass('hide');

        }  else if (Select_status_offline.checked && Select_pos_Moscow.checked) {
            $(all_i).addClass('hide');
            $(offline_msk).removeClass('hide');
        } 
    }
    selectStatus();

    $('.officeTabs-header__item-input').change(function() {
        setTimeout(selectStatus, 2);
    });
}
    // setTimeout(filter_test_1, 1);



    // Отображение табов при чек в селекте

    
    
    function clear_class_i(item) {

        var all_i = document.querySelectorAll(item);

        // var all_i = document.querySelectorAll(".officeCard-item");
        // all_i = item;
        if ( document.getElementById('aboutWork-select2-typeEvent')[ document.getElementById('aboutWork-select2-typeEvent').selectedIndex ].value === "По месту") {
            $(".eventsCalendar-body__tabs-item").addClass("hide");
            $("#filter-geo-pos").removeClass("hide");
            $(all_i).attr('class', 'officeCard-item fade');
            add_status_block();
            setTimeout(filter_test_1, 1);

         } else if ( document.getElementById('aboutWork-select2-typeEvent')[ document.getElementById('aboutWork-select2-typeEvent').selectedIndex ].value === "По типу") {
            $(".eventsCalendar-body__tabs-item").addClass("hide");
            $("#filter-type").removeClass("hide");
            $(all_i).attr('class', 'officeCard-item fade');
            setTimeout(filter_test_3,2);

         } else if ( document.getElementById('aboutWork-select2-typeEvent')[ document.getElementById('aboutWork-select2-typeEvent').selectedIndex ].value === "По теме") {
            $(".eventsCalendar-body__tabs-item").addClass("hide"); 
            $("#filter-theme").removeClass("hide");
            $(all_i).attr('class', 'officeCard-item fade');
            setTimeout(filter_test_2, 1)
           
          }

    }
    clear_class_i();


      $('.aboutWork-select2__select').change(function() {
        clear_class_i('.officeCard-item');

      })
        
    });
      

// по теме 
function filter_test_2(){

var itemText_theme = document.querySelectorAll("#officeCard-item_theme");

var contact_correction,
    eye_diseases,
    ophthalmosurgery;


    for (var i in itemText_theme) {
        // console.log(itemText_theme[i].innerText)
        if (itemText_theme[i].innerText === "Контактная коррекция") {
            contact_correction = itemText_theme[i];
            var elt = itemText_theme[i].closest(".officeCard-item");
            // console.log(elt)
            elt.classList.add("contact_correction");

        } else if (itemText_theme[i].innerText === "Заболевания глаз") {
            eye_diseases = itemText_theme[i];
            var elt = itemText_theme[i].closest(".officeCard-item");
            // console.log(elt)
            elt.classList.add("eye_diseases");
        } else if (itemText_theme[i].innerText === "Офтальмохирургия") {
            ophthalmosurgery = itemText_theme[i];
            var elt = itemText_theme[i].closest(".officeCard-item");
            // console.log(elt)
            elt.classList.add("ophthalmosurgery");
        }
    }
    // console.log(contact_correction)


var tab_contactCorrection = document.querySelector("#officeTabs-1001"),
    tab_eyeDiseases = document.querySelector("#officeTabs-1002"),
    tab_ophthalmosurgery = document.querySelector("#officeTabs-1003"),
    item_contactCorrection = document.querySelectorAll(".officeCard-item.contact_correction"),
    item_eyeDiseases = document.querySelectorAll(".officeCard-item.eye_diseases"),
    item_ophthalmosurgery = document.querySelectorAll(".officeCard-item.ophthalmosurgery");
   



    function checked() {
        var all_i = document.querySelectorAll(".officeCard-item"); 
        if (tab_contactCorrection.checked) {
            $(all_i).addClass("hide");
            $(item_contactCorrection).removeClass("hide")

        } else if (tab_eyeDiseases.checked) {
            $(all_i).addClass("hide");
            $(item_eyeDiseases).removeClass("hide")

        } else if (tab_ophthalmosurgery.checked) {
            $(all_i).addClass("hide");
            $(item_ophthalmosurgery).removeClass("hide")

        }
    }
    setTimeout(checked, 2)
    // checked();

   $('.officeTabs-header__item-input').change(function() {
    setTimeout(checked, 2)
    });

}
// setTimeout(filter_test_2,1);

// по типу


function filter_test_3() {
    var item_typeEvent = document.querySelectorAll("#item-typeEvent");

    for (var i in item_typeEvent) {
        if (item_typeEvent[i].innerText === "Семинар" || item_typeEvent[i].innerText === 'Вебинар') {
            var elt = item_typeEvent[i].closest(".officeCard-item");
            elt.classList.add("seminar");
            
        } else if (item_typeEvent[i].innerText === "Конференции") {
            var elt = item_typeEvent[i].closest(".officeCard-item");
            elt.classList.add("conferences");
        } else if (item_typeEvent[i].innerText === "Мероприятия НМО") {
            var elt = item_typeEvent[i].closest(".officeCard-item");
            elt.classList.add("other_events");
        }
    }

    var tab_seminar = document.querySelector("#officeTabs-2001"),
        tab_conferences = document.querySelector("#officeTabs-2002"),
        tab_otherEvents = document.querySelector("#officeTabs-2003"),
        item_seminar = document.querySelectorAll(".officeCard-item.seminar"),
        item_conferences = document.querySelectorAll(".officeCard-item.conferences"),
        item_otherEvents = document.querySelectorAll(".officeCard-item.other_events");



    function checked() {
        var all_i = document.querySelectorAll(".officeCard-item"); 
        if (tab_seminar.checked) {
            $(all_i).addClass("hide");
            $(item_seminar).removeClass("hide")

        } else if (tab_conferences.checked) {
            $(all_i).addClass("hide");
            $(item_conferences).removeClass("hide")

        } else if (tab_otherEvents.checked) {
            $(all_i).addClass("hide");
            $(item_otherEvents).removeClass("hide")

        }
    }
    setTimeout(checked, 22)
    // checked();

   $('.officeTabs-header__item-input').change(function() {
    setTimeout(checked, 2)
    });


}
// setTimeout(filter_test_3,2);