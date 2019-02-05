function addsnack(){

    var name = document.getElementById("name").value;
    var status = document.getElementById("status").value;
    var description = document.getElementById("description").value;
    var price = document.getElementById("price").value;
    var image = document.getElementById("image").value;

    
    var firebaseref = firebase.database().ref('Snacks/');

    firebaseref.push().set({
        SnackName : name ,
        Status : status,
        Description : description,
        Price : price,
        ImageURL : image,
   } );
    
    
  document.getElementById("name").value = "";
   document.getElementById("status").value = "";
   document.getElementById("description").value = "";
   document.getElementById("price").value = "";
   document.getElementById("image").value = "";

    alert("Snack added Succesfully");
}


function searchsnack(){

    var Id = document.getElementById("id");
    var name = document.getElementById("name").value;
    var status = document.getElementById("status");
    var description = document.getElementById("description");
    var price = document.getElementById("price");
    var image = document.getElementById("image");

    const firebaseref = firebase.database().ref();

    firebaseref.child('Snacks').orderByChild('SnackName').equalTo(name).on("value", function(snacksnapshot) {
        console.log(snacksnapshot.val());

        snacksnapshot.forEach(function(data) {
            var alldata = data.val()
            console.log(data.key);

           // movie.value = alldata.Movie;
            //name.value = alldata.SnackName;
            Id.value = data.key;
            status.value = alldata.Status;
            description.value = alldata.Description;
            price.value = alldata.Price;
            image.value = alldata.ImageURL;

        });
    });
}



function updatesnack(){
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
        
    document.getElementById("name").value = "";
    document.getElementById("status").value = "";
    document.getElementById("description").value = "";
    document.getElementById("price").value = "";
    document.getElementById("image").value = "";

}

function deletesnack(){

    var Id = document.getElementById("id").value;


    firebase.database().ref('Snacks/' + Id).remove();

    document.getElementById("id").value = "";
    document.getElementById("name").value = "";
    document.getElementById("status").value = "";
    document.getElementById("description").value = "";
    document.getElementById("price").value = "";
    document.getElementById("image").value = "";



    window.alert("Snack has been removed from the database succesfully!!");

}

































// uploading the image open

// var mountainImagesRef = storageRef.child('images/mountains.jpg');
//     var file = selectedFile; // use the Blob or File API
// ref.put(file).then(function(snapshot) {
//   console.log('Uploaded a blob or file!');
// });

//   uploading the image close
