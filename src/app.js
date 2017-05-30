var React = require('react');
var ReactDOM = require('react-dom');

require('./style.css');

class Container extends React.Component {
  render() {
    return(
        <div>
            Hello World!
        </div>
    );
  }
}

ReactDOM.render(<Container />, document.getElementById('root'));
