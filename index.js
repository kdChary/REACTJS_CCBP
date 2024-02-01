const Box = props => {
  //  Write your code here.
  const {className, message} = props;
  return (
      <div className={className}>
      <p>{message}</p>
      </div>
  );
}

const element = (
  //  Write your code here.
  <div className="main-container">
      <h1 className="title">Boxes</h1>
      <div className="box-container">
          <Box className="small" message="small"/>
          <Box className="medium" message="medium"/>
          <Box className="large" message="large"/>
      </div>
  </div> 
)

ReactDOM.render(element, document.getElementById("root"));
