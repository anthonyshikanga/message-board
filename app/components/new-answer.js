import Ember from 'ember';

export default Ember.Component.extend({
	showAnswerForm:false,
	actions: {
		saveAnswer(){
			//code to save comes here
			var myAnswer={
				author: this.get('author'),
				content: this.get('content'),
				rating: this.get('rating'),
				question: this.get('questiontouse')
				};

			this.sendAction('answerSave', myAnswer);
			this.set('showAnswerForm', false);
		},
		answerQuestion() {
			this.set('showAnswerForm', true);
		}

	}
});
