
function page(number) {
    if (number == 0) {
        $('.cards').fadeOut(200);
        setTimeout(() => {
            $('main').load("pages/home");
        }, 300);
        setTimeout(() => {
            $('#card1').fadeIn(300);
        }, 600);
        setInterval(() => {
            $('#options').fadeIn(300);
            $('#options').css('display','flex');
        }, 10900);
    } else if (number == 1) {
        $('main').load("pages/blog");
    }
}

function terminalOption(number) {
    if (number == 1) {
        $('.cards').fadeOut(400);
        setTimeout(() => {
            $('main').load("pages/readme");
        }, 550);
        setTimeout(() => {
            $('#card2').fadeIn(600);
        }, 620);
    } else if (number == 2) {
        page(1);
    } else {
        window.location.reload();
    }
}

page(0);