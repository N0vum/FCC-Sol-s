const JSX = (
  <div>
    <h1>Hello World</h1>
    <p>Lets render this to the DOM</p>
  </div>
);
// change code below this line
ReactDOM.render(JSX, document.getElementById("challenge-node"));

//////


const JSX = (
  <div className="myDiv">
    <h1>Add a class to this div</h1>
  </div>
);


//////

const JSX = (
  <div>
    <h2>Welcome to React!</h2> 
    <br />
    <p>Be sure to close all tags!</p>
    <hr />
  </div>
);


//////


const MyComponent = function() {
  // change code below this line
  return(
    <div>
      AnyText
    </div>
  );
  // change code above this line
}

/////

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // change code below this line
return(
<div>
<h1>Hello React!</h1>
</div>
);
    // change code above this line
  }
};


////////

const ChildComponent = () => {
  return (
    <div>
      <p>I am the child</p>
    </div>
  );
};

class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>I am the parent</h1>
        { /* change code below this line */ }
<ChildComponent/>

        { /* change code above this line */ }
      </div>
    );
  }
};


///////////


