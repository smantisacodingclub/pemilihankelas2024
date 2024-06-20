const toggle = ['block', 'none'];
let i = 0;
let pesan = document.querySelector("#pesan");
let pilihanMapel = document.querySelector("#pilihanMapel");
let pilihanProdi = document.querySelector("#pilihanProdi");
let saranSemua = document.querySelector("#saranSemua")
let mapelTeknik = document.querySelector("#mapelTeknik")
let buttons = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
let rekomendasi = document.querySelector("#recs");
let recsContainer = document.querySelector("#recsContainer")
let bold = document.getElementsByClassName("bold");

const paket = [
    {
        name: "KKO",
        mapel: ['Matematika Tingkat Lanjut', 'Informatika', 'Ekonomi', 'Sosiologi']
    },
  {
      name: "A",
      mapel: ['Biologi', 'Kimia', 'Matematika Tingkat Lanjut', 'Fisika']
  },
  {
      name: "B",
      mapel: ['Biologi', 'Kimia', 'Matematika Tingkat Lanjut', 'Fisika']
  },
  {
      name: "C",
      mapel: ['Ekonomi', 'Geografi', 'Sosiologi', 'Informatika']
  },
  {
      name: "D",
      mapel: ["Kimia", "Fisika", "Biologi", "Bahasa Inggris Tingkat Lanjut"]
  },
  {
      name: 'E',
      mapel: ['Ekonomi', 'Matematika Tingkat Lanjut', 'Bahasa Inggris Tingkat Lanjut', 'Fisika'],
  },
  {
      name: 'F',
      mapel: ['Sosiologi', 'Bahasa Inggris Tingkat Lanjut', 'Biologi', 'Kimia']
  },
  {
      name: 'G',
      mapel: ['Ekonomi', 'Bahasa Inggris Tingkat Lanjut', 'Sosiologi', 'Informatika'],
  },
  {
      name: 'H',
      mapel: ["Matematika Tingkat Lanjut", 'Informatika', 'Fisika', 'Kimia']
  },
  {
      name: 'I',
      mapel: ["Ekonomi", 'Geografi', 'Sosiologi', 'Bahasa Jepang']
  },
  {
      name: "J",
      mapel: ["Bahasa Jepang", "Bahasa Inggris Tingkat Lanjut", "Bahasa Indonesia Tingkat Lanjut", "Sosiologi"]
  },
  {
      name: 'K',
      mapel: ['Matematika Tingkat Lanjut', 'Biologi', 'Antropologi', 'Bahasa Jepang']
  }
]

