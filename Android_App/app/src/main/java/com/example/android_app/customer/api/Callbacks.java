package com.example.android_app.customer.api;

public interface Callbacks<T> {
    void onSuccess(T result);

    void onFailure(Exception e);
}
