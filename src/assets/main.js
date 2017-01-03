$(function() {
var url = 'https://codeschool.pluralsight.com/users/2136740.json';
  $.ajax({
    url:url,
    dataType: 'jsonp',
    success: function(){
      console.log('successfully retrieved report card');
    }
  })

});
