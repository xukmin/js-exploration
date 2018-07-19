class DateTimeNow extends React.Component {
  render() {
    const dateTimeNow = new Date().toLocaleString();
    return <span>Current date and time is {dateTimeNow}.</span>;
  }
}

class HelloWorld extends React.Component {
  render() {
    return <h1>Hello, {this.props.frameworkName} world!</h1>;
  }
}

ReactDOM.render(
    <div>
      <HelloWorld
        id='ember'
        frameworkName='Ember.js'
        title='A framework for creating ambitious web applications.'
      />
      <HelloWorld
        id='backbone'
        frameworkName='Backbone.js'
        title='Backbone.js gives structure to web applications.'
      />
      <HelloWorld
        id='angular'
        frameworkName='Angular.js'
        title='Superheroic JavaScript MVW Framework.'
      />
      <DateTimeNow />
    </div>,
    document.getElementById('content')
);
