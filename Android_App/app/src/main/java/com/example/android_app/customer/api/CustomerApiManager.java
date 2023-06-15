package com.example.android_app.customer.api;

import androidx.annotation.NonNull;

import android.content.Context;
import android.util.Log;
import android.widget.Toast;

import com.example.android_app.customer.model.AuthData;
import com.example.android_app.customer.model.Customer;
import com.example.android_app.customer.model.UserAuth;
import com.example.android_app.customer.network.AuthInterceptor;
import com.example.android_app.customer.utils.SharedPrefsManager;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import okhttp3.MediaType;
import okhttp3.OkHttpClient;
import okhttp3.RequestBody;
import okhttp3.logging.HttpLoggingInterceptor;

import okio.ByteString;
import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;


public class CustomerApiManager {
    private static final String TAG = "CustomerApiManager";
    private final SharedPrefsManager sharedPrefsManager;
    private final CustomerHolderAPI customerHolderAPI;

    public CustomerApiManager(Context context) {

        sharedPrefsManager = new SharedPrefsManager(context);

        String token = sharedPrefsManager.getJwtToken();

        OkHttpClient client = new OkHttpClient.Builder()
                .addInterceptor(new AuthInterceptor(token))
                .addInterceptor(new HttpLoggingInterceptor().setLevel(HttpLoggingInterceptor.Level.BODY))
                .build();

        Retrofit retrofit = new Retrofit.Builder()
                .baseUrl("http://192.168.0.54/api/")
                .addConverterFactory(GsonConverterFactory.create())
                .client(client)
                .build();

        customerHolderAPI = retrofit.create(CustomerHolderAPI.class);
    }

    public void signUp(Customer customer, Callbacks<Boolean> callback) {
        Call<AuthData> call = customerHolderAPI.signUp(customer);

        call.enqueue(new Callback<AuthData>() {
            @Override
            public void onResponse(@NonNull Call<AuthData> call, @NonNull Response<AuthData> response) {
                try {
                    if (response.isSuccessful()) {
                        AuthData authData = response.body();
                        if (authData != null) {
                            sharedPrefsManager.setJwtToken(authData.getToken(), authData.getId());
                            callback.onSuccess(true);
                        } else {
                            callback.onSuccess(false);
                        }
                    } else {
                        Log.d(TAG, String.valueOf(response.code()));
                        callback.onFailure(new Exception());
                    }
                } catch (Exception ex) {
                    throw ex;
                }
            }

            @Override
            public void onFailure(@NonNull Call<AuthData> call, @NonNull Throwable t) {
                Log.d(TAG, t.getMessage());
            }
        });
    }

    public void signIn(UserAuth userAuth, Callbacks<Boolean> callback) {
        Call<AuthData> call = customerHolderAPI.signIn(userAuth);

        call.enqueue(new Callback<AuthData>() {
            @Override
            public void onResponse(@NonNull Call<AuthData> call, @NonNull Response<AuthData> response) {
                try {
                    if (response.isSuccessful()) {
                        AuthData authData = response.body();
                        if (authData != null) {
                            sharedPrefsManager.setJwtToken(authData.getToken(), authData.getId());
                            callback.onSuccess(true);
                        } else {
                            callback.onSuccess(false);
                        }
                    } else {
                        Log.d("TAG", String.valueOf(response.code()));
                        callback.onFailure(new Exception());
                    }
                } catch (Exception ex) {
                    throw ex;
                }
            }

            @Override
            public void onFailure(@NonNull Call<AuthData> call, @NonNull Throwable t) {
                Log.d(TAG, t.getMessage());
            }
        });
    }

    public void getCustomer(Callbacks<Customer> callback) {
        String id = sharedPrefsManager.getId();
        Call<Customer> call = customerHolderAPI.getCustomer(Integer.parseInt(id));
        call.enqueue(new Callback<Customer>() {
            @Override
            public void onResponse(@NonNull Call<Customer> call, @NonNull Response<Customer> response) {
                try {
                    if (response.isSuccessful()) {
                        Customer cus = response.body();
                        if (cus != null) {
                            Log.d(TAG, "onResponse: " + cus);
                            callback.onSuccess(cus);
                        } else {
                            callback.onSuccess(null);
                            Log.d(TAG, "onResponse: null value");
                        }
                    } else {
                        Log.d(TAG, "onResponse: response code = " + response.code());
                    }
                } catch (Exception ex) {
                    Log.d(TAG, "onResponse: exception");
                    ex.printStackTrace();
                    throw ex;
                }
            }

            @Override
            public void onFailure(@NonNull Call<Customer> call, @NonNull Throwable t) {
                Log.d(TAG, "onFailure: failed -> ");
                Log.d(TAG, t.getMessage());
                t.printStackTrace();
            }
        });

    }
}


}