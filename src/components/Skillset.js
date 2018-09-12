import React from 'react'

const Skillset = (props) => {
	return (<section className="skillset block">
        <h3 className="tagline">Skillset</h3>
        {
        	props.skills.map((skill, i) => (
        		<div className="category" key={i}>
		          <p>
		            <span className="name">{skill.category}:</span>{skill.description}
		          </p>
		        </div>
		    ))
        }
      </section>)
}

export default Skillset