const isDarkMode = () => 
    window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

function switchMode(mode) {
    if (mode === 0) {
        document.querySelector('nav').classList.add('navLight');
        $('.background').removeClass('bgDark').addClass('bgLight');
        $('#switch').children().attr('name','moon-outline');
        $('#switch').css({
            backgroundColor : '#0a141c',
            color: '#def8fc'
        }).attr('onclick', 'switchMode(1)');
    } else {
        document.querySelector('nav').classList.remove('navLight');
        $('.background').removeClass('bgLight').addClass('bgDark');
        $('#switch').children().attr('name','sunny-outline');
        $('#switch').css({
            backgroundColor : 'aliceblue',
            color: '#0a141c'
        }).attr('onclick', 'switchMode(0)');
    }
}

if (isDarkMode()) {
    switchMode(1);
} else {
    switchMode(0);
}