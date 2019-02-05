function refresh(){

// movie updates

    var id1 = document.getElementById("id1");
    var name1 = document.getElementById("name1");
    var theatre1 = document.getElementById("theatre1");
    var status1 = document.getElementById("status1");
    var actor1 = document.getElementById("actor1");
    var actress1 = document.getElementById("actress1");
    var producer1 = document.getElementById("producer1");
    var link1 = document.getElementById("link1");



    const firebaseref = firebase.database().ref();

    firebaseref.child('Films').limitToLast(1).on("value", function(snapshot) {
        console.log("Movie Updates");
        console.log(" ");

        console.log(snapshot.val());

        snapshot.forEach(function(data) {
            var alldata = data.val()
            console.log(data.key);
            
            name1.innerText = alldata.Name;
            id1.innerText = data.key;
            status1.innerText = alldata.Description;
            actor1.innerText = alldata.MainActor;
            actress1.innerText = alldata.MainActress;
            producer1.innerText = alldata.Producer;
            link1.innerText = alldata.ImagePath;
            theatre1.innerText = alldata.Theatre;


        });
    });

        // customer updates

        var id2 = document.getElementById("id2");
        var first2 = document.getElementById("first2");
        var last2 = document.getElementById("last2");
        var email2 = document.getElementById("email2");
        var mobile2 = document.getElementById("mobile2");
        var password2 = document.getElementById("password2");

        firebaseref.child('Users').limitToLast(1).on("value", function(customersnapshot) {
            console.log(" ");

            console.log("Customer Updates");
            console.log(" ");

            console.log(customersnapshot.val());
    
            customersnapshot.forEach(function(data) {

                var alldata = data.val()
                console.log(data.key);
                
                first2.innerText = alldata.Firstname;
                id2.innerText = data.key;
                last2.innerText = alldata.Lastname;
                email2.innerText = alldata.Email;
                mobile2.innerText = alldata.Mobile;
                password2.innerText = alldata.Password;
    
            });
        });

        // Theatre Updates

        var id3 = document.getElementById("id3");
        var name3 = document.getElementById("name3");
        var movierunning3 = document.getElementById("movierunning3");
        var nextmovie3 = document.getElementById("nextmovie3");
        var remainingseats3 = document.getElementById("remainingseats3");
        var reservedseats3 = document.getElementById("reservedseats3");
        var timeslot3 = document.getElementById("timeslot3");

        firebaseref.child('Theatres').limitToLast(1).on("value", function(theatresnapshot) {
            console.log(" ");
             console.log("Theatre Updates");
            console.log(" ");


            console.log(theatresnapshot.val());
    
            theatresnapshot.forEach(function(data) {
                var alldata = data.val()
                console.log(data.key);
                
                name3.innerText = alldata.TheatreName;
                id3.innerText = data.key;
                movierunning3.innerText = alldata.Movie;
                nextmovie3.innerText = alldata.NextMovie;
                remainingseats3.innerText = alldata.RemainingSeats;
                reservedseats3.innerText = alldata.ReservedSeats;
                timeslot3.innerText = alldata.TimeSlot;

    
            });
        });














        window.alert("Data Refreshed Succesully");
}