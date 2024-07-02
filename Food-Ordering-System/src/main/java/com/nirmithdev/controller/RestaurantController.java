package com.nirmithdev.controller;

import com.nirmithdev.dto.RestaurantDto;
import com.nirmithdev.model.Restaurant;
import com.nirmithdev.model.User;
import com.nirmithdev.request.CreateRestaurantRequest;
import com.nirmithdev.service.RestaurantService;
import com.nirmithdev.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/restaurants")
public class RestaurantController {
    @Autowired
    private RestaurantService restaurantService;
    @Autowired
    private UserService userService;
    @GetMapping("/search")
    public ResponseEntity<List<Restaurant>> searchRestaurant(@RequestHeader("Authorization") String jwt, @RequestParam String keyWord) throws Exception {
        //find user by jwt token
        User user = userService.findUserByJwtToken(jwt);
        //we will create the restaurant
        List<Restaurant> restaurant= restaurantService.searchRestaurant(keyWord);
        return new ResponseEntity<>(restaurant, HttpStatus.OK);
    }
    @GetMapping()
    public ResponseEntity<List<Restaurant>> getAllRestaurant(@RequestHeader("Authorization") String jwt) throws Exception {
        //find user by jwt token
        User user = userService.findUserByJwtToken(jwt);
        //we will create the restaurant
        List<Restaurant> restaurant= restaurantService.getAllRestaurants();
        return new ResponseEntity<>(restaurant, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Restaurant> findRestaurantById(@RequestHeader("Authorization") String jwt, @PathVariable Long Id) throws Exception {
        //find user by jwt token
        User user = userService.findUserByJwtToken(jwt);
        //we will create the restaurant
        Restaurant restaurant= restaurantService.findRestaurantById(Id);
        return new ResponseEntity<>(restaurant, HttpStatus.OK);
    }

    @PutMapping("/{id}/add-favorites")
    public ResponseEntity<RestaurantDto> addToFavorites(@RequestHeader("Authorization") String jwt, @PathVariable Long id) throws Exception {
        //find user by jwt token
        User user = userService.findUserByJwtToken(jwt);
        //we will create the restaurant
        RestaurantDto restaurant= restaurantService.addToFavorites(id,user);
        return new ResponseEntity<>(restaurant, HttpStatus.OK);
    }

}
