// Output untuk Input nama = '' dan peran = ''
"Nama harus diisi!"

//Output untuk Input nama = 'Mikael' dan peran = ''
"Halo Mikael, Pilih peranmu untuk memulai game!"

//Output untuk Input nama = 'Nina' dan peran 'Ksatria'
"Selamat datang di Dunia Proxytia, Nina"
"Halo Ksatria Nina, kamu dapat menyerang dengan senjatamu!"

//Output untuk Input nama = 'Danu' dan peran 'Tabib'
"Selamat datang di Dunia Proxytia, Danu"
"Halo Tabib Danu, kamu akan membantu temanmu yang terluka."

//Output untuk Input nama = 'Zero' dan peran 'Penyihir'
"Selamat datang di Dunia Proxytia, Zero"
"Halo Penyihir Zero, ciptakan keajaiban yang membantu kemenanganmu!"

var nama = "Nina";
var peran = "Ksatria";

if( nama === "" && peran === "") {
    console.log("Nama harus diisi!");
}

if( nama === "Mikael") {
  console.log("Halo " +nama+", pilih peranmu untuk memulai game!");
}

if( nama === "Nina" && peran === "Ksatria") {
    console.log("Selamat datang di dunia Proxytia "+nama+". Halo "+peran+" "+nama+", kamu dapat menyerang dengan senjatamu!");
}

if(nama === "Danu" && peran === "Tabib") {
    console.log("Selamat datang di dunia Proxytia, "+nama+". Halo "+peran+" "+nama+", kamu akan membantu temanmu yang terluka.");
}

if( nama === "Zero" && peran === "Penyihir") {
    console.log("Selamat datang di dunia Proxytia, "+nama+". Halo "+peran+" "+nama+", ciptakan keajaiban yang membantu kemenanganmu!");
}