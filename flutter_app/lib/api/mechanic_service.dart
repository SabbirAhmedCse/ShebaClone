import 'dart:async';
import '../config/config.dart';
import 'api_service.dart';

class MechanicService {
  static Future<dynamic> allAssignedService() async {
    try {
      String url = "${Config.baseApiUrl}/service";
      var response = ApiService.get(url);
      return response;
    } catch (e) {
      throw Exception(e);
    }
  }

  static Future<dynamic> serviceDetails(id) async {
    try {
      String url = "${Config.baseApiUrl}/ServiceRequest/details?Id=$id";
      var response = ApiService.get(url);
      return response;
    } catch (e) {
      throw Exception(e);
    }
  }
static Future<dynamic> serviceCategory() async {
    try {
      String url = "${Config.baseApiUrl}/Service/category";
      var response = ApiService.get(url);
      return response;
    } catch (e) {
      throw Exception(e);
    }
  }
  

  static Future<dynamic> acceptService(data) async {
    try {
      String url = "${Config.baseApiUrl}/ServiceRequest/accept";
      var response = ApiService.put(url, data);
      return response;
    } catch (e) {
      throw Exception(e);
    }
  }

  static Future<dynamic> rejectService(data) async {
    try {
      String url = "${Config.baseApiUrl}/ServiceRequest/reject";
      var response = ApiService.post(url, data);
      return response;
    } catch (e) {
      throw Exception(e);
    }
  }
}
