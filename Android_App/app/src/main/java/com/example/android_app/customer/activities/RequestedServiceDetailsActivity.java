package com.example.android_app.customer.activities;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;
import android.widget.Toast;

import com.example.android_app.R;
import com.example.android_app.customer.api.Callbacks;
import com.example.android_app.customer.api.CustomerApiManager;
import com.example.android_app.customer.model.ServiceHistory;

import java.util.List;

public class RequestedServiceDetailsActivity extends AppCompatActivity implements Callbacks<List<ServiceHistory>> {
    TextView serviceCategory;
    TextView serviceSubCategory;
    TextView mechanicName;
    TextView description;
    TextView serviceStatus;
    TextView serviceDate;
    TextView address;
    Button button;
    int position;
    CustomerApiManager customerApiManager;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_requested_service_details);

        Intent intent = getIntent();
        position = intent.getIntExtra("position", 0);
        button = findViewById(R.id.btnBack);
        serviceCategory = findViewById(R.id.serviceCategory);
        serviceSubCategory = findViewById(R.id.serviceSubCategory);
        mechanicName = findViewById(R.id.mechanicName);
        description = findViewById(R.id.description);
        serviceStatus = findViewById(R.id.serviceStatus);
        serviceDate = findViewById(R.id.serviceDate);
        address = findViewById(R.id.address);

        customerApiManager = new CustomerApiManager(getApplicationContext());
        customerApiManager.RequestedServices(RequestedServiceDetailsActivity.this);

        button.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent i = new Intent(getApplicationContext(), RequestHistoryActivity.class);
                intent.addFlags(Intent.FLAG_ACTIVITY_CLEAR_TOP);
                startActivity(i);
                finish();
            }
        });
    }

    @Override
    public void onSuccess(List<ServiceHistory> serviceHistories) {
        if(serviceHistories != null)
        {
            ServiceHistory result = new ServiceHistory();
            result = serviceHistories.get(position);

            serviceCategory.setText(result.getServiceCategory().toString());
            serviceSubCategory.setText(result.getServiceSubCategory().toString());

            if(result.getMechanicName() != null)
            {
                mechanicName.setText(result.getMechanicName().toString());
            }
            else {
                mechanicName.setText("No Mechanic");
            }

            if(result.getDescription() != null)
            {
                description.setText(result.getDescription().toString());
            }
            else
            {
                description.setText("No Description");
            }
            if(result.getServiceStatus() != null)
            {
                serviceStatus.setText(result.getServiceStatus().toString());
            }
            else {
                serviceStatus.setText("No Status");
            }
            if(result.getServiceDate() != null)
            {
                serviceDate.setText(result.getServiceDate().toString());
            }
            else {
                serviceDate.setText("No ServiceDate");
            }
            if(result.getAddress() != null)
            {
                address.setText(result.getAddress().toString());
            }
            else {
                address.setText("No Address given");
            }
        }
    }

    @Override
    public void onFailure(Exception e) {
        Toast.makeText(getApplicationContext(), "result is empty", Toast.LENGTH_SHORT).show();
    }
}