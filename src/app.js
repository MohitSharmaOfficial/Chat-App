const express = require('express')

const path = require('path')
const app = express()
const port = process.env.PORT || 3000


const publicdirectorypath = path.join(__dirname, '../public')
const viewspath = path.join(__dirname, '../templates/veiws')
app.set('view engine', 'hbs')

app.set('views', viewspath)
app.use(express.static(publicdirectorypath))


app.get('', (req, res) => {
    res.render('index')
})

app.get('/room', (req, res) => {
    res.render('room')
})

app.listen(port, () => {
    console.log('server is up on port' + port)
})