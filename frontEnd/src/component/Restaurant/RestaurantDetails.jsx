import { Grid,Divider, Typography, FormControl, RadioGroup, FormControlLabel, Radio } from '@mui/material'
import React, { useState } from 'react'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MenuCard from './MenuCard';

const categories =[
    "Pizza",
    "Biriyani",
    "Burger",
    "Chicken",
    "Rice",
    "Fish"
]

const foodTypes=[
    {label:"All",value:"all"},
    {label:"Vegetarian",value:"Vegetarian"},
    {label:"Non-Vegetarian",value:"nonVegetarian"},
    {label:"Seasonal",value:"Seasonal"},
]

const menu=[1,1,1,1,1,1]

const RestaurantDetails = () => {
    const [foodType,setFoodType]=useState("all");
    const handleFilter = (e) =>{
        console.log(e.target.value,e.target.name);
    }
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
        <Divider/>
        <section className='pt-[2rem] lg:flex relative'>
            <div className='space-y-10 lg:w-[20%] filter'>
                <div className='box space-y-5 lg:sticky top-28'>
                    <div>
                        <Typography variant='h5' sx={{paddingBottom:"1rem"}}>
                            Food Type
                        </Typography>
                        <FormControl className='py-10 space-y-5' component={"fieldset"}>
                            <RadioGroup aria-labelledby="foodType" defaultValue={foodTypes[0].label || 'all'} name="food_type" onChange={handleFilter} value={foodType}>
                                {foodTypes.map((item)=><FormControlLabel value={item.value} key={item.value} control={<Radio />} label={item.label} />)}
                            </RadioGroup>
                        </FormControl>
                    </div>
                    <Divider/>
                    <div>
                        <Typography variant='h5' sx={{paddingBottom:"1rem"}}>
                            Food Category
                        </Typography>
                        <FormControl className='py-10 space-y-5' component={"fieldset"}>
                            <RadioGroup aria-labelledby="foodType" defaultValue={categories[0]} name="food_type" onChange={handleFilter}>
                                {categories.map((item)=><FormControlLabel value={item} key={item} control={<Radio />} label={item} />)}
                            </RadioGroup>
                        </FormControl>
                    </div>
                </div>
            </div>

            <div className='space-y-5 lg:w-[80%] lg:pl-10'>
               {menu.map((item)=><MenuCard/>)}
            </div>
        </section>
    </div>
  )
}

export default RestaurantDetails