const jurusan = [
  {
      name: "Seni",
      mapel: ["Seni Budaya"],
      kode: 2
  },
  {
      name: "Sejarah",
      mapel: ["Sejarah"],
      kode: 2
  },
  {
      name: "Linguistik",
      mapel: ["Bahasa Indonesia Tingkat Lanjut" ,"Bahasa Inggris Tingkat Lanjut"],
      kode: 0
  },
  {
      name: "Susastra atau Sastra",
      mapel: ["Bahasa Indonesia Tingkat Lanjut", "Bahasa Inggris Tingkat Lanjut", "Bahasa Jepang"],
      kode: 9
  },
  {
      name: "Filsafat",
      mapel: ["Sosiologi"],
      kode: 0
  },
  {
      name: "Sosial",
      mapel: ["Sosiologi"],
      kode: 0
  },
  {
      name: "Ekonomi",
      mapel: ["Ekonomi"],
      kode: 3
  },
  {
      name: "Pertahanan",
      mapel: ["Pendidikan Pancasila"],
      kode: 2
  },
  {
      name: "Psikologi",
      mapel: ["Sosiologi"],
      kode: 3
  },
  {
      name: "Kimia",
      mapel: ["Kimia"],
      kode: 0
  },
  {
      name: "Ilmu atau Sains Kebumian",
      mapel: ["Fisika", "Matematika Tingkat Lanjut"],
      kode: 0
  },
  {
      name: "Ilmu atau Sains Kelautan",
      mapel: ["Biologi"],
      kode: 0
  },
  {
      name: "Biologi",
      mapel: ["Biologi"],
      kode: 0
  },
  {
      name: "Biofisika",
      mapel: ["Fisika"],
      kode: 0
  },
  {
      name: "Fisika",
      mapel: ["Fisika"],
      kode: 0
  },
  {
      name: "Astronomi",
      mapel: ["Fisika", "Matematika Tingkat Lanjut"],
      kode: 0
  },
  {
      name: "Komputer",
      mapel: ["Matematika Tingkat Lanjut"],
     saran: "Informatika",
      kode: 1
  },
  {
      name: "Logika",
      mapel: ["Matematika Tingkat Lanjut"],
      kode: 0
  },
  {
      name: "Matematika",
      mapel: ["Matematika Tingkat Lanjut"],
      kode: 0
  },
  {
      name: "Ilmu atau Sains Pertanian",
      mapel: ["Biologi"],
      kode: 0
  },
  {
      name: "Peternakan",
      mapel: ["Biologi"],
      kode: 0
  },
  {
      name: "Ilmu atau Sains Perikanan",
      mapel: ["Biologi"],
      kode: 0
  },
  {
      name: "Arsitektur", //23
      mapel: ["Fisika"],
      kode: 3
  },
  {
      name: "Perencanaan Wilayah",
      mapel: ["Ekonomi"],
      kode: 3
  },
  {
      name: "Desain",
      mapel: ["Seni Budaya", "Matematika Wajib"],
      kode: 2
  },
  {
      name: "Ilmu atau Sains Akuntansi",
      mapel: ["Ekonomi"],
      kode: 0
  },
  {
      name: "Ilmu atau Sains Manajemen",
      mapel: ["Ekonomi"],
      kode: 0
  },
  {
      name: "Logistik",
      mapel: ["Ekonomi"],
      kode: 0
  },
  {
      name: "Administrasi Bisnis",
      mapel: ["Ekonomi"],
      kode: 0
  },
  {
      name: "Bisnis",
      mapel: ["Ekonomi"],
      kode: 0
  },
  {
      name: "Ilmu atau Sains Komunikasi",
      mapel: ["Sosiologi"],
      kode: 0
  },
  {
      name: "Pendidikan",
      mapel: ["paling banyak 1 mata pelajaran pendukung yang relevan dengan program studi kependidikannya"],
      kode: 2
  },
  {
      name: "Teknik atau Rekayasa",
      mapel: ["Fisika", "Kimia", "Matematika Tingkat Lanjut"],
      kode: 8
  },
  {
      name: "Ilmu atau Sains Lingkungan",
      mapel: ["Biologi"],
      kode: 0
  },
  {
      name: "Kehutanan",
      mapel: ["Biologi"],
      kode: 0
  },
  {
      name: "Ilmu atau Sains Kedokteran",
      mapel: ["Biologi", "Kimia"],
      kode: 0
  },
  {
      name: "Ilmu atau Sains Kedokteran Gigi",
      mapel: ["Biologi", "Kimia"],
      kode: 0
  },
  {
      name: "Ilmu atau Sains Veteriner",
      mapel: ["Biologi", "Kimia"],
      kode: 0
  },
  {
      name: "Ilmu Farmasi",
      mapel: ["Biologi", "Kimia"],
      kode: 0
  },
  {
      name: "Ilmu atau Sains Gizi",
      mapel: ["Biologi", 'Kimia'],
      kode: 0
  },
  {
      name: "Kesehatan Masyarakat",
      mapel: ["Biologi"],
      saran: "Sosiologi",
      kode: 11
  },
  {
      name: "Kebidanan",
      mapel: ["Biologi"],
      kode: 0
  },
  {
      name: "Keperawatan",
      mapel: ["Biologi"],
      kode: 0
  },
  {
      name: "Ilmu atau Sains Informasi",
      mapel: ["Matematika Tingkat Lanjut"],
     saran: "Informatika",
      kode: 1
  },
  {
      name: "Hukum",
      mapel: ["Sosiologi"], //pendidikan pancasila
      kode: 5
  },
  {
      name: "Ilmu atau Sains Militer",
      mapel: ["Sosiologi"],
      kode: 0
  },
  {
      name: "Urusan Publik",
      mapel: ["Sosiologi"],
      kode: 0
  },
  {
      name: "Ilmu atau Sains Keolahragaan",
      mapel: ["Biologi"],
      kode: 4 //pjok
  },
  {
      name: "Pariwisata",
      mapel: ["Ekonomi"],
      kode: 0
  },
  {
      name: "Transportasi",
      mapel: ["Matematika Tingkat Lanjut"],
      kode: 0
  },
  {
      name: "Bioteknologi",
      mapel: ["Biologi"], //mtk wjb
      kode: 3
  },
  {
      name: "Biokewirausahaan",
      mapel: ["Biologi"], //mtk wajib  dan ekonomi,
      saran: "Ekonomi",
      kode: 7
  },
  {
      name: "Bioinformatika",
      mapel: ["Biologi"], //informatika
     saran: "Informatika",
      kode: 1
  },
  {
      name: "Geografi, Geografi Lingkungan, Sains Informasi Geografi",
      mapel: ["Geografi"],
      kode: 3
  },
  {
      name: "Informatika Medis atau Informatika Kesehatan",
      mapel: ["Biologi", "Matematika Tingkat Lanjut"],
      saran: "Informatika",
      kode: 1
  },
  {
      name: "Konservasi Biologi, Konservasi Hewan Liar, Konservasi Hutan, Konservasi Sumber Daya Alam",
      mapel: ["Biologi"],
      kode: 0
  },
  {
      name: "Teknologi Pangan, Teknologi Hasil Pertanian atau Peternakan/Perikanan",
      mapel: ["Biologi", 'Kimia'],
      kode: 0
  },
  {
      name: "Sains Data",
      mapel: ["Matematika Tingkat Lanjut"],
      saran: "Informatika",
      kode: 1
  },
  {
      name: "Sains Perkopian",
      mapel: ["Biologi"],
      kode: 0
  },
  {
      name: "Studi Humanitas",
      mapel: ["Sosiologi"],
      kode: 0
  },
  {
      name: "Hubungan Internasional",
      mapel: ["Bahasa Inggris Tingkat Lanjut"], //disarankan ekonomi
      saran: "Ekonomi",
      kode: 6
  },
  {
      name: "Perpajakan",
      mapel: ["Ekonomi"]
  },
  {
      name: "Pertambangan",
      mapel: ["Geografi"],
  },
  {
      name: "Film dan Televisi",
      mapel: ["Sosiologi", "Bahasa Inggris Tingkat Lanjut"],
      kode: 12
  },
  {
    name: "Perpajakan",
    mapel: ["Ekonomi"]
  },
  {
    name: "Pertambangan",
    mapel: ["Geografi"],
  },
  {
    name: "Film dan Televisi",
    mapel: ["Sosiologi", "Bahasa Inggris Tingkat Lanjut"],
    kode: 12
  },
]

