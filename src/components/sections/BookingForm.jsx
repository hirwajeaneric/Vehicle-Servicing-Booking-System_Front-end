import React from 'react';
import { AuthFormContainer, CommandButtons } from '../styled-components/authenticationPages';
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';

export default function BookingForm(props) {
    const { bookingFormData, setBookingFormData, submitForm, handleFormInput, progress } = props;

    const handleVehicleTypeChanges = (event) => {
        setBookingFormData({...bookingFormData, vehicleType: event.target.value});
    };

    const handleServiceTypeChanges = (event) => {
        setBookingFormData({...bookingFormData, typeOfService: event.target.value});
    };

    return (
        <div>
            <AuthFormContainer onSubmit={submitForm}>
                <TextField id="fullName" sx={{ m: 1, width: '40ch' }}  size='small' label="Full name" variant="filled" name='fullName' value={bookingFormData.fullName || ''} onChange={handleFormInput}/>
                
                <TextField id="email" sx={{ m: 1, width: '40ch' }}  size='small' label="Email" variant="filled" name='email' value={bookingFormData.email || ''} onChange={handleFormInput}/>
                
                <TextField id="phone" sx={{ m: 1, width: '40ch' }}  size='small' label="Phone" variant="filled" name='phone' value={bookingFormData.phone || ''} onChange={handleFormInput}/>
                
                <FormControl variant="filled" sx={{ m: 1, width: '40ch' }}>
                    <InputLabel id="vehicleType">Type of vehicle</InputLabel>
                    <Select labelId="vehicleType" id="vehicleType" name='vehicleType' value={bookingFormData.vehicleType} onChange={handleVehicleTypeChanges}>
                        <MenuItem value="">
                            <em>Select model</em>
                        </MenuItem>
                        <MenuItem value={'Car'}>Car</MenuItem>
                        <MenuItem value={'Motorcycle'}>MotoCycle</MenuItem>
                    </Select>
                </FormControl>
                
                <TextField id="vehicleModel" sx={{ m: 1, width: '40ch' }}  size='small' label="Model" variant="filled" name='vehicleModel' value={bookingFormData.vehicleModel || ''} onChange={handleFormInput}/>
                
                <FormControl variant="filled" sx={{ m: 1, width: '40ch' }}>
                    <InputLabel id="typeOfService">Type of service</InputLabel>
                    <Select labelId="typeOfService" id="typeOfService" name='typeOfService' value={bookingFormData.typeOfService} onChange={handleServiceTypeChanges}>
                        <MenuItem value="">
                            <em>Select service</em>
                        </MenuItem>
                        <MenuItem value={'Oil Change'}>Oil Change</MenuItem>
                        <MenuItem value={'Tire Rotation'}>Typre Rotation</MenuItem>
                    </Select>
                </FormControl>
                
                <TextField id="serviceDescription" sx={{ m: 1, width: '40ch' }} label="Service Description" multiline rows={4} variant="filled" name='serviceDescription' value={bookingFormData.serviceDescription || ''} onChange={handleFormInput}/>
                
                <CommandButtons>
                    {!progress.disabled && <Button type='submit' variant='contained' size='medium' color='primary'>Submit booking </Button>}
                    {progress.disabled && <Button type='submit' variant='contained' size='medium' color='primary' disabled>{progress.value} </Button>}
                </CommandButtons>
            </AuthFormContainer>
        </div>
    )
}
