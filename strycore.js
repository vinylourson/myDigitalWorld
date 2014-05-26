var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-12622628-2']);
_gaq.push(['_trackPageview']);

(function() {
var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();
var base_height = window.innerHeight;
var background_pos = 17700 - base_height + 20;
var barrell_roll = 0;
var last_angle = 0;
var supportsOrientationChange = "onorientationchange" in window,
    orientationEvent = supportsOrientationChange ? "orientationchange" : "resize";

window.addEventListener(orientationEvent, function() {
    var angle = window.orientation;
    if (last_angle == 0 && angle == -90 && barrell_roll == 0) {
        barrell_roll = 1;
    }
    if (last_angle == -90 && angle == 0 && barrell_roll == 1) {
        barrell_roll = 2;
    }
    if (last_angle == 0 && angle == 90 && barrell_roll == 2) {
        barrell_roll = 0;
        setTimeout(start_longcat, 100);
    }

    last_angle = angle;
}, false);
function contra(pattern, fn) {
    var input = "";
    $(document).keydown(function(e) {
        if(pattern.indexOf(e.keyCode) !== -1){
            input += e.keyCode;
            if(input.indexOf(pattern) !== -1){
                fn();
                input = "";
            }
        } else {
            input = "";
        }
    });
}
function start_longcat()
{
    var audio_tag = $("<audio>").attr({
        id: "gradius-song",
        src : "/music/gradius3.ogg",
        autoplay: "autoplay",
        controls: "controls"}).appendTo('#content').hide();
    $(".content").css("background-image", "url('images/longcat.jpg')");
    $(".content").css("background-repeat", "no-repeat");
    $(".content").css("background-position", "25px -"+background_pos+"px");
    $('#content *').hide();
    setInterval(scroll_longcat, 11);
}

function scroll_longcat()
{
    if (background_pos > 0) {
        background_pos = background_pos - 2;
        $(".content").css("background-position", "25px -"+background_pos+"px");
    }
}

function puppies_run()
{
  x_pos = $("#puppies").position().left;
  if (x_pos > 2000) {
    x_pos = -500;
  }
  $("#puppies").css("left", x_pos + 2);
}
contra("38384040373937396665", function() { window.location.href="anims/hey.swf"; });
contra("80858080736983", function() {
  window.setInterval(puppies_run, 15);
});

contra("76797871676584", function() {
        setTimeout(start_longcat, 100);
});

window.navigator.vibrate([100, 100, 100, 100, 100, 100, 100]);


