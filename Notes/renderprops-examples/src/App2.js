import React, { Component } from 'react'
import NameForm from './NameForm.js'
import Form from './shared/Form.js'

const App2 = () => {
    return (
        <div>
            <Form 
                inputs={{ fName: "", lName: "" }}
                submit={inputs => alert(`Hi I am ${inputs.fName} ${inputs.lName}`) }
                render={formProps => <NameForm {...formProps}/>}
            />
            <Form 
                inputs={{ age: "", favColor: ""}}
                submit={inputs => alert(`Hi I am ${inputs.fName} ${inputs.lName}`) }
                render={formProps => <NameForm {...formProps}/>}
            />
        </div>
    )
}

export default App2

