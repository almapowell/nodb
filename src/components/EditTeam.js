import React, {Component} from 'react'

class EditTeam extends Component {
    constructor(props) {
        super(props) 

        this.state = {
            team: '',
            location: '',
            imageUrl: '',
            edit: false
        }
    }

    handleChange = (e) => {
        let { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    editSameTeam = (e) => {
        e.preventDefault();

        let { team, location, imageUrl } = this.state
        let editTeam = {
            team,
            location,
            imageUrl
        }
        this.props.updateTeam(editTeam)

        // this.setState({
        //     team: '',
        //     location: '',
        //     imageUrl: ''
        // })
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
                     /> <br/>
                    <input style={{margin: 5, border: '3px solid #999', borderRadius: 8}}
                     type="text"
                     placeholder="Team"
                     name='Team'
                     onChange={this.handleChange}
                     /> <br/>
                    <input style={{margin: 5, border: '3px solid #999', borderRadius: 8}}
                     type="text"
                     placeholder="Conference"
                     name='conference'
                     onChange={this.handleChange}
                     /> <br/>
                    <input style={{margin: 5, border: '3px solid #999', borderRadius: 8}}
                     type="text"
                     placeholder="Logo"
                     name='imageUrl'
                     onChange={this.handleChange}
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
                        <button onClick={this.toggleEdit}>Cancel</button>
                        <button onChange={this.handleChange} onClick={this.editSameTeam} >Update</button>
                        </>
                        :
                        <>
                        <button  onClick={this.toggleEdit}>Edit</button>
                        <button onClick={() => deleteTeam(Team.id)}>Delete</button>
                        </>
                        }
                    </section> 
                </div>

           
        )
    }


}

export default EditTeam


// onClick={() => updateTeam(Team.id, this.state)}