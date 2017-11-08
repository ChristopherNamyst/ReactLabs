import React, {Component} from "react";

class GraphBar extends Component {

    render() {

        return (
            <div className="GraphBar">
                <div className="label">{this.props.label}</div>
                <div className="value" style={{width:this.props.value * 25}}>{this.props.value}</div>
            </div>
        );
    }
}

// Can't forget to export the component as the default export!
export default GraphBar;
