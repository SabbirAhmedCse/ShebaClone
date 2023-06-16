import 'package:flutter/material.dart';

import '../widgets/custome_listtile.dart';

class ServiceDetails extends StatefulWidget {
  const ServiceDetails({super.key});

  @override
  State<ServiceDetails> createState() => _ServiceDetailsState();
}

class _ServiceDetailsState extends State<ServiceDetails> {
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
              color: Colors.grey,
              child: const Text(
                "Service Details",
                style: TextStyle(
                  fontSize: 30,
                  fontWeight: FontWeight.bold
                ),
              ),
            ),
            CustomListtile(
              title: "Category: ",
              subtitle: "",
            ),
            CustomListtile(
              title: "Sub-category: ",
              subtitle: "",
            ),
            CustomListtile(
              title: "Service Date: ",
              subtitle: "",
            ),
            CustomListtile(
              title: "Service Status: ",
              subtitle: "",
            ),
            CustomListtile(
              title: "Description: ",
              subtitle: "",
            ),
            CustomListtile(
              title: "Address: ",
              subtitle: "",
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
                    "Accept",
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
                    "Reject",
                    style:  TextStyle(
                      fontSize: 20,
                      fontWeight: FontWeight.bold   
                    ),
                  ),
                ),
              ],
            )
          ],
        ),
      )
    );
  }

}