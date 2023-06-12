package Service;

import android.content.Context;
import android.content.Intent;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.example.android_app.MainActivity;
import com.example.android_app.R;
import com.squareup.picasso.Picasso;

import java.util.List;

public class ServiceAdapter extends RecyclerView.Adapter<ServiceViewHolder> {
    private List<ServiceItem> ServiceList;
    private Context context;

    public ServiceAdapter(List<ServiceItem> serviceList, Context context) {
        ServiceList = serviceList;
        this.context = context;
    }

    @NonNull
    @Override
    public ServiceViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View v = LayoutInflater.from(parent.getContext()).inflate(R.layout.rowlayout, parent, false);
        ServiceViewHolder SVH = new ServiceViewHolder(v);
        return SVH;
    }

    @Override
    public void onBindViewHolder(@NonNull ServiceViewHolder holder, int position) {
        Context myContext = holder.itemView.getContext();
        final ServiceItem ServiceItemPosition = ServiceList.get(position);
        holder.headText.setText(ServiceItemPosition.getHead());
        holder.descriptionText.setText(ServiceItemPosition.getDescription());
        Picasso.get().load(ServiceItemPosition.getImageUrl()).into(holder.imageView);
        holder.itemView.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Toast.makeText(myContext, ServiceItemPosition.getHead(), Toast.LENGTH_SHORT).show();
                myContext.startActivity(new Intent(myContext, MainActivity.class));
            }
        });

    }

    @Override
    public int getItemCount() {
        return ServiceList.size();
    }
}
