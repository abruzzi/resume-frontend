import React from 'react'

const Basic = (props) => {
	return (<section className="basic-information">
        <h1>{props.name}</h1>
        <h2>{props.title}</h2>
        <section className="bio">
        {
        	props.bio.map((desc, i) => (<p key={i}>{desc}</p>))
        }
        </section>
      </section>)
}

export default Basic