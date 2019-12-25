$(document).ready(function () {
    $('#formid').submit(function (e) {

        var firstname = $('#firstname').val();
        var mobileno = $('#mobileno').val();
        var email = $('#email').val();
        // var male = $('#male').val();
        // var female = $('#female').val();

        var name_regex = /^[a-zA-Z]{4,}$/;
        var email_regex = /^[a-zA-Z0-9.-]+@[a-zA-Z0-9.-]+.[a-zA-z0-9]{2,4}$/;
        var mobile_regex = /^[0-9]{10}$/;


        if (firstname.length == "") {
            $('#p1').text('This field is required');
			$('#firstname').css('border-color', 'red');
        }
        if (mobileno.length == "") {
            $('#p2').text('This field is required');
			$('#mobileno').css('border-color', 'red');

        }
        if (email.length == "") {
            $('#p3').text('This field is required');
			$('#email').css('border-color', 'red');

        }
        if ($(".gender:checked").length > 1 || $(".gender:checked").length == 0){
            $('#p4').text('Please select your gender');
			
          }
        return false;
    });

   
    var email_regex = /^[a-zA-Z0-9.-]+@[a-zA-Z0-9.-]+.[a-zA-z0-9]{2,4}$/;
    var mobile_regex = /^[0-9]{10}$/;
    var name_regex = /^[a-zA-Z]{4,}$/;
    $("#firstname").on({

        blur: function () {
            if (!$("#firstname").val().match(name_regex) || $("#firstname").val().length == 0) {
                $('#firstname').css('border-color', 'red');
                $('#p1').text(" For your name please use alphabets only and min 4 chars");
                return false;
            }
        },
        keyup: function () {
            if($("#firstname").val().match(name_regex)) {
                $('#firstname').css('border-color', 'green');
                $('#p1').text("");
                return true;
            }

        }

    });

    $("#mobileno").on({

        blur: function () {
            if ((!$("#mobileno").val().match(mobile_regex)) || ($("#mobileno").val().length == 0)) {
                $('#mobileno').css('border-color', 'red');
                $('#p2').text("Please enter valid mobileno");
                return false;
            }
        },
        keyup: function () {
            if($("#mobileno").val().length==10 && $("#mobileno").val().match(mobile_regex)) {
                $('#mobileno').css('border-color', 'green');
                $('#p2').text("");
                return true;
            }

        }

    });

    $("#email").on({

        blur: function () {
            if (!$("#email").val().match(email_regex) || $("#email").val().length == 0) {
                $('#email').css('border-color', 'red');
                $('#p3').text(" Please enter valid mail id");
                return false;
            }
        },
        keyup: function () {
            if($("#email").val().match(email_regex)) {
                $('#email').css('border-color', 'green');
                $('#p3').text("");
                return true;
            }

        }

    });

    $(".gender").on({

        blur: function () {
            if ($(".gender:checked").length == 0 || $(".gender:checked").length > 1) {
               
                $('#p4').text(" Please select your gender");
                return false;
            }
        },
        click: function () {
            if($(".gender:checked").length!==0) {
               
                $('#p4').text("");
                return true;
            }

        }

    });
  


    // $("#firstname").keyup(function(){
    //    if($("#firstname").val().length>3){
    //                      $('#firstname').css('border-color', 'green');
    //                    $('#p1').text("");
    //    }
                     
    // });
    


});