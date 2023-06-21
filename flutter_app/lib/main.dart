import 'package:flutter/material.dart';
import 'package:flutter_app/screens/home.dart';
import 'package:flutter_app/screens/splash.dart';
import 'package:get/get_navigation/get_navigation.dart';

void main() {
  runApp(const ShebaApp());
}

class ShebaApp extends StatelessWidget {
  const ShebaApp({super.key});
  @override
  Widget build(BuildContext context) {
    return const  GetMaterialApp(
      debugShowCheckedModeBanner: false,
      home: Splash(),
    );
  }
}