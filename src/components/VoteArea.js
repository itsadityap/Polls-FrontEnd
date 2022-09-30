import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import DynamicButtons from './OptionField/dynamic.options';
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
export default function InputForm()
{
    async function Vote()
    {
        //https://whatsapp-polls.herokuapp.com/createPoll?pollOp=Apple&pollOp=Samsung&pollOp=Chinese&ques=Best
        try{
            let result= await fetch('https://whatsapp-polls.herokuapp.com/createPoll',{
                method:'POST',
                headers:{
                    "Content-Type":"application/json",
                },
            });
            result = await result.json();
            if(result != null)
            {
                localStorage.setItem('poll-data',JSON.stringify(result));
            }
         }
        catch(e){
            console.log(e);
        }
    }

    return (
        <Box
            component="form"
            sx={{'& > :not(style)': { m: 1, width: '48ch' },}} noValidate autoComplete="off"
        >
            <TextField id="outlined-basic" className='Questions' label="Poll-Question" variant="outlined" name="ques"/>

            <div>
                Create Your Options
            </div>

            <DynamicButtons />

            <div className='submit-button'>
                <Stack spacing={2} direction="row">
                    <Button variant="contained" onClick={Vote} type="submit">Submit</Button>
                </Stack>
            </div>
        </Box>
    );
}
