import app from './App'

const PORT = 3000

let server = app.listen(PORT, (error: any) => {
    if(error) {
        console.log(error)
    }

    console.log('lmg-backend is listening on port ' + PORT)
})

export default server