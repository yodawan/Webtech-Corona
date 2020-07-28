!function(){var t=Handlebars.template,n=Handlebars.templates=Handlebars.templates||{};n.about=t({compiler:[8,">= 4.3.0"],main:function(t,n,r,l,e){return'<div class="row">\r\n  \t<div class="col-sm-12">   \r\n     \t<h1>FISSAD Travel & Tours connects the world to, and through, our global hub in Malaysia. We operate modern, efficient and comfortable aircraft, and our culturally diverse workforce delivers award-winning services to our customers across six continents every days.</h1>\r\n  \t</div>\r\n</div>'},useData:!0}),n["contacts-add"]=t({compiler:[8,">= 4.3.0"],main:function(t,n,r,l,e){return'<div class="row">\r\n   <div class="col-sm-6">   \r\n      <h1>Add Tourism Package<h1/>  \r\n\r\n\t\t<form class="form-horizontal" id="formadd">\r\n\t\t  <fieldset>\r\n\t\t    <div class="form-group">\r\n\t\t      <label for="addname" class="col-lg-2 control-label">Package Name</label>\r\n\t\t      <div class="col-lg-10">\r\n\t\t        <input type="text" class="form-control" id="addname" required>\r\n\t\t      </div>\r\n\t\t    </div>\r\n\t\t    <div class="form-group">\r\n\t\t      <label for="addemail" class="col-lg-2 control-label">Price</label>\r\n\t\t      <div class="col-lg-10">\r\n\t\t        <input type="text" class="form-control" id="addemail" required>\r\n\t\t      </div>\r\n\t\t    </div>\r\n\t\t    <div class="form-group">\r\n\t\t      <label for="addmobileno" class="col-lg-2 control-label">Total Day</label>\r\n\t\t      <div class="col-lg-10">\r\n\t\t        <input type="text" class="form-control" id="addmobileno" required>\r\n\t\t      </div>\r\n\t\t    </div>\r\n\t\t\t<div class="form-group">\r\n\t\t      <label for="addgender" class="col-lg-2 control-label">Airline Name</label>\r\n\t\t      <div class="col-lg-10">\r\n\t\t        <select class="form-control" id="addgender">\r\n\t\t        \t <option value=\'-1\' selected>Please select airline</option>\r\n\t\t        \t <option value=\'0\'>Malaysia Airline</option>\r\n\t\t        \t <option value=\'1\'>AirAsia</option>\r\n\t\t        </select>\r\n\t\t      </div>\r\n\t\t    </div>\r\n\t\t    <div class="form-group">\r\n\t\t      <label for="adddob" class="col-lg-2 control-label">Date Travel</label>\r\n\t\t      <div class="col-lg-10">\r\n\t\t        <input type="text" class="form-control" id="adddob" required>\r\n\t\t      </div>\r\n\t\t    </div>\t\t    \r\n\t\t    <div class="form-group">\r\n\t\t      <div class="col-lg-10 col-lg-offset-2">\r\n\t\t        <button type="reset" class="btn btn-default" id="formaddcancel">Cancel</button>\r\n\t\t        <button type="submit" class="btn btn-primary">Submit</button>\r\n\t\t      </div>\r\n\t\t    </div>\r\n\t\t  </fieldset>\r\n\t\t</form>    \r\n   </div>\r\n</div>'},useData:!0}),n["contacts-edit-uploadphoto"]=t({compiler:[8,">= 4.3.0"],main:function(t,n,r,l,e){var a,o=null!=n?n:t.nullContext||{},s=t.hooks.helperMissing,i="function",c=t.escapeExpression,d=t.lookupProperty||function(t,n){if(Object.prototype.hasOwnProperty.call(t,n))return t[n]};return'<div class="row">\r\n  \t<div class="col-sm-6">   \r\n     \t<h1>Upload Photo</h1>\r\n     \t<br />\r\n      <form class="form-horizontal" id="formuploadphoto">\r\n        \t<fieldset>\r\n          \t<div class="form-group">\r\n\t            <label for="date" class="col-lg-3 control-label">Current Pic</label>\r\n\t            <div class="col-lg-9">\r\n\t            \t<span id="currentphoto"><img src="img/'+c(typeof(a=null!=(a=d(r,"photo")||(null!=n?d(n,"photo"):n))?a:s)==i?a.call(o,{name:"photo",hash:{},data:e,loc:{start:{line:10,column:52},end:{line:10,column:61}}}):a)+'" width="200"></span>\r\n\t            </div>\r\n          \t</div>\r\n          \t<div class="form-group">\r\n\t            <label for="profilepic" class="col-lg-3 control-label">Profile Pic</label>\r\n\t            <div class="col-lg-9">\r\n\t              \t<input type="file" class="form-control" id="profilepic">\r\n\t              \t<br />\r\n\t              \t<div class="col-lg-9 col-lg-offset-3" id="mimetype">\r\n\t              \t</div>\r\n\r\n\t              \t<div class="col-lg-9 col-lg-offset-3" id="imageplaceholder">\r\n\t              \t</div>\r\n\t            </div>\r\n          \t</div>\r\n          \t<div class="form-group">\r\n\t            <div class="col-lg-9 col-lg-offset-3">\r\n\t            \t<input type="hidden" id="uploadcontactid" name="uploadcontactid" value="'+c(typeof(a=null!=(a=d(r,"id")||(null!=n?d(n,"id"):n))?a:s)==i?a.call(o,{name:"id",hash:{},data:e,loc:{start:{line:27,column:86},end:{line:27,column:92}}}):a)+'">\r\n\t              \t<button type="reset" class="btn btn-default">Cancel</button>\r\n\t              \t<button type="submit" class="btn btn-primary">Submit</button>\r\n\t            </div>\r\n          \t</div>\r\n        \t</fieldset>\r\n      </form>     \t\r\n  \t</div>\r\n</div>'},useData:!0}),n["contacts-edit"]=t({compiler:[8,">= 4.3.0"],main:function(t,n,r,l,e){var a,o,s=null!=n?n:t.nullContext||{},i=t.hooks.helperMissing,c="function",d=t.escapeExpression,u=t.lookupProperty||function(t,n){if(Object.prototype.hasOwnProperty.call(t,n))return t[n]};return'<div class="row">\r\n   <div class="col-sm-6">   \r\n      <h1>Edit Destination Info<h1/> \r\n\r\n\t\t<form class="form-horizontal" id="formedit">\r\n\t\t  <fieldset>\r\n\t\t    <div class="form-group">\r\n\t\t      <label for="editname" class="col-lg-3 control-label">Package Name</label>\r\n\t\t      <div class="col-lg-9">\r\n\t\t        <input type="text" class="form-control" id="editname" value="'+d(typeof(o=null!=(o=u(r,"name")||(null!=n?u(n,"name"):n))?o:i)==c?o.call(s,{name:"name",hash:{},data:e,loc:{start:{line:20,column:71},end:{line:20,column:79}}}):o)+'" required>\r\n\t\t      </div>\r\n\t\t    </div>\r\n\t\t    <div class="form-group">\r\n\t\t      <label for="editemail" class="col-lg-3 control-label">Price</label>\r\n\t\t      <div class="col-lg-9">\r\n\t\t        <input type="text" class="form-control" id="editemail" value="'+d(typeof(o=null!=(o=u(r,"email")||(null!=n?u(n,"email"):n))?o:i)==c?o.call(s,{name:"email",hash:{},data:e,loc:{start:{line:26,column:72},end:{line:26,column:81}}}):o)+'" required>\r\n\t\t      </div>\r\n\t\t    </div>\r\n\t\t    <div class="form-group">\r\n\t\t      <label for="editmobileno" class="col-lg-3 control-label">Total Day</label>\r\n\t\t      <div class="col-lg-9">\r\n\t\t        <input type="text" class="form-control" id="editmobileno" value="'+d(typeof(o=null!=(o=u(r,"mobileno")||(null!=n?u(n,"mobileno"):n))?o:i)==c?o.call(s,{name:"mobileno",hash:{},data:e,loc:{start:{line:32,column:75},end:{line:32,column:87}}}):o)+'" required>\r\n\t\t      </div>\r\n\t\t    </div>\r\n\t\t    <div class="form-group">\r\n\t\t      <label for="editmatriks" class="col-lg-3 control-label">Airline Name</label>\r\n\t\t      <div class="col-lg-9">\r\n\t\t        <select class="form-control" id="editgender">\r\n\t\t        \t'+(null!=(a=(u(r,"genderoption")||n&&u(n,"genderoption")||i).call(s,null!=n?u(n,"gender"):n,{name:"genderoption",hash:{},data:e,loc:{start:{line:39,column:11},end:{line:39,column:36}}}))?a:"")+'\r\n\t\t        </select>\r\n\t\t      </div>\r\n\t\t    </div>\t\t    \r\n\t\t    <div class="form-group">\r\n\t\t      <label for="editdob" class="col-lg-3 control-label">Date Travel</label>\r\n\t\t      <div class="col-lg-9">\r\n\t\t        <input type="text" class="form-control" id="editdob" value="'+d(typeof(o=null!=(o=u(r,"dob")||(null!=n?u(n,"dob"):n))?o:i)==c?o.call(s,{name:"dob",hash:{},data:e,loc:{start:{line:46,column:70},end:{line:46,column:77}}}):o)+'" required>\r\n\t\t      </div>\r\n\t\t    </div>\r\n\t\t    <div class="form-group">\r\n\t\t      <div class="col-lg-9 col-lg-offset-3">\r\n\t\t      \t<input type="hidden" id="id" name="id" value="'+d(typeof(o=null!=(o=u(r,"id")||(null!=n?u(n,"id"):n))?o:i)==c?o.call(s,{name:"id",hash:{},data:e,loc:{start:{line:51,column:55},end:{line:51,column:61}}}):o)+'">\t\r\n\t\t        <button type="reset" class="btn btn-default" id="formeditcancel">Cancel</button>\r\n\t\t        <button type="submit" class="btn btn-primary">Submit</button>\r\n\t\t      </div>\r\n\t\t    </div>\r\n\t\t  </fieldset>\r\n\t\t</form>     \r\n   </div>\r\n</div>'},useData:!0}),n["contacts-view"]=t({compiler:[8,">= 4.3.0"],main:function(t,n,r,l,e){var a,o,s=null!=n?n:t.nullContext||{},i=t.hooks.helperMissing,c="function",d=t.escapeExpression,u=t.lookupProperty||function(t,n){if(Object.prototype.hasOwnProperty.call(t,n))return t[n]};return'<div class="row">\r\n   <div class="col-sm-6">   \r\n      <h1>View Destination Info<h1/> \r\n\r\n\t\t<table class="table table-striped table-hover table-bordered">\r\n\t\t   <tbody>\r\n\t\t      <tr>\r\n\t\t         <th>Name</th>\r\n\t            <td>'+d(typeof(o=null!=(o=u(r,"name")||(null!=n?u(n,"name"):n))?o:i)==c?o.call(s,{name:"name",hash:{},data:e,loc:{start:{line:21,column:17},end:{line:21,column:25}}}):o)+"</td>\r\n\t\t      </tr>\t\t      \r\n\t\t      <tr>\r\n\t\t         <th>Price</th>\r\n\t            <td><span class='label label-info'>"+d(typeof(o=null!=(o=u(r,"email")||(null!=n?u(n,"email"):n))?o:i)==c?o.call(s,{name:"email",hash:{},data:e,loc:{start:{line:25,column:48},end:{line:25,column:57}}}):o)+"</span></td>\r\n\t\t      </tr>\r\n\t\t      <tr>\r\n\t\t         <th>Total Day</th>\r\n\t            <td><span class='label label-info'>"+d(typeof(o=null!=(o=u(r,"mobileno")||(null!=n?u(n,"mobileno"):n))?o:i)==c?o.call(s,{name:"mobileno",hash:{},data:e,loc:{start:{line:29,column:48},end:{line:29,column:60}}}):o)+"</span></td>\r\n\t\t      </tr>\r\n\t\t      <tr>\r\n\t\t         <th>Airline Name</th>\r\n\t            <td>"+(null!=(a=(u(r,"displaygender")||n&&u(n,"displaygender")||i).call(s,null!=n?u(n,"gender"):n,{name:"displaygender",hash:{},data:e,loc:{start:{line:33,column:17},end:{line:33,column:43}}}))?a:"")+"</td>\r\n\t\t      </tr>\r\n\t\t      <tr>\r\n\t\t         <th>Date Travel</th>\r\n\t            <td><span class='label label-info'>"+d(typeof(o=null!=(o=u(r,"dob")||(null!=n?u(n,"dob"):n))?o:i)==c?o.call(s,{name:"dob",hash:{},data:e,loc:{start:{line:37,column:48},end:{line:37,column:55}}}):o)+'</span></td>\r\n\t\t      </tr>\r\n\t\t   </tbody>\r\n\t\t</table> \r\n\r\n     \t<p>\r\n     \t\t<a href="#contacts" class="btn btn-info" id="returntocontacts">\r\n     \t\t\tReturn\r\n     \t\t</a>\r\n\r\n\r\n     \t\t<a href="#contacts/edit/'+d(typeof(o=null!=(o=u(r,"id")||(null!=n?u(n,"id"):n))?o:i)==c?o.call(s,{name:"id",hash:{},data:e,loc:{start:{line:55,column:31},end:{line:55,column:37}}}):o)+'" class="btn btn-info" id="editcontact">\r\n     \t\t\t<span class="glyphicon glyphicon-edit" aria-hidden="true"></span> Edit Destination\r\n     \t\t</a>\r\n     \t</p>\r\n\r\n   </div>\r\n</div>'},useData:!0}),n.contacts=t({1:function(t,n,r,l,e){var a,o,s=null!=n?n:t.nullContext||{},i=t.hooks.helperMissing,c="function",d=t.escapeExpression,u=t.lookupProperty||function(t,n){if(Object.prototype.hasOwnProperty.call(t,n))return t[n]};return"\t\t\t\t      <tr>\r\n\t\t\t\t\t      <td class='index-column'></td>\r\n\r\n\t\t\t\t\t      <td>\r\n\t\t\t\t\t      \t<a href=\"#contacts/view/"+d(typeof(o=null!=(o=u(r,"id")||(null!=n?u(n,"id"):n))?o:i)==c?o.call(s,{name:"id",hash:{},data:e,loc:{start:{line:27,column:36},end:{line:27,column:42}}}):o)+'" style="text-decoration: none">\r\n\t\t\t\t\t      \t\t'+d(typeof(o=null!=(o=u(r,"name")||(null!=n?u(n,"name"):n))?o:i)==c?o.call(s,{name:"name",hash:{},data:e,loc:{start:{line:28,column:13},end:{line:28,column:23}}}):o)+" ("+d(typeof(o=null!=(o=u(r,"id")||(null!=n?u(n,"id"):n))?o:i)==c?o.call(s,{name:"id",hash:{},data:e,loc:{start:{line:28,column:25},end:{line:28,column:33}}}):o)+")\r\n\t\t\t\t\t      \t</a>\r\n\t\t\t\t\t      </td>\r\n\r\n\t\t\t\t\t      <td>\r\n\t\t\t\t\t      \t"+(null!=(a=typeof(o=null!=(o=u(r,"dob")||(null!=n?u(n,"dob"):n))?o:i)==c?o.call(s,{name:"dob",hash:{},data:e,loc:{start:{line:33,column:12},end:{line:33,column:23}}}):o)?a:"")+"\r\n\t\t\t\t\t      </td>\r\n\r\n\t\t\t\t\t      <td>\r\n\t\t\t\t\t      \t<a href='#contacts/view/"+d(typeof(o=null!=(o=u(r,"id")||(null!=n?u(n,"id"):n))?o:i)==c?o.call(s,{name:"id",hash:{},data:e,loc:{start:{line:37,column:36},end:{line:37,column:42}}}):o)+'\' style="text-decoration: none">\r\n\t\t\t\t      \t\t\t<span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span>\r\n\t\t\t\t      \t\t</a>\r\n\t\t\t\t      \t\t&nbsp;\r\n\r\n\t\t\t\t      \t\t<a href=\'#contacts/edit/'+d(typeof(o=null!=(o=u(r,"id")||(null!=n?u(n,"id"):n))?o:i)==c?o.call(s,{name:"id",hash:{},data:e,loc:{start:{line:42,column:36},end:{line:42,column:42}}}):o)+'\' style="text-decoration: none">\r\n\t\t\t\t      \t\t\t<span class="glyphicon glyphicon-edit" aria-hidden="true"></span>\r\n\t\t\t\t      \t\t</a>\r\n\t\t\t\t      \t\t&nbsp;\r\n\r\n\t\t\t\t      \t\t<a href=\'javascript:;\' style="text-decoration: none" class="deletecontact">\r\n\t\t\t\t      \t\t\t<span class="glyphicon glyphicon-trash" aria-hidden="true"></span>\r\n\t\t\t\t      \t\t</a>\r\n\t\t\t\t\t      </td>\r\n\t\t\t\t      </tr>\r\n'},compiler:[8,">= 4.3.0"],main:function(t,n,r,l,e){var a,o=t.lookupProperty||function(t,n){if(Object.prototype.hasOwnProperty.call(t,n))return t[n]};return'<div class="row">\r\n  \t<div class="col-sm-12">   \r\n     \t<h1>Destination List</h1>\r\n\r\n     \t<p>\r\n     \t\t<a href="#contacts/add" class="btn btn-info" id="addcontact">\r\n     \t\t\t<span class="glyphicon glyphicon-plus" aria-hidden="true"></span> Add Destination\r\n     \t\t</a>\r\n     \t</p>\r\n\r\n     \t<div class="table-responsive">\r\n\t\t\t<table class="table table-striped table-hover table-bordered" id="tblcontacts">\r\n\t\t\t  \t<thead class="thead-dark">\r\n\t\t\t    \t<tr>\r\n\t\t\t\t      <th>#</th>\r\n\t\t\t\t      <th>Package Name (id)</th>\r\n\t\t\t\t      <th>Date Travel</th>\r\n\t\t\t\t      <th>Operation</th>\r\n\t\t\t    \t</tr>\r\n\t\t\t  \t</thead>\r\n\t\t\t  \t<tbody>\r\n'+(null!=(a=o(r,"each").call(null!=n?n:t.nullContext||{},null!=n?o(n,"contactlist"):n,{name:"each",hash:{},fn:t.program(1,e,0),inverse:t.noop,data:e,loc:{start:{line:22,column:7},end:{line:52,column:16}}}))?a:"")+'\t\t\t  \t<tbody>\r\n\t\t\t</table>\r\n\t\t</div>\r\n  \t</div>\r\n</div>\r\n\r\n<script>\r\n  \t$(function(){\r\n\r\n      $("#tblcontacts").on("click", ".updatestatus", function() {\r\n\r\n\t      var link = $(this);\r\n\t      console.log(link);\r\n\r\n\t      //                     TD       TR\r\n\t      var parentTR = $(this).parent().parent();\r\n\t      var firstTD = $(parentTR).children().eq(0);\r\n\r\n\t      // get status\r\n\t      var status = $(firstTD).data("status");\r\n\t      var id = $(firstTD).data("id");\r\n\t      Swal.fire("Status: " + status);\r\n\r\n\t\t\tSwal.fire({\r\n\t\t\t  \ttitle: \'Are you sure?\',\r\n\t\t\t  \thtml: "You want to change the status?<br />Status: " + status,\r\n\t\t\t   icon: \'warning\',\r\n\t\t\t   showCancelButton: true,\r\n\t\t\t   confirmButtonColor: \'#3085d6\',\r\n\t\t\t   cancelButtonColor: \'#d33\',\r\n\t\t\t   confirmButtonText: \'Yes, change it!\'\r\n\r\n\t\t\t}).then((result) => {\r\n\r\n\t\t\t\tif (result.value) {\r\n\r\n\t\t\t\t\tvar obj = new Object();\r\n\t\t\t\t \tobj.status = status;\t\r\n\r\n\t            $.ajax({\r\n\t               type: "put",\r\n\t               url: \'api/contacts/status/\' + id,\r\n\t\t\t\t\t   contentType: \'application/json\',\r\n\t\t\t      \tdata: JSON.stringify(obj),            \r\n\t\t\t\t\t   dataType: "json",\r\n\t               success: function(data){\r\n\r\n\t                  if (data.updateStatus) {\r\n\r\n\t                     bootbox.alert("contact status update successful");\r\n\r\n\t                     $(firstTD).data("status", data.status);\r\n\r\n\t\t\t\t\t\t\t\tif (data.status == 0)\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t$(link).html("<span class=\'label label-danger\'>Booked</span>"); \r\n\t\t\t\t\t\t\t\telse\r\n\t\t\t\t\t\t\t\t\t$(link).html("<span class=\'label label-success\'>Approved</span>");\t\r\n\r\n\t                  } \r\n\t                  else {\r\n\r\n\t                     bootbox.alert("contact status update failed - please try again: " + data.errorMessage)\r\n\t                  }\r\n\t               },\r\n\t               error: function() {\r\n\t                  console.log("error");\r\n\t               }\r\n\t            });\t\t\t\t\t\r\n\t\t\t\t}\r\n\r\n\t\t\t})\r\n      });\r\n\r\n      $("#tblcontacts").on("click", ".deletecontact", function() {\r\n      \tvar link = $(this);\r\n\r\n      \t//                     TD       TR\r\n\t      var parentTR = $(this).parent().parent();\r\n\t      var firstTD = $(parentTR).children().eq(0);\r\n\r\n\t      //get the id\r\n\t      var id = $(firstTD).data("id")\r\n\r\n\t\t\tSwal.fire({\r\n\t\t\t  \ttitle: \'Are you sure?\',\r\n\t\t\t  \thtml: "You want to delete the destination?",\r\n\t\t\t   icon: \'warning\',\r\n\t\t\t   showCancelButton: true,\r\n\t\t\t   confirmButtonColor: \'#3085d6\',\r\n\t\t\t   cancelButtonColor: \'#d33\',\r\n\t\t\t   confirmButtonText: \'Yes, delete it!\'\r\n\r\n\t\t\t}).then((result) => {\r\n\r\n\t\t\t\tif (result.value) {\r\n\r\n\t\t        \t//delete the contact at table contacts using contact id\r\n\r\n\t\t        \tvar token = sessionStorage.getItem("token");\r\n\r\n\t\t\t\t   $.ajax({\r\n\t\t\t\t      type: "delete",\r\n\t\t\t\t      url: \'api/contacts/\' + id,               \r\n\t\t\t\t      dataType: "json",\r\n\t\t\t\t      success: function(data){\r\n\r\n\t                  if (data.deleteStatus) {\r\n\r\n\t                     bootbox.alert("Destination deletion successful");\r\n\r\n\t\t\t\t\t\t      $(parentTR).fadeOut("slow", "swing", function(e) {\r\n\r\n\t\t\t\t\t\t      \t//remove row from the table\r\n\t\t\t\t\t\t        \t$(parentTR).remove();\r\n\r\n\r\n\t\t\t\t\t\t      });\t                    \r\n\r\n\t                  } \r\n\t                  else {\r\n\r\n\t                     bootbox.alert("contact deletion failed - please try again: " + data.error)\r\n\t                  }\r\n\r\n\t               },\r\n\t\t\t         error: function(xhr, statusText, err) {\r\n\r\n\t\t\t         \tif (xhr.status == 401) {\r\n\t\t\t\t\t\t     \t//response text from the server if there is any\r\n\t\t\t\t\t\t     \tvar responseText = JSON.parse(xhr.responseText);\r\n\t\t\t\t\t\t     \tbootbox.alert("Error 401 - Unauthorized: " + responseText.message);\r\n\t\t\t\t\t\t     \t\r\n\t\t\t\t\t\t\t\t$("#loginname").html("noname");\r\n\t\t\t\t\t\t\t\tsessionStorage.removeItem("token");\r\n\t\t\t\t\t\t\t\tsessionStorage.removeItem("login");\r\n\t\t\t\t\t\t\t\twindow.location.href = "#login";\r\n\t\t\t\t\t\t\t\treturn;\r\n\t\t\t\t\t\t   }\r\n\r\n\t\t\t\t\t\t   if (xhr.status == 404) {\r\n\t\t\t\t\t\t     \tbootbox.alert("Error 404 - API resource not found at the server");\r\n\t\t\t\t\t\t   }\r\n\r\n\t\t\t         }\r\n\t            });\t\t            \r\n\r\n\t\t\t\t}\r\n\r\n\t\t\t})\r\n      });\r\n   });\r\n<\/script>'},useData:!0}),n["forgot-password"]=t({compiler:[8,">= 4.3.0"],main:function(t,n,r,l,e){return'<div class="row">\r\n  \t<div class="col-sm-6">   \r\n     \t<h1>Forgot Password</h1>\r\n\r\n\t\t<form class="form-horizontal" id="forgotpasswordform">\r\n\t\t  <fieldset>\r\n\t\t    <div class="form-group">\r\n\t\t      <label for="forgotpasswordemail" class="col-lg-2 control-label">Email</label>\r\n\t\t      <div class="col-lg-10">\r\n\t\t        <input type="email" class="form-control" id="forgotpasswordemail" required>\r\n\t\t      </div>\r\n\t\t    </div>\r\n\t\t    <div class="form-group">\r\n\t\t      <div class="col-lg-10 col-lg-offset-2">\r\n\t\t        <a href="#register" class="btn btn-info">\r\n     \t\t\t     Register\r\n     \t\t     </a>\t\r\n     \t\t     <a href="#login" class="btn btn-info">\r\n     \t\t\t     Login\r\n     \t\t     </a> \t\r\n\t\t        <button type="submit" class="btn btn-primary">Submit</button>\r\n\t\t      </div>\r\n\t\t    </div>\r\n\t\t  </fieldset>\r\n\t\t</form>\r\n  \t</div>\r\n</div>'},useData:!0}),n.home=t({compiler:[8,">= 4.3.0"],main:function(t,n,r,l,e){return'<div class="row">\r\n\t<div class="col-sm-12">\r\n\t\t<div class="col-sm-6">   \r\n\t     \t<h1>Welcome to CORONAMU MALAYSIA ADMIN</h1>\r\n\t\t</div>\r\n\t</div>\t\r\n</div>'},useData:!0}),n.login=t({compiler:[8,">= 4.3.0"],main:function(t,n,r,l,e){return'<div class="row">\r\n  \t<div class="col-sm-6">   \r\n     \t<h1>Login Page</h1>\r\n\r\n\t\t<form class="form-horizontal" id="loginform">\r\n\t\t  <fieldset>\r\n\t\t    <div class="form-group">\r\n\t\t      <label for="loginformusername" class="col-lg-2 control-label">Username</label>\r\n\t\t      <div class="col-lg-10">\r\n\t\t        <input type="text" class="form-control" id="loginformusername" required>\r\n\t\t      </div>\r\n\t\t    </div>\r\n\t\t    <div class="form-group">\r\n\t\t      <label for="loginformpassword" class="col-lg-2 control-label">Password</label>\r\n\t\t      <div class="col-lg-10">\r\n\t\t        <input type="password" class="form-control" id="loginformpassword" required>\r\n\t\t      </div>\r\n\t\t    </div>\r\n\t\t    <div class="form-group">\r\n\t\t      <div class="col-lg-10 col-lg-offset-2">\r\n\t\t        <button type="submit" class="btn btn-primary">Login</button>\r\n\t\t      </div>\r\n\t\t    </div>\r\n\t\t  </fieldset>\r\n\t\t</form>\r\n  \t</div>\r\n</div>'},useData:!0}),n["profile-passwordreset"]=t({compiler:[8,">= 4.3.0"],main:function(t,n,r,l,e){return'<div class="row">\r\n  \t<div class="col-sm-6">   \r\n     \t<h1>Password Reset</h1>\r\n\r\n\t\t<form class="form-horizontal" id="formresetpassword">\r\n\t\t  <fieldset>\r\n\t\t    <div class="form-group">\r\n\t\t      <label for="oldpassword" class="col-lg-2 control-label">Old Password</label>\r\n\t\t      <div class="col-lg-10">\r\n\t\t        <input type="password" class="form-control" id="oldpassword" required>\r\n\t\t      </div>\r\n\t\t    </div>\r\n\t\t    <div class="form-group">\r\n\t\t      <label for="newpassword" class="col-lg-2 control-label">New Password</label>\r\n\t\t      <div class="col-lg-10">\r\n\t\t        <input type="password" class="form-control" id="newpassword" required>\r\n\t\t      </div>\r\n\t\t    </div>\r\n\t\t    <div class="form-group">\r\n\t\t      <label for="repeatpassword" class="col-lg-2 control-label">Repeat Password</label>\r\n\t\t      <div class="col-lg-10">\r\n\t\t        <input type="password" class="form-control" id="repeatpassword" required>\r\n\t\t      </div>\r\n\t\t    </div>\r\n\t\t    <div class="form-group">\r\n\t\t      <div class="col-lg-10 col-lg-offset-2">\r\n\t\t        <button type="submit" class="btn btn-primary">Submit</button>\r\n\t\t      </div>\r\n\t\t    </div>\r\n\t\t  </fieldset>\r\n\t\t</form>\r\n  \t</div>\r\n</div>'},useData:!0}),n.profile=t({compiler:[8,">= 4.3.0"],main:function(t,n,r,l,e){var a,o=null!=n?n:t.nullContext||{},s=t.hooks.helperMissing,i="function",c=t.escapeExpression,d=t.lookupProperty||function(t,n){if(Object.prototype.hasOwnProperty.call(t,n))return t[n]};return'<div class="row">\r\n   <div class="col-sm-6">   \r\n      \t<h1>This is profile</h1>\r\n\r\n\t\t<form class="form-horizontal" id="formupdateprofile">\r\n\t\t  <fieldset>\r\n\t\t    <div class="form-group">\r\n\t\t      <label for="updateprofilename" class="col-lg-2 control-label">Name</label>\r\n\t\t      <div class="col-lg-10">\r\n\t\t        <input type="text" class="form-control" id="updateprofilename" value="'+c(typeof(a=null!=(a=d(r,"name")||(null!=n?d(n,"name"):n))?a:s)==i?a.call(o,{name:"name",hash:{},data:e,loc:{start:{line:10,column:80},end:{line:10,column:88}}}):a)+'" required>\r\n\t\t      </div>\r\n\t\t    </div>\r\n\t\t    <div class="form-group">\r\n\t\t      <label for="updateprofileemail" class="col-lg-2 control-label">Email</label>\r\n\t\t      <div class="col-lg-10">\r\n\t\t        <input type="text" class="form-control" id="updateprofileemail" value="'+c(typeof(a=null!=(a=d(r,"email")||(null!=n?d(n,"email"):n))?a:s)==i?a.call(o,{name:"email",hash:{},data:e,loc:{start:{line:16,column:81},end:{line:16,column:90}}}):a)+'" required>\r\n\t\t      </div>\r\n\t\t    </div>\r\n\t\t    <div class="form-group">\r\n\t\t      <label for="updateprofilemobileno" class="col-lg-2 control-label">Mobile No</label>\r\n\t\t      <div class="col-lg-10">\r\n\t\t        <input type="text" class="form-control" id="updateprofilemobileno" value="'+c(typeof(a=null!=(a=d(r,"mobileno")||(null!=n?d(n,"mobileno"):n))?a:s)==i?a.call(o,{name:"mobileno",hash:{},data:e,loc:{start:{line:22,column:84},end:{line:22,column:96}}}):a)+'" required>\r\n\t\t      </div>\r\n\t\t    </div>\r\n\t\t    <div class="form-group">\r\n\t\t      <div class="col-lg-10 col-lg-offset-2">\r\n\t\t      \t<a href="#profile/passwordreset" class="btn btn-info" id="passwordreset">\r\n     \t\t\t\t<span class="glyphicon glyphicon-edit" aria-hidden="true"></span> Password Reset\r\n     \t\t\t</a>\r\n\r\n\t\t        <button type="submit" class="btn btn-primary">Submit</button>\r\n\t\t      </div>\r\n\t\t    </div>\r\n\t\t  </fieldset>\r\n\t\t</form>\r\n   </div>\r\n</div>'},useData:!0}),n.register=t({compiler:[8,">= 4.3.0"],main:function(t,n,r,l,e){return'<div class="row">\r\n  \t<div class="col-sm-6">   \r\n     \t<h1>Register Page</h1>\r\n\r\n\t\t<form class="form-horizontal" id="registerform">\r\n\t\t  <fieldset>\r\n\t\t    <div class="form-group">\r\n\t\t      <label for="registerformusername" class="col-lg-2 control-label">Username</label>\r\n\t\t      <div class="col-lg-10">\r\n\t\t        <input type="text" class="form-control" id="registerformusername" required>\r\n\t\t      </div>\r\n\t\t    </div>\r\n\t\t    <div class="form-group">\r\n\t\t      <label for="registerformpassword" class="col-lg-2 control-label">Password</label>\r\n\t\t      <div class="col-lg-10">\r\n\t\t        <input type="password" class="form-control" id="registerformpassword" required>\r\n\t\t      </div>\r\n\t\t    </div>\r\n\t\t    <div class="form-group">\r\n\t\t      <div class="col-lg-10 col-lg-offset-2">\r\n\t\t      \t<a href="#login" class="btn btn-info">\r\n     \t\t\t    Login\r\n     \t\t    </a>\r\n     \t\t    <a href="#forgotpassword" class="btn btn-info">\r\n     \t\t\t     Forgot Password\r\n     \t\t     </a>\r\n\t\t        <button type="submit" class="btn btn-primary">Submit</button>\r\n\t\t      </div>\r\n\t\t    </div>\r\n\t\t  </fieldset>\r\n\t\t</form>\r\n  \t</div>\r\n</div>'},useData:!0}),n.reports=t({1:function(t,n,r,l,e){var a,o,s=null!=n?n:t.nullContext||{},i=t.hooks.helperMissing,c="function",d=t.escapeExpression,u=t.lookupProperty||function(t,n){if(Object.prototype.hasOwnProperty.call(t,n))return t[n]};return"\t\t\t\t      <tr>\r\n\t\t\t\t\t      <td class='index-column'></td>\r\n\r\n\t\t\t\t\t      <td>"+d(typeof(o=null!=(o=u(r,"name")||(null!=n?u(n,"name"):n))?o:i)==c?o.call(s,{name:"name",hash:{},data:e,loc:{start:{line:23,column:15},end:{line:23,column:25}}}):o)+"</td>\r\n\t\t\t\t\t\t  <td>"+d(typeof(o=null!=(o=u(r,"totalPerson")||(null!=n?u(n,"totalPerson"):n))?o:i)==c?o.call(s,{name:"totalPerson",hash:{},data:e,loc:{start:{line:24,column:12},end:{line:24,column:29}}}):o)+"</td>\r\n\t\t\t\t\t\t  <td>"+d(typeof(o=null!=(o=u(r,"phoneNo")||(null!=n?u(n,"phoneNo"):n))?o:i)==c?o.call(s,{name:"phoneNo",hash:{},data:e,loc:{start:{line:25,column:12},end:{line:25,column:25}}}):o)+"</td>\r\n\t\t\t\t\t\t  <td>"+d(typeof(o=null!=(o=u(r,"idTravel")||(null!=n?u(n,"idTravel"):n))?o:i)==c?o.call(s,{name:"idTravel",hash:{},data:e,loc:{start:{line:26,column:12},end:{line:26,column:26}}}):o)+'</td>\r\n\t\t\t\t\t\t  <td>\r\n\t\t\t\t\t\t\t  \r\n\t\t\t\t\t      \t<a href="javascript:;" class="updatestatus" style="text-decoration: none">\r\n\t\t\t\t\t      \t\t'+(null!=(a=(u(r,"displaystatustype3")||n&&u(n,"displaystatustype3")||i).call(s,null!=n?u(n,"status"):n,{name:"displaystatustype3",hash:{},data:e,loc:{start:{line:30,column:13},end:{line:30,column:46}}}))?a:"")+"\r\n\t\t\t\t\t      \t</a>\r\n\t\t\t\t\t      </td>\r\n\t\t\t\t      </tr>\r\n"},compiler:[8,">= 4.3.0"],main:function(t,n,r,l,e){var a,o=t.lookupProperty||function(t,n){if(Object.prototype.hasOwnProperty.call(t,n))return t[n]};return'<div class="row">\r\n  \t<div class="col-sm-12">   \r\n     \t<h1>Booking List</h1>\r\n\r\n\r\n     \t<div class="table-responsive">\r\n\t\t\t<table class="table table-striped table-hover table-bordered" id="tblcontacts">\r\n\t\t\t  \t<thead class="thead-dark">\r\n\t\t\t    \t<tr>\r\n\t\t\t\t      <th>#</th>\r\n\t\t\t\t      <th>Tourist Name</th>\r\n\t\t\t\t\t  <th>Total Person</th>\r\n\t\t\t\t\t  <th>Phone No</th>\r\n\t\t\t\t\t  <th>Booked Package (id </th>\r\n\t\t\t\t      <th>Status</th>\r\n\t\t\t    \t</tr>\r\n\t\t\t  \t</thead>\r\n\t\t\t  \t<tbody>\r\n'+(null!=(a=o(r,"each").call(null!=n?n:t.nullContext||{},null!=n?o(n,"bookinglist"):n,{name:"each",hash:{},fn:t.program(1,e,0),inverse:t.noop,data:e,loc:{start:{line:19,column:7},end:{line:34,column:16}}}))?a:"")+'\t\t\t  \t<tbody>\r\n\t\t\t</table>\r\n\t\t</div>\r\n  \t</div>\r\n</div>\r\n\r\n<script>\r\n  \t$(function(){\r\n\r\n      $("#tblcontacts").on("click", ".updatestatus", function() {\r\n\r\n\t      var link = $(this);\r\n\t      console.log(link);\r\n\r\n\t      //                     TD       TR\r\n\t      var parentTR = $(this).parent().parent();\r\n\t      var firstTD = $(parentTR).children().eq(0);\r\n\r\n\t      // get status\r\n\t      var status = $(firstTD).data("status");\r\n\t      var id = $(firstTD).data("id");\r\n\t      Swal.fire("Status: " + status);\r\n\r\n\t\t\tSwal.fire({\r\n\t\t\t  \ttitle: \'Are you sure?\',\r\n\t\t\t  \thtml: "You want to change this booking ?<br />Status: " + status,\r\n\t\t\t   icon: \'warning\',\r\n\t\t\t   showCancelButton: true,\r\n\t\t\t   confirmButtonColor: \'#3085d6\',\r\n\t\t\t   cancelButtonColor: \'#d33\',\r\n\t\t\t   confirmButtonText: \'Yes, change it!\'\r\n\r\n\t\t\t}).then((result) => {\r\n\r\n\t\t\t\tif (result.value) {\r\n\r\n\t\t\t\t\tvar obj = new Object();\r\n\t\t\t\t \tobj.status = status;\t\r\n\r\n\t            $.ajax({\r\n\t               type: "put",\r\n\t               url: \'api/reports/status/\' + id,\r\n\t\t\t\t\t   contentType: \'application/json\',\r\n\t\t\t      \tdata: JSON.stringify(obj),            \r\n\t\t\t\t\t   dataType: "json",\r\n\t               success: function(data){\r\n\r\n\t                  if (data.updateStatus) {\r\n\r\n\t                     bootbox.alert("Status Updated!");\r\n\r\n\t                     $(firstTD).data("status", data.status);\r\n\r\n\t\t\t\t\t\t\t\tif (data.status == 0)\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t$(link).html("<span class=\'label label-danger\'>Not Approved</span>"); \r\n\t\t\t\t\t\t\t\telse\r\n\t\t\t\t\t\t\t\t\t$(link).html("<span class=\'label label-success\'>Approved</span>");\t\r\n\t                  } \r\n\t                  else {\r\n\r\n\t                     bootbox.alert("contact status update failed - please try again: " + data.errorMessage)\r\n\t                  }\r\n\t               },\r\n\t               error: function() {\r\n\t                  console.log("error");\r\n\t               }\r\n\t            });\t\t\t\t\t\r\n\t\t\t\t}\r\n\r\n\t\t\t})\r\n      });\r\n\r\n      $("#tblcontacts").on("click", ".deletecontact", function() {\r\n      \tvar link = $(this);\r\n\r\n      \t//                     TD       TR\r\n\t      var parentTR = $(this).parent().parent();\r\n\t      var firstTD = $(parentTR).children().eq(0);\r\n\r\n\t      //get the id\r\n\t      var id = $(firstTD).data("id")\r\n\r\n\t\t\tSwal.fire({\r\n\t\t\t  \ttitle: \'Are you sure?\',\r\n\t\t\t  \thtml: "You want to delete the destination?",\r\n\t\t\t   icon: \'warning\',\r\n\t\t\t   showCancelButton: true,\r\n\t\t\t   confirmButtonColor: \'#3085d6\',\r\n\t\t\t   cancelButtonColor: \'#d33\',\r\n\t\t\t   confirmButtonText: \'Yes, delete it!\'\r\n\r\n\t\t\t}).then((result) => {\r\n\r\n\t\t\t\tif (result.value) {\r\n\r\n\t\t        \t//delete the contact at table contacts using contact id\r\n\r\n\t\t        \tvar token = sessionStorage.getItem("token");\r\n\r\n\t\t\t\t   $.ajax({\r\n\t\t\t\t      type: "delete",\r\n\t\t\t\t      url: \'api/contacts/\' + id,               \r\n\t\t\t\t      dataType: "json",\r\n\t\t\t\t      success: function(data){\r\n\r\n\t                  if (data.deleteStatus) {\r\n\r\n\t                     bootbox.alert("Destination deletion successful");\r\n\r\n\t\t\t\t\t\t      $(parentTR).fadeOut("slow", "swing", function(e) {\r\n\r\n\t\t\t\t\t\t      \t//remove row from the table\r\n\t\t\t\t\t\t        \t$(parentTR).remove();\r\n\r\n\r\n\t\t\t\t\t\t      });\t                    \r\n\r\n\t                  } \r\n\t                  else {\r\n\r\n\t                     bootbox.alert("contact deletion failed - please try again: " + data.error)\r\n\t                  }\r\n\r\n\t               },\r\n\t\t\t         error: function(xhr, statusText, err) {\r\n\r\n\t\t\t         \tif (xhr.status == 401) {\r\n\t\t\t\t\t\t     \t//response text from the server if there is any\r\n\t\t\t\t\t\t     \tvar responseText = JSON.parse(xhr.responseText);\r\n\t\t\t\t\t\t     \tbootbox.alert("Error 401 - Unauthorized: " + responseText.message);\r\n\t\t\t\t\t\t     \t\r\n\t\t\t\t\t\t\t\t$("#loginname").html("noname");\r\n\t\t\t\t\t\t\t\tsessionStorage.removeItem("token");\r\n\t\t\t\t\t\t\t\tsessionStorage.removeItem("login");\r\n\t\t\t\t\t\t\t\twindow.location.href = "#login";\r\n\t\t\t\t\t\t\t\treturn;\r\n\t\t\t\t\t\t   }\r\n\r\n\t\t\t\t\t\t   if (xhr.status == 404) {\r\n\t\t\t\t\t\t     \tbootbox.alert("Error 404 - API resource not found at the server");\r\n\t\t\t\t\t\t   }\r\n\r\n\t\t\t         }\r\n\t            });\t\t            \r\n\r\n\t\t\t\t}\r\n\r\n\t\t\t})\r\n      });\r\n   });\r\n<\/script>\r\n'},useData:!0})}();