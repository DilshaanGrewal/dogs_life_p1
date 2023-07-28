package com.db.grad.javaapi.model;



import javax.persistence.*;

@Entity
@Table(name="dogs")
public class Dog
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long dog_id;

    public long getDog_id() {
        return dog_id;
    }

    private String name;

    private Integer age;

    public void setAge(Integer age) {
        this.age = age;
    }

    public Integer getAge() {
        return age;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
