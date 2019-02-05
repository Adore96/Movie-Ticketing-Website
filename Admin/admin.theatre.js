function addtheatre(){

    var name = document.getElementById("name").value;
    var movie = document.getElementById("movie").value;
    var remainingseats = document.getElementById("remainingseats").value;
    var timeslot = document.getElementById("timeslot").value;
    var nextmovie = document.getElementById("nextmovie").value;
    var reservedseats = document.getElementById("reservations").value;

    
    var firebaseref = firebase.database().ref('Theatres/');

    firebaseref.push().set({
        TheatreName : name ,
        Movie : movie,
        RemainingSeats : remainingseats,
        TimeSlot : timeslot,
        NextMovie : nextmovie,
        ReservedSeats : reservedseats,
   } );
    
    
    document.getElementById("name").value = "" ;
    document.getElementById("movie").value = "" ;
    document.getElementById("remainingseats").value = "" ;
    document.getElementById("timeslot").value = "" ;
    document.getElementById("nextmovie").value = "" ;
     document.getElementById("reservations").value = "" ;

    alert("Theatre added Succesfully");
}


function searchtheatre(){

    var name = document.getElementById("name").value;
    var Id = document.getElementById("id");
    var movie = document.getElementById("movie");
    var remainingseats = document.getElementById("remainingseats");
    var timeslot = document.getElementById("timeslot");
    var nextmovie = document.getElementById("nextmovie");
    var reservedseats = document.getElementById("reservations");

    const firebaseref = firebase.database().ref();

    firebaseref.child('Theatres').orderByChild('TheatreName').equalTo(name).on("value", function(theatresnapshot) {
        console.log(theatresnapshot.val());

        theatresnapshot.forEach(function(data) {
            var alldata = data.val()
            console.log(data.key);

            movie.value = alldata.Movie;
            name.value = alldata.TheatreName;
            Id.value = data.key;
            remainingseats.value = alldata.RemainingSeats;
            timeslot.value = alldata.TimeSlot;
            nextmovie.value = alldata.NextMovie;
            reservedseats.value = alldata.ReservedSeats;

        });
    });
}



function updatetheatre(){
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
        
    document.getElementById("id").value = " ";
    document.getElementById("name").value = "" ;
    document.getElementById("movie").value = "" ;
    document.getElementById("remainingseats").value = "" ;
    document.getElementById("timeslot").value = "" ;
    document.getElementById("nextmovie").value = "" ;
     document.getElementById("reservations").value = "" ;

}

function deletetheatre(){

    var Id = document.getElementById("id").value;


    firebase.database().ref('Theatres/' + Id).remove();

    document.getElementById("id").value = " ";
    document.getElementById("name").value = "" ;
    document.getElementById("movie").value = "" ;
    document.getElementById("remainingseats").value = "" ;
    document.getElementById("timeslot").value = "" ;
    document.getElementById("nextmovie").value = "" ;
     document.getElementById("reservations").value = "" ;



    window.alert("Theatre has been removed from the database succesfully!!");

}

































// uploading the image open

// var mountainImagesRef = storageRef.child('images/mountains.jpg');
//     var file = selectedFile; // use the Blob or File API
// ref.put(file).then(function(snapshot) {
//   console.log('Uploaded a blob or file!');
// });

//   uploading the image close
