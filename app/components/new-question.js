import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		 saveQuestion(){
			//console.log("you clicked me");
			var myQuestion={
				author:this.get('author'),
				content:this.get('content'),
			}
			//console.log(myQuestion.author);

			this.sendAction('saveQuiz', myQuestion);
		}

	}
});

