/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var Login = require('./app/page/login');
var Index = require('./app/page/index');

var {
  AppRegistry,
} = React;

// StatusBarIOS.setStyle('light-content');

var app = React.createClass({
  getInitialState: function() {
    return{
      logined:false,
    };
  },


  _renderIndex:function(){
    return (
        <Index/>
      );
  },

  render: function() {
    
        return this._renderIndex();
    
  },

});

AppRegistry.registerComponent('bqseller', () => app);
