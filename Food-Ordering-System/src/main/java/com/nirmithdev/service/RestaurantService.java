package com.nirmithdev.service;

import com.nirmithdev.dto.RestaurantDto;
import com.nirmithdev.model.Restaurant;
import com.nirmithdev.model.User;
import com.nirmithdev.request.CreateRestaurantRequest;

import java.util.List;

public interface RestaurantService {
    public Restaurant createRestaurant(CreateRestaurantRequest req, User user);
    public Restaurant updateRestaurant(Long restaurantId, CreateRestaurantRequest updatedRestaurant) throws Exception;
    public void deleteRestaurant(Long restaurantId) throws Exception;
    //only admin can get all the restaurants
    public List<Restaurant> getAllRestaurants();
    public List<Restaurant> searchRestaurant(String keyWord);
    public Restaurant findRestaurantById(Long id) throws Exception;
    public Restaurant getRestaurantByUserId(Long userId) throws Exception;
    public RestaurantDto addToFavorites(Long restaurantId, User user) throws Exception;
    public Restaurant updateRestaurantStatus(Long id) throws Exception;
}
