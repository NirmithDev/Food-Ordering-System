import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Card,Chip, IconButton } from '@mui/material'

const RestaurantCard = () => {
  return (
    <Card className='w-[18rem]'>
        <div className={`${true?'cursor-pointer':"cursor-not-allowed"} relative`}>
            <img className='w-full h-[10rem] rounded-t-md object-cover' src="https://img.freepik.com/free-photo/happy-waiter-serving-food-group-cheerful-friends-pub_637285-12525.jpg?
            w=996&t=st=1718926129~exp=1718926729~hmac=998a76384ecd0b089e2a34e33a039884008d623e0910efad23bf9ff60beb6ff6" alt=""></img>
            <Chip size="small" className="absolute top-2 left-2" color={true?"success":"error"} label={true?"open":"closed"}></Chip>
        </div>
        <div className='p-4 textPart lg:flex w-full justify-between'>
            <div className='space-y-1'>
                <p className='font-semibold text-lg'>Indian Fast Food</p>
                <p className='text-gray-500 text-sm'>
                    Cravign it all? Dive into global flavor
                </p>
            </div>
            <div>
                <IconButton>
                    {true?<FavoriteIcon></FavoriteIcon>:<FavoriteBorderIcon></FavoriteBorderIcon>}
                </IconButton> 
            </div>
        </div>
    </Card>
  )
}

export default RestaurantCard
