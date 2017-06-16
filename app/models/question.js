import DS from 'ember-data';

export default DS.Model.extend({
<<<<<<< HEAD
	author: DS.attr(),
	content: DS.attr(),
	notes: DS.attr(),
=======
	author:DS.attr(),
    content:DS.attr(),
    timestamp:DS.attr(),
    upvote:DS.attr(),
    downvote:DS.attr(),
    answers: DS.hasMany('answer', {async:true})
>>>>>>> origin/master

});
