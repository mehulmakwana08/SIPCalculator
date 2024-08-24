document.addEventListener('DOMContentLoaded', function () {
    var myRange = document.getElementById('myRange');
    var slidervalue = document.getElementById('slidervalue');

    // Check if the elements exist before accessing their properties
    if (myRange && slidervalue) {
        // Initialize red value
        slidervalue.value = 0;

        // Event listener for range input
        myRange.addEventListener('input', function () {
            slidervalue.value = myRange.value;
        });

        // Event listener for text input
        slidervalue.addEventListener('input', function () {
            var value = parseInt(slidervalue.value);
            if (isNaN(value) || value <= 0) {
                slidervalue.value = '';
                myRange.value = 0;
            } else if (value > 10000000) {
                slidervalue.value = '10000000';
                myRange.value = 10000000;
            } else {
                myRange.value = value;
            }
        });
    } else {
        console.error('One or both of the elements "myRange" and "slidervalue" not found in the DOM.');
    }
});
