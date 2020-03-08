import React from "react";
import HeadingWidgetComponent from "./HeadingWidgetComponent";
import ParagraphWidgetComponent from "./ParagraphWidgetComponent";
import ListWidgetComponent from "./ListWidgetComponent";

class WidgetComponent extends React.Component {
    render() {
        return (
            <div>
                {
                    this.props.widget.type === "HEADING" &&
                    <HeadingWidgetComponent
                        widget={this.props.widget}
                        isPreview={this.props.isPreview}
                        isTopWidget={this.props.isTopWidget}
                        isBottomWidget={this.props.isBottomWidget}
                        hasWidgetAfter={this.props.hasWidgetAfter}
                        deleteWidget={this.props.deleteWidget}
                        changeWidgetType={this.props.changeWidgetType}
                        changeWidgetText={this.props.changeWidgetText}
                        changeWidgetName={this.props.changeWidgetName}
                        changeWidgetSize={this.props.changeWidgetSize}
                        moveUp={this.props.moveUp}
                        moveDown={this.props.moveDown}/>
                }
                {
                    this.props.widget.type === "PARAGRAPH" &&
                    <ParagraphWidgetComponent
                        widget={this.props.widget}
                        isPreview={this.props.isPreview}
                        isTopWidget={this.props.isTopWidget}
                        isBottomWidget={this.props.isBottomWidget}
                        hasWidgetAfter={this.props.hasWidgetAfter}
                        deleteWidget={this.props.deleteWidget}
                        changeWidgetType={this.props.changeWidgetType}
                        changeWidgetText={this.props.changeWidgetText}
                        changeWidgetName={this.props.changeWidgetName}
                        changeWidgetSize={this.props.changeWidgetSize}
                        moveUp={this.props.moveUp}
                        moveDown={this.props.moveDown}/>
                }
                {
                    this.props.widget.type === "LIST" &&
                    <ListWidgetComponent
                        widget={this.props.widget}
                        isPreview={this.props.isPreview}
                        isTopWidget={this.props.isTopWidget}
                        isBottomWidget={this.props.isBottomWidget}
                        hasWidgetAfter={this.props.hasWidgetAfter}
                        deleteWidget={this.props.deleteWidget}
                        changeWidgetType={this.props.changeWidgetType}
                        changeWidgetText={this.props.changeWidgetText}
                        changeWidgetName={this.props.changeWidgetName}
                        changeWidgetSize={this.props.changeWidgetSize}
                        changeListType={this.props.changeListType}
                        moveUp={this.props.moveUp}
                        moveDown={this.props.moveDown}/>
                }
            </div>
        )
    }
}

export default WidgetComponent;