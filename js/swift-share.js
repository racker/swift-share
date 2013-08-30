
+function() {

	$("#content").html("Document Loaded!");	

}();

// Create Namespace
var swift = swift || {};

// Creates encryption class
swift.encryption = function(options) {

	var me = {};
	
	me.myName = "Javascript is awesome!";

	me.myFunction = function() {
		// Returns our variable defined above
		return(me.myName);
	}
	
	me.somethingElse = function() { 
		// Calls the function we created above:
		console.info(me.myFunction()); 
	}
	
	return(me);

}({youcanpass:"optionsHere"});

swift.encryption.somethingElse();
