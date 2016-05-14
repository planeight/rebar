import React from 'react';
import {Scene, Reducer, Router, Modal} from 'react-native-router-flux'
import Relay, {
  DefaultNetworkLayer,
} from 'react-relay';

import Launch from './Launch'
import Register from './Register'
import ToDoScreen from './ToDoScreen'

let graphQLServerURL = "http://localhost:4444/graphql";

// Uncomment for connection to server in the cloud. Smarter way to do this will be needed.
// graphQLServerURL = 'http://isomorphic-material-relay.herokuapp.com/graphql';
Relay.injectNetworkLayer( new DefaultNetworkLayer(
  graphQLServerURL,
  {
    headers: {
      user_auth_token: 'Hello. My name is React Native and I want access to your wonderful GraphQL server. kthx.',
    },
  }
) );


const reducerCreate = params=>{
    const defaultReducer = Reducer(params);
    return (state, action)=>{
        console.log("ACTION:", action);
        return defaultReducer(state, action);
    }
};

export default class Example extends React.Component {
    render() {
        return <Router createReducer={reducerCreate}>
            <Scene key="modal" component={Modal} >
                <Scene key="root" hideNavBar={true}>
                  <Scene key="launch" component={Launch} title="Launch" initial={true} />
                  <Scene key="register" component={Register} title="Register"/>
                  <Scene key="ToDo" component={ToDoScreen} title="To Do" />
                </Scene>
            </Scene>
        </Router>;
    }
}
