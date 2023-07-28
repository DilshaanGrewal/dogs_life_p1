package com.db.grad.javaapi.service;
import com.db.grad.javaapi.model.Dog;
import com.db.grad.javaapi.repository.DogsRepository;
//import com.db.grad.javaapi.repository.DogsRepositoryStub;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DogHandler {
    @Autowired(required = true)
    private DogsRepository itsDogsRepo;


//    public String PrintDogs(DogsRepository repo) { return itsDogsRepo.;}

//    public List<Dog> addDog(Dog theDog) {
//        return itsDogsRepo.save(theDog);
//    }

//    public List<Dog> printDogs(){
//        return itsDogsRepo.getAllDogs();
//    }

    public long getNoOfDogs() {
        return itsDogsRepo.count();
    }
}
