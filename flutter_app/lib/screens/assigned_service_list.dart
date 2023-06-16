import 'package:flutter/material.dart';
import 'package:flutter_app/api/auth_service.dart';
import 'package:flutter_app/screens/service_deails.dart';
import 'package:flutter_app/screens/signin.dart';
import 'package:get/get.dart';

class AssignedService extends StatefulWidget {
  const  AssignedService({super.key});
  @override
  State<AssignedService> createState() => _AssignedServiceState();
}
logout()async{
  String response = await AuthService.logout();
  SnackBar(content: Text(response),);
  Get.to(()=> const SignIn());
}

class _AssignedServiceState extends State<AssignedService> {
  var serviceList = [
    {
    "category":"Electric",
    "subCategory": "Fan",
    "serviceStatus":"approved",
    "serviceDate": "2020-07-03",
    "description": "Fan is not working"
   },
    {
    "category":"Electric",
    "subCategory": "Fan",
    "serviceStatus":"approved",
    "serviceDate": "2020-07-03",
    "description": "Fan is not working"
   },
   {
    "category":"Electric",
    "subCategory": "Fan",
    "serviceStatus":"approved",
    "serviceDate": "2020-07-03",
    "description": "Fan is not working"
   },
   {
    "category":"Electric",
    "subCategory": "Fan",
    "serviceStatus":"approved",
    "serviceDate": "2020-07-03",
    "description": "Fan is not working"
   },
   {
    "category":"Electric",
    "subCategory": "Fan",
    "serviceStatus":"approved",
    "serviceDate": "2020-07-03",
    "description": "Fan is not working"
   },
   {
    "category":"Electric",
    "subCategory": "Fan",
    "serviceStatus":"approved",
    "serviceDate": "2020-07-03",
    "description": "Fan is not working"
   },
   {
    "category":"Electric",
    "subCategory": "Fan",
    "serviceStatus":"approved",
    "serviceDate": "2020-07-03",
    "description": "Fan is not working"
   },
   {
    "category":"Electric",
    "subCategory": "Fan",
    "serviceStatus":"approved",
    "serviceDate": "2020-07-03",
    "description": "Fan is not working"
   },
    {
    "category":"Electric",
    "subCategory": "Fan",
    "serviceStatus":"approved",
    "serviceDate": "2020-07-03",
    "description": "Fan is not working"
   },
    {
    "category":"Electric",
    "subCategory": "Fan",
    "serviceStatus":"approved",
    "serviceDate": "2020-07-03",
    "description": "Fan is not working"
   },
   {
    "category":"Electric",
    "subCategory": "Fan",
    "serviceStatus":"approved",
    "serviceDate": "2020-07-03",
    "description": "Fan is not working"
   },
   {
    "category":"Electric",
    "subCategory": "Fan",
    "serviceStatus":"approved",
    "serviceDate": "2020-07-03",
    "description": "Fan is not working"
   },
   {
    "category":"Electric",
    "subCategory": "Fan",
    "serviceStatus":"approved",
    "serviceDate": "2020-07-03",
    "description": "Fan is not working"
   },
   {
    "category":"Electric",
    "subCategory": "Fan",
    "serviceStatus":"approved",
    "serviceDate": "2020-07-03",
    "description": "Fan is not working"
   },
   {
    "category":"Electric",
    "subCategory": "Fan",
    "serviceStatus":"approved",
    "serviceDate": "2020-07-03",
    "description": "Fan is not working"
   },
   {
    "category":"Electric",
    "subCategory": "Fan",
    "serviceStatus":"approved",
    "serviceDate": "2020-07-03",
    "description": "Fan is not working"
   },
    {
    "category":"Electric",
    "subCategory": "Fan",
    "serviceStatus":"approved",
    "serviceDate": "2020-07-03",
    "description": "Fan is not working"
   },
    {
    "category":"Electric",
    "subCategory": "Fan",
    "serviceStatus":"approved",
    "serviceDate": "2020-07-03",
    "description": "Fan is not working"
   },
   {
    "category":"Electric",
    "subCategory": "Fan",
    "serviceStatus":"approved",
    "serviceDate": "2020-07-03",
    "description": "Fan is not working"
   },
   {
    "category":"Electric",
    "subCategory": "Fan",
    "serviceStatus":"approved",
    "serviceDate": "2020-07-03",
    "description": "Fan is not working"
   },
   {
    "category":"Electric",
    "subCategory": "Fan",
    "serviceStatus":"approved",
    "serviceDate": "2020-07-03",
    "description": "Fan is not working"
   },
   {
    "category":"Electric",
    "subCategory": "Fan",
    "serviceStatus":"approved",
    "serviceDate": "2020-07-03",
    "description": "Fan is not working"
   },
   {
    "category":"Electric",
    "subCategory": "Fan",
    "serviceStatus":"approved",
    "serviceDate": "2020-07-03",
    "description": "Fan is not working"
   },
   {
    "category":"Electric",
    "subCategory": "Fan",
    "serviceStatus":"approved",
    "serviceDate": "2020-07-03",
    "description": "Fan is not working"
   },
    {
    "category":"Electric",
    "subCategory": "Fan",
    "serviceStatus":"approved",
    "serviceDate": "2020-07-03",
    "description": "Fan is not working"
   },
    {
    "category":"Electric",
    "subCategory": "Fan",
    "serviceStatus":"approved",
    "serviceDate": "2020-07-03",
    "description": "Fan is not working"
   },
   {
    "category":"Electric",
    "subCategory": "Fan",
    "serviceStatus":"approved",
    "serviceDate": "2020-07-03",
    "description": "Fan is not working"
   },
   {
    "category":"Electric",
    "subCategory": "Fan",
    "serviceStatus":"approved",
    "serviceDate": "2020-07-03",
    "description": "Fan is not working"
   },
   {
    "category":"Electric",
    "subCategory": "Fan",
    "serviceStatus":"approved",
    "serviceDate": "2020-07-03",
    "description": "Fan is not working"
   },
   {
    "category":"Electric",
    "subCategory": "Fan",
    "serviceStatus":"approved",
    "serviceDate": "2020-07-03",
    "description": "Fan is not working"
   },
   {
    "category":"Electric",
    "subCategory": "Fan",
    "serviceStatus":"approved",
    "serviceDate": "2020-07-03",
    "description": "Fan is not working"
   },
   {
    "category":"Electric",
    "subCategory": "Fan",
    "serviceStatus":"approved",
    "serviceDate": "2020-07-03",
    "description": "Fan is not working"
   },
  ];
  @override
  Widget build(BuildContext context) {
    return SafeArea(
        child: Scaffold(
          appBar: AppBar(
            title: const Text('Sheba App'),
            titleSpacing: 0,
            centerTitle: true,
            toolbarOpacity: .7,
            elevation: 30,
            ),
          drawer: Drawer(
            child: ListView(
              children:  [
                  const  DrawerHeader(
                    padding: EdgeInsets.all(0),
                  child: UserAccountsDrawerHeader(
                    decoration: BoxDecoration(color: Colors.black),
                    accountName: Text("Sabbir Ahmed"), 
                    accountEmail:Text( "sabbir.cse.18@gmail.com")
                    ),
                ),
                ListTile(
                  leading: const Icon(Icons.person),
                  title: const Text("Profile"),
                  onTap: (){},
                ),
                ListTile(leading: const Icon(Icons.work),
                  title: const Text("Service"),
                  onTap: (){},
                ),
                ListTile(
                  leading: const Icon(Icons.logout),
                  title: const Text("Logout"),
                  onTap: (){logout();},
                ),
              ],
            ),
          ),
          body:  ListView.builder(
                itemCount: serviceList.length,
                itemBuilder: (BuildContext context, int index) {
                  return GestureDetector(
                    onTap: () {
                      Get.to(()=>const ServiceDetails());
                    },
                    child: Container(
                      margin: EdgeInsets.all(5),
                      width: double.infinity,
                      height: 150,
                      child: Column(
                        children: [
                            ListTile(
                            title: Text("Sub-category : ${serviceList[index]["subCategory"]}",),
                            ),
                            ListTile(
                            title: Text("Service Status : ${serviceList[index]["serviceStatus"]}",),
                            ),
                            ListTile(
                            title: Text("Service Date : ${serviceList[index]["serviceDate"]}",),
                            ),
                        ],
                        
                      ),
                    ),
                  );
                },
              ),
        bottomNavigationBar: BottomNavigationBar(items: const <BottomNavigationBarItem> [
          BottomNavigationBarItem(icon: Icon(Icons.work)),
          BottomNavigationBarItem(icon: Icon(Icons.pause)),
          BottomNavigationBarItem(icon: Icon(Icons.pending_actions)),
          BottomNavigationBarItem(icon: Icon(Icons.done)),
          
        ],
        currentIndex: _selectedIndex,
        selectedItemColor: Colors.amber[800],
        onTap: _onItemTapped,
        ),
      ),
    );
  }
}