import Ember from 'ember';

export default Ember.Route.extend({
	model(object) {
		return this.store.findRecord('question', object.question_id);
	},
	actions:{
		saveMyAnswerNow(answer){
			//code to save answer goes here
			var newAnswer=this.store.createRecord('answer', answer);
			var question=answer.question;
			question.get('answers').addObject(newAnswer);
			newAnswer.save().then(function(){
				return question.save();
			});
			this.transitionTo();
		}
	}
});
