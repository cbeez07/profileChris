
$(document).ready(function(){
    $('.collapsible').collapsible();
    $('.parallax').parallax();
    $('#textarea1').val('New Text');
    $('#textarea1').trigger('autoresize');
    $('.sidenav').sidenav();
    $('.modal').modal();

    var config = {
        apiKey: "AIzaSyCNSIWHFae76-SDe_Fv0ZwfxR3LY2sgtHY",
        authDomain: "chrisprofile-c6f11.firebaseapp.com",
        databaseURL: "https://chrisprofile-c6f11.firebaseio.com",
        projectId: "chrisprofile-c6f11",
        storageBucket: "chrisprofile-c6f11.appspot.com",
        messagingSenderId: "16364418854"
    };
    firebase.initializeApp(config);

    let database = firebase.database();
    let name = '';
    let email = '';
    let message = ''; 
    $('#submit-button').on('click', function(event) {
        event.preventDefault();

        console.log('one');
        name = $('.name').val().trim();
        email = $('.email').val().trim();
        message = $('.message').val().trim();
        console.log('two', name, email, message);

        $('.name').val('')
        $('.email').val('')
        $('.message').val('')
        
        database.ref('/people').push({
            name: name,
            email: email,
            message: message
        });

        $('#thanks').text('Thank you ' + name + ' for contacting me. I will get back to you as soon as I can.')
        
    });




});


