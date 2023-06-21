import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:intl/intl.dart';
import '../api/auth_service.dart';
import '../widgets/custom_textfield.dart';
import 'home.dart';
import 'signin.dart';

class SignUp extends StatefulWidget {
  const SignUp({super.key});

  @override
  State<SignUp> createState() => _SignUpState();
}

class _SignUpState extends State<SignUp> {
  final GlobalKey<FormState> formKey = GlobalKey<FormState>();
  final TextEditingController nameCrtl = TextEditingController();
  final TextEditingController emailCrtl = TextEditingController();
  final TextEditingController passwordCrtl = TextEditingController();
  final TextEditingController mobileNumberCrtl = TextEditingController();
  final TextEditingController dateOfBirthCrtl = TextEditingController();
  final TextEditingController cityCrtl = TextEditingController();
  final TextEditingController areaCrtl = TextEditingController();
  final TextEditingController addressCrtl = TextEditingController();
  String type="mechanic";
  String gender="male";
  List categories = [];

  bool isShowPassword = false;
  
  int? expert;

  
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
  void initState() {
    super.initState();
    getServiceCategory();
  }

  @override
  Widget build(BuildContext context) {
    double height = MediaQuery.of(context).size.height;
    double width = MediaQuery.of(context).size.width;
    return Scaffold(
      body: SafeArea(
        child: SizedBox(
          height: height,
          width: width,
          child: SingleChildScrollView(
            child: Form(
              key: formKey,
              child: Column(children: [
                const Text(
                  "Sign Up",
                  style: TextStyle(fontSize: 30),
                ),
                CustomTextField(
                  controller: nameCrtl,
                  labelText: "Name",
                  hintText: "Enter your Name",
                  prefixIcon: const Icon(Icons.person),
                  validator: (value){
                    if(value!.isEmpty){
                      return "Enter name";
                    }
                  },
                ),
                CustomTextField(
                  controller: emailCrtl,
                  labelText: "Email",
                  hintText: "Enter your email",
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
                  controller: passwordCrtl,
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
                          : const Icon(Icons.visibility_off)
                    ),
                    validator: (value){
                      if(value!.isEmpty){
                        return "Enter password.";
                      }
                      if(value.length <6){
                        return "Password must have gater than 6 latter!";
                      }
                    },
                  ),
                CustomTextField(
                  controller: mobileNumberCrtl,
                  labelText: "Phone Number",
                  hintText: "Enter your phone number",
                  prefixIcon: const Icon(Icons.phone),
                  validator: (value){
                   if(value!.isEmpty){
                    return "Enter mobile number.";
                  }
                  bool numbervalid = RegExp(r'(^(?:[+0]9)?[0-9]{10,12}$)').hasMatch(value);
                  if(!numbervalid){
                    return "Enter valid mobile number!";
                  }
                  if(value.length<11 && value.length<12){
                    return "Enter bd mobile number!";
                  }
                },
                ),
                Container(
                  margin: const EdgeInsets.fromLTRB(30, 30, 30, 10),
                  child: Column(
                    children: [
                       const Align(
                        alignment: Alignment.topLeft,
                        child: Text(
                          "Gender",
                          style: TextStyle(fontSize: 18),
                        ),
                      ),
                      RadioListTile(
                        title: const Text("Male"),
                        value: "male",
                        groupValue: gender,
                        onChanged: (value) {
                          setState(() {
                            gender = value.toString();
                          });
                        },
                      ),
                      RadioListTile(
                        title: const Text("Female"),
                        value: "female",
                        groupValue: gender,
                        onChanged: (value) {
                          setState(() {
                            gender = value.toString();
                          });
                        },
                      ),
                      RadioListTile(
                        title: const Text("Other"),
                        value: "other",
                        groupValue: gender,
                        onChanged: (value) {
                          setState(() {
                            gender = value.toString();
                          });
                        },
                      )
                    ],
                  ),
                ),
                Container(
                  margin: const EdgeInsets.fromLTRB(30, 30, 30, 10),
                  decoration: const BoxDecoration(
                    color: Colors.white,
                    borderRadius: BorderRadius.all(Radius.circular(10)),
                  ),
                  child: TextFormField(
                    controller: dateOfBirthCrtl,
                    decoration:const InputDecoration( 
                     icon: Icon(Icons.calendar_today),
                     labelText: "Enter your date of birth" 
                    ),
                    onTap: () async {
                    DateTime? pickedDate = await showDatePicker(
                        context: context, initialDate: DateTime.now(),
                        firstDate: DateTime(1950), 
                        lastDate: DateTime(2101)
                    );
                    
                    if(pickedDate != null ){
                        print(pickedDate);  
                        String formattedDate = DateFormat('yyyy-MM-dd').format(pickedDate); 
                        print(formattedDate); 
                        setState(() {
                           dateOfBirthCrtl.text = formattedDate; 
                        });
                    }else{
                        print("Date is not selected");
                    }
                  },
                    ),
                  ),
                CustomTextField(
                  controller: cityCrtl,
                  labelText: "City",
                  hintText: "Enter your city",
                  prefixIcon: Icon(Icons.location_city),
                ),
                CustomTextField(
                  controller: areaCrtl,
                  labelText: "Area",
                  hintText: "Enter your area",
                  prefixIcon: const Icon(Icons.location_city),
                  
                ),
                CustomTextField(
                  controller: addressCrtl,
                  labelText: "Address",
                  hintText: "Enter your address",
                  prefixIcon: Icon(Icons.location_city),
                ),
                Container( 
                  margin: const EdgeInsets.fromLTRB(30, 30, 30, 10),
                  decoration: const BoxDecoration(
                    color: Colors.white,
                  ),
                child:DropdownButton(
                    isExpanded: true,
                    hint: const Text("Select Expertise"),
                    items: categories.map((category){
                      print(category);
                      return DropdownMenuItem(
                        value: category["id"],
                        child: Text(category["categoryName"]), 
                      );
                      }).toList(), 
                      value: expert,
                      onChanged: (value){
                           setState(() {
                             expert = value as int; 
                           });
                      },
                ),
                ),
                ElevatedButton(
                    onPressed: () {
                      if(formKey.currentState!.validate()){
                        signUpHandle();
                      }
                    },
                    child: const Text("Signup")),
                Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    const Text(
                      "Allready have an account? ",
                      style: TextStyle(
                        fontSize: 18,
                        fontWeight: FontWeight.bold,
                        fontStyle: FontStyle.italic,
                      ),
                    ),
                    InkWell(
                      onTap: () {
                        Get.to(() => const SignIn());
                      },
                      child: const Text(
                        "Singin",
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
      ),
    );
  }

  getServiceCategory() async {
    var profileDetails  = await AuthService.getProfile();
    var categoryList = await AuthService.serviceCategory();
    print(categoryList);
    
    setState(() {
      nameCrtl.text = profileDetails["name"];
      mobileNumberCrtl.text = profileDetails["mobileNumber"];
      gender = profileDetails["gender"];
      dateOfBirthCrtl.text = profileDetails["dateOfBirth"];
      cityCrtl.text = profileDetails["city"];
      areaCrtl.text = profileDetails["area"];
      addressCrtl.text = profileDetails["address"];
      expert = profileDetails["expert"];
      categories = categoryList;
    });
  }

  signUpHandle() async {
    var data = {
      "type": type,
      "name": nameCrtl.text,
      "email": emailCrtl.text,
      "password": passwordCrtl.text,
      "mobileNumber": mobileNumberCrtl.text,
      "gender": gender,
      "dateOfBirth": dateOfBirthCrtl.text,
      "city": cityCrtl.text,
      "area": areaCrtl.text,
      "address": addressCrtl.text,
    };
    print(data);
    dynamic authData = await AuthService.signup(data);
   if (authData == "mechanic") {
      ScaffoldMessenger.of(context)
          .showSnackBar(const SnackBar(content: Text("Sign up successfully")));
     return Get.to(() => const Home());
    }
    else if (authData == "admin") {
      ScaffoldMessenger.of(context)
          .showSnackBar(const SnackBar(content: Text("You are not valid user")));
     return Get.to(() => const SignUp());
    } 
    else if (authData == "customer") {
      ScaffoldMessenger.of(context)
          .showSnackBar(const SnackBar(content: Text("You are not valid user")));
     return Get.to(() => const SignUp());
    }
    else {
      ScaffoldMessenger.of(context)
          .showSnackBar(SnackBar(content: Text(authData)));
     return Get.to(() => const SignUp());
    }
  }
}
