package com.example.android_app.ServicesAll;



public class responsemodel {
    String subCategory,description,imageUrl;

    public responsemodel()
    {

    }
    public responsemodel(String subCategory, String description,String imageUrl) {
        this.subCategory = subCategory;
        this.description = description;
        this.imageUrl=imageUrl;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public String getSubCategory() {
        return subCategory;
    }

    public void setSubCategory(String subCategory) {
        this.subCategory = subCategory;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }




}
