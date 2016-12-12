(function() {

  var nameText = $("#my-name");
  var emailText = $("#my-email");
  var probText = $("#my-problem");

  $("#survey1").change(function() {
    console.log(nameText.val(), emailText.val(), probText.val());
    if (nameText.val() === "" ||
        emailText.val() === "" ||
        probText.val() === ""
      ) {
      $("#submit").attr("disabled", true);
    } else {
      $("#submit").attr("disabled", false);
    }
  });

  $("#clear").click(function() {
    $("#submit").attr("disabled", true);
  });

}());


