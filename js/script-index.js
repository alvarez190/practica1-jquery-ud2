var element = $('p');
var text = element.text();
var array = text.split(" ");

for (let i = 0; i < array.length; i++) {
    if (array[i] == "" || array[i] == "↵") {
        array.pop(array[i]);
    }
}

$(document).ready(function() {
    $('p').text("");
    for (let i = 0; i < array.length; i++) {
        let word = $("<b>" + array[i] + " </b>");
        $('p').append(word);
    }

    $('b').click(function() {
        $(this).css("background-color", "yellow");
    });
});