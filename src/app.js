var React = require('react');
var ReactDOM = require('react-dom');

require('./style.css');

var Container = React.createClass({
    render: function() {
        return(
            <div>
                Hello World!
            </div>
        );
    }
});

ReactDOM.render(<Container />, document.getElementById('root'));