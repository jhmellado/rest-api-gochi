import app  from './app'
import './database'


// starting server
app.listen(app.get('port'),() =>{
    console.log(`Server on port ${app.get('port')}`)
}); 