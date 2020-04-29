import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Join from './components/Join/Join'
import Chat from './components/Chat/Chat'
import LoginPage from './components/Pages/LoginPage';
import SignUpPage from './components/Pages/SignUpPage';

const App = () => (
    <Router>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/signup" component={SignUpPage} />
        <Route path="/join" exact component={Join} />
        <Route path="/chat" exact component={Chat} />
    </Router>
)

export default App;


// import React from 'react';
// import {BrowserRouter as Router, Route} from 'react-router-dom';
// import Join from './components/Join/Join'
// import Chat from './components/Chat/Chat'
// import LoginPage from './components/Pages/LoginPage';
// import SignUpPage from './components/Pages/SignUpPage';

// const App = () => (
//     <Router>
//         <Route path="/" exact component={Join}/>
//         <Route path="/chat" exact component={Chat}/>
//         <Route exact path="/login" component={LoginPage}/>
//         <Route exact path="/signup" component={SignUpPage}/>
//     </Router>
// )

// export default App;