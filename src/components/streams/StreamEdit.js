import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchStream, editStream} from '../../actions'
import {Field, reduxForm} from 'redux-form'

 class SteamEdit extends Component{

 componentDidMount(){
this.props.fetchStream(this.props.match.params.id)
 }
/*  <div>{this.props.stream.title}</div> */
onSubmit =(formValues)=> {
  this.props.editStream(formValues)
    }
  renderInput=({label, value})=> {
      return (
      <div className="field">
      <label>{label}</label>
      <input {...value} autoComplete='off'/>
      </div>
      )
    }
  render(){ 
    console.log(this.props.value);
    const {handleSubmit, stream} = this.props
    if(!this.props.stream){
      return <div>Loading...</div>
    }
    return (
      <form onSubmit={handleSubmit(this.onSubmit)} className="ui form error">
      <Field name="title" component={this.renderInput} label={"Edit Title"} value={`${stream.title}`}/>
      <Field name="description" component={this.renderInput} label={"Edit Descripton"} value={`${stream.description}`}/>
      <button className='ui button primary'>Button</button>
    </form>
    )
  }
}
const mapStateToProps = (state, ownProps)=> ({
stream: state.streams[`${ownProps.match.params.id}`]
})
const editFromWrapped = reduxForm({
  form: 'streamEdit'
})( SteamEdit);

export default connect(mapStateToProps, {fetchStream, editStream})(editFromWrapped)