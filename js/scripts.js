$(document).ready(function() {
  $("#blanks form").submit(function(event) {

    var nameInput=$("input#name").val();
    var cityInput=$("input#city").val();
    var petInput=$("input#pet").val();
    var foodInput=$("input#food").val();

    $(".name").text(nameInput);
    $(".city").text(cityInput);
    $(".pet").text(petInput);
    $(".food").text(foodInput);

    $("#story").show();

    event.preventDefault();
  });
});
