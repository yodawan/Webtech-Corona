$(function(){

	//form submit events cannot be put in handlebars
	//each time a form is load, the event handle for submit will be overlapped over and over
	//NOT GOOD!, EXTREMELY BAD

	//if overlap 3 times, for example opening the add-contact view 3 times
	//when submmitting the form, it will be submitted 3 times
	//means there will be 3 contacts inserted
	


	//add contact form submit event
	$(document.body).on("submit", "#formadd", function(e) {

		e.preventDefault();

		//get the value from the form
		var name = $("#addname").val();
		var totalPerson = $("#addemail").val();
		var phoneNo = $("#addmobileno").val();
		var idtravel = $("#idtravel").val();
		var datetravel = $("#datetravel").val();		
		
		var obj = new Object();
	 	obj.name = name;
	 	obj.totalPerson = totalPerson;
	 	obj.phoneNo = phoneNo;
	 	obj.idtravel = idtravel;
		obj.datetravel = datetravel;
		$.ajax({
		   type: "post",
		   url: 'api/contacts',
		   contentType: "application/json",
      	data: JSON.stringify(obj),            
		   dataType: "json",
		   success: function(data){

		      if (data.insertStatus) {

		         bootbox.alert("Booking Successful");
		         		   console.log(obj);

		         //redirect to the /#contacts
		         window.location.href = "#contacts";

		      } 
		      else {
		      				         		   console.log(obj);

		         alert("Booking failed - please try again: " + data.errorMessage)
		      }
		   },
         error: function(xhr, statusText, err) {

         	if (xhr.status == 401) {
			     	//response text from the server if there is any
			     	var responseText = JSON.parse(xhr.responseText);
			     	bootbox.alert("Error 401 - Unauthorized: " + responseText.message);
			     	
					$("#loginname").html("noname");
					sessionStorage.removeItem("token");
					sessionStorage.removeItem("login");
					window.location.href = "#login";
					return;
			   }

			   if (xhr.status == 404) {
			     	bootbox.alert("Error 404 - API resource not found at the server");
			   }

         }
		});
	});

	//add contact form cancel click event
	$(document.body).on("click", "#formaddcancel", function(e) {
		window.location.href = "#contacts";
	});

	//edit contact form submit event
	$(document.body).on("submit", "#formedit", function(e) {

		e.preventDefault();

		//get the value from the form
		var name = $("#editname").val();
		var email = $("#editemail").val();
		var mobileno = $("#editmobileno").val();
		var gender = $("#editgender").val();
		var dob = $('#editdob').data('daterangepicker').startDate.format("YYYY-MM-DD");
		var id = $("#id").val();

		if (gender == -1) {
			bootbox.alert("Please select airline!");
			return;
		}

		var obj = new Object();
	 	obj.name = name;
	 	obj.email = email;
	 	obj.mobileno = mobileno;
	 	obj.gender = gender;
	 	obj.dob = dob;

		$.ajax({
         type: "put",
         url: 'api/contacts/' + id,
		   contentType: 'application/json',
      	data: JSON.stringify(obj),            
		   dataType: "json",
		   success: function(data){

            if (data.updateStatus) {

               bootbox.alert("Destination update successful");

               //redirect to the /#contacts
		         window.location.href = "#contacts/view/" + id;

            } 
            else {

               alert("Destination update failed - please try again: " + data.errorMessage)
            }
		   },
         error: function(xhr, statusText, err) {

         	if (xhr.status == 401) {
			     	//response text from the server if there is any
			     	var responseText = JSON.parse(xhr.responseText);
			     	bootbox.alert("Error 401 - Unauthorized: " + responseText.message);
			     	
					$("#loginname").html("noname");
					sessionStorage.removeItem("token");
					sessionStorage.removeItem("login");
					window.location.href = "#login";
					return;
			   }

			   if (xhr.status == 404) {
			     	bootbox.alert("Error 404 - API resource not found at the server");
			   }

         }
		});
	});

	//edit contact form cancel click event
	$(document.body).on("click", "#formeditcancel", function(e) {
		window.location.href = "#contacts";
	});

	//edit profile (user) form submit event
	$(document.body).on("submit", "#formupdateprofile", function(e) {

		e.preventDefault();

		//get the value from the form
		var name = $("#updateprofilename").val();
		var email = $("#updateprofileemail").val();
		var mobileno = $("#updateprofilemobileno").val();

		var obj = new Object();
	 	obj.name = name;
	 	obj.email = email;
	 	obj.mobileno = mobileno;

		$.ajax({
         type: "put",
         url: 'api/users',
		   contentType: 'application/json',
      	data: JSON.stringify(obj),            
		   dataType: "json",
		   success: function(data){

            if (data.updateStatus) {

               bootbox.alert("Profile update successful");

               //redirect to the /#home
		         window.location.href = "#home";

            } 
            else {

               alert("Profile update failed - please try again: " + data.errorMessage)
            }
		   },
         error: function(xhr, statusText, err) {

         	if (xhr.status == 401) {
			     	//response text from the server if there is any
			     	var responseText = JSON.parse(xhr.responseText);
			     	bootbox.alert("Error 401 - Unauthorized: " + responseText.message);
			     	
					$("#loginname").html("noname");
					sessionStorage.removeItem("token");
					sessionStorage.removeItem("login");
					window.location.href = "#login";
					return;
			   }

			   if (xhr.status == 404) {
			     	bootbox.alert("Error 404 - API resource not found at the server");
			   }

         }
		});
	});

	//profile password reset
	$(document.body).on("submit", "#formresetpassword", function(e) {

		e.preventDefault();

		//get the value from the form
		var oldpassword = $("#oldpassword").val();
		var newpassword = $("#newpassword").val();
		var repeatpassword = $("#repeatpassword").val();

		//check if newpassword !== repeatpassword
		if (newpassword !== repeatpassword) {
			bootbox.alert("New password not the same as the repeat password!");
			return false;
		}

		//check if newpassword == oldpassword
		if (newpassword === oldpassword) {
			bootbox.alert("New password is the same as old password!");
			return false;
		}

		var obj = new Object();
	 	obj.oldpassword = oldpassword;
	 	obj.newpassword = newpassword;

		$.ajax({
         type: "put",
         url: 'api/users/resetpassword',
		   contentType: 'application/json',
      	data: JSON.stringify(obj),            
		   dataType: "json",
		   success: function(data){

            if (data.updateStatus) {

               bootbox.alert("Password reset successful");

               //redirect to the /#home
		         window.location.href = "#home";

            } 
            else {

               bootbox.alert("Password reset failed [" + data.errorMessage + "] - please try again!");
            }
		   },
         error: function(xhr, statusText, err) {

         	if (xhr.status == 401) {
			     	//response text from the server if there is any
			     	var responseText = JSON.parse(xhr.responseText);
			     	bootbox.alert("Error 401 - Unauthorized: " + responseText.message);
			     	
					$("#loginname").html("noname");
					sessionStorage.removeItem("token");
					sessionStorage.removeItem("login");
					window.location.href = "#login";
					return;
			   }

			   if (xhr.status == 404) {
			     	bootbox.alert("Error 404 - API resource not found at the server");
			   }

         }
		});
	});

	//guest login form
	$(document.body).on("submit", "#loginform", function(e) {

		e.preventDefault();

		//get the value from the form
		var login = $("#loginformusername").val();
		var password = $("#loginformpassword").val();
		
	   var obj = new Object();
	   obj.login = login;
	   obj.password = password;

	   $.ajax({
	      type: "post",
	      url: 'api/auth',
	      contentType: 'application/json',      
	      data: JSON.stringify(obj),            
	      dataType: "json",
	      success: function(data){

            if (data.loginStatus) {

               bootbox.alert("Login successful");

               sessionStorage.setItem("token", data.token);

               //redirect to the /#home
		         window.location.href = "#home";

            } 
            else {

               bootbox.alert("Login failed [" + data.errorMessage + "] - please try again!");
            }
		   },
		   error: function() {
		      console.log("error");
		   }
		});
	});

	//guest register form
	$(document.body).on("submit", "#registerform", function(e) {

		e.preventDefault();

		//get the value from the form
		var login = $("#registerformusername").val();
		var password = $("#registerformpassword").val();

   	var obj = new Object();
   	obj.login = login;
   	obj.password = password; 

	   $.ajax({
	      type: "post",
	      url: 'api/registration',
	      contentType: 'application/json',      
	      data: JSON.stringify(obj),            
	      dataType: "json",
	      success: function(data){

            if (data.registrationStatus) {

               bootbox.alert("Registration successful");

               //redirect to the /#login
		         window.location.href = "#login";

            } 
            else {

               bootbox.alert("Registration failed [" + data.errorMessage + "] - please try again!");
            }
		   },
		   error: function() {
		      console.log("error");
		   }
		});

	});

	//contacts - upload photo
	$(document.body).on("submit", "#formuploadphoto", function(e) {
      e.preventDefault();
      e.stopImmediatePropagation();

      var id = $("#uploadcontactid").val();

      var x = document.getElementById("profilepic");

      if ('files' in x) {
         if (x.files.length == 0) 
            alert("no files to uploaded, please upload one before submitting!")
         else {
            var file = x.files[0];   

            var filename = file.name

            var fd = new FormData();    
            fd.append('fileToUpload', file);
            fd.append('id', id);

            $.ajax({
            	type: "post",
               url: 'api/uploadprofilepic.php',
               data: fd,
               processData: false,
               contentType: false,
               type: 'POST',
               dataType: "json",
               success: function(data){
                  if (data.uploadstatus) { 

                     bootbox.alert("New profile pic uploading - Successful!");
                        
                     $('#profilepic').val('');
                     $("#mimetype").empty();
                     $("#imageplaceholder").empty();
                     $("#currentphoto").html("<img src='img/" + data.photofilename + "' width='200'>");
                  }
               },
		         error: function(xhr, statusText, err) {

		         	if (xhr.status == 401) {
					     	//response text from the server if there is any
					     	var responseText = JSON.parse(xhr.responseText);
					     	bootbox.alert("Error 401 - Unauthorized: " + responseText.message);
					     	
							$("#loginname").html("noname");
							sessionStorage.removeItem("token");
							sessionStorage.removeItem("login");
							window.location.href = "#login";
							return;
					   }

					   if (xhr.status == 404) {
					     	bootbox.alert("Error 404 - API resource not found at the server");
					   }

		         }               
            });
         }
      }
      else {
         alert("error!");
      }
	});


	$(document.body).on("change", "#profilepic", function(e) {
      e.preventDefault(); //prevent redirect/page refresh
      e.stopImmediatePropagation();

      var x = document.getElementById("profilepic");

      if ('files' in x) {
         if (x.files.length == 0) {
            //
         }
         else {
            var file = x.files[0];   
            
            if (file.type == "image/jpeg" || file.type == "image/png" || file.type == "image/gif") {
               $("#imageplaceholder").html("<image src='" + URL.createObjectURL(file) + "' width='200' /><br /><br />");      
            }

            if (file.type == "image/jpeg" || file.type == "image/png" || file.type == "image/gif") {
               $("#mimetype").html("File name: " + file.name + "<br />File type: " + file.type + "<br />File size: " + file.size + " KB<br /><br /><br />");
            } else {
               alert("File type not allowed as profile picture!");
               $("#mimetype").html("File not allow as profile picture<br />File name: " + file.name + "<br />File type: " + file.type + "<br />File size: " + file.size + " KB<br /><br /><br />");
               $('#profilepic').val('');
               $("#imageplaceholder").html("");
            }
         }       
      } else {
      }
	});
});