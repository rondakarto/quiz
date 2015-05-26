Template.userInput.events({

    'click button' : function(evt,tmpl){

        Users.insert({
            no : tmpl.find( 'input[name=no]').value,
            name : tmpl.find( 'input[name=name]').value,
            email : tmpl.find( 'input[name=email]').value
        });
        console.log( tmpl );
    }
});