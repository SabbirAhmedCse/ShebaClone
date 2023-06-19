package com.example.android_app.customer.activities;

import androidx.appcompat.app.AppCompatActivity;

import android.app.DatePickerDialog;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.DatePicker;
import android.widget.EditText;
import android.widget.RadioButton;
import android.widget.RadioGroup;
import android.widget.Toast;

import com.example.android_app.R;
import com.example.android_app.ServicesAll.ServicesAllActivity;
import com.example.android_app.customer.api.Callbacks;
import com.example.android_app.customer.api.CustomerApiManager;
import com.example.android_app.customer.model.Customer;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Locale;

public class RegisterActivity extends AppCompatActivity implements Callbacks<Boolean> {

    private CustomerApiManager customerApiManager;
    private EditText name;
    private EditText email;
    private EditText password;
    private EditText mobileNumber;
    private RadioGroup gender;
    private RadioButton genderMale;
    private RadioButton genderFemale;
    private RadioButton genderOther;
    private EditText dateOfBirth;
    private EditText city;
    private EditText area;
    private EditText address;
    private Button btnSignUp;

    private DatePickerDialog.OnDateSetListener datePickerListener;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_register);

        name = (EditText) findViewById(R.id.name);
        email = (EditText) findViewById(R.id.email);
        password = (EditText) findViewById(R.id.password);
        mobileNumber = (EditText) findViewById(R.id.mobilenumber);
        gender = (RadioGroup) findViewById(R.id.gender);
        genderMale = (RadioButton) findViewById(R.id.genderMale);
        genderFemale = (RadioButton) findViewById(R.id.genderFemale);
        genderOther = (RadioButton) findViewById(R.id.genderOther);
        dateOfBirth = (EditText) findViewById(R.id.dateOfBirth);
        city = (EditText) findViewById(R.id.city);
        area = (EditText) findViewById(R.id.area);
        address = (EditText) findViewById(R.id.address);
        btnSignUp = (Button) findViewById(R.id.btnSignUp);

        customerApiManager = new CustomerApiManager(getApplicationContext());

        dateOfBirth.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                showDate();
            }
        });

        btnSignUp.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                signup();
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

                dateOfBirth.setText(formattedDate);
            }
        };

    }

    private void showDate() {
        Calendar calendar = Calendar.getInstance();
        int year = calendar.get(Calendar.YEAR);
        int month = calendar.get(Calendar.MONTH);
        int dayOfMonth = calendar.get(Calendar.DAY_OF_MONTH);

        DatePickerDialog datePickerDialog = new DatePickerDialog(this, datePickerListener, year, month, dayOfMonth);
        datePickerDialog.show();
    }

    private void signup() {
        String nameValue = name.getText().toString();
        String emailValue = email.getText().toString();
        String passwordValue = password.getText().toString();
        String mobileNumberValue = mobileNumber.getText().toString();
        String genderValue = getSelectedGender();
        String dobValue = dateOfBirth.getText().toString();

        boolean error = false;

        if (nameValue.isEmpty()) {
            name.setError("Name is required");
            error = true;
        }
        if (emailValue.isEmpty()) {
            email.setError("Email is required");
            error = true;
        }
        else if (!isValidEmail(emailValue)) {
            email.setError("Invalid email format");
            error = true;
        }

        if (passwordValue.isEmpty()) {
            password.setError("Password is required");
            error = true;
        }
        else if (passwordValue.length() < 6) {
            password.setError("Password should have at least 6 characters");
            error = true;
        }

        if (mobileNumberValue.isEmpty()) {
            mobileNumber.setError("Mobile number is required");
            error = true;
        }
        else if(!isValidMobileNumber(mobileNumberValue))
        {
            mobileNumber.setError("Invalid Mobile Number format");
        }
        if (genderValue.isEmpty()) {
            Toast.makeText(getApplicationContext(), "Gender is required", Toast.LENGTH_SHORT).show();
            error = true;
        }
        if (dobValue.isEmpty()) {
            dateOfBirth.setError("Date of birth is required");
            error = true;
        }
        if (!error) {
            String cityValue = city.getText().toString();
            String areaValue = area.getText().toString();
            String addressValue = address.getText().toString();

            Customer customer = new Customer();
            customer.setType("customer");
            customer.setName(nameValue);
            customer.setEmail(emailValue);
            customer.setPassword(passwordValue);
            customer.setDateOfBirth(dobValue);
            customer.setMobileNumber(mobileNumberValue);
            customer.setGender(genderValue);
            customer.setCity(cityValue);
            customer.setArea(areaValue);
            customer.setAddress(addressValue);

            customerApiManager.signUp(customer, RegisterActivity.this);
        }
    }

    private String getSelectedGender() {
        int selectedId = gender.getCheckedRadioButtonId();
        if (selectedId == R.id.genderMale) {
            return "Male";
        } else if (selectedId == R.id.genderFemale) {
            return "Female";
        } else if (selectedId == R.id.genderOther) {
            return "Other";
        }
        return "";
    }

    @Override
    public void onSuccess(Boolean result) {
        if(result) {
            Intent intent = new Intent(getApplicationContext(), ServicesAllActivity.class);
            intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK | Intent.FLAG_ACTIVITY_CLEAR_TASK);
            startActivity(intent);
        }
        else
        {
            Toast.makeText(getApplicationContext(), "Incorrect Information", Toast.LENGTH_SHORT).show();
        }
    }

    @Override
    public void onFailure(Exception e) {
        Toast.makeText(getApplicationContext(), "Information is Incorrect", Toast.LENGTH_SHORT).show();
    }

    private boolean isValidEmail(String email) {
        // Simple email format validation using regex
        String emailRegex = "^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+$";
        return email.matches(emailRegex);
    }
    private boolean isValidMobileNumber(String mobileNumber) {
        mobileNumber = mobileNumber.replaceAll("\\D", "");
        if (mobileNumber.length() < 7 || mobileNumber.length() > 15) {
            return false;
        }

        String pattern = "^(\\+\\d{1,3})?\\d{7,15}$";
        return mobileNumber.matches(pattern);
    }

}
