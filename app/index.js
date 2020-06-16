import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

function isTrue () {
	return true
}

function returnString () {
	return "Hey world!"
}



class App extends React.Component {
  render() {
  	const hw = "Hello World!!!!"
  	const thisArr = Array("a, b, c, d, e")
  	return (
  		<div>
  		  {returnString()} <br/>
  		  {true && <div> ahah </div>}
  		  abd
  		  {thisArr.reduce( (acc, curr) => acc + ' ' + curr )}
  		</div>
  	)
  }
}

ReactDOM.render(
	<App />,
	document.getElementById('app')
)