
var app = require('express')()

app.get('/secret', (req, res) => {
  res.send('secret')
})

app.use((req, res) => res.sendStatus(404))

app.listen(3000)
