package com.example.android_app.customer.activities;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ProgressBar;
import android.widget.TextView;
import android.widget.Toast;

import com.example.android_app.R;
import com.example.android_app.ServicesAll.ServicesAllActivity;
import com.example.android_app.customer.api.Callbacks;
import com.example.android_app.customer.api.CustomerApiManager;
import com.example.android_app.customer.model.UserAuth;
import com.example.android_app.customer.utils.SharedPrefsManager;

public class LoginActivity extends AppCompatActivity implements Callbacks<Boolean> {

    CustomerApiManager customerApiManager;
    EditText email;
    EditText password;
    Button btnSignIn;
    TextView register;

    ProgressBar progressBar;
    SharedPrefsManager sharedPrefsManager;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login);
        progressBar = findViewById(R.id.progressBar);
        progressBar.setVisibility(View.GONE);

        sharedPrefsManager = new SharedPrefsManager(getApplicationContext());

        email = (EditText) findViewById(R.id.email);
        password = (EditText) findViewById(R.id.password);
        register = (TextView) findViewById(R.id.register);
        btnSignIn = (Button) findViewById(R.id.btnSignIn);

        register.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent intent = new Intent(getApplicationContext(), RegisterActivity.class);
                startActivity(intent);
            }
        });

        customerApiManager = new CustomerApiManager(getApplicationContext());
        UserAuth userAuth = new UserAuth();

        btnSignIn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {

               boolean error = false;
               if(email.getText().toString().isEmpty())
               {
                   email.setError("Email is required");
                   error = true;
               }
               else if (!isValidEmail(email.getText().toString())) {
                   email.setError("Invalid email format");
                   error = true;
               }

               if(password.getText().toString().isEmpty())
               {
                   password.setError("Password is required");
                   error = true;
               }
               else if (password.getText().toString().length() < 6) {
                   password.setError("Password should have at least 6 characters");
                   error = true;
               }

               if(!error){
                   progressBar.setVisibility(View.VISIBLE);
                   userAuth.setEmail(email.getText().toString());
                   userAuth.setPassword(password.getText().toString());
                   customerApiManager.signIn(userAuth, LoginActivity.this);
               }
            }
        });
    }

    @Override
    public void onSuccess(Boolean result) {
        progressBar.setVisibility(View.GONE);
        if(result != null)
        {
               Intent intent = new Intent(getApplicationContext(), ServicesAllActivity.class);
               startActivity(intent);
        }
        else
        {
            Toast.makeText(getApplicationContext(), "Email or Password is not correct", Toast.LENGTH_SHORT).show();
        }
    }

    @Override
    public void onFailure(Exception e) {
        progressBar.setVisibility(View.GONE);
        Toast.makeText(getApplicationContext(), "Email or Password is not correct", Toast.LENGTH_SHORT).show();
    }

    private boolean isValidEmail(String email) {
        String emailRegex = "^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+$";
        return email.matches(emailRegex);
    }
}