package com.example.android_app.customer.activities;

import androidx.appcompat.app.AppCompatActivity;

import android.app.DatePickerDialog;
import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.DatePicker;
import android.widget.EditText;
import android.widget.RadioButton;
import android.widget.RadioGroup;
import android.widget.Toast;

import com.example.android_app.R;
import com.example.android_app.customer.api.Callbacks;
import com.example.android_app.customer.api.CustomerApiManager;
import com.example.android_app.customer.model.Customer;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Locale;

public class CustomerProfileActivity extends AppCompatActivity implements Callbacks<Customer> {

    private EditText name;
    private EditText mobileNumber;
    private RadioGroup gender;
    private RadioButton genderMale;
    private RadioButton genderFemale;
    private RadioButton genderOther;
    private EditText dateOfBirth;
    private EditText city;
    private EditText area;
    private EditText address;
    private Button btnSave;

    private DatePickerDialog.OnDateSetListener datePickerListener;

    String email,password,createAt;

    CustomerApiManager customerApiManager;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_customer_profile);

        name = (EditText) findViewById(R.id.name);
        mobileNumber = (EditText) findViewById(R.id.mobilenumber);
        gender = (RadioGroup) findViewById(R.id.gender);
        genderMale = (RadioButton) findViewById(R.id.genderMale);
        genderFemale = (RadioButton) findViewById(R.id.genderFemale);
        genderOther = (RadioButton) findViewById(R.id.genderOther);
        dateOfBirth = (EditText) findViewById(R.id.dateOfBirth);
        city = (EditText) findViewById(R.id.city);
        area = (EditText) findViewById(R.id.area);
        address = (EditText) findViewById(R.id.address);
        btnSave = (Button) findViewById(R.id.btnSave);

        customerApiManager = new CustomerApiManager(getApplicationContext());
        customerApiManager.getCustomer(CustomerProfileActivity.this);

        dateOfBirth.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                showDate();
            }
        });

        btnSave.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {

                String updatedGender = "";
                int selectedGenderId = gender.getCheckedRadioButtonId();
                if (selectedGenderId == R.id.genderMale) {
                    updatedGender = "Male";
                } else if (selectedGenderId == R.id.genderFemale) {
                    updatedGender = "Female";
                } else if (selectedGenderId == R.id.genderOther) {
                    updatedGender = "Other";
                }

                Customer updatedCustomer = new Customer();
                updatedCustomer.setType("customer");
                updatedCustomer.setEmail(email);
                updatedCustomer.setPassword(password);
                updatedCustomer.setName(name.getText().toString());
                updatedCustomer.setMobileNumber(mobileNumber.getText().toString());
                updatedCustomer.setGender(updatedGender);
                updatedCustomer.setDateOfBirth(dateOfBirth.getText().toString());
                updatedCustomer.setCity(city.getText().toString());
                updatedCustomer.setArea(area.getText().toString());
                updatedCustomer.setAddress(address.getText().toString());
                updatedCustomer.setCreateAt(createAt);

                customerApiManager.updateCustomer(updatedCustomer, new Callbacks<Customer>() {
                    @Override
                    public void onSuccess(Customer result) {
                        if(result != null)
                        {
                            Toast.makeText(getApplicationContext(), "Updated Successfully", Toast.LENGTH_SHORT).show();
                        }
                        else
                        {
                            Toast.makeText(getApplicationContext(), "Incorrect Information", Toast.LENGTH_SHORT).show();
                        }
                    }

                    @Override
                    public void onFailure(Exception e) {
                        Toast.makeText(getApplicationContext(), "Incorrect Information", Toast.LENGTH_SHORT).show();
                    }
                });
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
    @Override
    public void onSuccess(Customer result) {
        if(result != null) {
            email = result.getEmail().toString();
            password = result.getPassword().toString();
            createAt = result.getCreateAt().toString();
            name.setText(result.getName().toString());
            mobileNumber.setText(result.getMobileNumber().toString());
            if(result.getGender().toString().equals("Male"))
            {
                genderMale.setChecked(true);
            }
            else if(result.getGender().toString().equals("Female"))
            {
                genderFemale.setChecked(true);
            }
            else
            {
                genderOther.setChecked(true);
            }
            dateOfBirth.setText(result.getDateOfBirth().toString());

            if(result.getCity() != null)
            {
                city.setText(result.getCity().toString());
            }
            else
            {
                city.setText("");
            }
            if(result.getArea() != null)
            {
                area.setText(result.getArea().toString());
            }
            else
            {
                area.setText("");
            }
            if(result.getAddress() != null)
            {
                address.setText(result.getAddress().toString());
            }
            else
            {
                address.setText("");
            }
        }
        else
        {
            Log.d("TAG", "GetUser Failed");
        }
    }

    @Override
    public void onFailure(Exception e) {
        Toast.makeText(getApplicationContext(), "Incorrect Information", Toast.LENGTH_SHORT).show();
    }
}