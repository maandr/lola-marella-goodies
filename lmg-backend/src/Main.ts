import app from './app'

const PORT = 3000

app.listen(PORT, (error: any) => {
    if(error) {
        console.log(error)
    }

    console.log('lmg-backend is listening on port ' + PORT)
})