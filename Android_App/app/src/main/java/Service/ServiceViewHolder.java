package Service;

import android.view.View;
import android.widget.ImageView;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.example.android_app.R;

public class ServiceViewHolder extends RecyclerView.ViewHolder {
    ImageView imageView;
    TextView headText;
    TextView descriptionText;

     public ServiceViewHolder(@NonNull View itemView) {
        super(itemView);
        imageView=(ImageView)itemView.findViewById(R.id.imageId);
        headText=(TextView)itemView.findViewById(R.id.headId);
        descriptionText=(TextView)itemView.findViewById(R.id.descriptionId);

    }
}
