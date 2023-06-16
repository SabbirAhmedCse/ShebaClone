import 'dart:async';
import 'dart:convert';
import 'package:get/get.dart';
import 'package:http/http.dart' as http;
import 'auth_service.dart';

class ApiService {
  static Future<dynamic> get(String url) async {
    try {
      var authData = await AuthService.getAuthData();
      print(authData["token"]);
      final response = await http.get(Uri.parse(url), headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer $authData["token"]'
      });

      if (response.statusCode < 500) {
        dynamic jsonResponse = json.decode(response.body);
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
      final response = await http.post(Uri.parse(url),
          body: jsonEncode(data),
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer $authData["token"]'
          });
      if (response.statusCode < 500) {
        dynamic jsonResponse = json.decode(response.body);
        return jsonResponse;
      }
    } catch (e) {
      throw Exception(e.obs);
    }
  }

  static Future<dynamic> put(String url, data) async {
    try {
      var authData = await AuthService.getAuthData();
      final response = await http.put(Uri.parse(url),
          body: jsonEncode(data),
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer $authData["token"]'
          });

      if (response.statusCode < 500) {
        dynamic jsonResponse = json.decode(response.body);
        return jsonResponse;
      }
    } catch (e) {
      throw Exception(e.toString());
    }
  }

  static Future<dynamic> delete(String url, String id) async {
    try {
      var authData = await AuthService.getAuthData();
      final response = await http.post(Uri.parse(url), headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer $authData["token"]'
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
