import React, {Component} from 'react'
import './CreateNewTeam.css'

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

            this.setState({
                team: '',
                location: '',
                conference: '',
                imageUrl: ""
            })
        }



    render() {
        return(
            <div style={{border: '5px solid black'}}>
                <input style={{borderRadius: 8, margin: 5, width: '20%', textAlign: 'center'}}
                type="text"
                placeholder="Location"
                name='location'
                onChange={this.handleChange}
                value={this.state.location}
                /> 
                <input style={{borderRadius: 8, margin: 5, width: '20%', textAlign: 'center'}}
                type="text"
                placeholder="Team"
                name='team'
                onChange={this.handleChange}
                value={this.state.team}
                />
                  <input style={{borderRadius: 8, margin: 5, width: '20%', textAlign: 'center'}}
                type="text"
                placeholder="Conference"
                name='conference'
                onChange={this.handleChange}
                value={this.state.conference}
                />
                  <input style={{borderRadius: 8, margin: 5, width: '20%', textAlign: 'center'}}
                type="text"
                placeholder="Logo"
                name='imageUrl'
                onChange={this.handleChange}
                value={this.state.imageUrl}
                />
                <button className="button" onClick={this.handleClick} >Create New Team</button>
            </div>
        )
    }
}

export default CreateNewTeam
// style={{borderRadius: 8, margin: 5, background: '#003B66', color: 'white', width: '10%', cursor: 'pointer'}} 