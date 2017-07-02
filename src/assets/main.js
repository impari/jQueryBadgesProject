$(function() {
  // your code will go here
  $.ajax({
    url: 'https://www.codeschool.com/users/sergiocruz.json',
  	dataType: 'jsonp',
  	success: function(response){
  		console.log(response.courses.completed);
  		debugger
  		addDynamicData(response.courses.completed);
  	}
  });

  addDynamicData = function(course){
 	var $badges = $("#badges");
  	for(var i=0; i<course.length;i++){
  		
  		var $course = $("<div />", {
  			'class':'course'
  		}).appendTo($badges);

  		$('<h3 />', {
  			text: course[i].title
  		}).appendTo($course);

  		$('<img />',{
  			src: course[i].badge
  		}).appendTo($course);

  		$('<a />', {
  			'class': 'btn btn-primary',
  			'target': '_blank',
  			 href: course[i].url,
  			 text: 'See Course'
  		}).appendTo($course);
  	}
  };

});



