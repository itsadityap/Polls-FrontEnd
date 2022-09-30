import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import InputForm from "./VoteArea";
import {Fragment} from "react";

export default function MakePoll() {
    return (
        <Fragment>
            <CssBaseline />
            <Container maxWidth="sm" className='makePollContainer'>
                <InputForm />
            </Container>
        </Fragment>
    );
}
