Router.configure({
    layoutTemplate: 'Layout'
});

Router.route('/', {template: 'main'});

Router.route('/totoro', {template: 'totoro'});
Router.route('/neighber', {template: 'neighber'});
Router.route('/detail', {path: 'detail/:_id'});