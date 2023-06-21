import 'package:flutter/material.dart';

class CustomListtile extends StatelessWidget {
  final String? title;
  final String? value;

  const CustomListtile(
      {Key? key,
      this.title,
      this.value})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    return ListTile(
        title: Text(
          "$title : $value",
        ),
      );
  }
}
