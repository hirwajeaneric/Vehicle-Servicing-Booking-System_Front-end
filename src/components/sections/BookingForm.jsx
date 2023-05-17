import React from 'react'
import { AuthFormContainer, CommandButtons } from '../styled-components/authenticationPages'
import { TextField } from 'react-admin';
import { Button } from '@mui/material';

export default function BookingForm(props) {
    const { bookingFormData, submitForm, handleFormInput, progress } = props;

    return (
        <div>
            <AuthFormContainer onSubmit={submitForm}>
            <TextField id="fullName" sx={{ m: 1, width: '40ch' }}  size='small' label="Full name" variant="filled" name='fullName' value={bookingFormData.fullName || ''} onChange={handleFormInput}/>
            <TextField id="email" sx={{ m: 1, width: '40ch' }}  size='small' label="Email" variant="filled" name='email' value={bookingFormData.email || ''} onChange={handleFormInput}/>
            <TextField id="phone" sx={{ m: 1, width: '40ch' }}  size='small' label="Phone" variant="filled" name='phone' value={bookingFormData.phone || ''} onChange={handleFormInput}/>
            <CommandButtons>
                {!progress.disabled && <Button type='submit' variant='contained' size='medium' color='primary'>Submit booking </Button>}
                {progress.disabled && <Button type='submit' variant='contained' size='medium' color='primary' disabled>{progress.value} </Button>}
            </CommandButtons>
            </AuthFormContainer>
        </div>
    )
}
