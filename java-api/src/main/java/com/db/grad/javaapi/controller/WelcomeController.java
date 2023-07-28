package com.db.grad.javaapi.controller;

import com.db.grad.javaapi.model.Dog;
import com.db.grad.javaapi.service.DogHandler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
public class WelcomeController {

  @Autowired
  DogHandler dogService;

  @GetMapping("/")
  public String getWelcome() {
    return "Dogs API is up and running!";
  }

  @GetMapping("/count")
  public long getCount(){
    return dogService.getNoOfDogs();
  }

  @GetMapping("/all")
  public List<Dog> printDogs(){
    return dogService.getAll();
  }

  @GetMapping("/findByName/{name}")
  public Optional<Object> getDog(@PathVariable String name){
    return dogService.getDogByName(name);
  }

  @GetMapping("/findById/{id}")
  public Optional<Object> getDogById(@PathVariable long id){
    return dogService.getDogByIdService(id);
  }

}
