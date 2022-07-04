// adding date and live clock to header
setInterval(() => {
    $('#currentDay').text(moment().format('ddd MM/DD - hh:mm:ss a'))
}, 1000);


var clock = setInterval(function() {
    colorUpdate();
},1000);

// function to update colors. 
function colorUpdate(){

    var timeBlock = $('.row');
    var currentTime = parseInt(moment().format('H'));
    // var dataTimeAttr = parseInt($('.hour').attr("data-time"));
        $.each(timeBlock, function() {
            var dataTimeAttr = $(this).attr('data-time');
            var textAreaEl = $(this).children('textarea');// points to the textarea in the current timeblock
            if (dataTimeAttr == currentTime) { // if the timeblock represents the current time switch it's color to match
                textAreaEl.addClass('present');
            } else if (dataTimeAttr < currentTime) { // if the timeblock represents a time that has already passed, switch it's color to match
                textAreaEl.addClass('past');
            } else {
                textAreaEl.addClass('future');
            } 
        });
    }
colorUpdate();