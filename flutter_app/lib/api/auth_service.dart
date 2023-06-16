import 'dart:async';
import 'dart:convert';
import 'package:http/http.dart' as http;
import 'package:shared_preferences/shared_preferences.dart';

import '../config/config.dart';

class AuthService {
  static Future<dynamic> signup(url, data) async {
    try {
      final SharedPreferences prefs = await SharedPreferences.getInstance();
      String url = "${Config.baseApiUrl}/user/signup";

      final keyData = await http.post(Uri.parse(url),
          body: jsonEncode(data),
          headers: {'Content-Type': 'application/json'});
      if (keyData.body != "") {
        prefs.setString("authKey", keyData.body);
        var key = prefs.getString("authKey");
        var authData = json.decode(key!);
        return authData;
      }
    } catch (e) {
      throw Exception(e);
    }
  }

  static Future<dynamic> signin(data) async {
    try {
      String url = "${Config.baseApiUrl}/user/signin";
      final SharedPreferences prefs = await SharedPreferences.getInstance();
      final keyData = await http.post(Uri.parse(url),
          body: jsonEncode(data),
          headers: {'Content-Type': 'application/json'});
      if (keyData.statusCode <205) {
        prefs.setString("authKey", keyData.body);
        var key = prefs.getString("authKey");
        var authData = json.decode(key!);
        return authData;
      }
      else{
        return jsonDecode(keyData.body);
      }
    } catch (e) {
      throw Exception(e);
    }
  }

  static Future<dynamic> getAuthData() async {
    try {
      final SharedPreferences prefs = await SharedPreferences.getInstance();
      var authData = prefs.getString("authKey");
      if(authData==null){
        return null;
      }
      else{
        var keyData = jsonDecode(authData);
        return keyData;
      }
      
    } catch (e) {
      throw Exception(e);
    }
  }

  static Future<String> logout() async {
    try {
      final SharedPreferences prefs = await SharedPreferences.getInstance();
     bool response = await prefs.remove("authKey");
      if(response){
        return "Successfully logout";
      }
      return "logout faild";
    } catch (e) {
      throw Exception(e);
    }
  }
}
