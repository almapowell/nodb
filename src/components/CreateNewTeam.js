import React, {Component} from 'react'

class CreateNewTeam extends Component {
    constructor(props){
        super()

        this.state = {
            team: '',
            location: '',
            conference: '',
            imageUrl: ''
        }
    }

        handleChange = e => {
            // let { team, location, conference, imageUrl }
            this.setState({
                team: e.target.value,
                location: e.target.value,
                conference: e.target.value,
                imageUrl: e.target.value
            })
        }

        handleClick = () => {
            let newTeam = this.state,
            
        }



    render() {
        return(
            <div>

            </div>
        )
    }
}

export default CreateNewTeam