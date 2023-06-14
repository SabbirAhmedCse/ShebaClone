import 'package:flutter/material.dart';

class CustomTextField extends StatelessWidget {
  final TextEditingController? controller;
  final TextInputType? keyboardType;
  final String? Function(String?)? validator;
  final bool obscureText;
  final String? labelText;
  final String? hintText;
  final Widget? sufixIcon;
  final Widget? prefixIcon;

  const CustomTextField(
      {Key? key,
      this.controller,
      this.keyboardType,
      this.validator,
      this.obscureText = false,
      this.sufixIcon,
      this.prefixIcon,
      this.labelText,
      this.hintText})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: const EdgeInsets.fromLTRB(30, 30, 30, 10),
      decoration: const BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.all(Radius.circular(10)),
      ),
      child: TextField(
        controller: controller,
        keyboardType: keyboardType,
        obscureText: obscureText,
          decoration: InputDecoration(
        border: const OutlineInputBorder(
            borderSide: BorderSide(color: Colors.black),
            borderRadius: BorderRadius.all(Radius.circular(10))),
        labelText: labelText,
        hintText: hintText,
        suffixIcon: sufixIcon,
        prefixIcon: prefixIcon,
      )),
    );
  }
}
