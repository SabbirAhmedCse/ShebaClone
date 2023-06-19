package com.example.android_app.RequestService;

import com.example.android_app.customer.model.Customer;

import retrofit2.Call;
import retrofit2.http.Body;
import retrofit2.http.Field;
import retrofit2.http.FormUrlEncoded;
import retrofit2.http.Headers;
import retrofit2.http.POST;

public interface RequestServiceApi {
    //@FormUrlEncoded
    @Headers("Content-Type: application/json")
    @POST("Create")
    Call<RequestServiceModel> adddata(@Body RequestServiceModel requestServiceModel);
}