function normalBold(){
  for(i=0; i<bold.length; i++){
      bold[i].style.fontWeight = "normal";
  }
}

function dropdown(){
  document.getElementById("flexContainer").style.display = "block";
}

function hideDropDown(){
  document.getElementById("flexContainer").style.display = "none";
}

function zoomPic(){
  document.getElementById(search).display = "none";
}
function munculkan(){
  document.getElementById.display = "block"
}

function clickFunction(showPaket, indexBtn){
  if(buttons[indexBtn] > 1){
      buttons[indexBtn] = 0;
  }
  document.querySelector(showPaket).style.display = toggle[buttons[indexBtn]];
  buttons[indexBtn]++;
}

// function processInput(element){
//     // location.href = "halaman3.html";
//     let x = element;
//     processInput2(x);
// }

function processInput(element){
  normalBold();
    recsContainer.style.display = "none";
    saranSemua.style.display = "none";
    mapelTeknik.style.display = "none";
    document.getElementById("output").style.display = "block";
    let cari = element.innerText;
    let index = jurusan.findIndex(item => item.name === cari);
    pilihanProdi.innerText = cari;
    pilihanMapel.innerText = jurusan[index].mapel;
    pesan.style.display = "block";
    hideDropDown();

    if(jurusan[index].kode !== 2){
        filterPaket(index);

        if (jurusan[index].kode === 8){ //teknik
            pilihanMapel.innerText = "Fisika dan Matematika Tingkat Lanjut";
            mapelTeknik.style.display = "inline";
            filterTeknik();
            console.log("masuk");
        } else {
            if(jurusan[index].kode === 1){ //informatika
                recsContainer.style.display = "inline";
                rekomendasi.innerText = jurusan[index].saran;
                // saran.style.display = "inline";
                filterEkoInfor(jurusan[index].mapel, "Informatika")
            } else {
                if (jurusan[index].kode === 3){ //Matematika Wajib
                    pilihanMapel.innerText += " dan Matematika Wajib.";
                } else {
                    if (jurusan[index].kode ===  4){ //PJOK
                        pilihanMapel.innerText += " dan PJOK."
                    } else {
                        if(jurusan[index].kode === 5){ //hukum
                            pilihanMapel.innerText += " dan Pendidikan Pancasila."
                        } else {
                            if(jurusan[index].kode === 6){ //hubungan internasional
                                recsContainer.style.display = "inline";
                                rekomendasi.innerText= jurusan[index].saran;
                                // saran2.style.display = "inline";
                                filterEkoInfor(jurusan[index].mapel, "Ekonomi");
                            } else {
                                if(jurusan[index].kode === 7){ //biokewirasusahaan
                                    pilihanMapel.innerText += " dan Matematika Wajib.";
                                    // saran2.style.display = "inline";
                                    recsContainer.style.display="inline";
                                    rekomendasi.innerText=jurusan[index].saran;
                                    filterEkoInfor(jurusan[index].mapel, "Ekonomi");
                                } else {
                                    if(jurusan[index].kode === 9){
                                        filterSastra();
                                        pilihanMapel.innerText = "Bahasa Indonesia Tingkat Lanjut dan Bahasa Asing.";
                                    } else{
                                        if(jurusan[index].kode === 11){
                                            recsContainer.style.display="inline";
                                    rekomendasi.innerText=jurusan[index].saran;
                                        }else{
                                            if(jurusan[index].kode === 12){
                                                // pilihanMapel.innerText += " atau Bahasa Indonesia Tingkat Lanjut"
                                                // let text = document.getElementsByClassName("bold Bahasa Indonesia Tingkat Lanjut").style.fontWeight = "bold";
                                            } else {
                                                pilihanMapel.innerText += "."
                                            }
                                         
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    } else { //pendidikan, seni, dll
        showSemua();
        pilihanMapel.innerText += "."
        saranSemua.style.display = "inline";
    }
}

function showSemua(){
  for(i=0; i<paket.length; i++){
      let show = document.getElementById(paket[i].name);
      show.style.display = "block";
  }
}

function filterPaket(prodi){
  makeBold(jurusan[prodi].mapel);
  for(i=0; i<paket.length; i++){
      let jumlah = 0;
      let mapelPaket = paket[i].mapel;
      let show = document.getElementById(paket[i].name);
      for(j=0; j<jurusan[prodi].mapel.length; j++){
          let paketProdi = jurusan[prodi].mapel[j];
          let found = mapelPaket.indexOf(paketProdi);
          if(found !== -1){ //ditemukan
              jumlah++;
          }
      }
      if(jumlah === jurusan[prodi].mapel.length){
          show.style.display = "block";
      } else { //tidak ditemukan
          show.style.display = "none";
      }
  }
}

function makeBold(name){
  for(i = 0; i<name.length; i++){
      let text = document.getElementsByClassName(name[i]);
      for(j=0; j<text.length; j++){
          text[j].style.fontWeight = "bold";
      }
  }
}

function filterInput(){
  let input = document.querySelector("#searchBar");
  let filter = input.value.toLowerCase();
  console.log(filter);
  let opsi = document.getElementsByClassName("opsi");

  for(i=0; i<opsi.length; i++){
      let a = opsi[i].innerText.toLowerCase();
      if(a.includes(filter)){
          opsi[i].style.display = "block";
      } else {
          opsi[i].style.display = "none";
      }
  }
}

function filterTeknik(){
  document.getElementById("A").style.display = "block";
  document.getElementById("B").style.display = "block";
  document.getElementById("E").style.display = "block";
  document.getElementById("H").style.display = "block";
}

function filterEkoInfor(mapel, tambahan){
  mapel.push(tambahan);
  makeBold(mapel);
  console.log(mapel);
  for(i=0; i<paket.length; i++){
      let count = 0;
      let mapelPaket = paket[i].mapel;
      let show = document.getElementById(paket[i].name);
      for(j=0; j<mapel.length; j++){
          let found = mapelPaket.indexOf(mapel[j]);
          if(found !== -1){
              count++;
          }
      }
      if(count === mapel.length){
          show.style.display = "block";
      }
  }
}

function filterSastra(){
  const tambahan = ["Bahasa Jepang", "Bahasa Inggris Tingkat Lanjut"]
  makeBold(tambahan);
  let mapel = ["Bahasa Indonesia Tingkat Lanjut"]
  for(k=0; k<2; k++){
      mapel.push(tambahan[k]);
      console.log(mapel);
      for(i=0; i<paket.length; i++){
          let count = 0;
          let mapelPaket = paket[i].mapel;
          let show = document.getElementById(paket[i].name);
          for(j=0; j<mapel.length; j++){
              let found = mapelPaket.indexOf(mapel[j]);
              if(found !== -1){
                  count++;
              }
          }
          if(count === mapel.length){
              show.style.display = "block";
          }
      }
      mapel.pop();
  }
}