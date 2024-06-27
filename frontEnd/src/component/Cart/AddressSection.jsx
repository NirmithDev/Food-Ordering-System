import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import { Button, Card } from '@mui/material'

const handleSelectAddress = () =>{
    console.log("You Chose this")
}

const AddressSection = ({item,showButton,handleSelectAddress}) => {
    /*const handleSelectAddress = () =>{
        console.log("You Chose this")
    }*/
    return (
        <Card className="flex gap-5 w-64 p-5">
            <HomeIcon/>
            <div className='space-y-3 text-gray-500'>
                <h1 className='font-semibold text-lb text-white'>Home</h1>
                <p>
                    200 Away from Home, I1K 2L5, Ottawa, Ontario
                </p>
                {showButton && (<Button variant="outlined" fullWidth onClick={()=>handleSelectAddress()}>Select</Button>)}
            </div>
        </Card>
    )
}

export default AddressSection
