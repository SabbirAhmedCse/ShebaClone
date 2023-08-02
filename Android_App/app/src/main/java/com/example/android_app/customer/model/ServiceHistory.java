package com.example.android_app.customer.model;

import org.jetbrains.annotations.Nullable;

public class ServiceHistory {
    @Nullable
    private long id;
    @Nullable
    private String customerName;
    @Nullable
    private String serviceCategory;
    @Nullable
    private String serviceSubCategory;
    @Nullable
    private String mechanicName;
    @Nullable
    private String description;
    @Nullable
    private String serviceStatus;
    @Nullable
    private String mechanicStatus;
    @Nullable
    private String serviceDate;
    @Nullable
    private String address;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    @Nullable
    public String getCustomerName() {
        return customerName;
    }

    public void setCustomerName(@Nullable String customerName) {
        this.customerName = customerName;
    }

    @Nullable
    public String getServiceCategory() {
        return serviceCategory;
    }

    public void setServiceCategory(@Nullable String serviceCategory) {
        this.serviceCategory = serviceCategory;
    }

    @Nullable
    public String getServiceSubCategory() {
        return serviceSubCategory;
    }

    public void setServiceSubCategory(@Nullable String serviceSubCategory) {
        this.serviceSubCategory = serviceSubCategory;
    }

    @Nullable
    public String getMechanicName() {
        return mechanicName;
    }

    public void setMechanicName(@Nullable String mechanicName) {
        this.mechanicName = mechanicName;
    }

    @Nullable
    public String getDescription() {
        return description;
    }

    public void setDescription(@Nullable String description) {
        this.description = description;
    }

    @Nullable
    public String getServiceStatus() {
        return serviceStatus;
    }

    public void setServiceStatus(@Nullable String serviceStatus) {
        this.serviceStatus = serviceStatus;
    }

    @Nullable
    public String getMechanicStatus() {
        return mechanicStatus;
    }

    public void setMechanicStatus(@Nullable String mechanicStatus) {
        this.mechanicStatus = mechanicStatus;
    }

    @Nullable
    public String getServiceDate() {
        return serviceDate;
    }

    public void setServiceDate(@Nullable String serviceDate) {
        this.serviceDate = serviceDate;
    }

    @Nullable
    public String getAddress() {
        return address;
    }

    public void setAddress(@Nullable String address) {
        this.address = address;
    }
}
