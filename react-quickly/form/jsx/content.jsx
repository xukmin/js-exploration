class Content extends React.Component {
  constructor(props) {
    super(props);
    this.handleRadio = this.handleRadio.bind(this);
    this.state = {
      radioGroup: {
        angular: false,
        react: true,
        polymer: false
      }
    };
  }

  handleRadio(event) {
    console.log(`value = ${event.target.value}, checked = ${event.target.checked}`);
    let radioGroup = {
      angular: false,
      react: false,
      polymer: false
    };
    radioGroup[event.target.value] = event.target.checked;
    this.setState((prevState, props) => {
      return Object.assign(prevState, {
        radioGroup: radioGroup
      });
    });
  }

  render() {
    return <form>
      <input type='radio'
        name='radioGroup'
        value='angular'
        checked={this.state.radioGroup['angular']}
        onChange={this.handleRadio}/>
      Angular<br/>
      <input type='radio'
        name='radioGroup'
        value='react'
        checked={this.state.radioGroup['react']}
        onChange={this.handleRadio}/>
      React<br/>
      <input type='radio'
        name='radioGroup'
        value='polymer'
        checked={this.state.radioGroup['polymer']}
        onChange={this.handleRadio}/>
      Polymer<br/>
    </form>;
  }
}
