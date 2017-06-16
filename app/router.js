import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
<<<<<<< HEAD
  this.route('about');
  this.route('contact');
  this.route('question', {path: '/question/:question_id'});
=======
  this.route('details', {path: '/details/:question_id' });
>>>>>>> origin/master
});

export default Router;
