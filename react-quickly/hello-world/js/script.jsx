class HelloWorld extends React.Component {
  render() {
    return <h1>Hello, {this.props.frameworkName} world!</h1>;
  }
}

ReactDOM.render(
    React.createElement(
        'div',
        null,
        React.createElement(HelloWorld, {
          id: 'ember',
          frameworkName: 'Ember.js',
          title: 'A framework for creating ambitious web applications.'
        }),
        React.createElement(HelloWorld, {
          id: 'backbone',
          frameworkName: 'Backbone.js',
          title: 'Backbone.js gives structure to web applications.'
        }),
        React.createElement(HelloWorld, {
          id: 'angular',
          frameworkName: 'Angular.js',
          title: 'Superheroic JavaScript MVW Framework.'
        })
    ),
    document.getElementById('content')
);
