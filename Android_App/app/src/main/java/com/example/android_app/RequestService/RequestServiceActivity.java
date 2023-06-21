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
import android.widget.Toast;

import com.example.android_app.R;
import com.example.android_app.ServicesAll.ServicesAllActivity;
import com.example.android_app.customer.activities.RequestHistoryActivity;
import com.example.android_app.customer.network.AuthInterceptor;
import com.example.android_app.customer.utils.SharedPrefsManager;
import com.example.android_app.databinding.ActivityRequestServiceBinding;


import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Locale;

import okhttp3.OkHttpClient;
import okhttp3.logging.HttpLoggingInterceptor;
import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

public class RequestServiceActivity extends AppCompatActivity {
    public static Intent getNavIntent(Context context) {
        Intent intent = new Intent(context, RequestServiceActivity.class);

        return intent;
    }

    int serviceId;
    EditText description;
    Button serviceDate;
    TextView dateText;

    private Button pickDateBtn;
    private TextView selectedDateTV;
    Button requestBtn;

    private int Id;

    private SharedPrefsManager sharedPrefsManager;
    private RequestServiceApi requestServiceApi;

    private DatePickerDialog.OnDateSetListener datePickerListener;

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
        Id = intent.getIntExtra("Id", 0);

        desccriptionOfProblem = findViewById(R.id.description);
        pickDateBtn = findViewById(R.id.idBtnPickDate);
        selectedDateTV = findViewById(R.id.idTVSelectedDate);
        dateText=findViewById(R.id.idTVSelectedDate);

        pickDateBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                showDate();
            }
        });
        datePickerListener = new DatePickerDialog.OnDateSetListener() {
            @Override
            public void onDateSet(DatePicker datePicker, int year, int month, int dayOfMonth) {
                Calendar calendar = Calendar.getInstance();
                calendar.set(Calendar.YEAR, year);
                calendar.set(Calendar.MONTH, month);
                calendar.set(Calendar.DAY_OF_MONTH, dayOfMonth);

                SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSS'Z'", Locale.US);
                String formattedDate = dateFormat.format(calendar.getTime());

                dateText.setText(formattedDate);
            }
        };


        requestBtn = findViewById(R.id.ReqService);
        requestBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                process();
            }

        });
    }

    private void showDate() {
        Calendar calendar = Calendar.getInstance();
        int year = calendar.get(Calendar.YEAR);
        int month = calendar.get(Calendar.MONTH);
        int dayOfMonth = calendar.get(Calendar.DAY_OF_MONTH);

        DatePickerDialog datePickerDialog = new DatePickerDialog(this, datePickerListener, year, month, dayOfMonth);
        datePickerDialog.show();
    }

    public void process() {
        sharedPrefsManager = new SharedPrefsManager(this);

        String token = sharedPrefsManager.getJwtToken();
        OkHttpClient client = new OkHttpClient.Builder()
                .addInterceptor(new AuthInterceptor(token))
                .addInterceptor(new HttpLoggingInterceptor().setLevel(HttpLoggingInterceptor.Level.BODY))
                .build();

        Retrofit retrofit = new Retrofit.Builder()

                .baseUrl("http://192.168.0.54/api/ServiceRequest/")
                .addConverterFactory(GsonConverterFactory.create())
                .client(client)
                .build();

        requestServiceApi = retrofit.create(RequestServiceApi.class);

        RequestServiceModel requestServiceModel = new RequestServiceModel();

        requestServiceModel.setServiceId(Id);
        requestServiceModel.setServiceDate(dateText.getText().toString());
        requestServiceModel.setDescription(desccriptionOfProblem.getText().toString());

        Call<RequestServiceModel> call = requestServiceApi.adddata(requestServiceModel);
        call.enqueue(new Callback<RequestServiceModel>() {
            @Override
            public void onResponse(Call<RequestServiceModel> call, Response<RequestServiceModel> response) {
                runOnUiThread(new Runnable() {
                    @Override
                    public void run() {
                        if (!response.isSuccessful()) {
                            Toast.makeText(RequestServiceActivity.this, "Error: " + response.code(), Toast.LENGTH_SHORT).show();
                        }
                        startActivity(RequestServiceActivity.getNavIntent(RequestServiceActivity.this));
                    }
                });

            }

            @Override
            public void onFailure(Call<RequestServiceModel> call, Throwable t) {
                startActivity(RequestHistoryActivity.getNavIntent(RequestServiceActivity.this));
            }
        });

    }


}
