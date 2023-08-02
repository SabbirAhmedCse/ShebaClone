package com.example.android_app.customer.activities;

import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.ProgressBar;
import android.widget.TextView;
import android.widget.Toast;

import com.example.android_app.R;
import com.example.android_app.ServicesAll.ServicesAllActivity;
import com.example.android_app.customer.adapters.CustomAdapter;
import com.example.android_app.customer.api.Callbacks;
import com.example.android_app.customer.api.CustomerApiManager;
import com.example.android_app.customer.model.ServiceHistory;

import java.util.ArrayList;
import java.util.List;

public class RequestHistoryActivity extends AppCompatActivity implements Callbacks<List<ServiceHistory>> {
    public static Intent getNavIntent(Context context) {
        Intent intent = new Intent(context, RequestHistoryActivity.class);

        return intent;
    }
    private RecyclerView recyclerView;
    private CustomAdapter adapter;
    private List<String> itemList;

    private List<ServiceHistory> serviceHistories;

    private ProgressBar progressBar;
    ImageView imageView;
    CustomerApiManager customerApiManager;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_request_history);

        progressBar = findViewById(R.id.progressBar);
        progressBar.setVisibility(View.VISIBLE);
        imageView = findViewById(R.id.imageIcon);
        imageView.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent intent = new Intent(getApplicationContext(), ServicesAllActivity.class);
                intent.addFlags(Intent.FLAG_ACTIVITY_CLEAR_TOP);
                startActivity(intent);
                finish();
            }
        });
        customerApiManager = new CustomerApiManager(getApplicationContext());
        customerApiManager.RequestedServices(RequestHistoryActivity.this);
        recyclerView = findViewById(R.id.recyclerView);
        recyclerView.setLayoutManager(new LinearLayoutManager(this));

        serviceHistories = new ArrayList<>();
        adapter = new CustomAdapter(serviceHistories);
        recyclerView.setAdapter(adapter);
    }

    @Override
    public void onSuccess(List<ServiceHistory> result) {
        progressBar.setVisibility(View.GONE);
        if(result != null)
        {
            serviceHistories.addAll(result);
            adapter.notifyDataSetChanged();

        }
        else
        {
            Toast.makeText(getApplicationContext(), "result is null", Toast.LENGTH_SHORT).show();
        }
    }

    @Override
    public void onFailure(Exception e) {
        progressBar.setVisibility(View.GONE);
        Toast.makeText(getApplicationContext(), "Error Occured", Toast.LENGTH_SHORT).show();
    }
}