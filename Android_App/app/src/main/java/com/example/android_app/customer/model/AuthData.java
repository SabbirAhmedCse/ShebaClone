package com.example.android_app.customer.model;

public class AuthData {
    private long id;
    private String email;
    private String type;
    private String token;
    private String message;

    // Constructors

    public AuthData() {
    }

    public AuthData(long id, String email, String type, String token, String message) {
        this.id = id;
        this.email = email;
        this.type = type;
        this.token = token;
        this.message = message;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
