package com.example.android_app.customer.model;

import org.jetbrains.annotations.Nullable;
import javax.persistence.*;
import java.util.Date;

public class Customer {
    @Transient
    private long id;
    private String type;
    private String name;
    private String email;
    private String password;
    private String mobileNumber;
    private String gender;
    private String dateOfBirth;
    @Nullable
    private String city;
    @Nullable
    private String area;
    @Nullable
    private String address;
    @Nullable
    private Integer expert;
    @Nullable
    private boolean isAvailable = true;
    @Nullable
    private String createAt;
    @Nullable
    private String updateAt;
    @Nullable
    private boolean isActive = true;
    @Nullable
    private boolean isDelete = false;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getMobileNumber() {
        return mobileNumber;
    }

    public void setMobileNumber(String mobileNumber) {
        this.mobileNumber = mobileNumber;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(String  dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    @Nullable
    public String getCity() {
        return city;
    }

    public void setCity(@Nullable String city) {
        this.city = city;
    }

    @Nullable
    public String getArea() {
        return area;
    }

    public void setArea(@Nullable String area) {
        this.area = area;
    }

    @Nullable
    public String getAddress() {
        return address;
    }

    public void setAddress(@Nullable String address) {
        this.address = address;
    }

    @Nullable
    public Integer getExpert() {
        return expert;
    }

    public void setExpert(@Nullable Integer expert) {
        this.expert = expert;
    }
    @Nullable
    public boolean isAvailable() {
        return isAvailable;
    }

    public void setAvailable(@Nullable boolean available) {
        isAvailable = available;
    }
    @Nullable

    public String getCreateAt() {
        return createAt;
    }

    public void setCreateAt(@Nullable String createAt) {
        this.createAt = createAt;
    }

    @Nullable
    public String getUpdateAt() {
        return updateAt;
    }

    public void setUpdateAt(@Nullable String updateAt) {
        this.updateAt = updateAt;
    }

    @Nullable

    public boolean getIsActive() {
        return isActive;
    }

    public void setIsActive( @Nullable boolean active) {
        isActive = active;
    }
    @Nullable
    public boolean isDelete() {
        return isDelete;
    }

    public void setDelete(@ Nullable boolean delete) {
        isDelete = delete;
    }
}

