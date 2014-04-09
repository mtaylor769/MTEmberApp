MTEmberApp.Router.map(function() {
  // put your routes here
  // You should use this.resource for URLs that represent a noun, 
  // and this.route for URLs that represent adjectives or verbs modifying those nouns.
    this.resource('about');
    this.resource('contacts');
    this.resource('examples')
});

// App.ApplicationController = Ember.Controller.extend({
// 	title: "default";
// });

MTEmberApp.IndexRoute = Ember.Route.extend({
  setupController: function(controller) {
	title = setTitle("Mike Taylor Design.com");
    controller.set('title', title);
    controller.set('content', ['red', 'yellow', 'blue']);
  }
});

MTEmberApp.AboutRoute = Ember.Route.extend({
    model: function() {
        return ['about us'];
    }
});

MTEmberApp.ContactsRoute = Ember.Route.extend({
    model: function() {
        return ['hello there'];
    }
});

MTEmberApp.ExamplesRoute = Ember.Route.extend({
    model: function() {
        return ['Code examples'];
    }
});