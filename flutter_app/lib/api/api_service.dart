import 'dart:async';
import 'dart:convert';
import 'package:get/get.dart';
import 'package:http/http.dart' as http;
import 'auth_service.dart';

class ApiService {
  static Future<dynamic> get(String url) async {
    try {
      var authData = await AuthService.getAuthData();
      print(authData);
      String? token = "Bearer ${authData["token"]}";
      print(token);
      final response = await http.get(Uri.parse(url), headers: {
        'Content-Type': 'application/json',
        'Authorization': token
      });

      if (response.statusCode == 200) {
        dynamic jsonResponse = await json.decode(response.body);
        print(jsonResponse);
        return jsonResponse;
      } else {
        dynamic jsonResponse = response.body;
        print(jsonResponse);
        return jsonResponse;
      }
    } catch (e) {
      throw Exception(e.toString());
    }
  }

  static Future<dynamic> post(String url, data) async {
    try {
      var authData = await AuthService.getAuthData();
      String? token = authData["token"];
      final response = await http.post(Uri.parse(url),
          body: jsonEncode(data),
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer $token'
          });
      if (response.statusCode == 200) {
        dynamic jsonResponse = response.body;
        return jsonResponse;
      } else if (response.statusCode > 200) {
        dynamic jsonResponse = response.body;
        return jsonResponse;
      }
    } catch (e) {
      throw Exception(e.obs);
    }
  }

  static Future<dynamic> put(String url, data) async {
    try {
      var authData = await AuthService.getAuthData();
      String? token = authData["token"];
      final response = await http.put(Uri.parse(url),
          body: jsonEncode(data),
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer $token'
          });

      if (response.statusCode == 200) {
        dynamic jsonResponse = response.body;
        return jsonResponse;
      } else if (response.statusCode > 200) {
        dynamic jsonResponse = response.body;
        return jsonResponse;
      }
    } catch (e) {
      throw Exception(e.toString());
    }
  }

  static Future<dynamic> delete(String url, String id) async {
    try {
      var authData = await AuthService.getAuthData();
      String? token = authData["token"];
      final response = await http.post(Uri.parse(url), headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer $token'
      });

      if (response.statusCode < 500) {
        dynamic jsonResponse = json.decode(response.body);
        return jsonResponse;
      }
    } catch (e) {
      throw Exception(e.toString());
    }
  }
}
