import 'package:flutter/material.dart';
import 'package:get/get.dart';

import '../api/auth_service.dart';
import 'assigned_service_list.dart';
import 'profile.dart';
import 'signin.dart';

class Home extends StatefulWidget {
  const Home({super.key});

  @override
  State<Home> createState() => _HomeState();
}

class _HomeState extends State<Home> {
  String? userName;
  String? userEmail;

  @override
  void initState() {
    super.initState();
    getAuthData();    
  }
  @override
  Widget build(BuildContext context) {
    return  SafeArea(
        child: Scaffold(
          appBar: AppBar(
            title: const Text('Duranto Sheba'),
            titleSpacing: 0,
            centerTitle: true,
            toolbarOpacity: .7,
            elevation: 30,
            ),
          drawer: Drawer(
            child: ListView(
              children:  [
                    DrawerHeader(
                    padding:const EdgeInsets.all(0),
                  child: UserAccountsDrawerHeader(
                    decoration:const BoxDecoration(color: Colors.black),
                    currentAccountPicture: const Center(
                      child:  Icon(Icons.abc),
                    ),
                    accountName: Text("$userName"), 
                    accountEmail:Text( "$userEmail")
                    ),
                ),
                ListTile(
                  leading: const Icon(Icons.person),
                  title: const Text("Profile"),
                  onTap: (){
                    Get.to(()=>const Profile());
                  },
                ),
                ListTile(leading: const Icon(Icons.work),
                  title: const Text("Service"),
                  onTap: (){
                    Get.to(()=>const AssignedService());
                  },
                ),
                ListTile(
                  leading: const Icon(Icons.logout),
                  title: const Text("Logout"),
                  onTap: (){logout();},
                ),
              ],
            ),
          ),
          body: const SizedBox(
            height: double.infinity,
            width: double.infinity,
            child: Center(
              child: Text("Wellcome To duronto sheba!"),
            )
            ),
         
        )
      );
  }
  getAuthData()async{
    var authData = await AuthService.getAuthData();
    setState(() {
      userName= authData["name"];
      userEmail= authData["email"];
    });

  }
    logout()async{
    String response = await AuthService.logout();
    SnackBar(content: Text(response),);
    Get.to(()=> const SignIn());
  }
}