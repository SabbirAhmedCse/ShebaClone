import 'package:flutter/material.dart';

import '../widgets/custome_listtile.dart';

class ServiceReject extends StatefulWidget {
  const ServiceReject({super.key});

  @override
  State<ServiceReject> createState() => _ServiceRejectState();
}

class _ServiceRejectState extends State<ServiceReject> {

  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Scaffold(
        appBar: AppBar(
          title: const Text("Duronto Sheba"),
          centerTitle: true,
        ),
        body:  Column(
          children: [
            Title(
              color: Colors.redAccent,
              child: const Text(
                "Service Reject!",
                style: TextStyle(
                  fontSize: 30,
                  fontWeight: FontWeight.bold
                ),
              ),
            ),
            CustomListtile(
              title: "Category: ",
              value: "",
            ),
            CustomListtile(
              title: "Sub-category: ",
              value: "",
            ),
            CustomListtile(
              title: "Service Date: ",
              value: "",
            ),
            Row(
              children: [
                ElevatedButton(
                  onPressed: (){}, 
                  style: ElevatedButton.styleFrom(
                    backgroundColor: Colors.blue, 
                    foregroundColor: Colors.white, 
                  ),
                  child: const Text(
                    "Submit",
                    style:  TextStyle(
                      fontSize: 20,
                      fontWeight: FontWeight.bold   
                    ),
                  ),
                ),

                ElevatedButton(
                  onPressed: (){},
                  style: ElevatedButton.styleFrom(
                    backgroundColor: Colors.red, 
                    foregroundColor: Colors.white, 
                  ),
                  child: const Text(
                    "Cancel",
                    style: TextStyle(
                      fontSize: 20,
                      fontWeight: FontWeight.bold
                    ),
                  ),
                )
              ],
            )
          ],
        ),
      )
    );
  }
}