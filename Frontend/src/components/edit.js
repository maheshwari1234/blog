import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Form, InputGroup, Card } from 'react-bootstrap'
import {
  TypeBold, TypeItalic, TypeStrikethrough, Link, Fonts, ChatRightQuoteFill, Code,
  ListUl, ListOl, Paperclip, ArrowClockwise, ArrowCounterclockwise
} from 'react-bootstrap-icons';


class Edit extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      word: '',
      bold: false,
      italic:false,
      strike:false

    }
  }

inputChange=(e)=>{
    console.log("value",e.target.value)
    this.setState({word:e.target.value})
}

handlechange=(name)=>{
    const value=this.state.word
    switch(name){
        case 'Bold':
    this.setState({bold:true})
break
    case 'Italic':
        this.setState({italic:true})
    break
    case 'Strike':
        this.setState({strike:true})
        break
        default:
            break
    }
}



  render() {
    return (
      <div className="container">
        <div className="offset-2 col-sm-8"><br />
          <Card>

            <Form inline>
              <InputGroup className="mb-2 mr-sm-4">
                <InputGroup.Prepend>
                  <InputGroup.Text style={{ fontSize: "25px" }} name="Bold" onClick={() => this.handlechange('Bold')}><TypeBold /></InputGroup.Text>
                  <InputGroup.Text style={{ fontSize: "25px" }} name="Italic" onClick={() => this.handlechange('Italic')}><TypeItalic /></InputGroup.Text>

                  <InputGroup.Text style={{ fontSize: "25px" }} onClick={() => this.handlechange('Strike')}><TypeStrikethrough /></InputGroup.Text>
                  <InputGroup.Text style={{ fontSize: "25px" }} onClick={() => this.handlechange('Link')}><Link /></InputGroup.Text>
                </InputGroup.Prepend>

              </InputGroup>
              <InputGroup className="mb-2 mr-sm-2">
                <InputGroup.Prepend>
                  <InputGroup.Text style={{ fontSize: "25px" }}><Fonts /></InputGroup.Text>
                  <InputGroup.Text style={{ fontSize: "25px" }}><ChatRightQuoteFill /></InputGroup.Text>
                  <InputGroup.Text style={{ fontSize: "25px" }}><Code /></InputGroup.Text>
                  <InputGroup.Text style={{ fontSize: "25px" }}><ListOl /></InputGroup.Text>
                  <InputGroup.Text style={{ fontSize: "25px" }}><ListUl /></InputGroup.Text>

                </InputGroup.Prepend>

              </InputGroup>
              <InputGroup className="mb-2 mr-sm-2">
                <InputGroup.Prepend>
                  <InputGroup.Text style={{ fontSize: "25px" }}><Paperclip /></InputGroup.Text>
                </InputGroup.Prepend>
              </InputGroup>
              <InputGroup className="mb-2 mr-sm-2">
                <InputGroup.Prepend>
                  <InputGroup.Text style={{ fontSize: "25px" }}><ArrowCounterclockwise /></InputGroup.Text>
                  <InputGroup.Text style={{ fontSize: "25px" }}><ArrowClockwise /></InputGroup.Text>
                </InputGroup.Prepend>
              </InputGroup><br />
              {this.state.bold?
            <textarea  rows="8" cols="95" style={{fontFamily:'bold'}}/>:null}
            {this.state.italic?
             <textarea   rows="8" cols="95" style={{fontStyle:'italic'}}/>:null}
             {this.state.strike?
             <textarea   rows="8" cols="95" style={{textDecorationLine: 'line-through'}}/>:null}
              
            </Form>
            

          </Card>


        </div>

      </div>






    )
  }
}

export default Edit
