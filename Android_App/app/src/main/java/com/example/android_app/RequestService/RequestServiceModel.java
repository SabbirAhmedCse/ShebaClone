package com.example.android_app.RequestService;

import androidx.annotation.Nullable;

public class RequestServiceModel {
    int serviceId;
    @Nullable
    String description;
    @Nullable
    String serviceDate;

    public  RequestServiceModel (){

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

    public void setDescription(@Nullable String description) {
        this.description = description;
    }

    public String getServiceDate() {
        return serviceDate;
    }

    public void setServiceDate(@Nullable String serviceDate) {
        this.serviceDate = serviceDate;
    }
}
