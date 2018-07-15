class HelloWorld extends React.Component {
  render() {
    if (this.props.heading) {
      return React.createElement('h1', null, 'Hello');
    } else {
      return React.createElement('p', null, 'Hello');
    }
  }
}

ReactDOM.render(
    React.createElement(
        'div',
        null,
        React.createElement(HelloWorld, {heading: true}),
        React.createElement(HelloWorld),
        React.createElement(HelloWorld)
    ),
    document.getElementById('content')
);
