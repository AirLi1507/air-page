const isDarkMode = () => 
    window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

let currentMode = isDarkMode ? 1 : 0;

function switchMode(mode) {
    if (mode === 0) {
        currentMode = 0;
        document.querySelector('nav').classList.add('navLight');
        $('.background').removeClass('bgDark').addClass('bgLight');
        $('.borderDark').removeClass('borderDark').addClass('borderLight');
        $('.translucentDarkBg').removeClass('translucentDarkBg').addClass('translucentLightBg');
        $('#switch').children().attr('name','moon-outline');
        $('#switch').css({
            backgroundColor : '#0a141c',
            color: '#def8fc'
        }).attr('onclick', 'switchMode(1)');
    } else {
        currentMode = 1;
        document.querySelector('nav').classList.remove('navLight');
        $('.background').removeClass('bgLight').addClass('bgDark');
        $('.borderLight').addClass('borderDark').removeClass('borderLight');
        $('.translucentLightBg').removeClass('translucentLightBg').addClass('translucentDarkBg');
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