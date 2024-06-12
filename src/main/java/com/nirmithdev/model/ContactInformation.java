package com.nirmithdev.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Data;

@Data
public class ContactInformation {
    private String email;
    private String mobile;
    private String twitter;
    private String instagram;
}
