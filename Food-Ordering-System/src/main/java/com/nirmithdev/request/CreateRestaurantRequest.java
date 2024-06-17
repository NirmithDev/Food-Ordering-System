package com.nirmithdev.request;

import com.nirmithdev.model.Address;
import com.nirmithdev.model.ContactInformation;
import lombok.Data;

import java.util.List;

@Data
public class CreateRestaurantRequest {
    private Long Id;
    private String name;
    private String description;
    private String cuisineType;
    private Address address;
    private ContactInformation contactInformation;
    private String openingHours;
    private List<String> image;
}
