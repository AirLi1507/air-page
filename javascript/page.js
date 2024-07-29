
function page(number) {
    if (number == 0) {
        $('.cards').fadeOut(200);
        console.log('Stage 0 - Unload other cards');
        setTimeout(() => {
            $('main').load("pages/home");
        }, 300);
        console.log('Stage 1 - Loading page: Home');

        setTimeout(() => {
            $('#card1').fadeIn(300);
            loadNeofetch();
            console.log('Stage 2 - Fading in page "Home" Card1');

        }, 600);
        setInterval(() => {
            $('#options').fadeIn(300);
            $('#options').css('display','flex');
            console.log('Stage 3 - Fading in page "Home" Card1 Options List');  
        }, 4250);
    } else if (number == 1) {
        $('main').load("pages/blog");
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