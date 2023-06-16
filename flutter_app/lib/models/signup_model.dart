class Signup {
  final String name;
  final String email;
  final String phone;
  final String gender;
  final String? dateOfBirth;
  final String? city;
  final String? area;
  final String? address;
  final String expert;
  final String password;

  Signup({
    required this.name,
    required this.email,
    required this.phone,
    required this.gender,
    this.dateOfBirth,
    this.city,
    this.area,
    this.address,
    required this.expert,
    required this.password,
  });
}
