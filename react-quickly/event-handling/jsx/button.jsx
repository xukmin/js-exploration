class SaveButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      className: 'inactive'
    };
    this.onClick = this.onClick.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseOut = this.onMouseOut.bind(this);
  }

  onClick(event) {
    console.log(this, event);
    this.setState((prevState, props) => {
      return Object.assign(prevState, {
        count: prevState.count + 1
      });
    });
  }

  onMouseOver(event) {
    this.setState((prevState, props) => {
      return Object.assign(prevState, {
        className: 'active'
      });
    });
  }

  onMouseOut(event) {
    this.setState((prevState, props) => {
      return Object.assign(prevState, {
        className: 'inactive'
      });
    });
  }

  render() {
    return <button
        onClick={this.onClick}
        onMouseOver={this.onMouseOver}
        onMouseOut={this.onMouseOut}
        className={this.state.className}>
      Clicked {this.state.count} {this.state.count == 1 ? 'time' : 'times'}
    </button>;
  }
}

