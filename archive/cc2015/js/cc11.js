function TalkAbstracts() {
	$(".abstracts").hide();
	$(".talks").click(function() {
		//$(".abstracts").hide();
		$(document).find("#abstract" + this.id).toggle();
	});
}

function SideEvents() {
	$(".event").hide();
	$("#event1").show();
	$(".btn").click(function() {
    	$(".event").hide();
    	$(document).find("#event" + this.id).toggle();
	});	
}