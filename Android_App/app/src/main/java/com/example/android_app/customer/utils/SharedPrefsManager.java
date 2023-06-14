package com.example.android_app.customer.utils;

import android.content.Context;
import android.content.SharedPreferences;
import android.text.TextUtils;

public class SharedPrefsManager {
    private static final String PREF_NAME = "ShebaPreferences";
    private static final String TOKEN = "token";

    private static final String ID = "id";

    private static SharedPreferences preferences = null;

    public SharedPrefsManager(Context context) {
        preferences = context.getSharedPreferences(PREF_NAME, Context.MODE_PRIVATE);
    }

    public void setJwtToken(String token, long id) {
        SharedPreferences.Editor editor = preferences.edit();
        editor.putString(TOKEN, token);
        editor.putString(ID, String.valueOf(id));
        editor.apply();
    }
    public boolean isLoggedIn(){
        String tk =  preferences.getString(TOKEN, "");
        return !TextUtils.isEmpty(tk);
    }
    public String getJwtToken() {
        return preferences.getString(TOKEN, "");
    }

    public String getId() {return preferences.getString(ID, "");}

    public void clearJwtToken()
    {
        SharedPreferences.Editor editor = preferences.edit();
        editor.clear().apply();
    }
}

