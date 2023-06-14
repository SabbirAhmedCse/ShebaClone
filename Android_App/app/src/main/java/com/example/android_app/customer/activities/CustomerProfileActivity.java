package com.example.android_app.customer.activities;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.util.Log;
import android.widget.Button;
import android.widget.EditText;
import android.widget.RadioButton;
import android.widget.RadioGroup;

import com.example.android_app.R;
import com.example.android_app.customer.api.Callbacks;
import com.example.android_app.customer.api.CustomerApiManager;
import com.example.android_app.customer.model.Customer;

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
    }

    @Override
    public void onSuccess(Customer result) {
        if(result != null) {
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
}