$(document).ready(function() {

    });

    function Contact(firstname, lastname, phone, email, address, city) {
        this.firstname = firstname;
        this.lastname = secondname;
        this.phone = phone;
        this.email = email;
        this.address = address;
        this.city = city;
    };

    var allContacts = [];

    $("#pull").click(function(event) {

        var firstname = $("#fname").val();

        var secondname = $("#lname").val();

        var phone = $("#phone").val();

        var email = $("#email").val();

        var address = $("#address").val();

         var city = $("#city").val();

            var newcontact = {firstname, lastname, phone, email, address, city};
            allContacts.push(newcontact);

            
            console.log(allContacts);
            
});