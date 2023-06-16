import 'package:flutter/material.dart';
import 'package:flutter_app/api/auth_service.dart';
import 'package:flutter_app/screens/service_deails.dart';
import 'package:flutter_app/screens/signin.dart';
import 'package:get/get.dart';

import '../api/mechanic_service.dart';
import '../models/service_request.dart';

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
  final int _selectedIndex = 1;
  List serviceList = [];
  @override
  void initState() {
    super.initState();
    requestService();
  }
  requestService() async{
    var  list = await MechanicService.allAssignedService(1,50) ;
      setState(() {
        serviceList = list ;
      });
      print(serviceList);
  }
 @override
  Widget build(BuildContext context) {
    return SafeArea(
        child: Scaffold(
          appBar: AppBar(
            title: const Text('Assigned Service'),
            titleSpacing: 0,
            centerTitle: true,
            toolbarOpacity: .7,
            elevation: 30,
            ),
          body:  ListView.builder(
                itemCount: serviceList.length,
                itemBuilder: (BuildContext context, int index) {
                  return GestureDetector(
                    onTap: () {
                      Get.to(()=>const ServiceDetails(),arguments: [serviceList[index]]);
                    },
                    child: Card(
                      margin: EdgeInsets.all(5),
                      child: Column(
                        children: [
                            ListTile(
                            title: Text("Sub-category : ${serviceList[index]["serviceSubCategory"]}",),
                            ),
                            ListTile(
                            title: Text("Service Status : ${serviceList[index]["serviceStatus"]}",),
                            ),
                            ListTile(
                            title: Text("Service Date : ${DateTime.parse(serviceList[index]["serviceDate"].toString()).toLocal()}",),
                            ),
                        ],
                        
                      ),
                    ),
                  );
                },
              ),
          bottomNavigationBar: BottomNavigationBar(
            currentIndex: 2,
            items: const [
              BottomNavigationBarItem(
                  icon: Icon(Icons.work),
                  label: "All"
                ),
              BottomNavigationBarItem(
                  icon: Icon(Icons.pending_actions),
                  label: "Pending",
                ),
              BottomNavigationBarItem(
                  icon: Icon(Icons.done_all),
                  label: "Done"
                ),
            ],
            onTap: (int index){
              filterService(index, context);
            },
          ),
        ),
    );
  }
  
   filterService(int index, context) {
    if(index==0){
      return ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content:  Text("All pending"))
      );
    }
    if(index==1){
      return ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content:  Text("Pending Work"))
      );
    }
    if(index==2){
      return ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content:  Text("Done work"))
      );
    }
  }
}