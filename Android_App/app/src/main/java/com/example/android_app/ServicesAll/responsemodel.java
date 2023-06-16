package com.example.android_app.ServicesAll;



public class responsemodel {
    String subCategory,description,imageUrl,price;

    public responsemodel()
    {

    }
    public responsemodel(String subCategory, String description,String imageUrl,String price) {
        this.subCategory = subCategory;
        this.description = description;
        this.imageUrl=imageUrl;
        this.price=price;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
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
