package com.event.EventTracker;

import com.event.EventTracker.model.Event;
import com.event.EventTracker.model.User;
import com.event.EventTracker.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.time.Instant;
import java.util.Collections;
import java.util.stream.Stream;

@Component
public class Runner implements CommandLineRunner {


    private final UserRepository repository;

    public Runner(UserRepository repository) {
        this.repository = repository;
    }

    @Override
    public void run(String... args) throws Exception {

        Stream.of("Volunteer","Grand Opening Party","Career Fair","Fundraiser").forEach(name ->
                repository.save(new User(name))
        );

        User user1 =  repository.findByName("Volunteer");
        user1.setAddress("1234 Abc ST");user1.setCity("Wash");user1.setZipcode("23456"); user1.setCountry("US");
        Event event1 = Event.builder().title("Serve your community").
                description("Attend activity")
                .date(Instant.now())
                .build();

        User user2 =  repository.findByName("Grand Opening Party");
        user2.setAddress("1234 Abc ST");user2.setCity("Wash");user2.setZipcode("23456"); user2.setCountry("US");
        Event event2 = Event.builder().title("Enjoy the party").
                description("Attend activity")
                .date(Instant.now())
                .build();

        User user3 =  repository.findByName("Career Fair");
        user3.setAddress("1234 Abc ST");user3.setCity("Wash");user3.setZipcode("23456"); user3.setCountry("US");
        Event event3 = Event.builder().title("Apply for the job").
                description("Attend activity")
                .date(Instant.now())
                .build();

        User user4 =  repository.findByName("Fundraiser");
        user4.setAddress("1234 Abc ST");user4.setCity("Wash");user4.setZipcode("23456"); user4.setCountry("US");
        Event event4 = Event.builder().title("Help people").
                description("Attend activity")
                .date(Instant.now())
                .build();



        user1.setEvents(Collections.singleton(event1));
        repository.save(user1);

        user2.setEvents(Collections.singleton(event2));
        repository.save(user2);

        user3.setEvents(Collections.singleton(event3));
        repository.save(user3);

        user4.setEvents(Collections.singleton(event4));
        repository.save(user4);

        repository.findAll().forEach(System.out::println);

    }
}


