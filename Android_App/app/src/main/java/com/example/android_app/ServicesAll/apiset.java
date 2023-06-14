package com.example.android_app.ServicesAll;

import java.util.List;

import retrofit2.Call;
import retrofit2.http.GET;

public interface apiset {
  @GET("Service")
  Call<List<responsemodel>>getdata();
}
