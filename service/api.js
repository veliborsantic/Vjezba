import React, { Component } from 'react';
import { View, StyleSheet, Text, Alert, FlatList } from 'react-native';
import {firebase} from './config';

export default class Home extends Component {

  constructor(props){
    super(props);
    // realtime listener for firebase
    this.itemsRef = firebase.ref('meni/');
    this.state = { allItems:[] };
  }

  keyExtractor = (item) => item.id;
  

  renderItem = ({item}) => {
  <View >
    <Text style={styles.row}>{item.name}</Text> 
  </View>;
  }

listenForItems(itemsRef) {
   itemsRef.once('value', (snap) => {
    var items = [];
    snap.forEach((child) => {
      items.push({
        id: child.key,
        name: child.val().name,
        price: child.val().price,
      });
    });
    this.setState({allItems: items});
  });
}
componentDidMount() {
  this.listenForItems(this.itemsRef);
}

  render() {
    {console.log(this.state.allItems)}
    return (
        <FlatList 
          style={styles.container}
          data = {this.state.allItems }
          renderItem= { this.renderItem }    
          keyExtractor = { this.keyExtractor } 
          extraData={this.state.refresh} 
        />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    padding: 15,
    marginBottom: 5,
    backgroundColor: 'skyblue',
  },
})
