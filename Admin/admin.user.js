
function AddUser(){

    var id = document.getElementById("userid").value;
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var email = document.getElementById("email").value;
    var mobile = document.getElementById("mobile").value;
    var password = document.getElementById("password").value;

    
    var firebaseref = firebase.database().ref('Users/');

    firebaseref.push().set({
        Firstname : firstname ,
        Lastname : lastname,
        Email : email,
        Mobile : mobile,
        Password : password,
   } );
    
    
    document.getElementById("userid").value = " ";
    document.getElementById("firstname").value = " ";
    document.getElementById("lastname").value = " ";
    document.getElementById("email").value = " ";
    document.getElementById("mobile").value = " ";
    document.getElementById("password").value = "";

    alert("User added Succesfully");
}


function SearchUser(){

    var id = document.getElementById("userid");
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname");
    var email = document.getElementById("email");
    var mobile = document.getElementById("mobile");
    var password = document.getElementById("password");

    const firebaseref = firebase.database().ref();

    firebaseref.child('Users').orderByChild('Firstname').equalTo(firstname).on("value", function(snap) {
        console.log(snap.val());

        snap.forEach(function(data) {
            var alldata = data.val()
            console.log(data.key);
            
            firstname.value = alldata.Firstname;
            id.value = data.key;
            lastname.value = alldata.Lastname;
            email.value = alldata.Email;
            mobile.value = alldata.Mobile;
            password.value = alldata.Password;

        });
    });
}



function UpdateUser(){
        // A post entry.
      
        // Get a key for a new Post.
        var newPostKey = firebase.database().ref().child('posts').push().key;
      
        // Write the new post's data simultaneously in the posts list and the user's post list.
        var updates = {};
        updates['/posts/' + newPostKey] = postData;
        updates['/user-posts/' + uid + '/' + newPostKey] = postData;
      
        return firebase.database().ref().update(updates);
      }





function ClearFields(){
        
    document.getElementById("userid").value = " ";
    document.getElementById("firstname").value = " ";
    document.getElementById("lastname").value = " ";
    document.getElementById("email").value = " ";
    document.getElementById("mobile").value = " ";
    document.getElementById("password").value = "";

}

function DeleteUser(){

    var Id = document.getElementById("userid").value;


    firebase.database().ref('Users/' + Id).remove();

    document.getElementById("userid").value = " ";
    document.getElementById("firstname").value = " ";
    document.getElementById("lastname").value = " ";
    document.getElementById("email").value = " ";
    document.getElementById("mobile").value = " ";
    document.getElementById("password").value = "";

    window.alert("User has been removed from the database succesfully!!");

}

































// uploading the image open

// var mountainImagesRef = storageRef.child('images/mountains.jpg');
//     var file = selectedFile; // use the Blob or File API
// ref.put(file).then(function(snapshot) {
//   console.log('Uploaded a blob or file!');
// });

//   uploading the image close
