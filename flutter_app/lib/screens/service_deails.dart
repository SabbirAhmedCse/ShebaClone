import 'package:flutter/material.dart';
import 'package:flutter_app/api/mechanic_service.dart';
import 'package:flutter_app/screens/assigned_service_list.dart';
import 'package:get/get.dart';

import '../widgets/custome_listtile.dart';

class ServiceDetails extends StatefulWidget {
  const ServiceDetails({super.key});

  @override
  State<ServiceDetails> createState() => _ServiceDetailsState();
}

class _ServiceDetailsState extends State<ServiceDetails> {
  final GlobalKey<FormState> formKey = GlobalKey<FormState>();
  TextEditingController textarea = TextEditingController();
  var  serviceDetails;
  @override
  void initState() {
    serviceDetails = Get.arguments[0];
    print(serviceDetails);
  }

  

  @override
  Widget build(BuildContext context) {
    return SafeArea(
        child: Scaffold(
      appBar: AppBar(
        title: const Text("Duronto Sheba"),
        centerTitle: true,
      ),
      body: SingleChildScrollView(
        child: Container(
          margin: const EdgeInsets.fromLTRB(30, 30, 30, 10),
          child: Column(
            children: [
              Title(
                color: Colors.grey,
                child: const Text(
                  "Service Details",
                  style: TextStyle(fontSize: 30, fontWeight: FontWeight.bold),
                ),
              ),
              CustomListtile(
                title: "Customer Name",
                value: serviceDetails["customerName"],
              ),
              CustomListtile(
                title: "Category",
                value: serviceDetails["serviceCategory"],
              ),
              CustomListtile(
                title: "Sub-category",
                value: serviceDetails["serviceSubCategory"],
              ),
              CustomListtile(
                title: "Service Date",
                value: "${DateTime.parse(serviceDetails["serviceDate"].toString()).toLocal()}",
              ),
              CustomListtile(
                title: "Service Status",
                value: serviceDetails["serviceStatus"],
              ),
              CustomListtile(
                title: "Description",
                value: serviceDetails["description"],
              ),
              CustomListtile(
                title: "Address",
                value: serviceDetails["address"],
              ),
              Row(
                children: [
                  ElevatedButton(
                    onPressed: () => showDialog<String>(
                      context: context,
                      builder: (BuildContext context) => AlertDialog(
                        title: const Text('Are you sure?'),
                        content: const Text('you want to accept this service?'),
                        actions: <Widget>[
                          TextButton(
                            onPressed: () => Navigator.pop(context, 'Cancel'),
                            child: const Text('Cancel'),
                          ),
                          TextButton(
                            onPressed: () {
                              acceptservice();
                            },
                            child: const Text('OK'),
                          ),
                        ],
                      ),
                    ),
                    style: ElevatedButton.styleFrom(
                      backgroundColor: Colors.blue,
                      foregroundColor: Colors.white,
                    ),
                    child: const Text(
                      "Accept",
                      style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
                    ),
                  ),
                  ElevatedButton(
                    onPressed: () => showDialog<String>(
                      context: context,
                      builder: (BuildContext context) => AlertDialog(
                        title: const Text('Are you reject this service?'),
                        content:  SizedBox(
                          height: 140,
                          child: Column(
                            
                            children: [
                              Text("Service Category : ${serviceDetails["serviceSubCategory"]}"),
                              Text("Service Category : ${serviceDetails["description"]}"),
                               Container(
                                margin: const EdgeInsets.only(top: 10),
                                  decoration: const BoxDecoration(
                                    color: Colors.white,
                                    borderRadius: BorderRadius.all(Radius.circular(10)),
                                  ),
                                 child: TextField(
                                    controller: textarea,
                                    keyboardType: TextInputType.multiline,
                                    maxLines: 3,
                                     decoration: const InputDecoration(
                                    border:  OutlineInputBorder(
                                        borderSide: BorderSide(color: Colors.black),
                                        borderRadius: BorderRadius.all(Radius.circular(10))),
                                        labelText: "Description",
                                        hintText: "Reject Reason",
                                      ),
                                   ),
                               ),
                            ],
                          ),
                        ),
                        actions: <Widget>[
                          TextButton(
                            onPressed: () => Navigator.pop(context, 'Cancel'),
                            child: const Text('Cancel'),
                          ),
                          TextButton(
                            onPressed: () {
                              rejectService();
                            },
                            child: const Text('OK'),
                          ),
                        ],
                      ),
                    ),
                    style: ElevatedButton.styleFrom(
                      backgroundColor: Colors.red,
                      foregroundColor: Colors.white,
                    ),
                    child: const Text(
                      "Reject",
                      style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
                    ),
                  ),
                ],
              )
            ],
          ),
        ),
      ),
    ));
  }

  acceptservice() async{
    var data = {
      "id":serviceDetails["id"],
      "serviceStatus":"Pending"
    };
    Navigator.pop(context, 'OK');
    var res = await MechanicService.acceptService(data);
    print(res);
    Get.to(()=>const AssignedService());
    ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content:  Text(res))
      );
  }
  rejectService()async{
    var data = {"id": serviceDetails["id"], "reason": textarea.text};
    Navigator.pop(context, 'OK');
    
    String res = await MechanicService.rejectService(data);
    Get.to(()=>const AssignedService());
     print(res);
   ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content:  Text(res))
      );
  }
}
