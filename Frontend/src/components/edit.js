import React, {useState } from "react"

import { Card, Button,ButtonGroup,Form} from 'react-bootstrap'
import {
    TypeBold, TypeItalic, TypeStrikethrough, Link, Fonts,
    ListUl, ListOl, Paperclip, ArrowClockwise, ArrowCounterclockwise, TypeUnderline, TrashFill
} from 'react-bootstrap-icons';

const RichTextEditor = () => {
    const [click, SetClick] = useState(false)
    const [Imgclick, setImgClick] = useState(false)
    const [ImgValue, setImgValue] = useState('')
    const [link, setLink] = useState('')

    const handleInputChange = (event) => {
        setLink(event.target.value)
    }

    const handleImageChange = (event) => {
        setImgValue(event.target.value)
    }

    var Boldcount = true
    var Italiccount = true
    var Strikecount = true
    var Underlinecount = true
    var Linkcount = true
    var Imagecount = true
    var Deletecount = true
    var Headingcount = true
    var Undocount = true
    var Redocount = true
    var Bulletcount = true
    var Numbercount = true

    const selected = () => {
        let selectedText = document.getSelection().toString();

        var x = document.getElementById('bold')
        if (document.queryCommandState('bold')) {
            x.style.backgroundColor = 'skyblue'
        }
        else {
            x.style.backgroundColor = "white"
        }

        var y = document.getElementById('italic')
        if (document.queryCommandState('italic')) {
            y.style.backgroundColor = 'skyblue'
        }
        else {
            y.style.backgroundColor = "white"
        }

        var z = document.getElementById('strike')
        if (document.queryCommandState('strikeThrough')) {
            z.style.backgroundColor = 'skyblue'
        }
        else {
            z.style.backgroundColor = "white"
        }

        var p = document.getElementById('underline')
        if (document.queryCommandState('underline')) {
            p.style.backgroundColor = 'skyblue'
        }
        else {
            p.style.backgroundColor = "white"
        }

        var r = document.getElementById('delete')
        if (document.queryCommandState('delete')) {
            r.style.backgroundColor = 'skyblue'
        }
        else {
            r.style.backgroundColor = "white"
        }

        var b = document.getElementById('heading')
        if (document.queryCommandState('fontSize')) {
            b.style.backgroundColor = 'skyblue'
        }
        else {
            b.style.backgroundColor = "white"
        }

        var c = document.getElementById('numbers')
        if (document.queryCommandState('insertOrderedList')) {
            c.style.backgroundColor = 'skyblue'
        }
        else {
            c.style.backgroundColor = "white"
        }

        var d = document.getElementById('bullets')
        if (document.queryCommandState('insertUnorderedList')) {
            d.style.backgroundColor = 'skyblue'
        }
        else {
            d.style.backgroundColor = "white"
        }

    }
    const handleChange = (name) => {
        console.log("name", name)
        switch (name) {
            case 'Bold':
                var x = document.getElementById('bold')
                if (Boldcount) {
                    x.style.backgroundColor = 'skyblue'
                    Boldcount = false
                }
                else {
                    x.style.backgroundColor = "white"
                    Boldcount = true
                }
                document.execCommand('bold', false, null)
                break;
            case 'Italic':
                var x = document.getElementById('italic')
                if (Italiccount) {
                    x.style.backgroundColor = 'skyblue'
                    Italiccount = false
                }
                else {
                    x.style.backgroundColor = "white"
                    Italiccount = true
                }
                document.execCommand('italic', false, null)
                break;
            case 'Strike':
                var x = document.getElementById('strike')
                if (Strikecount) {
                    x.style.backgroundColor = 'skyblue'
                    Strikecount = false
                }
                else {
                    x.style.backgroundColor = "white"
                    Strikecount = true
                }
                document.execCommand('strikeThrough', false, null)
                break;
            case 'Underline':
                var x = document.getElementById('underline')
                if (Underlinecount) {
                    x.style.backgroundColor = 'skyblue'
                    Underlinecount = false
                }
                else {
                    x.style.backgroundColor = "white"
                    Underlinecount = true
                }
                document.execCommand('underline', false, null)
                break;
            case 'ListOl':
                var x = document.getElementById('numbers')
                if (Numbercount) {
                    x.style.backgroundColor = 'skyblue'
                    Numbercount = false
                }
                else {
                    x.style.backgroundColor = "white"
                    Numbercount = true
                }
                document.execCommand('insertOrderedList', false, null)
                break;
            case 'ListUl':
                var x = document.getElementById('bullets')
                if (Bulletcount) {
                    x.style.backgroundColor = 'skyblue'
                    Bulletcount = false
                }
                else {
                    x.style.backgroundColor = "white"
                    Bulletcount = true
                }
                document.execCommand('insertUnorderedList', false, null)
                break;
            case 'Image':
                var x = document.getElementById('image')
                if (Imagecount) {
                    x.style.backgroundColor = 'skyblue'
                    Imagecount = false
                }
                else {
                    x.style.backgroundColor = "white"
                    Imagecount = true
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
                if (Linkcount) {
                    x.style.backgroundColor = 'skyblue'
                    Linkcount = false
                }
                else {
                    x.style.backgroundColor = "white"
                    Linkcount = true
                }
                SetClick(true)
                break;
            case 'Link2':
                document.execCommand('createLink', false, link)
                SetClick(false)
                break;
            case 'Unlink':
                var x = document.getElementById('link')
                x.style.backgroundColor = "white"
                document.execCommand('unlink', false, link)
                SetClick(false)
                break;
            case 'Delete':
                var x = document.getElementById('delete')
                if (Deletecount) {
                    x.style.backgroundColor = 'skyblue'
                    Deletecount = false
                }
                else {
                    x.style.backgroundColor = "white"
                    Deletecount = true
                }
                document.execCommand('delete', false, null)
                break;

            case 'Heading':
                var x = document.getElementById('heading')
                if (Headingcount) {
                    x.style.backgroundColor = 'skyblue'
                    Headingcount = false
                }
                else {
                    x.style.backgroundColor = "white"
                    Headingcount = true
                }
                document.execCommand('fontSize', false, "5")
                break;
            case 'Undo':
                var x = document.getElementById('undo')
                if (Undocount) {
                    x.style.backgroundColor = 'skyblue'
                    Undocount = false
                }
                else {
                    x.style.backgroundColor = "white"
                    Undocount = true
                }
                document.execCommand('undo', false, null)
                break;
            case 'redo':
                var x = document.getElementById('redo')
                if (Redocount) {
                    x.style.backgroundColor = 'skyblue'
                    Redocount = false
                }
                else {
                    x.style.backgroundColor = "white"
                    Redocount = true
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

                <Form inline>
                        <ButtonGroup className="mb-2 mr-sm-4">
                            <Button variant="default" title="Bold" id="bold"
                                style={{ fontSize: "20px", background: "white",outline:"1px solid"}}
                                onClick={() => handleChange("Bold")}><TypeBold style={{ fontSize: "25px" }} />
                            </Button>
                            <Button variant="default" title="Italic" id="italic"
                                style={{ fontSize: "20px", marginLeft: "1px", background: "white",outline:"1px solid"  }}
                                onClick={() => handleChange("Italic")}><TypeItalic style={{ fontSize: "25px" }} />
                            </Button>
                            <Button variant="default" title="StrikeThrough" id="strike"
                                style={{ fontSize: "20px", marginLeft: "1px", background: "white",outline:"1px solid" }}
                                onClick={() => handleChange("Strike")}><TypeStrikethrough style={{ fontSize: "25px" }} />
                            </Button>
                            <Button variant="default" title="Underline" id="underline"
                                style={{ fontSize: "20px", marginLeft: "1px", background: "white",outline:"1px solid"  }}
                                onClick={() => handleChange("Underline")}><TypeUnderline style={{ fontSize: "25px" }} />
                            </Button>
                            
</ButtonGroup>
<ButtonGroup className="mb-2 mr-sm-2">
                            <Button variant="default" title="Heading" id="heading"
                                style={{ fontSize: "20px", marginLeft: "7px", background: "white",outline:"1px solid" }}
                                onClick={() => handleChange("Heading")}><Fonts style={{ fontSize: "25px" }} />
                            </Button>
                            <Button variant="default" title="Link" id="link"
                                style={{ fontSize: "20px", marginLeft: "1px", background: "white",outline:"1px solid" }}
                                onClick={() => handleChange("Link")}><Link style={{ fontSize: "25px" }} />
                            </Button>
                            <Button variant="default" title="Delete" id="delete"
                                style={{ fontSize: "20px", marginLeft: "1px", background: "white",outline:"1px solid" }}
                                onClick={() => handleChange("Delete")}><TrashFill style={{ fontSize: "25px" }} />
                            </Button>
                            <Button variant="default" title="Numbers" id="numbers"
                                style={{ fontSize: "20px", marginLeft: "1px", background: "white",outline:"1px solid" }}
                                onClick={() => handleChange("ListOl")}><ListOl style={{ fontSize: "25px" }} />
                            </Button>
                            <Button variant="default" title="Bullets" id="bullets"
                                style={{ fontSize: "20px", marginLeft: "1px", background: "white",outline:"1px solid" }}
                                onClick={() => handleChange("ListUl")}><ListUl style={{ fontSize: "25px" }} />
                            </Button>
                            </ButtonGroup>
                            <ButtonGroup className="mb-2 mr-sm-2">
                            <Button variant="default" title="Image" id="image"
                                style={{ fontSize: "20px", marginLeft: "10px", background: "white",outline:"1px solid" }}
                                onClick={() => handleChange("Image")}><Paperclip style={{ fontSize: "25px" }} />
                            </Button>
                            </ButtonGroup>
                            <ButtonGroup className="mb-2 mr-sm-2">
                            <Button variant="default" title="Redo" id="redo"
                                style={{ fontSize: "20px", marginLeft: "10px", background: "white",outline:"1px solid" }}
                                onClick={() => handleChange("redo")}><ArrowClockwise style={{ fontSize: "25px" }} />
                            </Button>
                            <Button variant="default" title="Undo" id="undo"
                                style={{ fontSize: "20px", marginLeft: "1px", background: "white",outline:"1px solid" }}
                                onClick={() => handleChange("Undo")}><ArrowCounterclockwise style={{ fontSize: "25px" }} />
                            </Button>
                            </ButtonGroup>
                    </Form>

{/* <br /> */}
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
                            <div contentEditable="true" style={{ outline: "1px solid" }}
                                id="contain" onMouseUp={selected}>

                            </div>

                        </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export default RichTextEditor
