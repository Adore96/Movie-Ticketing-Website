
    var filmname = document.getElementById("ongoing3name");
    var filmdes = document.getElementById("ongoing3des");
    var image = document.getElementById("image");


    // var name = filmname.value;
    // var des = filmdes.value;


    const firebaseref = firebase.database().ref();

    firebaseref.child('Films').limitToLast(1).on("value", function(snapshot) {
        console.log(snapshot.val());

        snapshot.forEach(function(data) {
            var alldata = data.val()
            console.log(data.key);

            
            filmname.innerText = alldata.Name;
            filmdes.innerText = alldata.Description;
            image.src = "#";
            

        });
    });

    
