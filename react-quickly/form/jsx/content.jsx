class Content extends React.Component {
  constructor(props) {
    super(props);
    this.handleRadio = this.handleRadio.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      radioGroup: {
        angular: false,
        react: true,
        polymer: false
      },
      selectedValue: 'node',
      name: '',
      phone: '',
      email: ''
    };
  }

  handleRadio(event) {
    console.log(
        `value = ${event.target.value}, checked = ${event.target.checked}`);
    let radioGroup = {
      angular: false,
      react: false,
      polymer: false
    };

    radioGroup[event.target.value] = event.target.checked;
    // Alternatively, use Object.assign() and Symbol() to update radioGroup:
    // radioGroup = Object.assign(radioGroup, {
    //   [Symbol(event.target.value)]: event.target.checked
    // });

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

  // Makes name all capitalized.
  handleNameChange(event) {
    console.log(`name = ${event.target.value}`);
    const name = event.target.value.toUpperCase();
    this.setState((prevState, props) =>
      Object.assign(prevState, {name: name})
    );
  }

  handlePhoneChange(event) {
    console.log(`phone = ${event.target.value}`);
    const phone = event.target.value.replace(/[^0-9]/ig, '');
    this.setState((prevState, props) =>
      Object.assign(prevState, {phone: phone})
    );
  }

  handleEmailChange(event) {
    const email = event.target.value;
    console.log(`email = ${email}`);
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
        id='angular'
        name='radioGroup'
        value='angular'
        checked={this.state.radioGroup['angular']}
        onChange={this.handleRadio}/>
      <label htmlFor='angular'>Angular</label><br/>
      <input type='radio'
        id='react'
        name='radioGroup'
        value='react'
        checked={this.state.radioGroup['react']}
        onChange={this.handleRadio}/>
      <label htmlFor='react'>React</label><br/>
      <input type='radio'
        id='polymer'
        name='radioGroup'
        value='polymer'
        checked={this.state.radioGroup['polymer']}
        onChange={this.handleRadio}/>
      <label htmlFor='polymer'>Polymer</label><br/>
      What is your favorite programming language?<br/>
      <select
        value={this.state.selectedValue}
        onChange={this.handleSelectChange}>
        <option value='ruby'>Ruby</option>
        <option value='node'>Node</option>
        <option value='python'>Python</option>
      </select>
      <br/>
      Your name:
      <input type='text'
        name='name'
        placeholder='FIRST LAST'
        value={this.state.name}
        onChange={this.handleNameChange}/>
      <br/>
      Your phone number:
      <input type='text'
        name='phone'
        placeholder='1234567890'
        value={this.state.phone}
        onChange={this.handlePhoneChange}/>
      <br/>
      Your email address:
      <input type='text'
        name='email'
        placeholder='yourname@email.com'
        value={this.state.email}
        onChange={this.handleEmailChange}/>
      <br/>
      <input type='button'
        onClick={this.handleSubmit}
        value='Submit'/>
    </form>;
  }
}
