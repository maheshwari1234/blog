import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/home'
import Indpost from './components/Indpost'
import Login from './components/Login'
import Register from './components/Register'
import Newpost from './components/newPost'
import Search from './components/search'
import SearchByWord from './components/serachByword'
import IndpostUser from "./components/IndpostByUser"
import TextEditor from "./components/RichTextEditor"
import Edit from "./components/edit"
import Mat from "./components/mat3"
import Newmat from "./components/mat"
import Profile from "./components/profile"

const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/t/:tag" component={Search} />
          <Route exact path="/profile/:name" component={Profile}/>

          <Route exact path="/:name/:id/:Title" component={IndpostUser} />
          <Route exact path="/search/:word" component={SearchByWord} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/new" component={Newpost} />
          <Route exact path="/:id/:Title" component={Indpost} />
          <Route exact path="/texteditor" component={Mat}/>
          <Route exact path="/edit" component={Edit}/>
          <Route exact path="/mat" component={Newmat}/>



        </Switch>
      </BrowserRouter>
    </React.Fragment>
  )
}
export default App;
