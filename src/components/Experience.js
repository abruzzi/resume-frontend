import React from 'react'

const Experience = (props) => {
	return (<section className="tw-experience block">
        <h3 className="tagline">{props.type === 'ThoughtWorks' ? 'ThoughtWorks': 'Other'} Experience</h3>
        {
        	props.experience.map((exp, i) => (
        	<div className="project" key={i}>
	          <h4>{exp.project}</h4>
	          <p className="role">{exp.role}</p>
            {
              (Array.isArray(exp.description) ? exp.description : [exp.description]).map((desc, i) => (
              <p className="description" key={i}>{desc}</p>
              ))
            }
	        </div>))
    	}
      </section>)
}

export default Experience