import React, { Component } from "react"

import { Card, Button } from 'react-bootstrap'
import {
    TypeBold, TypeItalic, TypeStrikethrough, Link, Fonts, ChatRightQuoteFill, Code,
    ListUl, ListOl, Paperclip, ArrowClockwise, ArrowCounterclockwise, TypeUnderline
} from 'react-bootstrap-icons';


export default class YourComponent extends Component {


    handleChange = (name) => {
        console.log("name", name)
        switch (name) {
            case 'Bold':
                document.execCommand('bold', false, null)
                break;
            case 'Italic':
                document.execCommand('italic', false, null)
                break;
            case 'Strike':
                document.execCommand('strikeThrough', false, null)
                break;
            case 'Link':
                document.execCommand('createLink', false, "https://trix-editor.org/")
                break;
            case 'Underline':
                document.execCommand('underline', false, null)
                break;
            case 'ListOl':
                document.execCommand('insertOrderedList', false, null)
                break;
            case 'ListUl':
                document.execCommand('insertUnorderedList', false, null)
                break;
            case 'Image':
                // var container = document.getElementById("contain");
                // var x = document.createElement("INPUT");
                // x.setAttribute("type", "file");
                // var pic=container.appendChild(x);
                // console.log("image",x.value)
                document.execCommand('insertImage', false, "simple.jfif")

                break;
            case 'Heading':
                document.execCommand('fontSize', false, "5")
                break;
            case 'Undo':
                document.execCommand('undo', false, null)
                break;
            case 'redo':
                document.execCommand('redo', false, null)
                break;

            default:
                break;
        }
    }

    render() {
        return (
            <div className="container">
                <div className="offset-2 col-sm-8"><br />
                    <Card>

                        <div>
                            <fieldset>
                                <Button variant="default" style={{ fontSize: "20px", marginLeft: "5px", background: "lightgray" }} onClick={() => this.handleChange("Bold")}><TypeBold style={{ fontSize: "25px" }} />
                                </Button>
                                <Button variant="default" style={{ fontSize: "20px", marginLeft: "1px", background: "lightgray" }} onClick={() => this.handleChange("Italic")}><TypeItalic style={{ fontSize: "25px" }} />
                                </Button>
                                <Button variant="default" style={{ fontSize: "20px", marginLeft: "1px", background: "lightgray" }} onClick={() => this.handleChange("Strike")}><TypeStrikethrough style={{ fontSize: "25px" }} />
                                </Button>
                                <Button variant="default" style={{ fontSize: "20px", marginLeft: "1px", background: "lightgray" }} onClick={() => this.handleChange("Link")}><Link style={{ fontSize: "25px" }} />
                                </Button>
                                <Button variant="default" style={{ fontSize: "20px", marginLeft: "7px", background: "lightgray" }} onClick={() => this.handleChange("Heading")}><Fonts style={{ fontSize: "25px" }} />
                                </Button>
                                <Button variant="default" style={{ fontSize: "20px", marginLeft: "1px", background: "lightgray" }} onClick={() => this.handleChange("Underline")}><TypeUnderline style={{ fontSize: "25px" }} />
                                </Button>
                                <Button variant="default" style={{ fontSize: "20px", marginLeft: "1px", background: "lightgray" }} onClick={() => this.handleChange("Code")}><Code style={{ fontSize: "25px" }} />
                                </Button>
                                <Button variant="default" style={{ fontSize: "20px", marginLeft: "1px", background: "lightgray" }} onClick={() => this.handleChange("ListOl")}><ListOl style={{ fontSize: "25px" }} />
                                </Button>
                                <Button variant="default" style={{ fontSize: "20px", marginLeft: "1px", background: "lightgray" }} onClick={() => this.handleChange("ListUl")}><ListUl style={{ fontSize: "25px" }} />
                                </Button>
                                <Button variant="default" style={{ fontSize: "20px", marginLeft: "10px", background: "lightgray" }} onClick={() => this.handleChange("Image")}><Paperclip style={{ fontSize: "25px" }} />
                                </Button>
                                <Button variant="default" style={{ fontSize: "20px", marginLeft: "10px", background: "lightgray" }} onClick={() => this.handleChange("redo")}><ArrowClockwise style={{ fontSize: "25px" }} />
                                </Button>
                                <Button variant="default" style={{ fontSize: "20px", marginLeft: "1px", background: "lightgray" }} onClick={() => this.handleChange("Undo")}><ArrowCounterclockwise style={{ fontSize: "25px" }} />
                                </Button>
                            </fieldset>
                            <Card.Body>
                                <div contenteditable="true" style={{ outline: "1px solid"}} id="contain">
                                </div>
                            </Card.Body>
                        </div>
                    </Card>
                </div>
            </div>
        )
    }
}
