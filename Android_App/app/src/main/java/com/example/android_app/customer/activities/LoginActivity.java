package com.example.android_app.customer.activities;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

import com.example.android_app.R;
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

    SharedPrefsManager sharedPrefsManager;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login);

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
                userAuth.setEmail(email.getText().toString());
                userAuth.setPassword(password.getText().toString());
                customerApiManager.signIn(userAuth, LoginActivity.this);
            }
        });
    }

    @Override
    public void onSuccess(Boolean result) {
        if(result != null)
        {
               Intent intent = new Intent(getApplicationContext(), HomeActivity.class);
               startActivity(intent);
        }
        else
        {
            Toast.makeText(getApplicationContext(), "Email or Password is not correct", Toast.LENGTH_SHORT).show();
        }
    }

    @Override
    public void onFailure(Exception e) {
        Toast.makeText(getApplicationContext(), "Email or Password is not correct", Toast.LENGTH_SHORT).show();
    }
}