
function page(number) {
    if (number == 0) {
        $('.cards').fadeOut(200);
        setTimeout(() => {
            $('main').load("pages/home");
            switchMode(currentMode);
        }, 300);

        setTimeout(() => {
            $('#card1').fadeIn(300);
            loadNeofetch();
        }, 600);
        setTimeout(() => {
            $('#options').fadeIn(300);
            $('#options').css('display','flex');
        }, 4250);
    } else if (number == 1) {
        $('main').load("pages/blog");
        switchMode(currentMode);
    }
}

function terminalOption(number) {
    if (number == 1) {
        $('.cards').fadeOut(400);
        setTimeout(() => {
            $('main').load("pages/readme");
        }, 600);
        setTimeout(() => {
            $('#card2').fadeIn(600);
        }, 700);
    } else if (number == 2) {
        page(1);
    } else {
        page(0);
    }
}

page(0);