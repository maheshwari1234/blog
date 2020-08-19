import React, { useState } from 'react'
import { Button, Form, Navbar, Nav, Image, Card } from 'react-bootstrap'
import '../App.css';
import { NewpostAction } from '../Redux/action/newPostAction'
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Rich from "./fornew"


const NewPost = (props) => {
    const [inputs, setInputs] = useState({});
    const [course, setCourse] = useState('')
    const [title, setTitle] = useState('')

    const newDataSubmitted = useSelector((state) => state.newpost.data)
    const username = useSelector((state) => state.login.email)
    const username1 = useSelector((state) => state.register.email)

    const dispatch = useDispatch();

    const handleChange = (event) => {
        console.log("onchange", event.target.name,"value",event.target.value)
        event.persist();
        setInputs(inputs => ({ ...inputs, [event.target.name]: event.target.value }));

    }
    const selected=(e)=>{
        console.log("value using blur",e.target.textContent)
        setTitle(e.target.textContent)

    }

    const handleSelection = (e) => {
console.log("select course",e.target.value)
setCourse(e.target.value)

    }

    const submit = (e) => {
        e.preventDefault();
        
        const newData = {
            "Course":course,
            "Title": title,
            "Brief": inputs.Brief,
            "Body": inputs.body,
            "Image": "comman.jpg"

        }
        if (username !== undefined) {
            dispatch(NewpostAction(newData, username))


        }
        else {
            dispatch(NewpostAction(newData, username1))
        }


    }
    if (newDataSubmitted) {
        return <Redirect to="/?" />
    }

    return (
        <React.Fragment>
            <Navbar bg="light" variant="dark">
                <Navbar.Brand href="/home">
                    <Image src="./logo192.png" style={{ width: 100, marginTop: -7, height: 50 }} alt="Image not found" />
                </Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link style={{ color: "black", fontSize: "20px" }}>Write a new post</Nav.Link>
                </Nav>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Item><Nav.Link href="/home" style={{ color: "black" }}>Home</Nav.Link></Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar><br />

            <Rich /><br />
            <div className="container">
                <div className="offset-1 col-sm-9">
                    <Card>
                        <Card.Header>
                            <Form>
                                <Form.Label style={{ fontWeight: "bold", fontSize: "20px" }}>Select Course Name here..</Form.Label>

                                {/* <Form.Control as="textarea" type="text" rows="1" onChange={handleChange} name="course" /> */}
                                {/* <p contentEditable="true" style={{ outline: "1px solid" }} onMouseUp={handleChange} name="course"></p> */}
                                <Form.Control as="select" onChange={handleSelection}>
                                    <option value=''>Select Course</option>
                                    <option value="React">React</option>
                                    <option value="Javascript">Javascript</option>
                                    <option value="Bootstrap">Bootstrap</option>

                                </Form.Control>
                            </Form>
                        </Card.Header>
                        <Card.Title>
                            <Form style={{ marginLeft: "20px" }}>
                                <Form.Group>
                                    <Form.Label style={{ fontWeight: "bold", fontSize: "35px", color: "gray" }}>New post title here...</Form.Label>
                                 {/* <Form.Control as="textarea" type="text" rows="2" onChange={handleChange} name="title" /> */}
                                 <div contentEditable="true" style={{ outline: "1px solid" }}
                                id="contain"  name="title" onKeyUp={selected} ></div>

                            
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label style={{ fontWeight: "bold", fontSize: "30px", color: "gray" }}>Brief about new post here..</Form.Label>
                                    <Form.Control as="textarea" type="text" rows="2" onChange={handleChange} name="Brief" />
                                </Form.Group>

                                <Form.File
                                    label="Upload Image"
                                    custom
                                    onChange={handleChange} name="image"
                                />
                            </Form>
                        </Card.Title>
                        <Card.Body>
                            <Form>
                                <Form.Group>
                                    <Form.Label style={{ fontWeight: "bold", fontSize: "20px" }} onChange={handleChange} value={inputs.body} name="body" >Write your Post content here..</Form.Label>
                                    <Form.Control as="textarea" rows="6" type="text" onChange={handleChange} name="body" />
                                </Form.Group>
                            </Form>
                        </Card.Body>
                    </Card><br />
                    <Button variant="primary" onClick={submit}>Publish</Button>
                </div>
            </div>
        </React.Fragment>
    )
}


export default NewPost
