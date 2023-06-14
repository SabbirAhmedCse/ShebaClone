package com.example.android_app.customer.activities;

import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;

import android.content.Intent;
import android.os.Bundle;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.Spinner;

import com.example.android_app.R;
import com.example.android_app.customer.utils.SharedPrefsManager;

public class HomeActivity extends AppCompatActivity {

    Button btnServices;
    Button btnHome;

    SharedPrefsManager sharedPrefsManager;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_home);

        btnServices = (Button) findViewById(R.id.btnServices);
        btnHome = (Button) findViewById(R.id.btnHome);

        Toolbar toolbar = findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);

        sharedPrefsManager = new SharedPrefsManager(getApplicationContext());
        btnHome.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent intent = new Intent(HomeActivity.this, HomeActivity.class);
                intent.addFlags(Intent.FLAG_ACTIVITY_CLEAR_TOP);
                startActivity(intent);
                finish();
            }
        });
        btnServices.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                //Mehedi's Services Activity
            }
        });

    }
    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        getMenuInflater().inflate(R.menu.main, menu);
        return true;
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
            Intent intent = new Intent(HomeActivity.this, LoginActivity.class);
            intent.addFlags(Intent.FLAG_ACTIVITY_CLEAR_TOP);
            startActivity(intent);
            finish();
            return true;
        }

        return super.onOptionsItemSelected(item);
    }
    
}
