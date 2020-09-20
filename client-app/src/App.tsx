import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
//import { render } from '@testing-library/react';
import axios from 'axios';
import { Header, Icon, List } from 'semantic-ui-react'

class App extends Component{
  //when our componnet is load our state is empty
  state={
    values:[]
  }

  //React life cycle method which is called immediately after compon ents are mounted and we sets state here
  //we trigger rerender of component and updated data is displayed on our page.
  
  //When our component mounts we set state
  componentDidMount(){
    axios.get('http://localhost:5000/api/Values')
    .then((response)=>{
      this.setState({
        values:response.data
      })
    })
    
  }
  render() {
    return (
      
        <div>
        <Header as='h2'>
          <Icon name='plug' />
          <Header.Content>Reactivities</Header.Content>
        </Header>
        <List>
        {
              this.state.values.map((value:any)=>(
                <List.Item key={value.id}>{value.name}</List.Item>
              ))
            }
          
        </List>
          
         
          </div>
      
    );
  }
}
 

export default App;
