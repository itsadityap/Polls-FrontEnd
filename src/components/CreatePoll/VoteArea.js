import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import axios from 'axios';
//import {Route, Router, Link} from 'react-router-dom'

const url = 'https://whatsapp-polls.herokuapp.com/createPoll'

export default function InputForm()
{
    const [ques,setques] = useState("")
    const [option1,setOption1] = useState("")
    const [option2,setOption2] = useState("")
    const [option3,setOption3] = useState("")
    
    async function Vote(e)
    {   
        try
        {   
            e.preventDefault()
            //console.log(option1, option2, option3, ques);

            let paramsURL= url+`?pollOp=${option1}&pollOp=${option2}&pollOp=${option3}&pollOp=${ques}`
            const resp1 = await axios.post(paramsURL).then().catch()

            localStorage.setItem('data',JSON.stringify(resp1.data.id))
            //console.log(resp1.data);
        }
        catch(e)
        {
            console.log(e)
        }
    }

    return (
        <Box
            component="form"
            sx={{'& > :not(style)': { m: 1, width: '48ch' },}} noValidate autoComplete="off"
        >
            <TextField id="outlined-basic" label="Poll-Question" variant="outlined" 
                onChange={e => setques(e.target.value)}
                name="ques" value={ques}
            />

            <div>
                Create Your Options
            </div>

            <TextField id="outlined-basic" label="Option 1" variant="outlined" 
            name="option1" value={option1} onChange={(e) => {setOption1(e.target.value)}}/>
            
            <TextField id="outlined-basic" label="Option 2" variant="outlined" 
            name="option2" value={option2} onChange={(e) => {setOption2(e.target.value)}}/>

            <TextField id="outlined-basic" label="Option 3" variant="outlined" 
            name="option3" value={option3} onChange={(e) => {setOption3(e.target.value)}}/>

                <div className='submit-button'>
                    <Stack spacing={2} direction="row">
                        <Button variant="contained" onClick={Vote} type="submit">Submit</Button>
                    </Stack>
                </div>

        </Box>
    );
}
