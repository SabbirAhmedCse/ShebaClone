import 'dart:async';
import 'dart:convert';
import 'package:flutter_app/api/api_service.dart';
import 'package:http/http.dart' as http;
import 'package:shared_preferences/shared_preferences.dart';

import '../config/config.dart';

class AuthService {
  static Future<dynamic> serviceCategory() async {
    try {
      String url = "${Config.baseApiUrl}/Service/categories";
      final response = await http.get(Uri.parse(url), headers: {
        'Content-Type': 'application/json',
      });
      if (response.statusCode == 200) {
        dynamic jsonResponse = await json.decode(response.body);
        return jsonResponse;
      } else {
        dynamic jsonResponse = response.body;
        print(jsonResponse);
        return jsonResponse;
      }
    } catch (e) {
      throw Exception(e);
    }
  }

  static Future<dynamic> signup(data) async {
    try {
      final SharedPreferences prefs = await SharedPreferences.getInstance();
      String url = "${Config.baseApiUrl}/user/signup";

      final keyData = await http.post(Uri.parse(url),
          body: jsonEncode(data),
          headers: {'Content-Type': 'application/json'});
      if (keyData.statusCode == 200) {
        prefs.setString("authKey", keyData.body);
        var key = prefs.getString("authKey");
        var authData = json.decode(key!);
        print(authData);
        return authData["type"];
      } else if (keyData.statusCode > 200) {
        var authData = keyData.body;
        print(authData);
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
      if (keyData.statusCode == 200) {
        prefs.setString("authKey", keyData.body);
        var key = prefs.getString("authKey");
        var authData = json.decode(key!);
        return authData["type"];
      } else if (keyData.statusCode > 200) {
        var authData = keyData.body;
        return authData;
      }
    } catch (e) {
      throw Exception(e);
    }
  }

  static Future<dynamic>getProfile()async{
    try{
      var authData =await getAuthData();
      int id = authData["id"];
      String url = "${Config.baseApiUrl}/User?id=$id";
      var profileDetails = await ApiService.get(url);
      return profileDetails;
    }
    catch(e){
      throw Exception(e);
    }
  }

  static Future<dynamic>updateProfile(data)async{
    try{
      var authData =await getAuthData();
      int id = authData["id"];
      String url = "${Config.baseApiUrl}/User/$id";
      var response = await ApiService.put(url, data);
      return response;
    }
    catch(e){
      throw Exception(e);
    }
  }


  static Future<dynamic> getAuthData() async {
    try {
      final SharedPreferences prefs = await SharedPreferences.getInstance();
      var authData = prefs.getString("authKey");
      if (authData == null) {
        return null;
      } else {
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
      if (response) {
        return "Successfully logout";
      }
      return "logout faild";
    } catch (e) {
      throw Exception(e);
    }
  }
}
