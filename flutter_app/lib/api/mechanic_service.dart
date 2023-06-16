import 'dart:async';
import '../config/config.dart';
import 'api_service.dart';

class MechanicService {
  static Future<dynamic> allAssignedService(int pageNumber, int pageSize) async {
    try {
      String url = "${Config.baseApiUrl}/ServiceRequest/allocatedService?pageNumber=$pageNumber&pageSize=$pageSize";
      var response = await ApiService.get(url);
      return response;
    } catch (e) {
      throw Exception(e);
    }
  }

  static Future<dynamic> serviceDetails(id) async {
    try {
      String url = "${Config.baseApiUrl}/ServiceRequest/details?Id=$id";
      var response =await ApiService.get(url);
      return response;
    } catch (e) {
      throw Exception(e);
    }
  }
static Future<dynamic> serviceCategory() async {
    try {
      String url = "${Config.baseApiUrl}/Service/category";
      var response =await ApiService.get(url);
      return response;
    } catch (e) {
      throw Exception(e);
    }
  }
  

  static Future<dynamic> acceptService(data) async {
    try {
      String url = "${Config.baseApiUrl}/ServiceRequest/accept";
      var response =await ApiService.put(url, data);
      return response;
    } catch (e) {
      throw Exception(e);
    }
  }

  static Future<dynamic> rejectService(data) async {
    try {
      String url = "${Config.baseApiUrl}/ServiceRequest/reject";
      var response =await ApiService.post(url, data);
      return response;
    } catch (e) {
      throw Exception(e);
    }
  }
}
