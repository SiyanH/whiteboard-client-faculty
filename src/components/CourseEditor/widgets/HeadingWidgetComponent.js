import React from "react";
import WidgetButtonGroupComponent from "./WidgetButtonGroupComponent";

export default class HeadingWidgetComponent extends React.Component {
    state = {
        text: this.props.widget.text,
        name: this.props.widget.name,
        size: this.props.widget.size.toString()
    };

    changeText = (text) => {
        this.setState({text: text});
        this.props.widget.text = text;
    };

    changeName = (name) => {
        this.setState({name: name});
        this.props.widget.name = name;
    };

    changeSize = (size) => {
        this.setState({size: size});
        this.props.widget.size = size;
    };

    render() {
        return (
            <div className="card">
                <div className="card-body">
                    {
                        !this.props.isPreview &&
                        <div>
                            <WidgetButtonGroupComponent widget={this.props.widget}
                                                        isTopWidget={this.props.isTopWidget}
                                                        isBottomWidget={this.props.isBottomWidget}
                                                        hasWidgetAfter={this.props.hasWidgetAfter}
                                                        deleteWidget={this.props.deleteWidget}
                                                        updateWidgets={this.props.updateWidgets}
                                                        moveUp={this.props.moveUp}
                                                        moveDown={this.props.moveDown}/>
                            <form name="headingWidget">
                                <div className="form-group">
                                    <label className="sr-only"
                                           htmlFor={`headingText_${this.props.widget.id}`}>Heading
                                        text</label>
                                    <input className="form-control"
                                           id={`headingText_${this.props.widget.id}`}
                                           placeholder="Heading text" type="text"
                                           value={this.state.text === null ? "" : this.state.text}
                                           onChange={e => this.changeText(e.target.value)}/>
                                </div>
                                <div className="form-group">
                                    <label className="sr-only"
                                           htmlFor={`headingSize_${this.props.widget.id}`}>Heading
                                        size</label>
                                    <select className="form-control"
                                            id={`headingSize_${this.props.widget.id}`}
                                            title="Heading style" value={this.state.size}
                                            onChange={e => this.changeSize(e.target.value)}>
                                        <option value="" disabled>Choose size</option>
                                        <option value="1">Heading 1</option>
                                        <option value="2">Heading 2</option>
                                        <option value="3">Heading 3</option>
                                        <option value="4">Heading 4</option>
                                        <option value="5">Heading 5</option>
                                        <option value="6">Heading 6</option>
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
                        this.state.size === '1' &&
                        <h1 className="mb-0">{this.state.text}</h1>
                    }
                    {
                        this.state.size === '2' &&
                        <h2 className="mb-0">{this.state.text}</h2>
                    }
                    {
                        this.state.size === '3' &&
                        <h3 className="mb-0">{this.state.text}</h3>
                    }
                    {
                        this.state.size === '4' &&
                        <h4 className="mb-0">{this.state.text}</h4>
                    }
                    {
                        this.state.size === '5' &&
                        <h5 className="mb-0">{this.state.text}</h5>
                    }
                    {
                        this.state.size === '6' &&
                        <h6 className="mb-0">{this.state.text}</h6>
                    }
                </div>
            </div>
        )
    }
}