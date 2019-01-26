import React from 'react';
import {Route, Switch} from 'react-router-dom'
import StreamCreate from './components/streams/SteamCreate';
import StreamDelete from './components/streams/SteamDelete';
import StreamEdit from './components/streams/StreamEdit';
import StreamShow from './components/streams/StreamShow';
import StreamList from './components/streams/StreamList';
import Header from './components/Header'

const App =()=> {
  
    return (
  <div className='ui container'>
  <Header />
<Switch>
<Route path='/'exact component={StreamList} />
<Route path='/streams/new' component={StreamCreate} />
<Route path='/streams/edit/:id'  component={StreamEdit} />
<Route path='/streams/delete/:id' component={StreamDelete} />
<Route path='/streams/show' component={StreamShow} />
</Switch>
  </div>
    )
}

export default App;
