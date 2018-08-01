class SaveButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.handleSave = this.handleSave.bind(this);
  }

  handleSave(event) {
    console.log(this, event);
    this.setState((prevState, props) => {
      return Object.assign(prevState, {
        count: prevState.count + 1
      });
    });
  }

  render() {
    return <button onClick={this.handleSave}>
      Saved {this.state.count} {this.state.count == 1 ? 'time' : 'times'}
    </button>;
  }
}

