import React from "react";
import WidgetButtonGroupComponent from "./WidgetButtonGroupComponent";

export default class ListWidgetComponent extends React.Component {
    state = {
        text: this.props.widget.text,
        name: this.props.widget.name,
        type: this.props.widget.ordered ? 'ORDERED' : 'UNORDERED'
    };

    changeText = (text) => {
        this.setState({text: text});
        this.props.changeWidgetText(this.props.widget.id, text);
    };

    changeName = (name) => {
        this.setState({name: name});
        this.props.changeWidgetName(this.props.widget.id, name);
    };

    changeType = (type) => {
        this.setState({type: type});
        this.props.changeListType(this.props.widget.id, type);
    };

    render() {
        return (
            <div className="card">
                <div className="card-body">
                    {
                        !this.props.isPreview &&
                        <div>
                            <WidgetButtonGroupComponent widget={this.props.widget}
                                                        deleteWidget={this.props.deleteWidget}
                                                        changeWidgetType={this.props.changeWidgetType}
                                                        isTopWidget={this.props.isTopWidget}
                                                        isBottomWidget={this.props.isBottomWidget}
                                                        hasWidgetAfter={this.props.hasWidgetAfter}
                                                        moveUp={this.props.moveUp}
                                                        moveDown={this.props.moveDown}/>
                            <form name="listWidget">
                                <div className="form-group">
                                    <label className="sr-only"
                                           htmlFor={`listItems_${this.props.widget.id}`}>List
                                        items</label>
                                    <textarea className="form-control"
                                              id={`listItems_${this.props.widget.id}`}
                                              placeholder="Enter one list item per line"
                                              value={this.state.text === null ? ""
                                                                              : this.state.text}
                                              onChange={e => this.changeText(e.target.value)}/>
                                </div>
                                <div className="form-group">
                                    <label className="sr-only"
                                           htmlFor={`listType_${this.props.widget.id}`}>List
                                        Type</label>
                                    <select className="form-control"
                                            id={`listType_${this.props.widget.id}`}
                                            title="List type" value={this.state.type}
                                            onChange={e => this.changeType(e.target.value)}>
                                        <option value="UNORDERED">Unordered list</option>
                                        <option value="ORDERED">Ordered list</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label className="sr-only"
                                           htmlFor={`widgetName_${this.props.widget.id}`}>Widget
                                        name</label>
                                    <input className="form-control"
                                           id={`widgetName_${this.props.widget.id}`}
                                           placeholder="Widget name" type="text"
                                           value={this.state.name === null ? "" : this.state.name}
                                           onChange={e => this.changeName(e.target.value)}/>
                                </div>
                            </form>
                            <h5>Preview</h5>
                        </div>
                    }
                    {
                        this.state.type === 'UNORDERED' && this.state.text !== null
                        && this.state.text !== '' &&
                        <ul className="wbdv-list-widget-preview" type="circle">
                            {this.state.text.trim().split(/\s*\n/)
                                .map((item, index) => <li key={index}>{item}</li>)}
                        </ul>
                    }
                    {
                        this.state.type === 'ORDERED' && this.state.text !== null && this.state.text
                        !== '' &&
                        <ol className="wbdv-list-widget-preview" type="circle">
                            {this.state.text.trim().split(/\s*\n/)
                                .map((item, index) => <li key={index}>{item}</li>)}
                        </ol>
                    }
                </div>
            </div>
        )
    }
}