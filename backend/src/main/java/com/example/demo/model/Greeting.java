package com.example.demo.model;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class Greeting {
    private String message;
}
