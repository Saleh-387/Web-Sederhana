var css = 'ul { top:70px; }',
    css2 = 'ul { top: 79px; }',
    body = document.body || document.getElementsByTagName('ul'),
    style = document.createElement('style');

window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop  || document.documentElement.scrollTop ) {
        document.getElementById("navbar").style.padding = "0px";
        document.getElementById("navbar").style.background = "rgba(255, 255, 255, 0.9)";
        if (window.matchMedia("(max-width: 660px)")) {
            body.appendChild(style);

            style.type = 'text/css';
            if (style.styleSheet) {
                // This is required for IE8 and below.
                style.styleSheet.cssText = css;
            } else {
                style.appendChild(document.createTextNode(css));
            }

        }
    } else {
        document.getElementById("navbar").style.padding = "4px";
        document.getElementById("navbar").style.background = "rgba(255, 255, 255)";
        if (window.matchMedia("(max-width: 660px)")) {
            body.appendChild(style);

            style.type = 'text/css';
            if (style.styleSheet) {
                // This is required for IE8 and below.
                style.styleSheet.cssText = css2;
            } else {
                style.appendChild(document.createTextNode(css2));
            }
        }
    }

}