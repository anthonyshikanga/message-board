import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return this.store.findAll('question');
	},
<<<<<<< HEAD
	
	actions: { 
	saveQuestion3(params) {
		var newQuestion = this.store.createRecord('question',params);
		newQuestion.save();
		this.transitionTo('index');
	},
	destroyQestion(question) {
      rental.destroyRecord();
      this.transitionTo('index');
	}
	}

=======
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
>>>>>>> origin/master
});
