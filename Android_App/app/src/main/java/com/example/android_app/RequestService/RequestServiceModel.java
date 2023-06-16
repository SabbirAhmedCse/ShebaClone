package com.example.android_app.RequestService;

public class RequestServiceModel {
    int serviceId;
    String description;
    String serviceDate;

    public RequestServiceModel(int serviceId, String description, String serviceDate) {
        this.serviceId = serviceId;
        this.description = description;
        this.serviceDate = serviceDate;
    }

    public int getServiceId() {
        return serviceId;
    }

    public void setServiceId(int serviceId) {
        this.serviceId = serviceId;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getServiceDate() {
        return serviceDate;
    }

    public void setServiceDate(String serviceDate) {
        this.serviceDate = serviceDate;
    }
}
