package com.example.android_app;

import androidx.appcompat.app.AppCompatActivity;
import androidx.core.content.ContextCompat;

import android.os.Bundle;
import android.view.ViewGroup;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        ViewGroup vg = findViewById(R.id.my_row);
        TextView tv1 = vg.findViewById(R.id.headId);
        tv1.setBackgroundColor(ContextCompat.getColor(this, R.color.black));
    }
}