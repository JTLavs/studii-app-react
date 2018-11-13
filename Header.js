import React from 'react';
import {Header} from 'react-native-elements'
import {toggleMenu} from './menuToggle';

export default class MainHeader extends React.Component{

    toggle(){
        toggleMenu();
    }

    render() {
        return (
        <Header leftComponent={{
            icon: 'menu',
            color: '#fff',
            onPress: this.toggle
        }}
                centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
                rightComponent={{ icon: 'home', color: '#fff', onPress: this.toggle}}
                backgroundColor="pink"/>
        );
    }
}