import app from "./app"
import {PORT} from "./environment/variables"

app.listen(PORT, ()=>{
    console.log(`Server Listening on PORT ${PORT}`);
    
})