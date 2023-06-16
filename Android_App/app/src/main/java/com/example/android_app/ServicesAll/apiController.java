package com.example.android_app.ServicesAll;

import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

public class apiController {
     String url="http://192.168.0.54/api/";
    private static apiController serviceobject;
    private static Retrofit retrofit;
    apiController()
    {
        retrofit=new Retrofit.Builder()
                .baseUrl(url)
                .addConverterFactory(GsonConverterFactory.create())
                .build();
    }
    public static synchronized apiController getInstance()
    {
        if(serviceobject==null)
            serviceobject=new apiController();
        return serviceobject;
    }
    apiset getapi(){
        return retrofit.create(apiset.class);
    }
}
