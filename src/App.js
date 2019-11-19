import React, { Component } from 'react';
import EnhancedTable from './component/EnhancedTable.js';

export default class App extends Component{
  constructor(props){
  super(props);
  this.state={
    data:[]
  };
}
componentDidMount(){
  fetch('https://anapioficeandfire.com/api/books')
  .then(result => result.json())
  .then((result)=>{
    this.setState({
      data:result.data
    })
  })

  console.log("Data is :",this.state);
}

render(){
return (<div>It should work 
<EnhancedTable>
  
  </EnhancedTable></div>
  );
}
}

