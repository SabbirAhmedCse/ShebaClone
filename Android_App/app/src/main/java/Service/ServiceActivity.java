package Service;

import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.os.Bundle;
import android.util.Log;
import android.widget.Toast;

import com.android.volley.Request;
import com.android.volley.RequestQueue;
import com.android.volley.Response;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.StringRequest;
import com.android.volley.toolbox.Volley;
import com.example.android_app.R;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.ArrayList;
import java.util.List;

public class ServiceActivity extends AppCompatActivity {
    RecyclerView recyclerView;
    String url = "http://192.168.0.54/api/Service/";
    ServiceAdapter serviceAdapter;
    List<ServiceItem> serviceItemList;
    private static final String TAG = "ServiceActivity";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_service);
        recyclerView = (RecyclerView) findViewById(R.id.recylerViewId);
        recyclerView.setHasFixedSize(true);
        recyclerView.setLayoutManager(new LinearLayoutManager(this));
        serviceItemList = new ArrayList<>();
        loadData();
    }

    public void loadData() {
        StringRequest stringRequest = new StringRequest(Request.Method.GET, url,
                new Response.Listener<String>() {
                    @Override
                    public void onResponse(String response) {
                        Log.d(TAG, "onResponse: inside on response");
                        try {
                            JSONArray jsonList = new JSONArray((response));
                            Log.d(TAG, jsonList.toString());
                            Log.d(TAG, "onResponse: json size: " + jsonList.length());
//                            jsonObject = new JSONObject(response);
//                            JSONArray array = jsonObject.getJSONArray("");
                            for (int i = 0; i < jsonList.length(); i++) {

                                JSONObject receive = jsonList.getJSONObject(i);

                                ServiceItem item = new ServiceItem(

                                        receive.getString("subCategory"),
                                        receive.getString("subCategory"),
                                        receive.getString("imageUrl")
                                );

                                serviceItemList.add(item);
                            }
                            Log.d(TAG, "onResponse: service size: " + serviceItemList.size());
                            serviceAdapter = new ServiceAdapter(serviceItemList, getApplicationContext());
                            recyclerView.setAdapter(serviceAdapter);

                        } catch (JSONException e) {
                            e.printStackTrace();
                            Log.d(TAG, "onResponse: exception");
                        }


                    }
                }, new Response.ErrorListener() {
            @Override
            public void onErrorResponse(VolleyError error) {
                Toast.makeText(ServiceActivity.this, "server error !", Toast.LENGTH_SHORT).show();
                Log.d(TAG, "onErrorResponse: error");
                error.printStackTrace();
            }
        });
        RequestQueue queue = Volley.newRequestQueue(this);
        queue.add(stringRequest);
    }
}