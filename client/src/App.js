import React from 'react'
import { Admin, Resource, ListGuesser, EditGuesser, ShowGuesser } from 'react-admin'
// import restProvider from 'ra-data-simple-rest'
import myDataProvider from './myDataProvider'
import {fetchJson as httpClient} from './httpClient'
import authProvider from './authProvider';
import PostList from './components/PostList'
import PostCreate from './components/PostCreate'
import PostEdit from './components/PostEdit'
import UserList from './components/UserList'
import UserCreate from './components/UserCreate'
import UserEdit from './components/UserEdit'

const DB_STRING = 'mongodb + srv://jamespro:eventregRc9jfmij!@cluster0.13huq.mongodb.net/devtest?retryWrites=true&w=majority'

const dataProvider = myDataProvider(DB_STRING, httpClient);

function App() {
    return (
      <Admin dataProvider={dataProvider} authProvider={authProvider} >
            <Resource name='posts' list={PostList} create={PostCreate} edit={PostEdit} />
            <Resource name='users' list={UserList} create={UserCreate} show={ShowGuesser} edit={EditGuesser} />
      </Admin>
  );
}

export default App;
