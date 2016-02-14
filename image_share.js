if (Meteor.isClient) {
	var img_data = [{
		img_src:"laptops.jpg",
		img_alt:"some laptops"
	},{
		img_src:"work.gif",
		img_alt:"kermit working"
	},{
		img_src:"carnival-2016.jpg",
		img_alt:"osos facld carnival oruro"
	}];
	Template.images.helpers({images:img_data});
	
	Template.images.events({
		'click .js-image': function(event){
			//alert("hello images");
			//console.log(event);
			$(event.target).css("width", "50px");
		}
	});
}

if (Meteor.isServer) {
	console.log("I am the server");	
}
