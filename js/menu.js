$(document).ready(function () {
    $('#btn-menu').click(function (e) {
        e.preventDefault()
        $('#menu').toggle('slow')
    })

    $('a').click(function (e) {
        e.preventDefault()
            $('#home').hide();
            $('#about').hide();
            $('#action').hide();
            $('#contact').hide();
        
            let url = $(this).attr('href')
            $('#' + url).show()
        
    })
    })