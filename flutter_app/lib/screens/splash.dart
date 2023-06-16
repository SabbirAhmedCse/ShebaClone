import 'package:flutter/material.dart';
import 'package:flutter_app/api/auth_service.dart';
import 'package:flutter_app/screens/signin.dart';
import 'package:get/get.dart';

import 'home.dart';

class Splash extends StatefulWidget {
  const Splash({super.key});

  @override
  State<Splash> createState() => _SplashState();
}

class _SplashState extends State<Splash> {
  Future chooseScreen() async {
    var authData = await AuthService.getAuthData();
    if (authData == null || authData == "") {
      Get.to(()=> const SignIn());
    }
    else if(authData["type"]=="mechanic") {
      Get.to(()=> const Home());
    }
     else {
      Get.to(()=> const SignIn());
    }
  }

  @override
  void initState() {
    Future.delayed(
      const Duration(seconds: 3),
      () => chooseScreen(),
    );
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return const  SafeArea(
      child: Scaffold(
        body:  Center(
          child:  Expanded(
                flex: 1,
                child:  Text(
                  "Duronto Sheba",
                  style:  TextStyle(
                      fontSize: 30, 
                      fontWeight: FontWeight.w900,
                      color: Colors.redAccent,
                      fontStyle: FontStyle.italic
                      ),
                ),
              )
        ),
      ),
    );
  }
}
