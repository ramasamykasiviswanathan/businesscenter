import logo from './logo.svg';
import './App.css';
import { Table , Button} from 'reactstrap';
import React, { Component } from 'react';
import CreateUpdate from './CreateUpdate.js';

export default class App extends React.Component  {
    constructor(props) {
      super(props);
      this.state = {
        data : null,
        create: false,
        selected: null
      };
      this.createcallback = this.createcallback.bind(this);
      this.updateState = this.updateState.bind(this);
    }

    componentWillMount() {
        this.renderMyData();
    }

    renderMyData(){
      fetch(`//${window.location.host}/getall`)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log('Response is', responseJson);
        this.setState({ data : responseJson });
      }).catch((error) => {
        console.error(error);
      });
    }

    createcallback(){
      if(!this.state.create)
      {
        this.setState({selected:null});
      }
      this.setState({create: !this.state.create});
    }

    updateState(response)
    {
      this.setState({data:response});
      this.createcallback();
    }

    render(){
      let {create} = this.state;
      const comp = ()=>{
        if(this.state.create)
        {
          return <CreateUpdate parent={this.createcallback} selected={this.state.selected} updateState={this.updateState}/>
        }
        else
        {
          return <div>Business Center Master List <Button outline color="primary"  onClick={() => this.createcallback()}>create</Button> <Table striped>
          <thead>
          <tr>
            <th>CODE</th>
            <th>NAME</th>
            <th>TYPE</th>
            <th>FROM TIME</th>
            <th>TO TIME</th>
          </tr>
          </thead>
          <tbody>
          {this.state.data && this.state.data.map((v) =>
          <tr key={v.code}>
          <th scope="row" onClick={()=>{
            this.setState({selected:v, create:true});
          }}>{v.code}</th>
          <td >{v.name}</td>
          <td>{v.type}</td>
          <td>{v.from_tm}</td>
          <td>{v.to_tm}</td>
          </tr>
          )}
          </tbody>
          </Table></div>;
        }
      }
      return (
       <div>
        {comp()}
        </div>);
    }
}

