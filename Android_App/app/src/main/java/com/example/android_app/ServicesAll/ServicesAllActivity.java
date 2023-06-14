package com.example.android_app.ServicesAll;

import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.os.Bundle;
import android.widget.Toast;

import com.example.android_app.R;

import java.util.List;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class ServicesAllActivity extends AppCompatActivity {
    RecyclerView recviiew;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_services_all);
        recviiew = findViewById(R.id.recview);
        recviiew.setLayoutManager(new LinearLayoutManager(this));
        processdata();

    }

    public void processdata() {
        Call<List<responsemodel>> call = apiController
                .getInstance()
                .getapi()
                .getdata();
        call.enqueue(new Callback<List<responsemodel>>() {
            @Override
            public void onResponse(Call<List<responsemodel>> call, Response<List<responsemodel>> response) {
                if (response.isSuccessful()) {
                    List<responsemodel> data = response.body();
                    serviceadapter adapter = new serviceadapter(data);
                    recviiew.setAdapter(adapter);
                } else {
                    // todo: handle error
                    runOnUiThread(() -> Toast.makeText(getApplicationContext(), "error", Toast.LENGTH_SHORT).show());
                }
            }

            @Override
            public void onFailure(Call<List<responsemodel>> call, Throwable t) {
                Toast.makeText(getApplicationContext(), t.toString(), Toast.LENGTH_LONG).show();

            }
        });
    }
}