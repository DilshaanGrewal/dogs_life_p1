package com.db.grad.javaapi.service;
import com.db.grad.javaapi.model.Dog;
import com.db.grad.javaapi.repository.DogsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DogHandler {
    @Autowired
    private DogsRepository itsDogsRepo;
    public DogHandler(DogsRepository repo) {
        this.itsDogsRepo = repo;
    }

//    public String PrintDogs(DogsRepository repo) { return itsDogsRepo.;}

    public long addDog(Dog theDog) {
        return itsDogsRepo.save(theDog);
    }

    public long getNoOfDogs() {
        return itsDogsRepo.count();
    }
}
