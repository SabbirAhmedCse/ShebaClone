package com.example.android_app.customer.adapters;

import android.content.Context;
import android.content.Intent;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.example.android_app.R;
import com.example.android_app.customer.activities.RequestedServiceDetailsActivity;
import com.example.android_app.customer.model.ServiceHistory;

import org.w3c.dom.Text;

import java.util.List;

public class CustomAdapter extends RecyclerView.Adapter<CustomAdapter.ViewHolder> {

    private final List<ServiceHistory> itemList;

    public CustomAdapter(List<ServiceHistory> itemList) {
        this.itemList = itemList;
    }

    @NonNull
    @Override
    public ViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(parent.getContext()).inflate(R.layout.item_layout, parent, false);
        return new ViewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull ViewHolder holder, int position) {

        ServiceHistory serviceHistory = itemList.get(position);
        holder.itemTextView.setText("#"+ String.valueOf(serviceHistory.getServiceDate()));
        holder.serviceCategory.setText(serviceHistory.getServiceCategory());
        holder.serviceSubCategory.setText(serviceHistory.getServiceSubCategory());
        if(serviceHistory.getMechanicName() != null)
        {
            holder.mechanicName.setText(serviceHistory.getMechanicName());
        }
        else {
            holder.mechanicName.setText("No Mechanic");
        }
        if(serviceHistory.getServiceStatus() != null)
        {
            holder.serviceStatus.setText(serviceHistory.getServiceStatus());
        }
        else
        {
            holder.serviceStatus.setText("No Status");
        }

        holder.moreDetails.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Context context = v.getContext();
                Intent i = new Intent(context, RequestedServiceDetailsActivity.class);
                i.addFlags(Intent.FLAG_ACTIVITY_CLEAR_TOP);
                i.putExtra("position", position);
                context.startActivity(i);

            }
        });
    }

    @Override
    public int getItemCount() {
        return itemList.size();
    }

    public static class ViewHolder extends RecyclerView.ViewHolder {
        TextView itemTextView;
        TextView serviceCategory;
        TextView serviceSubCategory;
        TextView mechanicName;
        TextView serviceStatus;
        Button moreDetails;
        public ViewHolder(@NonNull View itemView) {
            super(itemView);
            itemTextView = itemView.findViewById(R.id.itemTextView);
            serviceCategory = itemView.findViewById(R.id.textView7);
            serviceSubCategory = itemView.findViewById(R.id.textView11);
            mechanicName = itemView.findViewById(R.id.textView12);
            serviceStatus = itemView.findViewById(R.id.textView13);
            moreDetails = itemView.findViewById(R.id.button);
        }
    }
}
