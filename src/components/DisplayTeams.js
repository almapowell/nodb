import React, {Component} from 'react';
import axios from 'axios';
import CreateNewTeam from './CreateNewTeam';
import { relative } from 'path';
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
        axios.put(`/api/nflteams/${id}`, team)
        .then(res => this.setState({
                nflteams: res.data
        }))
    }
        // NEED TO CONTINUE ON UPDATEtEAM

    deleteTeam = (id) => {
        axios.delete(`/api/nflteams/${id}`)
        .then(res => this.setState({nflteams: res.data}))
        .catch(err => console.log('Why cant I see?', err))
    }

    render() {
        let AFCTeams = this.state.nflteams[0] ? this.state.nflteams[0].map(Team => {
            return (
                <div key={Team.id}>
                    <h3>
                    {Team.location} {Team.team}
                    </h3>
                    <img alt="text" src={Team.imageUrl} style={{maxHeight: 100, maxWidth: 100}}/>
                    <section>
                        <button onClick={() => this.deleteTeam(Team.id)}>Delete</button>
                        <button >Edit</button>
                    </section> 
                </div>
            )
        }) : null
        let NFCTeams = this.state.nflteams[1] ? this.state.nflteams[1].map(Team => {
            return (
                <div key={Team.id}> 
                    <h3>
                    {Team.location} {Team.team}
                    </h3>
                    <img alt="text" src={Team.imageUrl} style={{maxHeight: 100, maxWidth: 100}}/>
                    <section>
                        <button onClick={() => this.deleteTeam(Team.id)}>Delete</button>
                        <button >Edit</button>
                    </section>
                </div>
            )
        }) : null
        return(
            <div>
                <CreateNewTeam style={{}} createNewTeam={this.createNewTeam}/>
               <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
                {AFCTeams}
               </div>

               <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-end'}}>
                {NFCTeams}
               </div>
                <EditTeam updateTeam={this.updateTeam} />
            </div>
        )
    }
}

export default DisplayTeams