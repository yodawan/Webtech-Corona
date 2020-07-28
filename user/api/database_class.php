<?php

   class User {
      var $id;
      var $login;
      var $name;
      var $email;
      var $mobileno;
      var $photo;
      var $addeddate;
   }

   class Contact {
      var $id;
      var $name;
      var $email;
      var $mobileno;
      var $gender;
      var $photo;
      var $dob;
      var $addeddate;
      var $status;
   }

   class DbStatus {
      var $status;
      var $error;
      var $lastinsertid;
   }

   function time_elapsed_string($datetime, $full = false) {

      if ($datetime == '0000-00-00 00:00:00')
         return "none";

      if ($datetime == '0000-00-00')
         return "none";

      $now = new DateTime;
      $ago = new DateTime($datetime);
      $diff = $now->diff($ago);

      $diff->w = floor($diff->d / 7);
      $diff->d -= $diff->w * 7;

      $string = array(
         'y' => 'year',
         'm' => 'month',
         'w' => 'week',
         'd' => 'day',
         'h' => 'hour',
         'i' => 'minute',
         's' => 'second',
      );
      
      foreach ($string as $k => &$v) {
         if ($diff->$k) {
            $v = $diff->$k . ' ' . $v . ($diff->$k > 1 ? 's' : '');
         } else {
            unset($string[$k]);
         }
      }

      if (!$full) $string = array_slice($string, 0, 1);
         return $string ? implode(', ', $string) . ' ago' : 'just now';
   }

   function hashPassword($password) { 

      $cost = 10;

      $options = [
         'cost' => $cost,
      ];

      $passwordhash =  password_hash($password, PASSWORD_BCRYPT, $options);
      return $passwordhash;
   }

	class Database {
 		protected $dbhost;
    	protected $dbuser;
    	protected $dbpass;
    	protected $dbname;
    	protected $db;

 		function __construct( $dbhost, $dbuser, $dbpass, $dbname) {
   		$this->dbhost = $dbhost;
   		$this->dbuser = $dbuser;
   		$this->dbpass = $dbpass;
   		$this->dbname = $dbname;

   		$db = new PDO("mysql:host=$dbhost;dbname=$dbname", $dbuser, $dbpass);
    		$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
			$db->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
         $db->setAttribute(PDO::MYSQL_ATTR_FOUND_ROWS, true);
    		$this->db = $db;
   	}

      function beginTransaction() {
         try {
            $this->db->beginTransaction(); 
         }
         catch(PDOException $e) {
            $errorMessage = $e->getMessage();
            return 0;
         } 
      }

      function commit() {
         try {
            $this->db->commit();
         }
         catch(PDOException $e) {
            $errorMessage = $e->getMessage();
            return 0;
         } 
      }

      function rollback() {
         try {
            $this->db->rollback();
         }
         catch(PDOException $e) {
            $errorMessage = $e->getMessage();
            return 0;
         } 
      }

      function close() {
         try {
            $this->db = null;   
         }
         catch(PDOException $e) {
            $errorMessage = $e->getMessage();
            return 0;
         } 
      }

      function insertUser($login, $clearpassword) {

         //hash the password using one way md5 brcrypt hashing
         $passwordhash = hashPassword($clearpassword);
         try {
            
            $sql = "INSERT INTO admins(login, password, addeddate) 
                    VALUES (:login, :password, NOW())";

            $stmt = $this->db->prepare($sql);  
            $stmt->bindParam("login", $login);
            $stmt->bindParam("password", $passwordhash);
            $stmt->execute();

            $dbs = new DbStatus();
            $dbs->status = true;
            $dbs->error = "none";
            $dbs->lastinsertid = $this->db->lastInsertId();

            return $dbs;
         }
         catch(PDOException $e) {
            $errorMessage = $e->getMessage();

            $dbs = new DbStatus();
            $dbs->status = false;
            $dbs->error = $errorMessage;

            return $dbs;
         } 
      }

      function checkemail($email) {
         $sql = "SELECT *
                 FROM admins
                 WHERE email = :email";

         $stmt = $this->db->prepare($sql);
         $stmt->bindParam("email", $email);
         $stmt->execute(); 
         $row_count = $stmt->rowCount();
         return $row_count;
      }

      function authenticateUser($login) {
         $sql = "SELECT login, password as passwordhash, email, name
                 FROM admins
                 WHERE login = :login";        

         $stmt = $this->db->prepare($sql);
         $stmt->bindParam("login", $login);
         $stmt->execute(); 
         $row_count = $stmt->rowCount(); 

         $user = null;

         if ($row_count) {
            while($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
               $user = new User();
               $user->login = $row['login'];
               $user->passwordhash = $row['passwordhash'];
               $user->email = $row['email'];
               $user->name = $row['name'];
            }
         }

         return $user;
      }

      /////////////////////////////////////////////////////////////////////////////////// contacts

      // insert contact
      function insertContact($name, $email, $mobileno, $gender, $ownerlogin) {

         try {
            
            $sql = "INSERT INTO bookings(name, totalPerson, phoneNo, idTravel, dateTravel, ownerlogin, addeddate) 
                    VALUES (:name, :totalPerson, :phoneNo, :idTravel, NOW(), :ownerlogin, NOW())";

            $stmt = $this->db->prepare($sql);  
            $stmt->bindParam("name", $name);
            $stmt->bindParam("totalPerson", $email);
            $stmt->bindParam("phoneNo", $mobileno);
            $stmt->bindParam("idTravel", $gender);
            //$stmt->bindParam("dateTravel", $dob);
            $stmt->bindParam("ownerlogin", $ownerlogin);
            $stmt->execute();

            $dbs = new DbStatus();
            $dbs->status = true;
            $dbs->error = "none";
            $dbs->lastinsertid = $this->db->lastInsertId();

            return $dbs;
         }
         catch(PDOException $e) {
            $errorMessage = $e->getMessage();

            $dbs = new DbStatus();
            $dbs->status = false;
            $dbs->error = $errorMessage;

            return $dbs;
         }          
      }

      // function getTotalBooked(){
      //    $sql = "SELECT COUNT(status)
      //            FROM booking 
      //            WHERE status = 0
      //            ";
      // }

      //get all contacts
      function getAllContactsViaLogin($ownerlogin) {
         $sql = "SELECT *
                 FROM bookings 
                 ORDER BY addeddate ASC
                 ";
               //   WHERE ownerlogin = :ownerlogin


         $stmt = $this->db->prepare($sql);
         $stmt->bindParam("ownerlogin", $ownerlogin);
         $stmt->execute(); 
         $row_count = $stmt->rowCount();

         $data = array();

         if ($row_count)
         {
            while($row = $stmt->fetch(PDO::FETCH_ASSOC))
            {
               $contact = new Contact();
               $contact->id = $row['id'];
               $contact->name = $row['name'];
               $contact->email = $row['totalPerson'];
               $contact->mobileno = $row['phoneNo'];
               $contact->gender = $row['idTravel'];
               $contact->photo = $row['photo'];

               $dob = $row['dateTravel'];
               $frontenddob = date("d-m-Y",strtotime($dob));
               $contact->dob = $frontenddob;

               $addeddate = $row['addeddate'];
               $contact->addeddate = time_elapsed_string($addeddate); 

               $contact->status = $row['status'];  

               array_push($data, $contact);
            }
         }

         return $data;
      }

      //get single contact via id
      //ownerlogin for rolling no hacking (the id)
      function getContactViaId($id) {
      // function getContactViaId($id, $ownerlogin) {
         $sql = "SELECT *
                 FROM bookings
                 WHERE id = :id
               --   AND ownerlogin = :ownerlogin
                 ";

         $stmt = $this->db->prepare($sql);
         $stmt->bindParam("id", $id);
         // $stmt->bindParam("ownerlogin", $ownerlogin);
         $stmt->execute(); 
         $row_count = $stmt->rowCount();         

         if ($row_count)
         {
            while($row = $stmt->fetch(PDO::FETCH_ASSOC))
            {
               $contact = new Contact();

               $contact->id = $row['id'];
               
               $contact->name = $row['name'];
               $contact->email = $row['totalPerson'];
               $contact->mobileno = $row['phoneNo'];
               $contact->gender = $row['idTravel'];
               $contact->photo = $row['photo'];

               $dob = $row['dateTravel'];
               $frontenddob = date("d-m-Y",strtotime($dob));
               $contact->dob = $frontenddob;

               $addeddate = $row['addeddate'];
               $contact->addeddate = time_elapsed_string($addeddate); 

               $contact->status = $row['status'];    
            }
         }
         else {
            //return empty array
            $contact = array();
         }

         return $contact;
      }

      //update contact via id
      function updateContactViaId($id, $name, $email, $mobileno, $gender, $dob) {

         $sql = "UPDATE bookings
                 SET name = :name,
                     totalPerson = :totalPerson,
                     phoneNo = :phoneNo,
                     idTravel = :idTravel,
                     dateTravel = :dateTravel
                 WHERE id = :id";

         try {
            $stmt = $this->db->prepare($sql);  
            $stmt->bindParam("id", $id);
            $stmt->bindParam("name", $name);
            $stmt->bindParam("totalPerson", $email);
            $stmt->bindParam("phoneNo", $mobileno);
            $stmt->bindParam("idTravel", $gender);
            $stmt->bindParam("dateTravel", $dob);
            $stmt->execute();

            $dbs = new DbStatus();
            $dbs->status = true;
            $dbs->error = "none";

            return $dbs;
         }
         catch(PDOException $e) {
            // $errorMessage = $e->getMessage();
            $errorMessage = "Successful";

            $dbs = new DbStatus();
            $dbs->status = false;
            $dbs->error = $errorMessage;

            return $dbs;
         } 
      }

      //update contact status via id
      function updateContactStatusViaId($id, $status) {

         $sql = "UPDATE bookings
                 SET status = :status
                 WHERE id = :id";

         try {
            $stmt = $this->db->prepare($sql);  
            $stmt->bindParam("id", $id);
            $stmt->bindParam("status", $status);
            $stmt->execute();

            $dbs = new DbStatus();
            $dbs->status = true;
            $dbs->error = "none";

            return $dbs;
         }
         catch(PDOException $e) {
            $errorMessage = $e->getMessage();

            $dbs = new DbStatus();
            $dbs->status = false;
            $dbs->error = $errorMessage;

            return $dbs;
         } 
      } 

      //delete contact via id
      function deleteContactViaId($id) {

         $dbstatus = new DbStatus();

         $sql = "DELETE 
                 FROM bookings 
                 WHERE id = :id";

         try {
            $stmt = $this->db->prepare($sql); 
            $stmt->bindParam("id", $id);
            $stmt->execute();

            $dbstatus->status = true;
            $dbstatus->error = "none";
            return $dbstatus;
         }
         catch(PDOException $e) {
            $errorMessage = $e->getMessage();

            $dbstatus->status = false;
            $dbstatus->error = $errorMessage;
            return $dbstatus;
         }           
      } 

      //get single user via login
      function getUserViaLogin($login) {
         $sql = "SELECT *
                 FROM users
                 WHERE login = :login";

         $stmt = $this->db->prepare($sql);
         $stmt->bindParam("login", $login);
         $stmt->execute(); 
         $row_count = $stmt->rowCount();

         $user = new User();

         if ($row_count)
         {
            while($row = $stmt->fetch(PDO::FETCH_ASSOC))
            {               
               $user->id = $row['id'];
               $user->login = $row['login'];
               $user->name = $row['name'];
               $user->email = $row['email'];
               $user->mobileno = $row['mobileno'];
               $user->photo = $row['photo'];

               $addeddate = $row['addeddate'];
               $user->addeddate = time_elapsed_string($addeddate); 
            }
         }

         return $user;
      }

      //update user via login
      function updateUserViaLogin($login, $name, $email, $mobileno) {

         $sql = "UPDATE users
                 SET name = :name,
                     email = :email,
                     mobileno = :mobileno
                 WHERE login = :login";

         try {
            $stmt = $this->db->prepare($sql);  
            $stmt->bindParam("login", $login);
            $stmt->bindParam("name", $name);
            $stmt->bindParam("email", $email);
            $stmt->bindParam("mobileno", $mobileno);
            $stmt->execute();

            $dbs = new DbStatus();
            $dbs->status = true;
            $dbs->error = "none";

            return $dbs;
         }
         catch(PDOException $e) {
            $errorMessage = $e->getMessage();

            $dbs = new DbStatus();
            $dbs->status = false;
            $dbs->error = $errorMessage;

            return $dbs;
         } 
      }

      function getUserPasswordViaLogin($login) {

         $sql = "SELECT password
                 FROM users
                 WHERE login = :login";

         $stmt = $this->db->prepare($sql);
         $stmt->bindParam("login", $login);
         $stmt->execute(); 
         $row_count = $stmt->rowCount();

         $password = "";

         if ($row_count)
         {
            while($row = $stmt->fetch(PDO::FETCH_ASSOC))
            {               
               $password = $row['password'];
            }
         }  

         return $password;       
      }

      //update user password via login
      function updateUserPasswordViaLogin($login, $clearpassword) {

         //hash the new password using one way md5 brcrypt encrypted hashing
         $passwordhash = hashPassword($clearpassword);

         $sql = "UPDATE users
                 SET password = :password
                 WHERE login = :login";

         try {
            $stmt = $this->db->prepare($sql);  
            $stmt->bindParam("login", $login);
            $stmt->bindParam("password", $passwordhash);
            $stmt->execute();

            $dbs = new DbStatus();
            $dbs->status = true;
            $dbs->error = "none";

            return $dbs;
         }
         catch(PDOException $e) {
            $errorMessage = $e->getMessage();

            $dbs = new DbStatus();
            $dbs->status = false;
            $dbs->error = $errorMessage;

            return $dbs;
         } 
      }

      //update profile photo
      function updateProfilePhoto($photo, $id) {

         $sql = "UPDATE bookings
                 SET photo = :photo
                 WHERE id = :id";

         try {
            $stmt = $this->db->prepare($sql);  
            $stmt->bindParam("id", $id);
            $stmt->bindParam("photo", $photo);
            $stmt->execute();

            $dbs = new DbStatus();
            $dbs->status = true;
            $dbs->error = "none";

            return $dbs;
         }
         catch(PDOException $e) {
            $errorMessage = $e->getMessage();

            $dbs = new DbStatus();
            $dbs->status = false;
            $dbs->error = $errorMessage;

            return $dbs;
         } 
      }
   }