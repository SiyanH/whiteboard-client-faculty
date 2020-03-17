import React from "react";
import WidgetButtonGroupComponent from "./WidgetButtonGroupComponent";

export default class ImageWidgetComponent extends React.Component {
    state = {
        url: this.props.widget.url,
        name: this.props.widget.name
    };

    changeUrl = (url) => {
        this.setState({url: url});
        this.props.changeImageUrl(this.props.widget.id, url);
    };

    changeName = (name) => {
        this.setState({name: name});
        this.props.changeWidgetName(this.props.widget.id, name);
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
                                                        changeWidgetType={this.props.changeWidgetType}
                                                        moveUp={this.props.moveUp}
                                                        moveDown={this.props.moveDown}/>
                            <form name="imageWidget">
                                <div className="form-group">
                                    <label className="sr-only"
                                           htmlFor={`imageUrl_${this.props.widget.id}`}>Image
                                        URL</label>
                                    <input className="form-control"
                                           id={`imageUrl_${this.props.widget.id}`}
                                           placeholder="Image URL" type="url"
                                           value={this.state.url === null ? "" : this.state.url}
                                           onChange={e => this.changeUrl(e.target.value)}/>
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
                        this.state.url !== null && this.state.url !== "" &&
                        <img id="widgetImg" src={this.state.url} alt="Preview"/>
                    }
                </div>
            </div>
        )
    }
}