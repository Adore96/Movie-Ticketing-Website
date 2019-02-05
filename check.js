// var button = document.getElementById("button");
// var fname = document.getElementById("firstname");
// var sname = document.getElementById("lastname");


// var firstname = fname.value;
// var secondname = sname.value;



function hello(){

    var newheading = document.getElementById("heading");

    firebase.database().ref('Hello/').once('value').then(function(snapshot) {
        snapshot.forEach(function(userSnapshot) {
            var username = userSnapshot.val();
            console.log(username);
            newheading.innerText = username;
        });
    });



}

function fuckthis(){

    var fname = document.getElementById("firstname");
    var sname = document.getElementById("lastname");
    
    var firstname = fname.value;
    var secondname = sname.value;

    var firebaseref = firebase.database().ref('Users/');

    firebaseref.push().set({
        username : firstname ,
        secondname : secondname,
    } );
}

