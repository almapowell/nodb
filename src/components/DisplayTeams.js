import React, {Component} from 'react';
import axios from 'axios';
import CreateNewTeam from './CreateNewTeam';
import EditTeam from './EditTeam'

class DisplayTeams extends Component {
    constructor () {
        super()

        this.state = {
            nflteams: []
        }
    }

    componentDidMount() {
        axios.get('/api/nflteams').then((res) => {
            // console.log(res.data)
            this.setState({
                nflteams: res.data
            })
        }).catch(err => console.log('Why cant I see?', err))
    }

    createNewTeam = (newTeam) => {
        axios.post('/api/nflteams', newTeam).then((res) => {
            this.setState({nflteams: res.data})
        }).catch(err => console.log('Why cant I see?', err))
    }

    updateTeam = (id, team) => {
        console.log(id, team)
        axios.put(`/api/nflteams/${id}`, team)
        .then(res => {
            console.log(res.data)
            this.setState({
                nflteams: res.data
        })}).catch(err => console.log('Why cant I see?', err))
    }

    deleteTeam = (id) => {
        axios.delete(`/api/nflteams/${id}`)
        .then(res => this.setState({nflteams: res.data}))
        .catch(err => console.log('Why cant I see?', err))
    }

    render() {
        let AFCTeams = this.state.nflteams[0] ? this.state.nflteams[0].map(Team => {
            return (
                <EditTeam key={Team.id} updateTeam={this.updateTeam} deleteTeam={this.deleteTeam} Team={Team} />
            )
        }) : null
        let NFCTeams = this.state.nflteams[1] ? this.state.nflteams[1].map(Team => {
            return (
                <EditTeam key={Team.id} updateTeam={this.updateTeam} deleteTeam={this.deleteTeam} Team={Team} />                
            )
        }) : null
        return(
            <div>
                <CreateNewTeam createNewTeam={this.createNewTeam} updateTeam={this.updateTeam}/>

            <div style={{display: 'flex', justifyContent: 'space-around'}}>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                {AFCTeams}
               </div>

                <div style={{border: '2px solid black'}} ></div>

               <div style={{display: 'flex', flexDirection: 'column'}}>
                {NFCTeams}
               </div>
            </div>

            </div>
        )
    }
}

export default DisplayTeams