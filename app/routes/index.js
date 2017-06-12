import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return this.store.findAll('question');
	},
	actions: {
		saveQuestion(myquestion) {
			//console.log('To Save: '+myquestion.author+" "+myquestion.content);
			myquestion.timestamp= new Date().getTime();
			myquestion.upvote=0;
			myquestion.downvote=0;
			//console.log(myquestion);
			var newQuestion=this.store.createRecord('question', myquestion);
            newQuestion.save();
		}
	}
});
