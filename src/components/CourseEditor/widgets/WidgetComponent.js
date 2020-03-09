import React from "react";
import HeadingWidgetComponent from "./HeadingWidgetComponent";
import ParagraphWidgetComponent from "./ParagraphWidgetComponent";
import ListWidgetComponent from "./ListWidgetComponent";
import ImageWidgetComponent from "./ImageWidgetComponent";

const WidgetComponent = ({
                             widget, isPreview, isTopWidget, isBottomWidget, hasWidgetAfter,
                             deleteWidget, changeWidgetType, changeWidgetText, changeWidgetName,
                             changeWidgetSize, changeListType, changeImageUrl, moveUp, moveDown
                         }) =>
    <div>
        {
            widget.type === "HEADING" &&
            <HeadingWidgetComponent
                widget={widget}
                isPreview={isPreview}
                isTopWidget={isTopWidget}
                isBottomWidget={isBottomWidget}
                hasWidgetAfter={hasWidgetAfter}
                deleteWidget={deleteWidget}
                changeWidgetType={changeWidgetType}
                changeWidgetText={changeWidgetText}
                changeWidgetName={changeWidgetName}
                changeWidgetSize={changeWidgetSize}
                moveUp={moveUp}
                moveDown={moveDown}/>
        }
        {
            widget.type === "PARAGRAPH" &&
            <ParagraphWidgetComponent
                widget={widget}
                isPreview={isPreview}
                isTopWidget={isTopWidget}
                isBottomWidget={isBottomWidget}
                hasWidgetAfter={hasWidgetAfter}
                deleteWidget={deleteWidget}
                changeWidgetType={changeWidgetType}
                changeWidgetText={changeWidgetText}
                changeWidgetName={changeWidgetName}
                moveUp={moveUp}
                moveDown={moveDown}/>
        }
        {
            widget.type === "LIST" &&
            <ListWidgetComponent
                widget={widget}
                isPreview={isPreview}
                isTopWidget={isTopWidget}
                isBottomWidget={isBottomWidget}
                hasWidgetAfter={hasWidgetAfter}
                deleteWidget={deleteWidget}
                changeWidgetType={changeWidgetType}
                changeWidgetText={changeWidgetText}
                changeWidgetName={changeWidgetName}
                changeListType={changeListType}
                moveUp={moveUp}
                moveDown={moveDown}/>
        }
        {
            widget.type === "IMAGE" &&
            <ImageWidgetComponent
                widget={widget}
                isPreview={isPreview}
                isTopWidget={isTopWidget}
                isBottomWidget={isBottomWidget}
                hasWidgetAfter={hasWidgetAfter}
                deleteWidget={deleteWidget}
                changeWidgetType={changeWidgetType}
                changeWidgetName={changeWidgetName}
                changeImageUrl={changeImageUrl}
                moveUp={moveUp}
                moveDown={moveDown}/>
        }
    </div>;

export default WidgetComponent;