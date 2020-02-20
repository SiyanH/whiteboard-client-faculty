import React from "react";
import HeadingWidgetComponent from "./HeadingWidgetComponent";
import ParagraphWidgetComponent from "./ParagraphWidgetComponent";

class WidgetComponent extends React.Component {
    render() {
        return (
            <div>
                {
                    this.props.widget.type === "HEADING" &&
                    <HeadingWidgetComponent
                        widget={this.props.widget}
                        isPreview={this.props.isPreview}
                        deleteWidget={this.props.deleteWidget}
                        updateWidgets={this.props.updateWidgets}/>
                }
                {
                    this.props.widget.type === "PARAGRAPH" &&
                    <ParagraphWidgetComponent
                        widget={this.props.widget}
                        isPreview={this.props.isPreview}
                        deleteWidget={this.props.deleteWidget}
                        updateWidgets={this.props.updateWidgets}/>
                }
            </div>
        )
    }
}

export default WidgetComponent;