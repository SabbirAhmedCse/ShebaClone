package com.example.android_app.ServicesAll;

import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.view.MenuItem;
import android.view.View;
import android.widget.Button;
import android.widget.Toast;

import com.example.android_app.R;
import com.example.android_app.customer.activities.CustomerProfileActivity;
import com.example.android_app.customer.activities.LoginActivity;
import com.example.android_app.customer.utils.SharedPrefsManager;

import java.util.List;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class ServicesAllActivity extends AppCompatActivity {
    public static Intent getNavIntent(Context context) {
        Intent intent = new Intent(context, ServicesAllActivity.class);

        return intent;
    }
    RecyclerView recviiew;
    Button btnServices;
    Button btnHome;

    SharedPrefsManager sharedPrefsManager;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_services_all);
        recviiew = findViewById(R.id.recview);
        recviiew.setLayoutManager(new LinearLayoutManager(this));
        processdata();
        btnServices = (Button) findViewById(R.id.btnServices);
        btnHome = (Button) findViewById(R.id.btnHome);

        Toolbar toolbar = findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);

        sharedPrefsManager = new SharedPrefsManager(getApplicationContext());
        btnHome.setOnClickListener(new View.OnClickListener() {
           @Override
           public void onClick(View view) {
               Intent intent = new Intent(getApplicationContext(), ServicesAllActivity.class);
               intent.addFlags(Intent.FLAG_ACTIVITY_CLEAR_TOP);
               startActivity(intent);
                finish();
            }
        });
        btnServices.setOnClickListener(new View.OnClickListener() {
           @Override
            public void onClick(View view) {
                Intent i = new Intent(getApplicationContext(), ServicesAllActivity.class);
               startActivity(i);
            }
        });

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
                    runOnUiThread(() -> Toast.makeText(getApplicationContext(), "error code: " + response.code(), Toast.LENGTH_SHORT).show());
                }
            }

            @Override
            public void onFailure(Call<List<responsemodel>> call, Throwable t) {
                Toast.makeText(getApplicationContext(), t.toString(), Toast.LENGTH_LONG).show();

            }
        });
    }


    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        int id = item.getItemId();

        if (id == R.id.action_Profile) {
            if(sharedPrefsManager.isLoggedIn())
            {
                Intent i = new Intent(getApplicationContext(), CustomerProfileActivity.class);
                startActivity(i);
            }
            else {
                Intent i = new Intent(getApplicationContext(), LoginActivity.class);
                startActivity(i);
            }
            return true;

        } else if (id == R.id.action_SignOut) {
            sharedPrefsManager.clearJwtToken();
            Intent intent = new Intent(getApplicationContext(),LoginActivity.class);
            intent.addFlags(Intent.FLAG_ACTIVITY_CLEAR_TOP);
            startActivity(intent);
            finish();
            return true;
        }

        return super.onOptionsItemSelected(item);
    }
}