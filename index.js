const Notification = (props) => {
  //  Write your code here.
  const { imageUrl, className, message } = props;
  const containerClass = `message-container ${className}`;
  return (
    <div className={containerClass}>
      <img src={imageUrl} alt="icon" className="icon" />
      <p className="message">{message}</p>
    </div>
  );
};

const element = (
  // Write your code here.
  <div className="main-container">
    <h1 className="title">Notifications</h1>
    <li className="list-container">
      <Notification
        imageUrl="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
        className="information"
        message="Information message"
      />
      <Notification
        imageUrl="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        className="success"
        message="Success Message"
      />
      <Notification
        imageUrl="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
        className="warning"
        message="Warning Message"
      />
      <Notification
        imageUrl="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
        className="error"
        message="Error Message"
      />
    </li>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
