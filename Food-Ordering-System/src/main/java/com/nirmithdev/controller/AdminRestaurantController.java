package com.nirmithdev.controller;

import com.nirmithdev.model.Restaurant;
import com.nirmithdev.model.User;
import com.nirmithdev.request.CreateRestaurantRequest;
import com.nirmithdev.response.MessageResponse;
import com.nirmithdev.service.RestaurantService;
import com.nirmithdev.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/admin/restaurants")
public class AdminRestaurantController {
    @Autowired
    private RestaurantService restaurantService;
    @Autowired
    private UserService userService;

    @PostMapping()
    public ResponseEntity<Restaurant> createRestaurant(@RequestBody CreateRestaurantRequest req, @RequestHeader("Authorization") String jwt) throws Exception {
        //find user by jwt token
        User user = userService.findUserByJwtToken(jwt);
        //we will create the restaurant
        Restaurant restaurant= restaurantService.createRestaurant(req,user);
        return new ResponseEntity<>(restaurant, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Restaurant> updateRestaurant(@RequestBody CreateRestaurantRequest req, @RequestHeader("Authorization") String jwt, @PathVariable Long id) throws Exception {
        //find user by jwt token
        User user = userService.findUserByJwtToken(jwt);
        //we will update the restaurant
        Restaurant restaurant= restaurantService.updateRestaurant(id,req);
        return new ResponseEntity<>(restaurant, HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<MessageResponse> deleteRestaurant(@RequestHeader("Authorization") String jwt, @PathVariable Long id) throws Exception {
        //find user by jwt token
        User user = userService.findUserByJwtToken(jwt);
        //we will delete the restaurant
        restaurantService.deleteRestaurant(id);
        //create new message to be returned to front end
        MessageResponse msg = new MessageResponse();
        msg.setMessage("restaurant deleted successfully");
        return new ResponseEntity<>(msg, HttpStatus.OK);
    }

    @PutMapping("/{id}/status")
    public ResponseEntity<Restaurant> updateRestaurantStatus(@RequestHeader("Authorization") String jwt, @PathVariable Long id) throws Exception {
        //find user by jwt token
        User user = userService.findUserByJwtToken(jwt);
        //we will delete the restaurant
        Restaurant restaurant=restaurantService.updateRestaurantStatus(id);
        return new ResponseEntity<>(restaurant, HttpStatus.OK);
    }

    @GetMapping("/user")
    public ResponseEntity<Restaurant> findRestaurantByUserId(@RequestHeader("Authorization") String jwt) throws Exception {
        //find user by jwt token
        User user = userService.findUserByJwtToken(jwt);
        //we will delete the restaurant
        Restaurant restaurant=restaurantService.findRestaurantById(user.getId());
        return new ResponseEntity<>(restaurant, HttpStatus.OK);
    }
}
