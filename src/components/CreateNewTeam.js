import React, {Component} from 'react'

class CreateNewTeam extends Component {
    constructor(props){
        super(props)

        this.state = {
            team: '',
            location: '',
            conference: '',
            imageUrl: ''
        }
    }

        handleChange = e => {
            let {name, value} = e.target
            this.setState({
                [name]: value
                
            })
        }

        handleClick = () => {
            let newTeam = this.state
            this.props.createNewTeam(newTeam)
        }



    render() {
        return(
            <div style={{border: '5px solid black', margin: 10}}>
                <input 
                type="text"
                placeholder="Location"
                name='location'
                onChange={this.handleChange}
                />
                <input 
                type="text"
                placeholder="Team"
                name='team'
                onChange={this.handleChange}
                />
                  <input 
                type="text"
                placeholder="Conference"
                name='conference'
                onChange={this.handleChange}
                />
                  <input 
                type="text"
                placeholder="Logo"
                name='imageUrl'
                onChange={this.handleChange}
                />
                <button onClick={this.handleClick} >Create New Team</button>
            </div>
        )
    }
}

export default CreateNewTeam