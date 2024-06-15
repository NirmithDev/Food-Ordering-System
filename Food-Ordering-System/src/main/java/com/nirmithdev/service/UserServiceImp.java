package com.nirmithdev.service;

import com.nirmithdev.config.JwtProvider;
import com.nirmithdev.model.User;
import com.nirmithdev.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImp implements UserService {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private JwtProvider jwtProvider;

    @Override
    public User findUserByJwtToken(String jwt) throws Exception {
        String email = jwtProvider.getEmailFromJwtToken(jwt);
        User user = findUserByEmail(email);

        // Debugging print statement
        if (user != null) {
            System.out.println("User found: " + user.getFullName());
        } else {
            System.out.println("User not found for email: " + email);
        }

        return user;
    }

    @Override
    public User findUserByEmail(String email) throws Exception {
        User user = userRepository.findByEmail(email);
        if (user == null) {
            throw new Exception("User not found");
        }

        // Debugging print statement
        System.out.println("User details: " + user);

        return user;
    }
}
