import 'package:flutter/material.dart';
import 'package:flutter_app/api/auth_service.dart';
import 'package:flutter_app/screens/signup.dart';
import 'package:get/get.dart';
import '../widgets/custom_textfield.dart';
import 'home.dart';

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
                validator: (value){
                   if(value!.isEmpty){
                    return "Enter email.";
                  }
                  bool emailValid = RegExp(r"^[a-zA-Z0-9.a-zA-Z0-9.!#$%&'*+-/=?^_`{|}~]+@[a-zA-Z0-9]+\.[a-zA-Z]+").hasMatch(value);
                  if(!emailValid){
                    return "Enter valid email";
                  }
                },
              ),
              CustomTextField(
                  controller: passCrtl,
                  labelText: "Password",
                  hintText: "Enter your password",
                  obscureText: !isShowPassword,
                  validator: (value){
                   if(value!.isEmpty){
                    return "Enter password.";
                  }
                  if(value.length <6){
                    return "Password must have gater than 6 latter!";
                  }
                },
                  prefixIcon: const Icon(Icons.lock),
                  sufixIcon: IconButton(
                      onPressed: () {
                        passwordVisivility();
                      },
                      icon: isShowPassword
                          ? const Icon(Icons.visibility)
                          : const Icon(Icons.visibility_off)
                    )
                  ),
              Container(
                margin: const EdgeInsets.fromLTRB(30, 30, 30, 10),
                child: Align(
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
              ),
              ElevatedButton(
                  onPressed: () {
                    if(formKey.currentState!.validate()){
                        signIn();
                    }
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
  signIn() async {
    var data = {"email": emailCrtl.text, "password": passCrtl.text};
    print(data);
    dynamic authData = await AuthService.signin(data);
    print(authData);
    if (authData == "mechanic") {
      ScaffoldMessenger.of(context)
          .showSnackBar(const SnackBar(content: Text("Signin Successfully")));
     return Get.to(() => const Home());
    }
    else if (authData == "admin") {
      ScaffoldMessenger.of(context)
          .showSnackBar(SnackBar(content: Text("You are not valid user")));
     return Get.to(() => const Home());
    } 
    else if (authData == "customer") {
      ScaffoldMessenger.of(context)
          .showSnackBar(SnackBar(content: Text("You are not valid user")));
     return Get.to(() => const Home());
    }
    else {
      ScaffoldMessenger.of(context)
          .showSnackBar(SnackBar(content: Text(authData)));
     return Get.to(() => const SignIn());
    }
  }
}
