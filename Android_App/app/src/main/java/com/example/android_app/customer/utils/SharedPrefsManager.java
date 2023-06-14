package com.example.android_app.customer.utils;

import android.content.Context;
import android.content.SharedPreferences;

public class SharedPrefsManager {
    private static final String PREF_NAME = "ShebaPreferences";
    private static final String TOKEN = "token";

    private final SharedPreferences preferences;

    public SharedPrefsManager(Context context) {
        preferences = context.getSharedPreferences(PREF_NAME, Context.MODE_PRIVATE);
    }

    public void setJwtToken(String token) {
        SharedPreferences.Editor editor = preferences.edit();
        editor.putString(TOKEN, token);
        editor.apply();
    }

    public String getJwtToken() {
        return preferences.getString(TOKEN, "");
    }
}

