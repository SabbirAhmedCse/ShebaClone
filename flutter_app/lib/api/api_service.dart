import 'dart:async';
import 'dart:convert';
import 'package:http/http.dart' as http;
//import 'package:survey_mobile_app/constants/keys.dart';
//import 'package:survey_mobile_app/services/shared_preference_service.dart';
import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';

class ApiService {
  static Future<dynamic> get(String url) async {
    final SharedPreferences prefs = await SharedPreferences.getInstance();
    final response = await http.get(Uri.parse(url), headers: {
      'content-type': 'application/json',
      //'Authorization': 'Bearer $token'
    });
    if (response.statusCode < 400) {
      dynamic jsonResponse = json.decode(response.body);
      if (jsonResponse["success"]) {
        return jsonResponse["data"];
      } else {
        throw Exception(jsonResponse["message"]);
      }
    } else {
      throw Exception(json.decode(response.body)["message"] ??
          json.decode(response.body)["title"]);
    }
  }

  static Future<dynamic> post(String url, dynamic body) async {
    //String token = await SharedPreferenceService.get(Keys.keyLStoken) ?? "";
    final response = await http.post(Uri.parse(url),
        body: jsonEncode(body),
        headers: {
          'Content-Type': 'application/json',
         // 'Authorization': 'Bearer $token'
        });
    if (response.statusCode < 400) {
      dynamic jsonResponse = json.decode(response.body);
      if (jsonResponse["success"]) {
        return jsonResponse["data"];
      } else {
        throw Exception(jsonResponse["message"]);
      }
    } else {
      throw Exception(json.decode(response.body)["message"] ??
          json.decode(response.body)["title"]);
    }
  }

  static Future<dynamic> put(String url, dynamic body) async {
    //String token = await SharedPreferenceService.get(Keys.keyLStoken) ?? "";
    final response = await http.put(Uri.parse(url),
        body: jsonEncode(body),
        headers: {
          'Content-Type': 'application/json',
         // 'Authorization': 'Bearer $token'
        });
    if (response.statusCode < 400) {
      dynamic jsonResponse = json.decode(response.body);
      if (jsonResponse["success"]) {
        return jsonResponse["data"];
      } else {
        throw Exception(jsonResponse["message"]);
      }
    } else {
      throw Exception(json.decode(response.body)["message"] ??
          json.decode(response.body)["title"]);
    }
  }
  static Future<dynamic> delete(String url, String id) async {
    //String token = await SharedPreferenceService.get(Keys.keyLStoken) ?? "";
    final response = await http.delete(Uri.parse(url+id),
        // body: jsonEncode(id),
        headers: {
          'Content-Type': 'application/json',
          //'Authorization': 'Bearer $token'
        });
    if (response.statusCode < 400) {
      dynamic jsonResponse = json.decode(response.body);
      if (jsonResponse["success"]) {
        return jsonResponse["data"];
      } else {
        throw Exception(jsonResponse["message"]);
      }
    } else {
      throw Exception(json.decode(response.body)["message"] ??
          json.decode(response.body)["title"]);
    }
  }
}
