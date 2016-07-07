$(document).ready(function() {
  console.log('dom ready');

  var basic = function() {
  $("#basic-calc").click(function() {
    console.log("click");
    $('#basic-answer-alert').html(function() {
      if ($('#basic-operation option:selected').val() == "+") {
        console.log("test");
        return +($("#basic-num-1").val()) + +($("#basic-num-2").val());
      }
      if ($('#basic-operation option:selected').val() == "*") {
        console.log("test");
        return +($("#basic-num-1").val()) * +($("#basic-num-2").val());
      }
      if ($('#basic-operation option:selected').val() == "-") {
        console.log("test");
        return +($("#basic-num-1").val()) - +($("#basic-num-2").val());
      }
      if ($('#basic-operation option:selected').val() == "/") {
        console.log("test");
        return +($("#basic-num-1").val()) / +($("#basic-num-2").val());
      }
    });
  });
};

  $('#trip-calc').click(function() {
    $('#trip-answer-alert').html(function() {
      console.log("click2");
      if ($('#trip-speed').val() < 60) {
        return +$('#trip-distance').val() / +$('#trip-mpg').val() * +$('#trip-cost').val();
      } else {
        var speed1 = +$('#trip-speed').val() - 60;
        var speed2 = speed1 * 2;
        var speeding = +$('#trip-mpg').val() - speed2;
        var speeding2 = +$('#trip-distance').val() / speeding;
        return +$('#trip-cost').val() * speeding2;
      }
    });
  });

  $('#bmi-calc').click(function() {
    $('#bmi-answer-alert').html(function() {
      var height2 = +$('#bmi-height').val() * +$('#bmi-height').val();
      return $('#bmi-mass').val() / height2 * 703;
    });
  });

  $('#mortgage-calc').click(function() {
    $('#mortgage-answer-alert').html(function() {
      var loanTimesApr = +$('#mortgage-loan').val() * +$('#mortgage-apr').val();
      var onePlusApr = 1 + +$('#mortgage-apr').val();
      var term = +$('#mortgage-term').val();
      var toThePowerTerm = Math.pow(onePlusApr, term);
      var minusOne = toThePowerTerm - 1;
      return loanTimesApr * toThePowerTerm / minusOne;
    });
  });

// bonus
var hideCalc = function(){
  $('#basic-answer-alert').hide();
};
var showCalc = function() {
  $('#basic-answer-alert').show();
};
var hideTrip = function(){
  $('#trip-answer-alert').hide();
};
var showTrip = function(){
  $('#trip-answer-alert').show();
};
var hideBmi = function(){
  $('#bmi-answer-alert').hide();
};
var showBmi = function(){
  $('#bmi-answer-alert').show();
};
var showMortgage = function(){
  $('#mortgage-answer-alert').show();
};
var hideMortgage = function(){
  $('#mortgage-answer-alert').hide();
};



$('fieldset:eq(0)').mouseenter(showCalc).mouseleave(hideCalc);
$('fieldset:eq(1)').mouseenter(showTrip).mouseleave(hideTrip);
$('fieldset:eq(2)').mouseenter(showBmi).mouseleave(hideBmi);
$('fieldset:eq(3)').mouseenter(showMortgage).mouseleave(hideMortgage);




});
