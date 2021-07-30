package com.event.EventTracker.model;


import lombok.Data;
import lombok.NoArgsConstructor; // creates default constructor
import lombok.NonNull;
import lombok.RequiredArgsConstructor; // creates all arg constructor

import javax.persistence.*;
import java.util.Set;

@Data
@NoArgsConstructor
@RequiredArgsConstructor
@Entity
@Table(name = "user")
public class User {

    @Id
    @GeneratedValue
    private Long id;

    @NonNull
    private String name;
    private String address;
    private String city;
    private String state;
    private String zipcode;
    private String country;
    @ManyToOne(cascade = CascadeType.PERSIST)
    private Person person;

   // EAGER = fetch immediately without calling the api post
    @OneToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    private Set<Event> events;

}
