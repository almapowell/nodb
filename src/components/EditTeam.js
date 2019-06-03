import React, {Component} from 'react'

class EditTeam extends Component {
    constructor(props) {
        super(props) 

        this.state = {
            team: props.Team.team,
            conference: props.Team.conference,
            location: props.Team.location,
            imageUrl: props.Team.imageUrl,
            edit: false
        }
    }

    handleChange = (e) => {
        let { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    editSameTeam = (id) => {
        

        let { team, location, imageUrl, conference } = this.state
        let editTeam = {
            team,
            conference,
            location,
            imageUrl
        }
        this.props.updateTeam(id, editTeam)

        this.setState({
            team: '',
            location: '',
            imageUrl: '',
            edit: false
        })
    }

    toggleEdit = () => {
        this.setState({
            edit: !this.state.edit
        })
    }
    
    render() {
        let { Team, deleteTeam } = this.props
        return(
                 <div key={Team.id} style={{border: '5px', margin: 5}}>
                     {this.state.edit ?
                     <>
                    <input style={{margin: 5, border: '3px solid #999', borderRadius: 8}}
                     type="text"
                     placeholder="Location"
                     name='location'
                     onChange={this.handleChange}
                     value={this.state.location}
                     /> <br/>
                    <input style={{margin: 5, border: '3px solid #999', borderRadius: 8}}
                     type="text"
                     placeholder="Team"
                     name='team'
                     onChange={this.handleChange}
                     value={this.state.team}
                     /> <br/>
                    {/* <input style={{margin: 5, border: '3px solid #999', borderRadius: 8}}
                     type="text"
                     placeholder="Conference"
                     name='conference'
                     onChange={this.handleChange}
                     /> <br/> */}
                    <input style={{margin: 5, border: '3px solid #999', borderRadius: 8}}
                     type="text"
                     placeholder="Logo"
                     name='imageUrl'
                     onChange={this.handleChange}
                     value={this.state.imageUrl}
                     /> <br/>
                     </>
                     : <>
                    <h3>
                    {Team.location} {Team.team}
                    </h3>
                    <img alt="text" src={Team.imageUrl} style={{maxHeight: 100, maxWidth: 100}}/>
                    </>
                    }
                    <section>
                        {this.state.edit ?
                        <>
                        <button style={{borderRadius: 8, margin: 5, backgroundColor: 'solid #999', cursor: 'pointer'}} onClick={this.toggleEdit}>Cancel</button>
                        <button style={{borderRadius: 8, margin: 5, backgroundColor: '#DDDDDD', cursor: 'pointer'}} onChange={this.handleChange} onClick={() => this.editSameTeam(Team.id)} >Update</button>
                        </>
                        :
                        <>
                        <button style={{borderRadius: 8, margin: 5, backgroundColor: 'solid #999', cursor: 'pointer'}} onClick={this.toggleEdit}>Edit</button>
                        <button style={{borderRadius: 8, margin: 5, border: 'none', backgroundColor: '#CE1126', color: 'white', cursor: 'pointer'}} onClick={() => deleteTeam(Team.id)}>Delete</button>
                        </>
                        }
                    </section> 
                </div>

           
        )
    }


}

export default EditTeam


// onClick={() => updateTeam(Team.id, this.state)}