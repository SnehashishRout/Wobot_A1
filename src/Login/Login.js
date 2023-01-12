import React, { useState } from 'react'
import "./login.css"
import logoImag from "../Resources/Boxhead.png"
function Login() {
  
  const [state1, setState1] = useState("comp-size-btn");
  const [state2, setState2] = useState("comp-size-btn");
  const [state3, setState3] = useState("comp-size-btn");
  const [state4, setState4] = useState("comp-size-btn");
  const [state5, setState5] = useState("comp-size-btn");

  function getChange1(event)
  {
    setState1("comp-size-btn-clicked");
	event.preventDefault();
  }
  
  function getChange2(event)
  {
    setState2("comp-size-btn-clicked");
	event.preventDefault();
  }
  function getChange3(event)
  {
    setState3("comp-size-btn-clicked");
	event.preventDefault();
  }
  function getChange4(event)
  {
    setState4("comp-size-btn-clicked");
	event.preventDefault();
  }
  function getChange5(event)
  {
    setState5("comp-size-btn-clicked");
	event.preventDefault();
  }

  return (
		<div class="Login-area">
			<div class="inner-container">
				<img id="topImag" src={logoImag}></img>
				<form >
					<label for="company">Company Name</label>
					<br></br>
					<input
						class="inputs"
						type="text"
						name="company"
						placeholder="e.g Example Inc"
						autoFocus
						required
					></input>
					<br></br>
					<br></br>
					<label for="company">Industry</label>
					<br></br>
					<select class="inputs" name="languages" id="lang" style={{height:"2.3rem", width:"92%"}}>
						<option id="vis-opt" value="" disabled selected hidden>
							Select
						</option>
						<option value="javascript">Automobile</option>
						<option value="php">Service</option>
						<option value="java">E-commerce</option>
					</select>
					<br></br>
					<br></br>

					<label>Company Size</label>
					<div class="button-cont">
						<button className={state1} onClick={getChange1}>1-20</button>
						<button className={state2} onClick={getChange2}>21-50</button>
						<button className={state3} onClick={getChange3}>51-200</button>
						<button className={state4} onClick={getChange4}>201-500</button>
						<button className={state5} onClick={getChange5}>500+</button>
					</div>
					<button id="get-started" type="submit">
						Get Started
					</button>
				</form>
			</div>
		</div>
	);
}

export default Login