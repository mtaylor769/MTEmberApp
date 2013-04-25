MTEmberApp = Ember.Application.create();

MTEmberApp.Store = DS.Store.extend({
	revision: 12,
	adapter: "DS.FixtureAdapter"
});

MTEmberApp.Router.map(function() {
  // put your routes here
  // You should use this.resource for URLs that represent a noun, 
  // and this.route for URLs that represent adjectives or verbs modifying those nouns.
    this.resource('about');
    this.resource('contacts');
    this.resource('test123')
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

Ember.Handlebars.registerBoundHelper('date', function(date) {
	return moment(date).fromNow();
});

var showdown = new Showdown.converter();
Ember.Handlebars.registerBoundHelper('markdown', function(str) {
	return Ember.Handlebars.safeString(showdown.makeHtml(str));
});

var setTitle = function(title) {
	window.document.title = title;
	return title;
}