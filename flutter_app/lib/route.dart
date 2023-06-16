import 'package:flutter/material.dart';
import 'package:flutter_app/screens/assigned_service_list.dart';
import 'package:flutter_app/screens/profile.dart';
import 'package:flutter_app/screens/signin.dart';
import 'package:flutter_app/screens/signup.dart';
import 'package:flutter_app/screens/splash.dart';
import 'package:get/get.dart';

import 'screens/service_reject.dart';

const String splash = "/";
const String signin = "/signin";
const String signup = "/signup";
const String profile = '/profile';
const String assignedService = '/assignedservice';
const String serviceReject = '/servicereject';

List<GetPage> pages = [
  GetPage(
    name: splash,
    page: () => const Splash(),
  ),
  GetPage(
    name: signin,
    page: () => const SignIn(),
  ),
  GetPage(
    name: signup,
    page: () => const SignUp(),
  ),
  GetPage(
    name: profile,
    page: () => const Profile(),
  ),
  GetPage(
    name: assignedService,
    page: () => const AssignedService(),
  ),
  GetPage(
    name: serviceReject,
    page: () => const ServiceReject(),
  ),
];