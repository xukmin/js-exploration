class SaveButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      className: 'inactive',
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight
    };
    this.onClick = this.onClick.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseOut = this.onMouseOut.bind(this);
    this.onResize = this.onResize.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.onResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
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

  onResize(event) {
    this.setState((prevState, props) => {
      return Object.assign(prevState, {
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight
      });
    });
  }
i
  render() {
    return <button
        onClick={this.onClick}
        onMouseOver={this.onMouseOver}
        onMouseOut={this.onMouseOut}
        className={this.state.className}>
      Clicked {this.state.count} {this.state.count == 1 ? 'time' : 'times'}<br/>
      Current Window size is {this.state.windowWidth}x{this.state.windowHeight}
    </button>;
  }
}

