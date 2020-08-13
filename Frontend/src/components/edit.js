import React, { Component, useState } from "react"

import { Card, Button } from 'react-bootstrap'
import {
    TypeBold, TypeItalic, TypeStrikethrough, Link, Fonts, ChatRightQuoteFill, Code,
    ListUl, ListOl, Paperclip, ArrowClockwise, ArrowCounterclockwise, TypeUnderline, TrashFill
} from 'react-bootstrap-icons';

const RichTextEditor = () => {
    const [click, SetClick] = useState(false)
    const [Imgclick, setImgClick] = useState(false)
    const [ImgValue, setImgValue] = useState('')
    const [link, setLink] = useState('')
    const [btnColor, setBtnColor] = useState('unclicked')

    

    const handleInputChange = (event) => {
        setLink(event.target.value)
    }

    const handleImageChange = (event) => {
        setImgValue(event.target.value)
    }
    var Boldcount = 0
    var Italiccount = 0
    var Strikecount=0
    var Underlinecount = 0
    var Linkcount = 0
    var Imagecount = 0
    var Deletecount = 0
    var Headingcount = 0
    var Undocount = 0
    var Redocount = 0
    var Bulletcount = 0
    var Numbercount = 0



    const handleChange = (name) => {
        console.log("name", name)
        switch (name) {
            case 'Bold':
                var x = document.getElementById('bold')
                if (Boldcount===0) {
                    x.style.backgroundColor = 'skyblue'
                    Boldcount=1
                }
                else {
                    x.style.backgroundColor = 'lightgray'
                    Boldcount=0
                }
                document.execCommand('bold', false, null)
                break;
            case 'Italic':
                var x = document.getElementById('italic')
                if (Italiccount===0) {
                    x.style.backgroundColor = 'skyblue'
                    Italiccount=1
                }
                else {
                    x.style.backgroundColor = 'lightgray'
                    Italiccount=0
                }
                document.execCommand('italic', false, null)
                break;
            case 'Strike':
                var x = document.getElementById('strike')
                if (Strikecount===0) {
                    x.style.backgroundColor = 'skyblue'
                    Strikecount=1
                }
                else {
                    x.style.backgroundColor = 'lightgray'
                    Strikecount=0
                }
                document.execCommand('strikeThrough', false, null)
                break;
            case 'Underline':
                var x = document.getElementById('underline')
                if (Underlinecount===0) {
                    x.style.backgroundColor = 'skyblue'
                    Underlinecount=1
                }
                else {
                    x.style.backgroundColor = 'lightgray'
                    Underlinecount=0
                }
                document.execCommand('underline', false, null)
                break;
            case 'ListOl':
                var x = document.getElementById('numbers')
                if (Numbercount===0) {
                    x.style.backgroundColor = 'skyblue'
                    Numbercount=1
                }
                else {
                    x.style.backgroundColor = 'lightgray'
                    Numbercount=0
                }
                document.execCommand('insertOrderedList', false, null)
                break;
            case 'ListUl':
                var x = document.getElementById('bullets')
                if (Bulletcount===0) {
                    x.style.backgroundColor = 'skyblue'
                    Bulletcount=1
                }
                else {
                    x.style.backgroundColor = 'lightgray'
                    Bulletcount=0
                }
                document.execCommand('insertUnorderedList', false, null)
                break;
            case 'Image':
                var x = document.getElementById('image')
                if (Imagecount===0) {
                    x.style.backgroundColor = 'skyblue'
                    Imagecount=1
                }
                else {
                    x.style.backgroundColor = 'lightgray'
                    Imagecount=0
                }
                setImgClick(true)
                //    document.execCommand('insertImage',false,ImgValue)
                document.execCommand('insertImage', false, "simple.jpg")
                if (ImgValue != '') {
                    setImgClick(false)
                }
                break;
            case 'Link':
                var x = document.getElementById('link')
                if (Linkcount===0) {
                    x.style.backgroundColor = 'skyblue'
                    Linkcount=1
                }
                else {
                    x.style.backgroundColor = 'lightgray'
                    Linkcount=0
                }
                SetClick(true)
                break;
            case 'Link2':
                document.execCommand('createLink', false, link)
                SetClick(false)
                break;
            case 'Unlink':
                document.execCommand('unlink', false, link)
                SetClick(false)
                break;
            case 'Delete':
                var x = document.getElementById('delete')
                if (Deletecount===0) {
                    x.style.backgroundColor = 'skyblue'
                    Deletecount=1
                }
                else {
                    x.style.backgroundColor = 'lightgray'
                    Deletecount=0
                }
                document.execCommand('delete', false, null)
                break;

            case 'Heading':
                var x = document.getElementById('heading')
                if (Headingcount===0) {
                    x.style.backgroundColor = 'skyblue'
                    Headingcount=1
                }
                else {
                    x.style.backgroundColor = 'lightgray'
                    Headingcount=0
                }
                document.execCommand('fontSize', false, "5")
                break;
            case 'Undo':
                var x = document.getElementById('undo')
                if (Undocount===0) {
                    x.style.backgroundColor = 'skyblue'
                    Undocount=1
                }
                else {
                    x.style.backgroundColor = 'lightgray'
                    Undocount=0
                }
                document.execCommand('undo', false, null)
                break;
            case 'redo':
                var x = document.getElementById('redo')
                if (Redocount===0) {
                    x.style.backgroundColor = 'skyblue'
                    Redocount=1
                }
                else {
                    x.style.backgroundColor = 'lightgray'
                    Redocount=0
                }
                document.execCommand('redo', false, null)
                break;

            default:
                break;
        }
    }


    return (
            <div className="container">
                <div className="offset-2 col-sm-8"><br />
                    <Card>

                        <div>
                            <fieldset>
                                <Button variant="default" title="Bold" id="bold"
                                    style={{ fontSize: "20px", marginLeft: "5px", background: "lightgray" }}
                                    onClick={() => handleChange("Bold")}><TypeBold style={{ fontSize: "25px" }} />
                                </Button>
                                <Button variant="default" title="Italic" id="italic"
                                    style={{ fontSize: "20px", marginLeft: "1px", background: "lightgray" }}
                                    onClick={() => handleChange("Italic")}><TypeItalic style={{ fontSize: "25px" }} />
                                </Button>
                                <Button variant="default" title="StrikeThrough" id="strike"
                                    style={{ fontSize: "20px", marginLeft: "1px", background: "lightgray" }}
                                    onClick={() => handleChange("Strike")}><TypeStrikethrough style={{ fontSize: "25px" }} />
                                </Button>
                                <Button variant="default" title="Link" id="link"
                                    style={{ fontSize: "20px", marginLeft: "1px", background: "lightgray" }}
                                    onClick={() => handleChange("Link")}><Link style={{ fontSize: "25px" }} />
                                </Button>
                                <Button variant="default" title="Heading" id="heading"
                                    style={{ fontSize: "20px", marginLeft: "7px", background: "lightgray" }}
                                    onClick={() => handleChange("Heading")}><Fonts style={{ fontSize: "25px" }} />
                                </Button>
                                <Button variant="default" title="Underline" id="underline"
                                    style={{ fontSize: "20px", marginLeft: "1px", background: "lightgray" }}
                                    onClick={() => handleChange("Underline")}><TypeUnderline style={{ fontSize: "25px" }} />
                                </Button>
                                <Button variant="default" title="Delete" id="delete"
                                    style={{ fontSize: "20px", marginLeft: "1px", background: "lightgray" }}
                                    onClick={() => handleChange("Delete")}><TrashFill style={{ fontSize: "25px" }} />
                                </Button>
                                <Button variant="default" title="Numbers" id="numbers"
                                    style={{ fontSize: "20px", marginLeft: "1px", background: "lightgray" }}
                                    onClick={() => handleChange("ListOl")}><ListOl style={{ fontSize: "25px" }} />
                                </Button>
                                <Button variant="default" title="Bullets" id="bullets"
                                    style={{ fontSize: "20px", marginLeft: "1px", background: "lightgray" }}
                                    onClick={() => handleChange("ListUl")}><ListUl style={{ fontSize: "25px" }} />
                                </Button>
                                <Button variant="default" title="Image" id="image"
                                    style={{ fontSize: "20px", marginLeft: "10px", background: "lightgray" }}
                                    onClick={() => handleChange("Image")}><Paperclip style={{ fontSize: "25px" }} />
                                </Button>
                                <Button variant="default" title="Redo" id="redo"
                                    style={{ fontSize: "20px", marginLeft: "10px", background: "lightgray" }}
                                    onClick={() => handleChange("redo")}><ArrowClockwise style={{ fontSize: "25px" }} />
                                </Button>
                                <Button variant="default" title="Undo" id="undo"
                                    style={{ fontSize: "20px", marginLeft: "1px", background: "lightgray" }}
                                    onClick={() => handleChange("Undo")}><ArrowCounterclockwise style={{ fontSize: "25px" }} />
                                </Button>
                            </fieldset><br />
                            {click ?
                                <form>
                                    <div className="col-sm-12">
                                        <input type="text" placeholder="Enter a URL.." onChange={handleInputChange} name="link" />
                                        <Button variant="outline-secondary" onClick={() => handleChange("Link2")}>Link</Button>
                                        <Button variant="outline-secondary" onClick={() => handleChange("Unlink")}>Unlink</Button>
                                    </div>
                                </form> : null}

                            {Imgclick ?
                                <form>
                                    <div className="col-sm-12">
                                        <input type="file" onChange={handleImageChange} name="image" />
                                    </div>
                                </form> : null}

                            <Card.Body>
                                <div contenteditable="true" style={{ outline: "1px solid" }} id="contain">
                                </div>
                            </Card.Body>
                        </div>
                    </Card>
                </div>
            </div>
    )
}

export default RichTextEditor
