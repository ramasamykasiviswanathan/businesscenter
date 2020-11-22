import React from 'react';
import { Button } from 'reactstrap';

export default class CreateUpdate extends React.Component  {

    constructor(props) {
        super(props);
        console.log(props);
        this.state={
            code : (props.selected && props.selected.code) || '',
            name : (props.selected && props.selected.name) || '',
            type : (props.selected && props.selected.type) || '',
            from_tm : (props.selected && props.selected.from_tm) || '',
            to_tm: (props.selected && props.selected.to_tm) || ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.persistChanges = this.persistChanges.bind(this);
      }
      handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
      }

      persistChanges(){
          console.log('this.state.selected',this.state)
        fetch(`//${window.location.host}/createorupdate`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            method: 'post',
            body: JSON.stringify(this.state)
          }).then((response) => {
            return response.json();
          }).then((data) => {
              console.log('updated data from the server', data);
              this.props.updateState(data);
          });
      }

    render(){
        return (<form onSubmit={this.handleSubmit}>
                        <div className="form-group row">
    <label htmlFor="staticCode" className="col-sm-2 col-form-label">CODE</label>
    <div className="col-sm-10" id="staticCode">
        {this.props.selected && <input id="staticCode" type="text" name="code" disabled value={this.state.code} onChange={this.handleChange} /> }
    {!this.props.selected && <input id="staticCode" type="text" name="code" value={this.state.code} onChange={this.handleChange} />}
    </div>
  </div>
  <div className="form-group row">
    <label htmlFor="staticName" className="col-sm-2 col-form-label">NAME</label>
    <div className="col-sm-10">
    <input id="staticName" type="text" value={this.state.name} name="name" onChange={this.handleChange} />
    </div>
  </div>
  <div className="form-group row">
    <label htmlFor="staticType" className="col-sm-2 col-form-label">Type</label>
    <div className="col-sm-10">
    <input id="staticType" type="text" value={this.state.type} name="type" onChange={this.handleChange} />
    </div>
  </div>
  <div className="form-group row">
    <label htmlFor="staticFromTm" className="col-sm-2 col-form-label">From Time</label>
    <div className="col-sm-10">
    <input id="staticFromTm" type="text" value={this.state.from_tm} name="from_tm" onChange={this.handleChange} />
    </div>
  </div>
  <div className="form-group row">
    <label htmlFor="staticToTm" className="col-sm-2 col-form-label">To Time</label>
    <div className="col-sm-10">
    <input id="staticToTm" type="text" value={this.state.to_tm} name="to_tm" onChange={this.handleChange} />
    </div>
  </div>
  <Button outline color="secondary" onClick={()=>this.persistChanges()}>save</Button>
  <Button outline color="secondary" onClick={()=>this.props.parent()}>cancel</Button>
</form>)
    }
}