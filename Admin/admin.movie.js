
function addFilm(){

    var name = document.getElementById("MovieName").value;
    var description = document.getElementById("MovieDescription").value;
    var mainactor = document.getElementById("MainActor").value;
    var mainactress = document.getElementById("MainActress").value;
    var producer = document.getElementById("MovieProducer").value;
    var theatre = document.getElementById("MovieTheatre").value;



    // var MovieName = fname.value;
    // var MovieDescription = sname.value;

    const selectedFile = document.getElementById("MovieImage").value;
    
    var firebaseref = firebase.database().ref('Films/');

    firebaseref.push().set({
        Name : name ,
        Description : description,
        MainActor : mainactor,
        MainActress : mainactress,
        Producer : producer,
        Theatre : theatre,
        ImagePath : selectedFile,
   } );
    console.log("Data Added"); 
    
    document.getElementById("MovieName").value = " ";
    document.getElementById("MovieDescription").value = " ";
    document.getElementById("MainActor").value = " ";
    document.getElementById("MainActress").value = " ";
    document.getElementById("MovieProducer").value = " ";
    document.getElementById("MovieId").value = " ";
    document.getElementById("MovieName").value = " ";
    document.getElementById("MovieTheatre").value = " ";

    alert("film added Succesfully");
}


function searchmovie(){

    var name = document.getElementById("MovieName");
    var description = document.getElementById("MovieDescription");
    var mainactor = document.getElementById("MainActor");
    var mainactress = document.getElementById("MainActress");
    var producer = document.getElementById("MovieProducer");
    var Id = document.getElementById("MovieId");
    var searchName = document.getElementById("MovieName").value;
    var theatre = document.getElementById("MovieTheatre");

    var selectedFile = document.getElementById("MovieImage");

    const firebaseref = firebase.database().ref();

    firebaseref.child('Films').orderByChild('Name').equalTo(searchName).on("value", function(moviesnapshot) {
        console.log(moviesnapshot.val());

        moviesnapshot.forEach(function(data) {
            var alldata = data.val()
            console.log(data.key);
            
            name.value = alldata.Name;
            Id.value = data.key;
            description.value = alldata.Description;
            mainactor.value = alldata.MainActor;
            mainactress.value = alldata.MainActress;
            producer.value = alldata.Producer;
            theatre.value = alldata.Theatre;

        });
    });

}



function Updatemovie(){
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
        
    document.getElementById("MovieName").value = " ";
    document.getElementById("MovieDescription").value = " ";
    document.getElementById("MainActor").value = " ";
    document.getElementById("MainActress").value = " ";
    document.getElementById("MovieProducer").value = " ";
    document.getElementById("MovieId").value = " ";
    document.getElementById("MovieName").value = " ";
    document.getElementById("MovieTheatre").value = " ";


}

function DeleteFilm(){

    var Id = document.getElementById("MovieId").value;


    firebase.database().ref('Films/' + Id).remove();

    document.getElementById("MovieName").value = " ";
    document.getElementById("MovieDescription").value = " ";
    document.getElementById("MainActor").value = " ";
    document.getElementById("MainActress").value = " ";
    document.getElementById("MovieProducer").value = " ";
    document.getElementById("MovieId").value = " ";
    document.getElementById("MovieName").value = " ";
    document.getElementById("MovieTheatre").value = " ";

    window.alert("Film has been removed from the database succesfully!!");

}

































// uploading the image open

// var mountainImagesRef = storageRef.child('images/mountains.jpg');
//     var file = selectedFile; // use the Blob or File API
// ref.put(file).then(function(snapshot) {
//   console.log('Uploaded a blob or file!');
// });

//   uploading the image close
