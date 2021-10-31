package com.Zubzib.service;

import com.Zubzib.model.User;
import org.springframework.stereotype.Service;

import java.util.List;

public interface UserService {
    public User saveUser(User user);
    public List<User> getAllUsers();
}
