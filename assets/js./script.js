// adding date and live clock to header
var dailyClock = setInterval(() => {
    $('#currentDay').text(moment().format('ddd MM/DD - hh:mm:ss a'))
}, 1000);

// function to update colors. 
function colorUpdate(){
// first we will grab the each timeblock individually. 
var timeBlock = $('.row');
var currentTime = parseInt(moment().format('H'));

    $.each(timeBlock, function() {
            var dataTimeAttr = $(this).attr('data-time');
            var textAreaEl = $(this).children('textarea');// points to the textarea in the current timeblock
            
            
            if (dataTimeAttr == currentTime) { // if the timeblock represents the current time switch it's color to match
                textAreaEl.addClass('present');
            } else if (dataTimeAttr < currentTime) { // if the timeblock represents a time that has already passed, switch it's color to match
                textAreaEl.addClass('past');
            } else {
                textAreaEl.addClass('future');
            };
        });
    }

colorUpdate();

// lets run the colorUpdate() every second. 
setInterval(() => {
    colorUpdate(); 
 }, 1000);


var input_text = document.querySelector('.inputT');
var output_text = document.querySelector('.savedT');
var saveBttn = document.querySelector('.saveBtn')

saveBttn.addEventListener('click', updateText);

output_text.textContent = localStorage.getItem('content');
input_text.value = localStorage.getItem('content');

function updateText() {
    localStorage.setItem('content', input_text.value);

    output_text.textContent = input_text.value;
};