
import 'package:flutter/widgets.dart';

class Profile extends StatefulWidget {
  const Profile({super.key});

  @override
  State<Profile> createState() => _ProfileState();
}

class _ProfileState extends State<Profile> {
  @override
  Widget build(BuildContext context) {
    return const Placeholder(debugShowCheckedModeBanner: false,
      title: 'Mechanic : Profile',
      //theme property
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: const Login(
        title: 'Mechanic Profile:',
        
      ),
    );
  }
}

class Login extends StatefulWidget {
  const Login({super.key, required this.title});
  final String title;

  @override
  State<Login> createState() => _Login();
}

class _Login extends State<Login> {
  final _formKey = GlobalKey<FormState>();
  TextEditingController mechanicNameController = TextEditingController();
  TextEditingController emailController = TextEditingController();
  TextEditingController passwordController = TextEditingController();
  TextEditingController mobileNumberController = TextEditingController();
  TextEditingController addressController = TextEditingController();
  TextEditingController cityController = TextEditingController();
  TextEditingController areaController = TextEditingController();
  TextEditingController expertiseController = TextEditingController();
  TextEditingController availabilityController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.title),
      ),
      body: Form(
        key: _formKey,
        child: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 4, vertical: 4),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
              Padding(
                padding: const EdgeInsets.symmetric(horizontal: 4, vertical: 4),
                child: TextFormField(
                  controller: mechanicNameController,
                  decoration: const InputDecoration(
                      border: OutlineInputBorder(), labelText: "MechanicName:"),
                  validator: (value) {
                    if (value == null || value.isEmpty) {
                      return 'MechanicName';
                    }
                    return null;
                  },
                ),
              ),
              Padding(
                padding: const EdgeInsets.symmetric(horizontal: 4, vertical: 4),
                child: TextFormField(
                  controller: emailController,
                  decoration: const InputDecoration(
                      border: OutlineInputBorder(), labelText: "Email:"),
                  validator: (value) {
                    if (value == null || value.isEmpty) {
                      return 'Email';
                    }
                    return null;
                  },
                ),
              ),
              Padding(
                padding: const EdgeInsets.symmetric(horizontal: 4, vertical: 4),
                child: TextFormField(
                  controller: passwordController,
                  obscureText: true,
                  decoration: const InputDecoration(
                      border: OutlineInputBorder(), labelText: "Password:"),
                  validator: (value) {
                    if (value == null || value.isEmpty) {
                      return 'Password';
                    }
                    return null;
                  },
                ),
              ),
              Padding(
                padding: const EdgeInsets.symmetric(horizontal: 4, vertical: 4),
                child: TextFormField(
                  controller: mobileNumberController,
                  decoration: const InputDecoration(
                      border: OutlineInputBorder(), labelText: "MobileNumber:"),
                  validator: (value) {
                    if (value == null || value.isEmpty) {
                      return 'MobileNumber';
                    }
                    return null;
                  },
                ),
              ),
              Padding(
                padding: const EdgeInsets.symmetric(horizontal: 4, vertical: 4),
                child: TextFormField(
                  controller: addressController,
                  decoration: const InputDecoration(
                      border: OutlineInputBorder(), labelText: "Address:"),
                  validator: (value) {
                    if (value == null || value.isEmpty) {
                      return 'Address';
                    }
                    return null;
                  },
                ),
              ),
              Padding(
                padding: const EdgeInsets.symmetric(horizontal: 4, vertical: 4),
                child: TextFormField(
                  controller: cityController,
                  decoration: const InputDecoration(
                      border: OutlineInputBorder(), labelText: "City:"),
                  validator: (value) {
                    if (value == null || value.isEmpty) {
                      return 'City';
                    }
                    return null;
                  },
                ),
              ),
              Padding(
                padding: const EdgeInsets.symmetric(horizontal: 4, vertical: 4),
                child: TextFormField(
                  controller: areaController,
                  decoration: const InputDecoration(
                      border: OutlineInputBorder(), labelText: "Area:"),
                  validator: (value) {
                    if (value == null || value.isEmpty) {
                      return 'Area';
                    }
                    return null;
                  },
                ),
              ),
              Padding(
                padding: const EdgeInsets.symmetric(horizontal: 4, vertical: 4),
                child: TextFormField(
                  controller: expertiseController,
                  decoration: const InputDecoration(
                      border: OutlineInputBorder(), labelText: "Expertise:"),
                  validator: (value) {
                    if (value == null || value.isEmpty) {
                      return 'Expertise';
                    }
                    return null;
                  },
                ),
              ),
              Padding(
                padding: const EdgeInsets.symmetric(horizontal: 4, vertical: 4),
                child: TextFormField(
                  controller: availabilityController,
                  decoration: const InputDecoration(
                      border: OutlineInputBorder(), labelText: "Availability:"),
                  validator: (value) {
                    if (value == null || value.isEmpty) {
                      return 'Availability';
                    }
                    return null;
                  },
                ),
              ),
              Padding(
                padding: const EdgeInsets.symmetric(horizontal: 4, vertical: 4),
                child: Center(
                  child: ElevatedButton(
                    onPressed: () {
                      if (_formKey.currentState!.validate()) {
                        // Navigate the user to the Home page
                      } else {
                        ScaffoldMessenger.of(context).showSnackBar(
                          const SnackBar(content: Text('Please fill input')),
                        );
                      }
                    },
                    child: const Text('Save'),
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
);
  }
}
