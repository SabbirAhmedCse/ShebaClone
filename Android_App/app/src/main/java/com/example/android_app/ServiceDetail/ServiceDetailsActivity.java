package com.example.android_app.ServiceDetail;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.ImageView;

import com.bumptech.glide.Glide;


import com.example.android_app.R;
import com.example.android_app.RequestService.RequestServiceActivity;
import com.example.android_app.databinding.ActivityServiceDetailsBinding;

public class ServiceDetailsActivity extends AppCompatActivity {
    ImageView imageView;
    public static final String KEY_NAME = "NAME";
    private static final String TAG = "ServiceDetailsActivity";


    public static Intent getNavIntent(Context context, String subCatagory, String description, String price, int id, String imageUrl) {
        Intent intent = new Intent(context, com.example.android_app.ServiceDetail.ServiceDetailsActivity.class);
        intent.putExtra("subCategory", subCatagory);
        intent.putExtra("description", description);
        intent.putExtra("price", price);
        intent.putExtra("id", id);
        intent.putExtra("imageUrl", imageUrl);

        return intent;
    }


    private ActivityServiceDetailsBinding binding;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        binding = ActivityServiceDetailsBinding.inflate(getLayoutInflater());
        setContentView(binding.getRoot());

        imageView = findViewById(R.id.imgDetails);

        Intent intent = getIntent();
        String subCategory = intent.getStringExtra("subCategory");
        String description = intent.getStringExtra("description");
        String price = intent.getStringExtra("price");
        String imageUrl = intent.getStringExtra("imageUrl");
        int id = intent.getIntExtra("id", 0);


        binding.t1.setText(subCategory);
        binding.t2.setText(description);
        binding.t3.setText(price);

        Log.d(TAG, "onCreate: image url: " + imageUrl);

        Glide.with(this).load(imageUrl).into(imageView);

        binding.reuestbutton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent1 = new Intent(ServiceDetailsActivity.this, RequestServiceActivity.class);
                intent1.putExtra("subCategory", subCategory);
                intent1.putExtra("Id", id);
                startActivity(intent1);


            }
        });


    }
}