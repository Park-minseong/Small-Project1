var es_step = "Expo.ease";

$(window).load(function(){


    if ($('.make-timer').length>0) {
        setInterval(function() { makeTimerInterval(); }, 1000);
    }

})

function makeTimerInterval() {
    $('.make-timer').each(function (i,e) {
        makeTimer(e)
    })
}

function makeTimer(e) {
    var endTime = new Date($(e).attr('data-end-time'));
        endTime = (Date.parse(endTime) / 1000);

        var now = new Date();
        now = (Date.parse(now) / 1000);

        var timeLeft = endTime - now;

        if (timeLeft > 0) {
            var hours = Math.floor((timeLeft) / 3600);
            var minutes = Math.floor((timeLeft - (hours * 3600 )) / 60);
            var seconds = Math.floor((timeLeft - (hours * 3600) - (minutes * 60)));

            if (hours < "10") { hours = "0" + hours; }
            if (minutes < "10") { minutes = "0" + minutes; }
            if (seconds < "10") { seconds = "0" + seconds; }

            $(e).find(".hours").html(hours);
            $(e).find(".minutes").html(minutes);
            $(e).find(".seconds").html(seconds);
        }else{
            $(e).find(".hours").html(0);
            $(e).find(".minutes").html(0);
            $(e).find(".seconds").html(0);
        }

}


