
import 'package:flutter/material.dart';
import 'package:flutter_app/api/auth_service.dart';
import 'package:intl/intl.dart';

import '../widgets/custom_textfield.dart';

class Profile extends StatefulWidget {
  const Profile({super.key});

  @override
  State<Profile> createState() => _ProfileState();
}

class _ProfileState extends State<Profile> {
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
  String? gender;
  List categories = [];
  dynamic updateProfileData;
  int? expert;
  @override
  void initState() {
    // TODO: implement initState
    super.initState();
    getProfile();
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
                  "Profile",
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
                        profileHandle();
                      }
                    },
                    child: const Text("Save")),
                ]),
            ),
          ),
        ),
      ),
    );
  
  }
  getProfile()async{
    var profileDetails = await AuthService.getProfile();
    print(profileDetails);
    var categoryList = await AuthService.serviceCategory();
    print(categoryList);
    setState(() {
      nameCrtl.text = profileDetails["name"];
      mobileNumberCrtl.text = profileDetails["mobileNumber"];
      gender= profileDetails["gender"].toLowerCase();
      dateOfBirthCrtl.text = profileDetails["dateOfBirth"];
      cityCrtl.text = profileDetails["city"];
      areaCrtl.text = profileDetails["area"];
      addressCrtl.text = profileDetails["address"];
      expert = profileDetails["expert"];
      categories = categoryList;
      updateProfileData = profileDetails;
    });

  }
  profileHandle() async {
     print(updateProfileData);
      setState(() {
        updateProfileData["name"]= nameCrtl.text;
        updateProfileData["mobileNumber"]= mobileNumberCrtl.text;
        updateProfileData["dateOfBirth"]= dateOfBirthCrtl.text;
        updateProfileData["city"]= cityCrtl.text;
        updateProfileData["area"]= areaCrtl.text;
        updateProfileData["address"]= addressCrtl.text;
        updateProfileData["expert"]= expert;
      });
    var response  = await AuthService.updateProfile(updateProfileData);
    print(response);

  }
}
