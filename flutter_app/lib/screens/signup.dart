import 'package:flutter/material.dart';
import 'package:get/get.dart';
import '../services/screen_navigation.dart';
import '../widgets/custom_textfield.dart';
import 'signin.dart';

class SignUp extends StatefulWidget {
   final String? gender;
  const SignUp({
    Key? key,
    this.gender
    
    }): super(key: key);

  @override
  State<SignUp> createState() => _SignUpState();
}

class _SignUpState extends State<SignUp> {
  final GlobalKey<FormState> formKey = GlobalKey<FormState>();
  bool isShowPassword = false;
  
  var gender;
  
 
  
  //final TextEditingController gender = "male";
    passwordVisivility() {
      setState(() {
        isShowPassword = true;
        });
        Future.delayed(const Duration(seconds: 2))
            .then((value) => {
              setState(() {
              isShowPassword = false;
        })
      });
    }
  @override
  Widget build(BuildContext context) {
    double height = MediaQuery.of(context).size.height;
    double width = MediaQuery.of(context).size.width;
    return  Scaffold(
      body: SizedBox(
        height: height,
        width: width,
        
        child: SingleChildScrollView(
          child: Form(
            key: formKey,
            child: Column(
              children: [
               const Text(
                "Sign Up",
                style: TextStyle(fontSize: 30),
                ),
                const CustomTextField( 
                  labelText:"Name", 
                  hintText:"Enter your Name", 
                  prefixIcon: Icon(Icons.person),),
                const CustomTextField( 
                  labelText:"Email", 
                  hintText:"Enter your email", 
                  prefixIcon: Icon(Icons.email),),
                  const CustomTextField( 
                  labelText:"Phone Number", 
                  hintText:"Enter your phone number", 
                  prefixIcon: Icon(Icons.phone),),
                 
                 const Align(
                    alignment: Alignment.topLeft,
                    
                    child:  Text("Gender", style: TextStyle( 
                          fontSize: 18
                  
                      ),),
                  ),
                  RadioListTile(
                      title: const Text("Male"),
                      value: "male", 
                      groupValue: gender, 
                      onChanged: (value){
                        setState(() {
                            gender = value.toString();
                        });
                      },
                  ),
          
                  RadioListTile(
                      title: const Text("Female"),
                      value: "female", 
                      groupValue: gender, 
                      onChanged: (value){
                        setState(() {
                            gender = value.toString();
                        });
                      },
                  ),
          
                  RadioListTile(
                        title: const Text("Other"),
                        value: "other", 
                        groupValue: gender, 
                        onChanged: (value){
                          setState(() {
                              gender = value.toString();
                          });
                        },
                  ),
                  Container(
                    child: TextFormField(        
                onTap: () {
                  showDatePicker(
                    context: context,
                    initialDate:  DateTime.now(),
                    firstDate: DateTime(1990),
                    lastDate: DateTime(2100),
                  ).then((pickerDate) {
                    if (pickerDate != null) {
                      setState(() {
                      
                      });
                    }
                  });
                },
              ),
              ),
                const CustomTextField( 
                  labelText:"City", 
                  hintText:"Enter your city", 
                  prefixIcon: Icon(Icons.location_city),),
                  const CustomTextField( 
                  labelText:"Area", 
                  hintText:"Enter your area", 
                  prefixIcon: Icon(Icons.location_city),),
                const CustomTextField( 
                  labelText:"Address", 
                  hintText:"Enter your address", 
                  prefixIcon: Icon(Icons.location_city),),
                  const CustomTextField( 
                  labelText:"Expertise", 
                  hintText:"Enter your expertise", 
                  prefixIcon: Icon(Icons.work),),
                  const CustomTextField( 
                  labelText:"Password", 
                  hintText:"Enter your password", 
                  prefixIcon: Icon(Icons.lock), 
                  sufixIcon: Icon(Icons.visibility_off),),
                  ElevatedButton(onPressed: () {}, child: const Text("Signup")),
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
                  onTap: (){
                    Get.to(() => const SignIn());
                  },
                  child: const Text(
                    "Singin",
                    style: TextStyle(
                    fontSize: 18,
                    fontWeight: FontWeight.bold,
                    fontStyle: FontStyle.italic,
                    color: Colors.blue
                  ),
                    ),
                  )
              ],
            )
             ]
            ),
          ),
        ),
      ),
    );
  
  }
}