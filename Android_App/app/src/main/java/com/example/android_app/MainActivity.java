package com.example.android_app;

import androidx.appcompat.app.AppCompatActivity;
import androidx.core.content.ContextCompat;

import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.view.ViewGroup;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity {
    public static final String KEY_NAME = "NAME";

    public static Intent getNavIntent(Context context, String name) {
        Intent intent = new Intent(context, MainActivity.class);
        intent.putExtra(KEY_NAME, name);
        return intent;
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        Intent intent = getIntent();
        String name = intent.getStringExtra(KEY_NAME);
    }
}