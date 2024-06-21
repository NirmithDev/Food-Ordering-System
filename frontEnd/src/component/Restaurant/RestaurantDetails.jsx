import { Grid } from '@mui/material'
import React from 'react'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const RestaurantDetails = () => {
  return (
    <div className='px-5 lg:px-20'>
        <section>
            <h3 className='text-gray-500 py-2 mt-10'>Home/India/Indian Fast Food/3</h3>
            <div>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <img className="w-full h-{40vh} object-cover" src="https://img.freepik.com/free-photo/happy-waiter-serving-food-group-cheerful-friends-pub_637285-12525.jpg?
            w=996&t=st=1718926129~exp=1718926729~hmac=998a76384ecd0b089e2a34e33a039884008d623e0910efad23bf9ff60beb6ff6"></img>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <img className="w-full h-{40vh} object-cover" src="https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <img className="w-full h-{40vh} object-cover" src="https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
                    </Grid>
                </Grid>
                
            </div>
            <div className='pt-3 pb-5'>
                <h1 className='text-4xl font-semibold'>Indian Fast Food</h1>
                <p className='text-gray-400 flex items-center gap-3'><span>STUFF ABOUT restaurant STUFF ABOUT restaurantSTUFF ABOUT restaurantSTUFF ABOUT restaurantSTUFF ABOUT restaurantSTUFF ABOUT restaurantSTUFF ABOUT restaurant</span></p>
                <div className='space-y-3 mt-3'>
                    <p className='text-gray-400 flex items-center gap-3'><LocationOnIcon></LocationOnIcon><span>Random Location</span></p>
                    <p className='text-gray-400 flex items-center gap-3'><CalendarTodayIcon></CalendarTodayIcon><span>Mon-Sun: 9:00 AM - 9:00 PM (Today)</span></p>
                </div>
                
            </div>
        </section>
    </div>
  )
}

export default RestaurantDetails
