import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const ingredientsTemp = [
    {
        category:"Nuts & Seeds",
        ingredients:["Cashews"]
    },
    {
        category:"Protein",
        ingredients:["Ground Beef","Bacon Strips"]
    }
]

const MenuCard = () => {
    const handleCheckBoxChange = (value) => {
        console.log("value")
    }
  return (
    <div>
        <Accordion>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            >
                <div className='lg:flex items-center justify-between'>
                    <div className='lg:flex items-center lg:gap-5'>
                        <img  className='w-[7rem] h-[7rem] object-cover no-repeat' src='https://hips.hearstapps.com/hmg-prod/images/best-burger-toppings-662bdd6532e17.png?crop=1.00xw:1.00xh;0,0&resize=980:*' alt=''/>
                        <div className='space-y-1 lg:space-y-5 lg:max-w-2xl'>
                            <p className='font-semibold text-xl'>Burger</p>
                            <p>Price: 20$</p>
                            <p className='text-gray-400'>The Best Burger in Town made just like your mama did!</p>
                        </div>
                    </div>
                </div>
            </AccordionSummary>
            <AccordionDetails>
                <form>
                    <div className='flex gap-5 flex-wrap'>
                        {
                            ingredientsTemp.map((item) => (
                                <div key={item.category}>
                                    <p>{item.category}</p>
                                    <FormGroup>
                                        {item.ingredients.map((ingredient, index) => (
                                            <FormControlLabel
                                                key={index}
                                                control={<Checkbox onChange={()=>handleCheckBoxChange(item)}/>}
                                                label={ingredient}
                                            />
                                        ))}
                                    </FormGroup>
                                </div>
                            ))
                        }
                    </div>
                    <div className='pt-5'>
                        <Button variant='contained' disabled={false} type='submit'>{true?"Add to Cart":"Out of Stock"}</Button>
                    </div>
                </form>
            </AccordionDetails>
        
        
            {/*<AccordionActions>
                <Button>Add To Cart</Button>
            </AccordionActions>*/}
        </Accordion>
    </div>

  )
}

export default MenuCard
