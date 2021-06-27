const ProgressBar = (props) => {
    const { bgcolor, completed} = props;
  
    const containerStyles = {
      height: 20,
      width: '80%',
      backgroundColor: "#FFF",
      borderColor:"#009dc4",
      borderRadius: 40,
      borderWidth:1,
      marginTop:10,
      marginBottom:10,
    }
  
    const fillerStyles = {
      height: '100%',
      width: `${completed}%`,
      backgroundColor: bgcolor,
      borderRadius: 'inherit',
      textAlign: 'right'
    }
  
    const labelStyles = {
      paddingTop:20,
      paddingRight:5,
      fontWeight: 'bold',
      fontSize:14
    }
  
    return (
        <div>
            <p>{props.title}</p>
            <div style={{display: 'flex', justifyContent: 'center'}}>
              <div style={containerStyles}>
                <div style={fillerStyles}>
                    <span style={labelStyles}>{`${completed}%`}</span>
                </div>
              </div>
            </div>
        </div>
       
      
    );
  };
  
  export default ProgressBar;