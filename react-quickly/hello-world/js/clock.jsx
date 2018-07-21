class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: (new Date()).toLocaleString()
    }
    this.launchClock();
  }

  launchClock() {
    setInterval(() => {
      console.log('Updating time...');
      this.setState({
        currentTime: (new Date()).toLocaleString()
      })
    }, 1000);
  }

  render() {
    console.log('Rendering clock...');
    return <span>{this.state.currentTime}</span>;
  }
}
