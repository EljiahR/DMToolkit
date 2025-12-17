class Worth {
  final int cp;
  final int sp;
  final int ep;
  final int gp;
  final int pp;

  Worth({
    this.cp = 0,
    this.sp = 0,
    this.ep = 0,
    this.gp = 0,
    this.pp = 0
  });

  factory Worth.fromJson(Map<String, dynamic> json) {
    return Worth(
      cp: json['cp'] as int,
      sp: json['sp'] as int,
      ep: json['ep'] as int,
      gp: json['gp'] as int,
      pp: json['pp'] as int
    );
  }
}