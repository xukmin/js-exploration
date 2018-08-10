class Content extends React.Component {
  constructor(props) {
    super(props);
    this.handleRadio = this.handleRadio.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      radioGroup: {
        angular: false,
        react: true,
        polymer: false
      },
      selectedValue: 'node',
      email: ''
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
    this.setState((prevState, props) =>
      Object.assign(prevState, {radioGroup: radioGroup})
    );
  }

  handleSelectChange(event) {
    console.log(`selected ${event.target.value}`);
    const selectedValue = event.target.value;
    this.setState((prevState, props) =>
      Object.assign(prevState, {selectedValue: selectedValue})
    );
  }

  handleEmailChange(event) {
    console.log(`email = ${event.target.value}`);
    const email = event.target.value;
    this.setState((prevState, props) =>
      Object.assign(prevState, {email: email})
    );
  }

  handleSubmit(event) {
    console.log(`submit = ${JSON.stringify(this.state)}`);
  }

  render() {
    return <form>
      What is your favorite JavaScript framework?<br/>
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
      What is your favorite programming language?<br/>
      <select
        value={this.state.selectedValue}
        onChange={this.handleSelectChange}>
        <option value='ruby'>Ruby</option>
        <option value='node'>Node</option>
        <option value='python'>Python</option>
      </select>
      <br/>
      Your email address:
      <input type='text'
        name='email'
        onChange={this.handleEmailChange}/>
      <br/>
      <input type='button'
        onClick={this.handleSubmit}
        value='Submit'/>
    </form>;
  }
}
