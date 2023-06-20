package com.example.android_app.customer.api;

import com.example.android_app.customer.model.AuthData;
import com.example.android_app.customer.model.Customer;
import com.example.android_app.customer.model.UserAuth;

import okhttp3.RequestBody;
import retrofit2.Call;
import retrofit2.http.Body;
import retrofit2.http.GET;
import retrofit2.http.PATCH;
import retrofit2.http.POST;
import retrofit2.http.PUT;
import retrofit2.http.Path;
import retrofit2.http.Query;

public interface CustomerHolderAPI {

    @POST("User/signup")
    Call<AuthData> signUp(@Body Customer customer);

    @POST("User/signin")
    Call<AuthData> signIn(@Body UserAuth userAuth);

    @GET("User")
    Call<Customer> getCustomer(@Query("id") Integer id);

    @PUT("User/{id}")
    Call<Customer> updateCustomer(@Path("id") Integer id, @Body Customer customer);


}
