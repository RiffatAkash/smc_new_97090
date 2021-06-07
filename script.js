var _0xa82f = [
  "\x2E\x70\x70\x5F\x62\x6F\x78\x5F\x5F\x31",
  "\x71\x75\x65\x72\x79\x53\x65\x6C\x65\x63\x74\x6F\x72",
  "\x2E\x70\x70\x5F\x62\x6F\x78\x5F\x5F\x32",
  "\x2E\x70\x70\x5F\x62\x6F\x78\x5F\x6D\x6F\x64\x65\x6C\x73",
  "\x2E\x70\x70\x5F\x62\x6F\x78\x5F\x6C\x6F\x67\x6F",
  "\x6F\x70\x61\x63\x69\x74\x79",
  "\x73\x74\x79\x6C\x65",
  "\x7A\x49\x6E\x64\x65\x78",
  "\x74\x72\x61\x6E\x73\x66\x6F\x72\x6D",
  "\x73\x63\x61\x6C\x65\x28\x31\x2E\x31\x29",
  "\x73\x63\x61\x6C\x65\x28\x31\x29",
  "\x66\x61\x64\x65\x49\x6E\x5A\x6F\x6F\x6D",
  "\x72\x65\x6D\x6F\x76\x65",
  "\x63\x6C\x61\x73\x73\x4C\x69\x73\x74",
  "\x70\x6F\x70\x69\x6E",
  "\x61\x64\x64",
];
var ppBox1 = document[_0xa82f[1]](_0xa82f[0]);
var ppBox2 = document[_0xa82f[1]](_0xa82f[2]);
var frModels = document[_0xa82f[1]](_0xa82f[3]);
var frLogo = document[_0xa82f[1]](_0xa82f[4]);
var alfFlag = 1;
setInterval(function () {
  alfFlag++;
  if (alfFlag % 2 == 0) {
    ppBox1[_0xa82f[6]][_0xa82f[5]] = 0;
    ppBox1[_0xa82f[6]][_0xa82f[7]] = -3;
    ppBox1[_0xa82f[6]][_0xa82f[8]] = _0xa82f[9];
    ppBox2[_0xa82f[6]][_0xa82f[5]] = 1;
    ppBox2[_0xa82f[6]][_0xa82f[7]] = 2;
    ppBox2[_0xa82f[6]][_0xa82f[8]] = _0xa82f[10];
    frModels[_0xa82f[13]][_0xa82f[12]](_0xa82f[11]);
    frLogo[_0xa82f[13]][_0xa82f[12]](_0xa82f[14]);
  } else {
    ppBox2[_0xa82f[6]][_0xa82f[5]] = 0;
    ppBox2[_0xa82f[6]][_0xa82f[7]] = -2;
    ppBox2[_0xa82f[6]][_0xa82f[8]] = _0xa82f[9];
    ppBox1[_0xa82f[6]][_0xa82f[5]] = 1;
    ppBox1[_0xa82f[6]][_0xa82f[7]] = 3;
    ppBox1[_0xa82f[6]][_0xa82f[8]] = _0xa82f[10];
    frModels[_0xa82f[13]][_0xa82f[15]](_0xa82f[11]);
    frLogo[_0xa82f[13]][_0xa82f[15]](_0xa82f[14]);
  }
}, 5e3);
