MTEmberApp = Ember.Application.create();

MTEmberApp.Store = DS.Store.extend({
	revision: 12,
	adapter: "DS.FixtureAdapter"
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