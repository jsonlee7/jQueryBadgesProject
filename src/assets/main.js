$(function() {
  $.ajax({
    url:'https://codeschool.pluralsight.com/users/2136740.json',
    dataType: 'jsonp',
    success: function(response){
      var badges = $('#badges');
      response.courses.completed.forEach(function(course){
        console.log('course',course);
      var $course =  $('<div />', {
          'class' : 'course'
        }).appendTo(badges);
        
      $('<h3 />', {
        text: course.title
      }).appendTo($course);
      
      $('<img />', {
        src: course.badge
      }).appendTo($course);
      
      $('<a />', {
        href: course.url,
        target: '_blank',
        class: 'btn btn-primary',
        text: 'See Course'
      }).appendTo($course);
        
      });            
    }
  })

});
