package com.example.android_app.RequestService;

import retrofit2.Call;
import retrofit2.http.Field;
import retrofit2.http.FormUrlEncoded;
import retrofit2.http.POST;

public interface RequestServiceApi {
    @FormUrlEncoded
    @POST("Create")
    Call<RequestServiceModel> adddata(
            @Field("serviceId") int serviceId,
            @Field("description") String description,
            @Field("serviceDate") String date
    );
}
