import React, { Component } from 'react'
import {Field, reduxForm} from 'redux-form'
import {createStream, fetchStreams, fetchStream, deleteStream} from '../../actions'
import {connect} from 'react-redux'
 class SteamCreate extends Component {

   renderError = ({error, touched})=> {
if(touched && error) {
  return (
    <div className="ui error message">
    <div className="header">
{error}
    </div>
    </div>
  )
}
   }
  renderInput=({input, label, meta})=> {
    const className = `field ${meta.error&&meta.touched ? 'error': '' }`;
    return (
    <div className={className}>
    <label>{label}</label>
    <input {...input} autoComplete='off'/>
    <div>{this.renderError(meta)}</div>
    </div>
    )
  }
  onSubmit =(formValues)=> {
this.props.createStream(formValues)
  }
  render() {
    const {handleSubmit} = this.props
    return (
      <form onSubmit={handleSubmit(this.onSubmit)} className="ui form error">
        <Field name="title" component={this.renderInput} label={"Enter Title"}/>
        <Field name="description" component={this.renderInput} label={"Enter Descripton"}/>
        <button className='ui button primary'>Button</button>
      </form>
    )
  }
}
const validate = (formValues)=> {
  const errors = {}
if(!formValues.title)
errors.title = "You must enter a title"

if(!formValues.description)
errors.description ="You mast enter a descripton"
return errors
}
const fromWrapped = reduxForm({
  form: 'streamCreate',
  validate
})( SteamCreate);
export default connect(null, {createStream, fetchStreams, fetchStream, deleteStream})(fromWrapped)
