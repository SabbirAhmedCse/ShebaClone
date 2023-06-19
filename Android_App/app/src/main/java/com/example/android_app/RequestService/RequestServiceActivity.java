package com.example.android_app.RequestService;

import androidx.appcompat.app.AppCompatActivity;

import android.app.DatePickerDialog;
import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.DatePicker;
import android.widget.EditText;
import android.widget.TextView;

import com.example.android_app.MainActivity;
import com.example.android_app.R;
import com.example.android_app.ServicesAll.ServicesAllActivity;
import com.example.android_app.customer.api.CustomerHolderAPI;
import com.example.android_app.customer.network.AuthInterceptor;
import com.example.android_app.customer.utils.SharedPrefsManager;
import com.example.android_app.databinding.ActivityRequestServiceBinding;


import java.util.Calendar;

import okhttp3.OkHttpClient;
import okhttp3.logging.HttpLoggingInterceptor;
import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

public class RequestServiceActivity extends AppCompatActivity {
    int serviceId;
    String description;
    String serviceDate;

    private Button pickDateBtn;
    private TextView selectedDateTV;
    Button requestBtn;

    private SharedPrefsManager sharedPrefsManager;
    private RequestServiceApi requestServiceApi;

    EditText desccriptionOfProblem;

    public static final String KEY_NAME = "NAME";

    public static Intent getNavIntent(Context context, String subCatagory, int id) {
        Intent intent = new Intent(context, com.example.android_app.ServiceDetail.ServiceDetailsActivity.class);
        intent.putExtra("subCategory", subCatagory);
        intent.putExtra("id", id);

        return intent;
    }

    private ActivityRequestServiceBinding binding;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_request_service);
        binding = ActivityRequestServiceBinding.inflate(getLayoutInflater());
        setContentView(binding.getRoot());
        Intent intent = getIntent();
        String subCategory = intent.getStringExtra("subCategory");
        binding.subCategory.setText(subCategory);
        int id = intent.getIntExtra("id", 0);
        desccriptionOfProblem = findViewById(R.id.description);
        pickDateBtn = findViewById(R.id.idBtnPickDate);
        selectedDateTV = findViewById(R.id.idTVSelectedDate);
        pickDateBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                // on below line we are getting
                // the instance of our calendar.
                final Calendar c = Calendar.getInstance();

                // on below line we are getting
                // our day, month and year.
                int year = c.get(Calendar.YEAR);
                int month = c.get(Calendar.MONTH);
                int day = c.get(Calendar.DAY_OF_MONTH);

                // on below line we are creating a variable for date picker dialog.
                DatePickerDialog datePickerDialog = new DatePickerDialog(
                        // on below line we are passing context.
                        RequestServiceActivity.this,
                        new DatePickerDialog.OnDateSetListener() {
                            @Override
                            public void onDateSet(DatePicker view, int year,
                                                  int monthOfYear, int dayOfMonth) {
                                // on below line we are setting date to our text view.
                                selectedDateTV.setText(dayOfMonth + "-" + (monthOfYear + 1) + "-" + year);

                            }
                        },
                        // on below line we are passing year,
                        // month and day for selected date in our date picker.
                        year, month, day);
                // at last we are calling show to
                // display our date picker dialog.
                datePickerDialog.show();
            }
        });


        requestBtn = findViewById(R.id.ReqService);
        requestBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                process();
            }

        });
    }

    public void process() {
        sharedPrefsManager = new SharedPrefsManager(this);

        String token = sharedPrefsManager.getJwtToken();
        OkHttpClient client = new OkHttpClient.Builder()
                .addInterceptor(new AuthInterceptor(token))
                .addInterceptor(new HttpLoggingInterceptor().setLevel(HttpLoggingInterceptor.Level.BODY))
                .build();

        Retrofit retrofit = new Retrofit.Builder()
                .baseUrl("http://192.168.0.54/api/")
                .addConverterFactory(GsonConverterFactory.create())
                .client(client)
                .build();

        requestServiceApi = retrofit.create(RequestServiceApi.class);

        Call<RequestServiceModel> call = requestServiceApi.adddata(serviceId, description, serviceDate);
        call.enqueue(new Callback<RequestServiceModel>() {
            @Override
            public void onResponse(Call<RequestServiceModel> call, Response<RequestServiceModel> response) {
                runOnUiThread(new Runnable() {
                    @Override
                    public void run() {
                        startActivity(ServicesAllActivity.getNavIntent(RequestServiceActivity.this));
                    }
                });

            }

            @Override
            public void onFailure(Call<RequestServiceModel> call, Throwable t) {
//
            }
        });

    }


}
