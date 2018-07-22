class HelloWorld extends React.Component {
  render() {
    return <h1>
      Hello, {this.props.frameworkName} world!
    </h1>;
  }
}

ReactDOM.render(
    <div>
      <HelloWorld
        id='react'
        frameworkName='React.js'
        title='A framework for creating ambitious web applications.'
      />
      Current time is <Clock/>
    </div>,
    document.getElementById('content')
);
