import React,{Component} from 'react';
import { Switch,Route } from 'react-router-dom';
import 'whatwg-fetch';
import Search from './Pages/search.js';
import SinglePage from './Pages/singlePage';

class App extends Component{
    render(){
        return(
            <Switch>
                 <Route exact path="/" component={Search}/>
                 <Route path="/series/:id" component={SinglePage}/>
            </Switch>
        )
    }
}
export default App;