class Clock extends React.Component {
  constructor(pros) {
    super(props);
    this.state = {
      currentTime: (new Date()).toLocaleString()
    }
  }

  lanuchClock() {
    setInterval(() => {
      console.log('Updating time...');
      this.setState({
        currentTime: (new Date()).toLocaleString()
      })
    }, 1000);
  }

  render() {
    console.log('Rendering clock...');
    return <div>{this.state.currentTime}</div>;
  }
}
