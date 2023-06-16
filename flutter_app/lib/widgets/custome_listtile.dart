import 'package:flutter/material.dart';

class CustomListtile extends StatelessWidget {
  final String? title;
  final String? subtitle;

  const CustomListtile(
      {Key? key,
      this.title,
      this.subtitle})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: const EdgeInsets.fromLTRB(30, 30, 30, 10),
      decoration: const BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.all(Radius.circular(10)),
      ),
      child: ListTile(
        title: Text(
          title!,
          
        ),
        subtitle: Text(subtitle!),
      ),
    );
  }
}
