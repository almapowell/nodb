const express = require('express')
const nflTeamsCtrl = require('./controllers/nflteams')
const app = express()

const port = 4000

app.use(express.json())

app.get('/api/nflteams', nflTeamsCtrl.read)

app.post('/api/nflteams', nflTeamsCtrl.create)

app.put('/api/nflteams/:id', nflTeamsCtrl.update)

app.delete('/api/nflteams/:id', nflTeamsCtrl.delete)

app.listen(port, () => {
    console.log('Tune in on channel', port)
})