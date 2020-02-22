import React from "react";
import WidgetButtonGroupComponent from "./WidgetButtonGroupComponent";

export default class ParagraphWidgetComponent extends React.Component {
    state = {
        text: this.props.widget.text,
        name: this.props.widget.name
    };

    changeText = (text) => {
        this.setState({text: text});
        this.props.widget.text = text;
    };

    changeName = (name) => {
        this.setState({name: name});
        this.props.widget.name = name;
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
                                                        updateWidgets={this.props.updateWidgets}
                                                        isTopWidget={this.props.isTopWidget}
                                                        isBottomWidget={this.props.isBottomWidget}
                                                        moveUp={this.props.moveUp}
                                                        moveDown={this.props.moveDown}/>
                            <form name="paragraphWidget">
                                <div className="form-group">
                                    <label className="sr-only"
                                           htmlFor={`paragraphText_${this.props.widget.id}`}>Paragraph
                                        text</label>
                                    <textarea className="form-control"
                                              id={`paragraphText_${this.props.widget.id}`}
                                              placeholder="Lorem ipsum"
                                              value={this.state.text === null ? ""
                                                                              : this.state.text}
                                              onChange={e => this.changeText(e.target.value)}/>
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
                    <p className="mb-0">{this.state.text}</p>
                </div>
            </div>
        )
    }
}