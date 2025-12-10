class Worth {
  int cp;
  int sp;
  int ep;
  int gp;
  int pp;

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