import React, { Component } from "react"

import { Card, Button } from 'react-bootstrap'
import {
    TypeBold, TypeItalic, TypeStrikethrough, Link, Fonts, ChatRightQuoteFill, Code,
    ListUl, ListOl, Paperclip, ArrowClockwise, ArrowCounterclockwise
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
                document.execCommand('strikethrough', false, null)
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
                                <Button variant="default" style={{ fontSize: "20px", marginLeft: "5px", background: "lightgray" }} onClick={() => this.handleChange("Bold")}><TypeBold  style={{fontSize:"25px"}}/>
                                </Button>
                                <Button variant="default" style={{ fontSize: "20px", marginLeft: "1px", background: "lightgray" }} onClick={() => this.handleChange("Italic")}><TypeItalic  style={{fontSize:"25px"}} />
                                </Button>
                                <Button variant="default" style={{ fontSize: "20px", marginLeft: "1px", background: "lightgray" }} onClick={() => this.handleChange("Strike")}><TypeStrikethrough  style={{fontSize:"25px"}}/>
                                </Button>
                                <Button variant="default" style={{ fontSize: "20px", marginLeft: "1px", background: "lightgray" }} onClick={() => this.handleChange("Link")}><Link style={{fontSize:"25px"}}/>
                                </Button>
                                <Button variant="default" style={{ fontSize: "20px", marginLeft: "7px", background: "lightgray" }} onClick={() => this.handleChange("Fonts")}><Fonts style={{fontSize:"25px"}}/>
                                </Button>
                                <Button variant="default" style={{ fontSize: "20px", marginLeft: "1px", background: "lightgray" }} onClick={() => this.handleChange("Quote")}><ChatRightQuoteFill style={{fontSize:"25px"}}/>
                                </Button>
                                <Button variant="default" style={{ fontSize: "20px", marginLeft: "1px", background: "lightgray" }} onClick={() => this.handleChange("Code")}><Code style={{fontSize:"25px"}}/>
                                </Button>
                                <Button variant="default" style={{ fontSize: "20px", marginLeft: "1px", background: "lightgray" }} onClick={() => this.handleChange("ListOl")}><ListOl style={{fontSize:"25px"}} />
                                </Button>
                                <Button variant="default" style={{ fontSize: "20px", marginLeft: "1px", background: "lightgray" }} onClick={() => this.handleChange("ListUl")}><ListUl style={{fontSize:"25px"}}/>
                                </Button>
                                <Button variant="default" style={{ fontSize: "20px", marginLeft: "10px", background: "lightgray" }} onClick={() => this.handleChange("PaperClip")}><Paperclip style={{fontSize:"25px"}} />
                                </Button>
                                <Button variant="default" style={{ fontSize: "20px", marginLeft: "10px", background: "lightgray" }} onClick={() => this.handleChange("Clock")}><ArrowClockwise style={{fontSize:"25px"}}/>
                                </Button>
                                <Button variant="default" style={{ fontSize: "20px", marginLeft: "1px", background: "lightgray" }} onClick={() => this.handleChange("AntiClock")}><ArrowCounterclockwise style={{fontSize:"25px"}} />
                                </Button>
                            </fieldset>
                            <Card.Body>
                                <div contenteditable="true" style={{ outline: "1px solid", height: "500px" }}>
                                </div>
                            </Card.Body>
                        </div>
                    </Card>
                </div>
            </div>
        )
    }
}
