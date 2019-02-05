
    var user = document.getElementById("user");
    var review = document.getElementById("review");
    var time = document.getElementById("time");

    time.innerText = " " + new Date().toLocaleString();
    console.log(time);

    var firebaseref = firebase.database().ref();


    firebaseref.child('Reviews').limitToLast(1).on("value", function(snapshot) {
        console.log(snapshot.val());

        snapshot.forEach(function(data) {
            var alldata = data.val()
            console.log(data.key);

            
            user.innerText = " " + alldata.UserName;
            review.innerText = alldata.Review;

        });
    });

// >> "09/08/2014, 2:35:56 AM"

console.log(new Date().toLocaleString());

function Review(){

  

    var name = document.getElementById("username").value;
    var mail = document.getElementById("useremail").value;
    var review = document.getElementById("userreview").value;

    var a = document.getElementById("username");
    var b = document.getElementById("useremail");
    var c = document.getElementById("userreview");


    // sending data to database start

    var firebaseref = firebase.database().ref();


    firebaseref.child('Reviews').push().set({
        UserName : name ,
        Review : review,
        Email : mail,
    } );

a.value = " ";
b.value = " ";
c.value = " ";


}


