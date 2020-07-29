$(function(){

	$.ajaxSetup({
	   beforeSend: function (xhr)
	   {
	   	var token = sessionStorage.getItem("token");
	   	xhr.setRequestHeader("Authorization","Bearer " + token);        
	   }
	});

   $(document).ajaxStart(function() {
      $('#spinner').show();
   });  

   $(document).ajaxStop(function() {
   	setTimeout(function(){ 
   		$('#spinner').hide(); 
   	}, 500);  	
   });

	function parseHash(newHash, oldHash){
	  crossroads.parse(newHash);
	}

	Handlebars.registerHelper("fullname", function(fname, lname) {
		return fname + " " + lname; 
	});

	Handlebars.registerHelper("displaystatus", function(status) {
		var thestatus = parseInt(status);
		if (thestatus === 0)        
         return "<span style='color: red; font-weight: bold'>Booked</span>";
      else if (thestatus === 1)        
         return "<span style='color: green; font-weight: bold'>Approved</span>";
	});

	Handlebars.registerHelper("displaystatustype2", function(status) {
		var thestatus = parseInt(status);
		if (thestatus === 0)        
         return "<span class='label label-danger'>Booked</span>";
      else if (thestatus === 1)        
         return "<span class='label label-success'>Approved</span>";
	});

	Handlebars.registerHelper("displaystatustype3", function(status) {
		var thestatus = parseInt(status);
		if (thestatus === 0)        
		 return "<span class='label label-danger'>Not Approved</span>";
		else if (thestatus === 1)        
         return "<span class='label label-success'>Approved</span>";
	});

	Handlebars.registerHelper("displaygender", function(gender) {

		var thegender = parseInt(gender);

		if (thegender === 0)        
         return "<span class='label label-info'>Malaysia Airline</span>";      
      else if (thegender === 1)        
         return "<span class='label label-info'>AirAsia</span>";
	});	

	Handlebars.registerHelper("genderoption", function(gender) {

		var thegender = parseInt(gender);

		if (thegender === 0)        
         return "<option value='-1'>Please select airline</option>" +
                "<option value='0' selected>Malaysia Airline</option>" +
                "<option value='1'>AirAsia</option>";      
      else if (thegender === 1)        
         return "<option value='-1'>Please select airline</option>" +
                "<option value='0'>Malaysia Airline</option>" +
                "<option value='1' selected>AirAsia</option>"; 
	});

	var routelogin = crossroads.addRoute('/login', function(){

		if (sessionStorage.token) {
			window.location.href = "#home";			
			return;
		}

		$("#loginname").html("noname");
		var loginTemplate = Handlebars.templates['login'];

		$("#divcontent").empty();
		$("#divcontent").html(loginTemplate).hide().fadeIn(1000);

		$(".breadcrumb").empty();
		$(".breadcrumb").append("<li class='active'>Login</li>");

		$(".navbar-collapse li").removeClass('active');

	});

	var routeregister = crossroads.addRoute('/register', function(){

		if (sessionStorage.token) {
			window.location.href = "#home";			
			return;
		}

		$("#loginname").html("noname");
		var registerTemplate = Handlebars.templates['register'];

		$("#divcontent").empty();
		$("#divcontent").html(registerTemplate).hide().fadeIn(1000);

		$(".breadcrumb").empty();
		$(".breadcrumb").append("<li class='active'>Register</li>");

		$(".navbar-collapse li").removeClass('active');

	});

	var routeforgotpassword = crossroads.addRoute('/forgotpassword', function(){

		if (sessionStorage.token) {
			window.location.href = "#home";			
			return;
		}

		$("#loginname").html("noname");
		var forgotPasswordTemplate = Handlebars.templates['forgot-password'];

		$("#divcontent").empty();
		$("#divcontent").html(forgotPasswordTemplate).hide().fadeIn(1000);

		$(".breadcrumb").empty();
		$(".breadcrumb").append("<li class='active'>Forgot Password</li>");

		$(".navbar-collapse li").removeClass('active');

	});

	var routelogout = crossroads.addRoute('/logout', function(){

		$("#loginname").html("noname");
		sessionStorage.removeItem("token");
		window.location.href = "#login";
		return;

	});

	var route1 = crossroads.addRoute('', function(){

		if (!sessionStorage.token) {
			$("#loginname").html("noname");
			sessionStorage.removeItem("token");
			window.location.href = "#login";
			return;
		}

		//get token from sessionStorage
		var token = sessionStorage.getItem("token");

		//decode jwt token using jwt-decode
		var decoded = jwt_decode(token);
		$("#loginname").html(decoded.login);		

		//get user login data
	   $.ajax({
	      type: "GET",
	      url: 'api/users',               
	      dataType: "json",
	      success: function(data){

				var homeTemplate = Handlebars.templates['home'](data);

				$("#divcontent").empty();
				$("#divcontent").html(homeTemplate).hide().fadeIn(1000);
		
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

		$(".breadcrumb").empty();
		$(".breadcrumb").append("<li class='active'>Home</li>");

		$(".navbar-collapse li").removeClass('active');
  		$(".navbar-collapse li a[href='#home']").parent().addClass('active');

	});

	var route2 = crossroads.addRoute('/home', function(){

		if (!sessionStorage.token) {
			$("#loginname").html("noname");
			sessionStorage.removeItem("token");
			window.location.href = "#login";
			return;
		}

		//get token from sessionStorage
		var token = sessionStorage.getItem("token");

		//decode jwt token using jwt-decode
		var decoded = jwt_decode(token);
		$("#loginname").html(decoded.login);		

		//get user login data
	   $.ajax({
	      type: "GET",
	      url: 'api/users',               
	      dataType: "json",
	      success: function(data){

				var homeTemplate = Handlebars.templates['home'](data);

				$("#divcontent").empty();
				$("#divcontent").html(homeTemplate).hide().fadeIn(1000);
		
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
/*
	   $.ajax({
	      type: "get", 
	      url: 'api/reports',
	      dataType: "json",
	      success: function(data){
			
				var homeTemplate = Handlebars.templates['home']({"bookinglist1": data});

				$("#divcontent").html(bookingsTemplate).hide().fadeIn(1000);

				//add data using json array in context to first-td for each row in tbody
				$('#tblcontacts tbody tr').each(function(i) {
					var tdIndex = $(this).children().eq(0);

					var id = data[i].id;

					var name = data[i].name;
					var totalPerson = data[i].totalPerson;
					var phoneNo = data[i].phoneNo;
					var idTravel = data[i].idTravel;
					var photo = data[i].photo;

					var dateTravel = data[i].dateTravel;
					var addeddate = data[i].addeddate;
					var status = data[i].status;				

					$(tdIndex).data("id", id);

					$(tdIndex).data("name", name);
					$(tdIndex).data("totalPerson", totalPerson);
					$(tdIndex).data("phoneNo", phoneNo);
					$(tdIndex).data("idTravel", idTravel);
					$(tdIndex).data("photo", photo);

					$(tdIndex).data("dateTravel", dateTravel);
					$(tdIndex).data("addeddate", addeddate);
					$(tdIndex).data("status", status);					
						
				});

				//reading the data from the first td of each row in tbody
				$('#tblcontacts tbody tr').each(function(i) {
					var tdIndex = $(this).children().eq(0);
				});
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
	  });*/

		$(".breadcrumb").empty();
		$(".breadcrumb").append("<li class='active'>Home</li>");

		$(".navbar-collapse li").removeClass('active');
  		$(".navbar-collapse li a[href='#home']").parent().addClass('active');

	});

	//complete the template code for contacts
	var route3 = crossroads.addRoute('/contacts', function(){

		if (!sessionStorage.token) {
			$("#loginname").html("noname");
			sessionStorage.removeItem("token");
			window.location.href = "#login";
			return;
		}

		//get token from sessionStorage
		var token = sessionStorage.getItem("token");

		//decode jwt token using jwt-decode
		var decoded = jwt_decode(token);
		$("#loginname").html(decoded.login);	
		
		//get all contacts using user login => ownerlogin
	   $.ajax({
	      type: "get", 
	      url: 'api/contacts',
	      dataType: "json",
	      success: function(data){

				var contactsTemplate = Handlebars.templates['contacts']({"contactlist": data});

				
				$("#divcontent").html(contactsTemplate).hide().fadeIn(1000);

				//add data using json array in context to first-td for each row in tbody
				$('#tblcontacts tbody tr').each(function(i) {
					var tdIndex = $(this).children().eq(0);

					var id = data[i].id;

					var name = data[i].name;
					var email = data[i].email;
					var mobileno = data[i].mobileno;
					var gender = data[i].gender;
					var photo = data[i].photo;

					var dob = data[i].dob;
					var addeddate = data[i].addeddate;
					var status = data[i].status;				
					

					$(tdIndex).data("id", id);

					$(tdIndex).data("name", name);
					$(tdIndex).data("email", email);
					$(tdIndex).data("mobileno", mobileno);
					$(tdIndex).data("gender", gender);
					$(tdIndex).data("photo", photo);

					$(tdIndex).data("dob", dob);
					$(tdIndex).data("addeddate", addeddate);
					$(tdIndex).data("status", status);					
						
				});

				//reading the data from the first td of each row in tbody
				$('#tblcontacts tbody tr').each(function(i) 
				{
					var tdIndex = $(this).children().eq(0);
				});
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

		$(".breadcrumb").empty();
		$(".breadcrumb").append("<li><a href='#home'>Home</a></li>");
		$(".breadcrumb").append("<li class='active'>Contacts</li>");

		$(".navbar-collapse li").removeClass('active');
	  	$(".navbar-collapse li a[href='#contacts']").parent().addClass('active');
	});

	var route3b = crossroads.addRoute('/contacts/add', function(){	

		if (!sessionStorage.token) {
			$("#loginname").html("noname");
			sessionStorage.removeItem("token");
			window.location.href = "#login";
			return;
		}

		//get token from sessionStorage
		var token = sessionStorage.getItem("token");

		//decode jwt token using jwt-decode
		var decoded = jwt_decode(token);
		$("#loginname").html(decoded.login);

		//var contactsAddTemplate = Handlebars.templates['contacts-add'](context);
		var contactsAddTemplate = Handlebars.templates['contacts-add'];

		$("#divcontent").empty();
		$("#divcontent").html(contactsAddTemplate).hide().fadeIn(1000);

	   $("#adddob").daterangepicker({
	      singleDatePicker: true,
	      showDropdowns: true,
	      minYear: 1901,
	      maxYear: parseInt(moment().format('YYYY'),10),
	      locale: {
	         format: 'DD-MM-YYYY'
	      },
	      autoUpdateInput: false
	   }); 

	   $("#adddob").on('apply.daterangepicker', function(ev, picker) {
	      $(this).val(picker.startDate.format('DD-MM-YYYY'));
	   });

		$(".breadcrumb").empty();
		$(".breadcrumb").append("<li><a href='#home'>Home</a></li>");
		$(".breadcrumb").append("<li><a href='#contacts'>Contacts</a></li>");
		$(".breadcrumb").append("<li class='active'>Add</li>");

		$(".navbar-collapse li").removeClass('active');
	  	$(".navbar-collapse li a[href='#contacts']").parent().addClass('active');

		//refresh the token for another 15 minutes			
	   $.ajax({
	      type: "post",
	      url: "api/refreshtoken",      
	      dataType: "json",            
	      success: function(data){
				sessionStorage.setItem("token", data.token);
				console.log("refresh token: " + data.token);
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

	var route3c = crossroads.addRoute('/contacts/view/{id}', function(id){

		if (!sessionStorage.token) {
			$("#loginname").html("noname");
			sessionStorage.removeItem("token");
			window.location.href = "#login";
			return;
		}

		//get token from sessionStorage
		var token = sessionStorage.getItem("token");

		//decode jwt token using jwt-decode
		var decoded = jwt_decode(token);
		$("#loginname").html(decoded.login);

		//get contact via id
	   $.ajax({
	      type: "get",
	      url: 'api/contacts/' + id,
	      dataType: "json",
	      success: function(data){

         	if (!$.isEmptyObject(data)) {

					var contactsViewTemplate = Handlebars.templates['contacts-view'](data);

					$("#divcontent").empty();
					$("#divcontent").html(contactsViewTemplate).hide().fadeIn(1000);

				} else {

					bootbox.alert("Rolling no hacking detected! - Login Id is submitted to the NSA BlackHat list");
					window.location.href = "#contacts";

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

		$(".breadcrumb").empty();
		$(".breadcrumb").append("<li><a href='#home'>Home</a></li>");
		$(".breadcrumb").append("<li><a href='#contacts'>Contacts</a></li>");
		$(".breadcrumb").append("<li class='active'>View</li>");

		$(".navbar-collapse li").removeClass('active');
	  	$(".navbar-collapse li a[href='#contacts']").parent().addClass('active');
	});

	var route3d = crossroads.addRoute('/contacts/edit/{id}', function(id){	

		if (!sessionStorage.token) {
			$("#loginname").html("noname");
			sessionStorage.removeItem("token");
			window.location.href = "#login";
			return;
		}

		//get token from sessionStorage
		var token = sessionStorage.getItem("token");

		//decode jwt token using jwt-decode
		var decoded = jwt_decode(token);
		$("#loginname").html(decoded.login);

		//get contact via id
	   $.ajax({
	      type: "get",
	      url: 'api/contacts/' + id,
	      dataType: "json",
	      success: function(data){

         	if (!$.isEmptyObject(data)) {

					var contactsEditTemplate = Handlebars.templates['contacts-edit'](data);;

					$("#divcontent").empty();
					$("#divcontent").html(contactsEditTemplate).hide().fadeIn(1000);

				   $("#editdob").daterangepicker({
				      singleDatePicker: true,
				      showDropdowns: true,
				      minYear: 1901,
				      maxYear: parseInt(moment().format('YYYY'),10),
				      locale: {
				         format: 'DD-MM-YYYY'
				      },
				      autoUpdateInput: false
				   }); 

				   $("#editdob").on('apply.daterangepicker', function(ev, picker) {
				      $(this).val(picker.startDate.format('DD-MM-YYYY'));
				   }); 

				} else {

					bootbox.alert("Rolling no hacking detected! - Login Id is submitted to the NSA BlackHat list");
					window.location.href = "#contacts";

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

		$(".breadcrumb").empty();
		$(".breadcrumb").append("<li><a href='#home'>Home</a></li>");
		$(".breadcrumb").append("<li><a href='#contacts'>Contacts</a></li>");
		$(".breadcrumb").append("<li class='active'>Update</li>");

		$(".navbar-collapse li").removeClass('active');
	  	$(".navbar-collapse li a[href='#contacts']").parent().addClass('active');
	});

	var route3e = crossroads.addRoute('/contacts/edit/uploadphoto/{id}', function(id){	

		if (!sessionStorage.token) {
			$("#loginname").html("noname");
			sessionStorage.removeItem("token");
			window.location.href = "#login";
			return;
		}

		//get token from sessionStorage
		var token = sessionStorage.getItem("token");

		//decode jwt token using jwt-decode
		var decoded = jwt_decode(token);
		$("#loginname").html(decoded.login);	

		//get contact via id
	   $.ajax({
	      type: "get",
	      url: 'api/contacts/' + id,
	      dataType: "json",
	      success: function(data){

         	if (!$.isEmptyObject(data)) {

					var contactsEditUploadPhotoTemplate = Handlebars.templates['contacts-edit-uploadphoto'](data);;

					$("#divcontent").empty();
					$("#divcontent").html(contactsEditUploadPhotoTemplate).hide().fadeIn(1000);

				} else {

					bootbox.alert("Rolling no hacking detected! - Login Id is submitted to the NSA BlackHat list");
					window.location.href = "#contacts";
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

		$(".breadcrumb").empty();
		$(".breadcrumb").append("<li><a href='#home'>Home</a></li>");
		$(".breadcrumb").append("<li><a href='#contacts'>Contacts</a></li>");

		//back to 3rd level
		$(".breadcrumb").append("<li><a href='#contacts/edit/" + id + "'>Update</a></li>");

		$(".breadcrumb").append("<li class='active'>Upload Photo</li>");

		$(".navbar-collapse li").removeClass('active');
	  	$(".navbar-collapse li a[href='#contacts']").parent().addClass('active');
	});

	var routereports = crossroads.addRoute('/reports', function(){

		if (!sessionStorage.token) {
			$("#loginname").html("noname");
			sessionStorage.removeItem("token");
			window.location.href = "#login";
			return;
		}
		
		//get token from sessionStorage
		var token = sessionStorage.getItem("token");
		
		//decode jwt token using jwt-decode
		var decoded = jwt_decode(token);
		$("#loginname").html(decoded.login);

		$("#divcontent").empty();
		// bootbox.alert("TESTING");
		
		//get all contacts using user login => ownerlogin
	   $.ajax({
	      type: "get", 
	      url: 'api/reports',
	      dataType: "json",
	      success: function(data){
			
				var bookingsTemplate = Handlebars.templates['reports']({"bookinglist": data});

				$("#divcontent").html(bookingsTemplate).hide().fadeIn(1000);

				//add data using json array in context to first-td for each row in tbody
				$('#tblcontacts tbody tr').each(function(i) {
					var tdIndex = $(this).children().eq(0);

					var id = data[i].id;

					var name = data[i].name;
					var totalPerson = data[i].totalPerson;
					var phoneNo = data[i].phoneNo;
					var idTravel = data[i].idTravel;
					var photo = data[i].photo;

					var dateTravel = data[i].dateTravel;
					var addeddate = data[i].addeddate;
					var status = data[i].status;				

					$(tdIndex).data("id", id);

					$(tdIndex).data("name", name);
					$(tdIndex).data("totalPerson", totalPerson);
					$(tdIndex).data("phoneNo", phoneNo);
					$(tdIndex).data("idTravel", idTravel);
					$(tdIndex).data("photo", photo);

					$(tdIndex).data("dateTravel", dateTravel);
					$(tdIndex).data("addeddate", addeddate);
					$(tdIndex).data("status", status);					
						
				});

				//reading the data from the first td of each row in tbody
				$('#tblcontacts tbody tr').each(function(i) {
					var tdIndex = $(this).children().eq(0);
				});
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
	  $(".breadcrumb").empty();
	  $(".breadcrumb").append("<li><a href='#home'>Home</a></li>");
	  $(".breadcrumb").append("<li class='active'>Reports</li>");

	  $(".navbar-collapse li").removeClass('active');
	  $(".navbar-collapse li a[href='#reports']").parent().addClass('active');
	});

	//complete the template code for about
	var route4 = crossroads.addRoute('/about', function(){

		if (!sessionStorage.token) {
			$("#loginname").html("noname");
			sessionStorage.removeItem("token");
			window.location.href = "#login";
			return;
		}

		//get token from sessionStorage
		var token = sessionStorage.getItem("token");

		//decode jwt token using jwt-decode
		var decoded = jwt_decode(token);
		$("#loginname").html(decoded.login);
	
		var aboutTemplate = Handlebars.templates['about'];

		$("#divcontent").empty();
		$("#divcontent").html(aboutTemplate).hide().fadeIn(1000);

		$(".breadcrumb").empty();
		$(".breadcrumb").append("<li><a href='#home'>Home</a></li>");
		$(".breadcrumb").append("<li class='active'>About</li>");

		$(".navbar-collapse li").removeClass('active');
	  	$(".navbar-collapse li a[href='#about']").parent().addClass('active');

		//refresh the token for another 15 minutes			
	   $.ajax({
	      type: "post",
	      url: "api/refreshtoken",      
	      dataType: "json",            
	      success: function(data){
				sessionStorage.setItem("token", data.token);
				console.log("refresh token: " + data.token);
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

	//complete the template code for profile
	var route5 = crossroads.addRoute('/profile', function(){	

		if (!sessionStorage.token) {
			$("#loginname").html("noname");
			sessionStorage.removeItem("token");
			window.location.href = "#login";
			return;
		}

		//get token from sessionStorage
		var token = sessionStorage.getItem("token");

		//decode jwt token using jwt-decode
		var decoded = jwt_decode(token);
		$("#loginname").html(decoded.login);	

		//get user login data
	   $.ajax({
	      type: "GET",
	      url: 'api/users',               
	      dataType: "json",
	      success: function(data){

				var profileTemplate = Handlebars.templates['profile'](data);

				$("#divcontent").empty();
				$("#divcontent").html(profileTemplate).hide().fadeIn(1000);
		
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

		$(".breadcrumb").empty();
		$(".breadcrumb").append("<li><a href='#home'>Home</a></li>");
		$(".breadcrumb").append("<li class='active'>Profile</li>");

		$(".navbar-collapse li").removeClass('active');
	});

	//complete the template code for passwordreset
	var route5b = crossroads.addRoute('/profile/passwordreset', function(){

		if (!sessionStorage.token) {
			$("#loginname").html("noname");
			sessionStorage.removeItem("token");
			window.location.href = "#login";
			return;
		}

		//get token from sessionStorage
		var token = sessionStorage.getItem("token");

		//decode jwt token using jwt-decode
		var decoded = jwt_decode(token);
		$("#loginname").html(decoded.login);	

		context = {
			login: decoded.login
		};
	
		var aboutTemplate = Handlebars.templates['profile-passwordreset'](context);

		$("#divcontent").empty();
		$("#divcontent").html(aboutTemplate).hide().fadeIn(1000);

		$(".breadcrumb").empty();
		$(".breadcrumb").append("<li><a href='#home'>Home</a></li>");
		$(".breadcrumb").append("<li><a href='#profile'>Profile</a></li>");
		$(".breadcrumb").append("<li class='active'>Password Reset</li>");

		$(".navbar-collapse li").removeClass('active');

		//refresh the token for another 15 minutes			
	   $.ajax({
	      type: "post",
	      url: "api/refreshtoken",      
	      dataType: "json",            
	      success: function(data){
				sessionStorage.setItem("token", data.token);
				console.log("refresh token: " + data.token);
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

	hasher.initialized.add(parseHash); //parse initial hash
	hasher.changed.add(parseHash); //parse hash changes
	hasher.init(); //start listening for history change

});