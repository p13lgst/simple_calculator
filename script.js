var entry = "0";
var acumulator = 0;
var limit = 15;
var hasDot = false;
var alreadyAcumulated = false;
var operator;


$(".number").on("click", function(){
  if (entry.length < limit) {
    entry = String(Number.parseFloat(entry + $(this).html()));
    $("#entry-text").html(entry);
  }
  if (operator) {
    alreadyAcumulated = true;
  }
});

$(".operator").on('click', function(){
  if (alreadyAcumulated) {
    switch(operator) {
      case "÷":
        acumulator /= Number.parseFloat(entry);
        entry = '0';
        $("#entry-text").html(entry);
        break;
      case "×":
        acumulator *= Number.parseFloat(entry);
        entry = '0';
        $("#entry-text").html(entry);
        break;
      case "−":
        acumulator -= Number.parseFloat(entry);
        entry = '0';
        $("#entry-text").html(entry);
        break;
      case "+":
        acumulator += Number.parseFloat(entry);
        entry = '0';
        $("#entry-text").html(entry);
        break;
    }

    operator = $(this).html();

  } else {
    operator = $(this).html();
    acumulator = Number.parseFloat(entry);
    entry = "0";
    hasDot = false;
    $("#entry-text").html(entry);
  }
});

$("#dot").on("click", function(){
  if (!hasDot && entry.length < limit - 1) {
    hasDot = true;
    entry += ".";
    $("#entry-text").html(entry);
  }
});

$("#equal").on("click", function(){
  alreadyAcumulated = false;
  switch(operator) {
    case "÷":
      acumulator /= Number.parseFloat(entry);
      entry = String(acumulator);
      $("#entry-text").html(entry);
      break;
    case "×":
      acumulator *= Number.parseFloat(entry);
      entry = String(acumulator);
      $("#entry-text").html(entry);
      break;
    case "−":
      acumulator -= Number.parseFloat(entry);
      entry = String(acumulator);
      $("#entry-text").html(entry);
      break;
    case "+":
      acumulator += Number.parseFloat(entry);
      entry = String(acumulator);
      $("#entry-text").html(entry);
      break;
  }
})

$("#clear").on("click", function() {
  entry = "";
  operator = "";
  acumulator = "";
  hasDot = false;
  $("#entry-text").html(0);
});
