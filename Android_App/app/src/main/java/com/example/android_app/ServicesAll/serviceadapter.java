package com.example.android_app.ServicesAll;


import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.bumptech.glide.Glide;
import com.example.android_app.MainActivity;
import com.example.android_app.R;
import com.example.android_app.ServiceDetail.ServiceDetailsActivity;

import java.util.List;

public class serviceadapter extends RecyclerView.Adapter<serviceadapter.Serviceviewholder> {
    List<responsemodel> data;

    public serviceadapter(List<responsemodel> data) {
        this.data = data;
    }

    @NonNull
    @Override
    public Serviceviewholder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(parent.getContext()).inflate(R.layout.singlerowdesign, parent, false);
        return new Serviceviewholder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull Serviceviewholder holder, int position) {
        holder.t1.setText(data.get(position).getSubCategory());
        holder.t2.setText(data.get(position).getDescription());
        Glide.with(holder.t1.getContext()).load(data.get(position).getImageUrl()).into(holder.img);
        /////
        holder.itemView.setOnClickListener(view -> {
            responsemodel item = data.get(position);
            holder.itemView.getContext().startActivity(
                    ServiceDetailsActivity.getNavIntent(holder.itemView.getContext(), item.subCategory, item.description,item.price,item.id,item.imageUrl)
            );
        });
    }

    @Override
    public int getItemCount() {
        if (data == null) return 0;
        return data.size();
    }

    static class Serviceviewholder extends RecyclerView.ViewHolder {
        ImageView img;
        TextView t1, t2;

        public Serviceviewholder(@NonNull View itemView) {
            super(itemView);
            img = itemView.findViewById(R.id.img);
            t1 = itemView.findViewById(R.id.t1);
            t2 = itemView.findViewById(R.id.t2);
        }
    }
}
