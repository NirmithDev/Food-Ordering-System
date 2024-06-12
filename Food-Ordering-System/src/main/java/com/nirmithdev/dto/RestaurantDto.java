package com.nirmithdev.dto;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Embeddable

public class RestaurantDto {
    private String title;
    @Column(length=1000)
    private List<String> images;
    private String Description;
    private Long id;
}
