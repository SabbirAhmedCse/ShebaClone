package com.example.android_app.ServiceDetail;

import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.content.ContextCompat;

import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import com.example.android_app.RequestService.RequestServiceActivity;
import com.example.android_app.ServicesAll.responsemodel;
import com.example.android_app.databinding.ActivityServiceDetailsBinding;

public class ServiceDetailsActivity extends AppCompatActivity {
    public static final String KEY_NAME = "NAME";

    public static Intent getNavIntent(Context context, String subCatagory, String description,String price) {
        Intent intent = new Intent(context, com.example.android_app.ServiceDetail.ServiceDetailsActivity.class);
        intent.putExtra("subCategory", subCatagory);
        intent.putExtra("description", description);
        intent.putExtra("price",price);

        return intent;
    }


    private ActivityServiceDetailsBinding binding;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        binding = ActivityServiceDetailsBinding.inflate(getLayoutInflater());
        setContentView(binding.getRoot());

        Intent intent = getIntent();
        String subCategory = intent.getStringExtra("subCategory");
        String description=intent.getStringExtra("description");
        String price=intent.getStringExtra("price");

        binding.t1.setText(subCategory);
        binding.t2.setText(description);
        binding.t3.setText(price);
        binding.reuestbutton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
              //  v.getContext().startActivity(
                      // new Intent(RequestServiceActivity)
               // );
            }
        });


    }
}