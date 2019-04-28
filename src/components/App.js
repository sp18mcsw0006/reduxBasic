import React, { Component } from "react";
import { View } from "react-native";

// import the firebase third party lib
import firebase from "firebase";

//Redux specific
import { Provider } from "react-redux";
import { createStore } from "redux";
//Get Reducers
import reducers from "./reducers";

// Custom Components to be used in the app
//import { Header } from "./components/common/Header";
import {Header, CustomButton, Card, CardSection, Input ,Spinner  } from "./common";

// Import our LoginForm component to be displayed on the screen
import LoginForm from "./LoginForm";

const App = () => {
    return (
    // Provider can only have one child component
    <Provider store={createStore(reducers)}>
    <View>
    <Header headerText="Redux Demo -- Tech Stack" />
    {/* <LibraryList /> */}
    </View>
    </Provider>
    );
    };
    
    export default App;