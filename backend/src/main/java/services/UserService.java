package services;

import org.springframework.stereotype.Service;


import lombok.RequiredArgsConstructor;
import repository.UserRepository;

@Service 
@RequiredArgsConstructor 
public class UserService {
    public final UserRepository userRepository;
    
}
