Users = new Mongo.Collection('my_users');

Meteor.startup(function() {
    if (Users.find().count() === 0){
        Users.insert ( {no:4, name:"김국진", email:"kkj@kor.com"} );
        Users.insert ( {no:3, name:"윤종신", email:'yjs@kor.com'} );
        Users.insert ( {no:2, name:'김구라', email: 'kgr@kor.com'} );
        Users.insert ( {no:1, name:'조규현', email: 'jkh@kor.com'} );
        console.log('insert 됐음');
    }
});

