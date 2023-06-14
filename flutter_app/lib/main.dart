import 'package:flutter/material.dart';
import 'package:flutter_app/screens/signin.dart';

void main() {
  runApp(const ShebaApp());
}

class ShebaApp extends StatelessWidget {
  const ShebaApp({super.key});
  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      debugShowCheckedModeBanner: false,
      home: SignIn(),
    );
  }
}