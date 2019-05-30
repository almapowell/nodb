import React, {Component} from 'react'
import axios from 'axios'

class DisplayTeams extends Component {
    constructor () {
        super()

        this.state = {
            NFC: [],
            AFC: []
        }
    }

    componentDidMount() {
        // axios.get('/api/nflteams').then((res) => {
        //     console.log(res.data)
        //     this.setState({
        //         NFC: res.data,
        //         AFC: res.data
        //     })
        // }).catch(err => console.log('Why cant I see?', err))
    }

    createNewTeam = (newTeam) => {
        axios.post('/api/nflteams', newTeam).then((res) => {
            this.setState({
                // NFC: res.data
                // AFC: res.data
            })
        })
    }

    // NEED HELP SETTING THE STATE. PUSHING VARIABLES INTO PROPER ARRAY

    render() {
        return(
            <div>
                
            </div>
        )
    }
}

export default DisplayTeams