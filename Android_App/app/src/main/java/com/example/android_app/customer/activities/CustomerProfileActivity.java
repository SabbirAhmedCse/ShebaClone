package com.example.android_app.customer.activities;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.RadioButton;
import android.widget.RadioGroup;

import com.example.android_app.R;
import com.example.android_app.customer.api.Callbacks;
import com.example.android_app.customer.api.CustomerApiManager;
import com.example.android_app.customer.model.Customer;
import com.fasterxml.jackson.databind.node.JsonNodeFactory;
import com.github.fge.jsonpatch.JsonPatch;

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

        btnSave.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                String newName = name.getText().toString();
                String newMobileNumber = mobileNumber.getText().toString();
                String newGender;
                if(genderMale.getText().toString().equals("Male"))
                {
                    newGender = genderMale.getText().toString();
                }
                else if(genderFemale.getText().toString().equals("Female"))
                {
                    newGender = genderFemale.getText().toString();
                }
                else {
                    newGender = genderOther.getText().toString();
                }
                String newBirth = dateOfBirth.getText().toString();
                String newCity = city.getText().toString();
                String newArea = area.getText().toString();
                String newAddress = address.getText().toString();

                JsonPatch jsonPatch = JsonPatch.fromJsonArray(
                        JsonNodeFactory.instance.arrayNode()
                                .add(JsonNodeFactory.instance.objectNode()
                                        .put("op", "replace")
                                        .put("path", "/name")
                                        .put("value", newName))
                                .add(JsonNodeFactory.instance.objectNode()
                                        .put("op", "replace")
                                        .put("path", "/mobileNumber")
                                        .put("value", newMobileNumber))
                                .add(JsonNodeFactory.instance.objectNode()
                                        .put("op", "replace")
                                        .put("path", "/gender")
                                        .put("value", newGender))
                                .add(JsonNodeFactory.instance.objectNode()
                                        .put("op", "replace")
                                        .put("path", "/dateOfBirth")
                                        .put("value", newBirth))
                                .add(JsonNodeFactory.instance.objectNode()
                                        .put("op", "replace")
                                        .put("path", "/city")
                                        .put("value", newCity))
                                .add(JsonNodeFactory.instance.objectNode()
                                        .put("op", "replace")
                                        .put("path", "/area")
                                        .put("value", newArea))
                                .add(JsonNodeFactory.instance.objectNode()
                                        .put("op", "replace")
                                        .put("path", "/address")
                                        .put("value", newAddress))
                                .add(JsonNodeFactory.instance.objectNode()
                                        .put("op", "replace")
                                        .put("path", "/address")
                                        .put("value", newAddress))
                );
                Callbacks<Boolean> updateCallback = new Callbacks<Boolean>() {
                    @Override
                    public void onSuccess(Boolean result) {
                        // Handle the success response
                    }

                    @Override
                    public void onFailure(Exception e) {
                        // Handle the failure response
                    }
                };

                customerApiManager.updateCustomer(jsonPatch, updateCallback);

            }
        });
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