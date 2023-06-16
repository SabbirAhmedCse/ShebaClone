import 'package:flutter/material.dart';
import 'package:flutter_app/api/auth_service.dart';
import 'package:flutter_app/models/signin_model.dart';
import 'package:flutter_app/screens/assigned_service_list.dart';
import 'package:flutter_app/screens/signup.dart';
import 'package:get/get.dart';
import '../widgets/custom_textfield.dart';

class SignIn extends StatefulWidget {
  const SignIn({super.key});

  @override
  State<SignIn> createState() => _SignInState();
}


class _SignInState extends State<SignIn> {
  final GlobalKey<FormState> formKey = GlobalKey<FormState>();
  final TextEditingController emailCrtl = TextEditingController();
  final TextEditingController passCrtl = TextEditingController();
  bool isShowPassword = false;

  passwordVisivility() {
    setState(() {
      isShowPassword = true;
    });
    Future.delayed(const Duration(seconds: 2)).then((value) => {
          setState(() {
            isShowPassword = false;
          })
        });
  }

  signIn() async {
    var data = {"email": emailCrtl.text, "password": passCrtl.text};
    dynamic authData =await AuthService.signin(data);

    if(authData["type"]! == "mechanic"){
      Get.to(()=> const AssignedService());
    }
    else{
      Get.to(()=> const SignIn());
    }
    print(authData);
  }

  @override
  Widget build(BuildContext context) {
    double height = MediaQuery.of(context).size.height;
    double width = MediaQuery.of(context).size.width;
    return Scaffold(
      body: GestureDetector(
        behavior: HitTestBehavior.opaque,
        onTap: () {
          FocusManager.instance.primaryFocus?.unfocus();
        },
        child: SizedBox(
          height: height,
          width: width,
          child: Form(
            key: formKey,
            child:
                Column(mainAxisAlignment: MainAxisAlignment.center, children: [
              const Text(
                "Sign In",
                style: TextStyle(fontSize: 30),
              ),
              CustomTextField(
                controller: emailCrtl,
                labelText: "E-mail",
                hintText: "Enter your Email",
                prefixIcon: const Icon(Icons.email),
              ),
              CustomTextField(
                  controller: passCrtl,
                  labelText: "Password",
                  hintText: "Enter your password",
                  obscureText: !isShowPassword,
                  prefixIcon: const Icon(Icons.lock),
                  sufixIcon: IconButton(
                      onPressed: () {
                        passwordVisivility();
                      },
                      icon: isShowPassword
                          ? const Icon(Icons.visibility)
                          : const Icon(Icons.visibility_off))),
              Align(
                alignment: Alignment.topRight,
                child: InkWell(
                  onTap: () {},
                  child: const Text(
                    "forget password?",
                    style: TextStyle(
                        fontSize: 18,
                        fontWeight: FontWeight.bold,
                        fontStyle: FontStyle.italic,
                        color: Colors.blue),
                  ),
                ),
              ),
              ElevatedButton(
                  onPressed: () {
                    signIn();
                    
                  },
                  child: const Text(
                    "Signin",
                    style: TextStyle(
                      fontWeight: FontWeight.bold,
                    ),
                  )),
              const SizedBox(
                height: 50,
              ),
              Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  const Text(
                    "Not Signup yet? ",
                    style: TextStyle(
                      fontSize: 18,
                      fontWeight: FontWeight.bold,
                      fontStyle: FontStyle.italic,
                    ),
                  ),
                  InkWell(
                    onTap: () {
                      Get.to(() => const SignUp());
                    },
                    child: const Text(
                      "Signup",
                      style: TextStyle(
                          fontSize: 18,
                          fontWeight: FontWeight.bold,
                          fontStyle: FontStyle.italic,
                          color: Colors.blue),
                    ),
                  )
                ],
              )
            ]),
          ),
        ),
      ),
    );
  }
}
