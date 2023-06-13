package com.example.android_app.customer.network;

import androidx.annotation.NonNull;
import java.io.IOException;
import okhttp3.Interceptor;
import okhttp3.Request;
import okhttp3.Response;

public class AuthInterceptor implements Interceptor {
    private final String token;
    public AuthInterceptor(String token)
    {
        this.token = token;
    }
    @NonNull
    @Override
    public Response intercept(Chain chain) throws IOException {
        Request originalRequest = chain.request();
        Request.Builder requestBuilder = originalRequest.newBuilder()
                .header("Authorization", "Bearer " + token);
        Request newRequest = requestBuilder.build();
        return chain.proceed(newRequest);
    }
}
