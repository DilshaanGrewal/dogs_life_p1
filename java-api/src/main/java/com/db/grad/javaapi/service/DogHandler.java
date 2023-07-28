package com.db.grad.javaapi.service;
import com.db.grad.javaapi.model.Dog;
import com.db.grad.javaapi.repository.DogsRepository;
//import com.db.grad.javaapi.repository.DogsRepositoryStub;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DogHandler {
    @Autowired(required = true)
    private DogsRepository itsDogsRepo;


//    public String PrintDogs(DogsRepository repo) { return itsDogsRepo.;}

//    public List<Dog> addDog(Dog theDog) {
//        return itsDogsRepo.save(theDog);
//    }

    public List<Dog> getAll(){
        return itsDogsRepo.findAll();
    }

    public long getNoOfDogs() {
        return itsDogsRepo.count();
    }

    public Optional<Object> getDogByName(String dogName) {
        List<Dog> dogs = itsDogsRepo.findAll();
        for (Dog dog : dogs) {
            String n = dog.getName();
            if (n.equals(dogName)) {
                return Optional.of(dog);
            }
        }
        return  Optional.empty();
    }

    public Optional<Object> getDogByIdService(long id) {
        List<Dog> dogs = itsDogsRepo.findAll();
        for (Dog dog : dogs) {
            long n = dog.getDog_id();
            if (n == id) {
                return Optional.of(dog);
            }
        }
        return  Optional.empty();
    }
//            return (Dog) itsDogsRepo.findByName(DogName);
}
