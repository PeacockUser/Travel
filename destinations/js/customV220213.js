$(document).ready(function () {
    if ($(window).width() < 768) {
        $("#tabs-2").css('display', 'none');
    }
});
//$(window).resize(function () {
//    if ($(window).width() < 768) {
//        $("#tabs-2").css('display', 'none');
//    } else {
//        $("#tabs-2").css('display', 'block');
//    }
//});
//$("ul.mobile__deal_tab li").click(function (e) {
//    $("ul.mobile__deal_tab li").removeClass('active');
//    $(this).addClass('active');
//    var s = $(e.target).attr('href');
//    if (s == "#tabs-2") {
//        $("#tabs-1").css('display', 'none');
//        $("#tabs-2").css('display', 'block');
//    } else {
//        $("#tabs-2").css('display', 'none');
//        $("#tabs-1").css('display', 'block');
//    }
//});
var dd;
$(document).ready(function () {
    var curr = new Date();
    curr.setDate(curr.getDate() - 1);
    $("#currdate").text(moment(curr).format("MMM DD, YYYY") + " EST");
   
});

jQuery(function ($) {
    $(".depCal").click(function () {
        $("#datepicker").select();
    });
    $(".retCal").click(function () {
        $("#datepicker2").select();
    });
    $("#datepicker").datepicker({
        minDate: 'D',
        maxDate: '+11M',
        dateFormat: "dd M yy",
        // defaultDate: "+1w",
        //beforeShow: addCustomInformation,
        numberOfMonths: Resolution(),
        beforeShowDay: function (date) {            
            var month = date.getMonth() + 1;
            var year = date.getFullYear();
            var day = date.getDate();
            var newdate = month + "/" + day + "/" + year;

            if ($('#datepicker').val() != "" && $('#datepicker').val() != undefined && dd == undefined) {
                dd = $('#datepicker').val();
            }  
            var departD = new Date(dd);
            if (departD == undefined || departD == "Invalid Date") {
                departD = new Date(moment(dd, "MMM-DD-YYYY").format("MMM DD YYYY"));
            }
            var returnD = new Date($('#datepicker2').val());
            if (returnD == undefined || returnD == "Invalid Date") {
                returnD = new Date(moment($('#datepicker2').val(), "MMM-DD-YYYY").format("MMM DD YYYY"));
            }
            

            if (departD < new Date(newdate) && new Date(newdate) < returnD) {
                return [true, 'highlight'];
            } else if (moment(departD).format("DD-MM-YYYY") == moment(new Date(newdate)).format("DD-MM-YYYY")) {
                return [true, 'calender-highlight start'];
            }
            else if (moment(returnD).format("DD-MM-YYYY") == moment(new Date(newdate)).format("DD-MM-YYYY")) {
                return [true, 'calender-highlight end'];
            }
            return [true, ''];
        },
        onClose: function (selectedDate) {            
            var s;
            if (selectedDate.indexOf(' ') > -1) {
                s = selectedDate.split(' ');
            }
            else {
                s = selectedDate.split('-');
            }

            //if (s[3] == undefined) {
            //    var selectedDate = selectedDate;
            //    return false;
            //} else {
                if ($('input[name="trip-type"]:checked').val() == 'return') {
                    $("#datepicker2").datepicker('enable');
                }
               // var selectedDate = s[0] + ' ' + s[1] + ' ' + s[2] + ' ' + s[3];
                 
            //}

            var depdate = moment(selectedDate).format("MMM-DD-YYYY");// s[1] + '-' + s[0] + '-' + s[2];
            if (depdate == undefined || depdate.indexOf("Invalid") > -1) {
                depdate = selectedDate;
            }
            $('#depDt').val(depdate);
            $('#DdepDt').val(depdate);
            var d_dat = s[0] + ' ' + s[1] + ' ' + s[2];
            dd = d_dat;
            $('#datepicker').val(depdate);
            //$('#datepicker_label').html(s[1] + '-' + s[3]);            
            
            $("#datepicker2").datepicker("option", "minDate", moment(depdate,"MMM-DD-YYYY").format("DD MMM YYYY"));
            if ($('input[name="trip-type"]:checked').val() == 'return') {
                $("#datepicker2").select();
            }
            return false;
        }
    });

    $("#datepicker2").datepicker({
        minDate: 'D',
        maxDate: '+11M',
        dateFormat: "dd M yy",
        // defaultDate: "+1w",
        // beforeShow: addCustomInformationR,
        numberOfMonths: Resolution(),
        beforeShowDay: function (date) {
            
            var month = date.getMonth() + 1;
            var year = date.getFullYear();
            var day = date.getDate();
            var newdate = month + "/" + day + "/" + year;
            if ($('#datepicker').val() != "" && $('#datepicker').val() != undefined && dd == undefined) {
                dd = $('#datepicker').val();
            } 
            var departD = new Date(dd);
            if (departD == undefined || departD=="Invalid Date") {
                departD =new Date(moment(dd, "MMM-DD-YYYY").format("MMM DD YYYY"));
            }
            var returnD = new Date($('#datepicker2').val());
            if (returnD == undefined || returnD == "Invalid Date") {
                returnD = new Date(moment($('#datepicker2').val(), "MMM-DD-YYYY").format("MMM DD YYYY"));
            }
            if (departD < new Date(newdate) && new Date(newdate) < returnD) {
                return [true, 'highlight'];
            } else if (moment(departD).format("DD-MM-YYYY") == moment(new Date(newdate)).format("DD-MM-YYYY")) {
                return [true, 'calender-highlight start'];
            }
            else if (moment(returnD).format("DD-MM-YYYY") == moment(new Date(newdate)).format("DD-MM-YYYY")) {
                return [true, 'calender-highlight end'];
            }
            return [true, ''];
        },        
        onClose: function (selectedDate) {
            if (selectedDate) {
                var s;
                if (selectedDate.indexOf(' ') > -1) {
                    s = selectedDate.split(' ');
                } else { s = selectedDate.split('-'); }
                var depdate = moment(selectedDate).format("MMM-DD-YYYY");// s[1] + '-' + s[0] + '-' + s[2];
                if (depdate == undefined || depdate.indexOf("Invalid") > -1) {
                    depdate = selectedDate;
                }
                $('#retDt').val(depdate);
                $('#DretDt').val(depdate);
                // var d_dat = s[0] + ' ' + s[1] + ' ' + s[2];
                $('#datepicker2').val(depdate);
              //  $('#datepicker2_label').html(s[1] + '-' + s[3]);
            } else {
                var dep_Date = $('#DretDt').val();//$('#datepicker').val();
                //var s;
                //if (dep_Date.indexOf(' ') > -1) {
                //    s = dep_Date.split(' ');
                //} else { s = dep_Date.split('-'); }
                //var nextDay = new Date(dep_Date);
                //nextDay.setDate(nextDay.getDate() + 1);
                //var depdate = moment(nextDay, 'DD MM YYYY').format('MMM-DD-YYYY');
                $('#retDt').val(dep_Date);
                $('#DretDt').val(dep_Date);
                //var d_dat = depdate;
                $('#datepicker2').val(dep_Date);
               // $('#datepicker2_label').html(s[1] + '-' + s[3]);                
            }            
            $('#datepicker2').removeClass('is-error');
            return false;
        }

    });
    function Resolution() {

        if (window.innerWidth < 768) {
            return 1;
        }
        //else if (767 < window.innerWidth && window.innerWidth < 1024) {
        //    return 2;
        //} 
        else {
            return 2;
        }
    }
    //function addCustomInformation() {
    //    setTimeout(function () { $("#title").append("<p>Departure Date</p>"); }, 200);

    //}
    //function addCustomInformationR() {
    //    setTimeout(function () { $("#title").append("<p>Return Date</p>"); }, 200);

    //}
});



