// var m;
$(document).ready(function () {
    // $.getJSON('scratch.json', function (data) {
    //     console.log(data);
    //     m = data;
    //     eeee();
    // });
    //
    // function eeee() {
    //     for (rr in m) {
    //         console.log(rr + ' = ' + m[rr]);
    //     }
    //
    // };


    $.post(
        'ser.php',
        {
            'num1': 3,
            'num2': 5
        },
        function (data) {
            alert(data);
        }
    );


});

