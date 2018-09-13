import React, {Component} from 'react'
import { Form, Field } from 'react-final-form'
import arrayMutators from 'final-form-arrays'
import { FieldArray } from 'react-final-form-arrays'
import axios from 'axios'

class ResumeForm extends Component {
  onSubmit = values => {
    axios.post('/users', values).then((res) => {
      this.props.history.push('/')
    })
  }

  render() {
    return (<div className="container resume-form">
      <h3 className="page-title">Create a new resume</h3>

      <Form
        onSubmit={this.onSubmit}
        mutators={{
          ...arrayMutators
        }}

        render={({
                   handleSubmit,
                   mutators: { push, pop }, // injected from final-form-arrays above
                   pristine,
                   reset,
                   submitting,
                   values
                 }) => {
          return (
            <form onSubmit={handleSubmit}>
              <h3 className="title">Basic information</h3>
              <div className="form-item">
                <label>Name</label>
                <Field name="name" component="input" placeholder="Your name" />
              </div>

              <div className="form-item">
                <label>Title</label>
                <Field name="title" component="input" placeholder="Your title" />
              </div>


              <div className="form-item">
                <label>Bio</label>
                <Field name="bio" component="textarea" placeholder="Something about yourself"/>
              </div>

              <h3 className="title">Skillset</h3>

              <div className="buttons">
                <button
                  type="button"
                  onClick={() => push('skills', undefined)}>
                  Add Skill
                </button>
              </div>

              <FieldArray name="skills">
                {({ fields }) =>
                  fields.map((name, index) => (
                    <div key={name}>
                      <label>Skills</label>
                      <div className="form-item">
                        <label>Category</label>
                        <Field
                          name={`${name}.category`}
                          component="input"
                          placeholder="Category"
                        />
                      </div>

                      <div className="form-item">
                        <label>Description</label>
                        <Field
                          name={`${name}.description`}
                          component="input"
                          placeholder="description"
                        />
                      </div>

                      <span
                        onClick={() => fields.remove(index)}
                        style={{ cursor: 'pointer' }} role="img" aria-label="close">
                      ❌
                    </span>
                    </div>
                  ))}
              </FieldArray>

              <h3 className="title">Experience</h3>

              <div className="buttons">
                <button
                  type="button"
                  onClick={() => push('experience', undefined)}>
                  Add Experience
                </button>
              </div>

              <FieldArray name="experience">
                {({ fields }) =>
                  fields.map((name, index) => (
                    <div key={name}>
                      <label>Experience</label>

                      <div className="form-item">
                        <label>
                          <Field name={`${name}.current`} component="input" type="checkbox" />
                          {' '} In ThoughtWorks
                        </label>
                      </div>

                      <div className="form-item">
                        <label>Project name</label>
                        <Field
                          name={`${name}.project`}
                          component="input"
                          placeholder="Project name"
                        />
                      </div>

                      <div className="form-item">
                        <label>Role played</label>
                        <Field
                          name={`${name}.role`}
                          component="input"
                          placeholder="Role played"
                        />
                      </div>

                      <div className="form-item">
                        <label>Description</label>
                        <Field
                          name={`${name}.description`}
                          component="textarea"
                          placeholder="More details"
                        />
                      </div>

                      <span
                        onClick={() => fields.remove(index)}
                        style={{ cursor: 'pointer' }} role="img" aria-label="close">
                      ❌
                    </span>
                    </div>
                  ))}
              </FieldArray>

              <div className="buttons">
                <button type="submit" disabled={submitting || pristine}>
                  Submit
                </button>
                <button
                  type="button"
                  onClick={reset}
                  disabled={submitting || pristine}>
                  Reset
                </button>
              </div>
            </form>
          )
        }}
      />
    </div>)
  }
}

export default ResumeForm