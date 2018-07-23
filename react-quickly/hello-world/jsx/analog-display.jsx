function AnalogDisplay(props) {
  const date = new Date(props.time);
  const dialStyle = {
    position: 'relative',
    top: 0,
    left: 0,
    width: 200,
    height: 200,
    borderRadius: 200,
    borderStyle: 'solid',
    borderColor: 'black'
  };
  const secondHandStyle = {
    position: 'relative',
    top: 100,
    left: 100,
    border: '1px solid red',
    width: '40%',
    height: 1,
    transform: `rotate(${date.getSeconds() / 60 * 360 - 90}deg)`,
    transformOrigin: '0% 0%',
    backgroundColor: 'red'
  };
  const minuteHandStyle = {
    position: 'relative',
    top: 100,
    left: 100,
    border: '1px solid green',
    width: '40%',
    height: 3,
    transform: `rotate(${date.getMinutes() / 60 * 360 - 90}deg)`,
    transformOrigin: '0% 0%',
    backgroundColor: 'green'
  };
  const hourHandStyle = {
    position: 'relative',
    top: 100,
    left: 100,
    border: '1px solid blue',
    width: '20%',
    height: 7,
    transform: `rotate(${date.getHours() / 12 * 360 - 90}deg)`,
    transformOrigin: '0% 0%',
    backgroundColor: 'blue'
  };
  return <div>
    <div style={dialStyle}>
      <div style={secondHandStyle}/>
      <div style={minuteHandStyle}/>
      <div style={hourHandStyle}/>
    </div>
  </div>;
}

