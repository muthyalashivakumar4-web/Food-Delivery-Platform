package com.foodapp.auth.security;

import com.foodapp.auth.entity.User;
import com.foodapp.auth.repository.UserRepository;

import org.springframework.security.core.userdetails.*;

import org.springframework.stereotype.Service;

@Service
public class CustomUserDetailsService
        implements UserDetailsService {

    private final UserRepository userRepository;

    public CustomUserDetailsService(
            UserRepository userRepository) {

        this.userRepository = userRepository;
    }

    @Override
    public UserDetails loadUserByUsername(
            String email)
            throws UsernameNotFoundException {

        User user =
                userRepository.findByEmail(email)
                        .orElseThrow(
                                () ->
                                        new UsernameNotFoundException(
                                                "User Not Found"
                                        ));

        return new CustomUserDetails(user);
    }
}