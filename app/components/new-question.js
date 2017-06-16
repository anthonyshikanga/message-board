import Ember from 'ember';

export default Ember.Component.extend({
<<<<<<< HEAD
	addNewQuestion: false,
  actions: {
    questionFormShow() {
      this.set('addNewQuestion', true);
    },
	saveQuestion1() {
      var params = {
        author: this.get('author'),
        content: this.get('content'),
	  };
     this.set('addNewQuestion', false);
      this.sendAction('saveQuestion2', params);

  }
  }

});
=======
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

>>>>>>> origin/master
