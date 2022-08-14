import React from 'react';
import { Col, Row } from 'react-bootstrap';
import profile from '../../assets/images/Bhavna.jpg';
import '../../assets/css/script.css';

export default function About() {
	return (
		<>
			<div id="about">			
				<div className="container" style={{ padding: '20px' }}>
				<br/>
				<br />
					<Row>
						<Col className="text-center">
							<h2 className="heading"><strong>About Me</strong></h2>
						</Col>
					</Row>
					<hr className="line" />
					<div className="row">
						<div className="col-md-3 col-sm-12 d-flex align-items-center justify-content-center">
							<div>
								<img src={profile} className="d-flex profile-img" alt="Bhavna Jain" />
							</div>
						</div>

						<div
							className="col-md-9 col-sm-12" style={{ margin: '0 auto', padding: '0 25px'}}	>
							<p style={{ margin: '20px 10px 0 10px', textAlign: 'justify', fontSize: '1.1em', color:'	#282828' }}>
							I am a passionate full-stack web developer. I like to combine logical thinking and problem solving to develop user-friendly applications. I have a Bachelors Degree in Computer Science and I have recently completed a certification in full-stack web development at Georgia Tech.
							</p>
							<p
								style={{ margin: '20px 10px 0px 10px', textAlign: 'justify', fontSize: '1.1em', color:'	#282828'}}>
								I am proactive in learning new skills. With my recent certification, I acquired knowledge in full-stack web development technologies such as React, NodeJS, MongoDB, SQL, JavaScript, HTML, CSS, jQuery, and RESTful APIs. I am a quick learner, very organized, able to work under pressure, and a good communicator. I look forward to bringing my skills and passion for software development to build user-focused applications.
							</p>
							<p style={{ margin: '20px 10px 0px 10px', textAlign: 'justify', fontSize: '1.1em', color:'	#282828' }}	>
								<strong>Contact Email: bhavnaostwal@gmail.com </strong>
							</p>
						</div>
					</div>
				</div>
			</div>
			<br />
		</>
	);
}