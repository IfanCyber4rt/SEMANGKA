let nama, val;
const url_string = document.URL;
const url = new URL(url_string);
let doi;

if (url.searchParams.get('in') != null) {
  doi = url.searchParams.get('in');
} else {
  doi = "PUTRI JEYEKKK";
}

let footer = document.getElementById("credit");
footer.innerHTML = doi;
footer.href = "https://www.facebook.com/Naufal.Cyber4rt/";

function time() {
  var d = new Date();
  var n = d.getHours();
  console.log(n);
  if (n >= 5 && n <= 10) {
    return "Pagi"
  } else if (n >= 10 && n <= 15) {
    return "Siang"
  } else if (n >= 15 && n <= 18) {
    return "Sore"
  } else if (n >= 18 && n <= 24) {
    return "Malam"
  }
}

function makan() {
  switch (time()) {
    case "Pagi":
      return "sarapan"
      break;
    case "Siang":
      return "makan siang"
      break;
    case "Malam":
      return "makan malam"
      break;
      case "Sore":
      return "makan"
      break;
    default:
      break;
  }
}

function selesai() {
  const teks = document.getElementById('teks');
  const btn = document.querySelector('.tombol');
  teks.innerHTML = `Semangat ${doi} <i
  class="fas fa-heart text-danger animate__animated animate__heartBeat animate__repeat-8"></i>`;
  btn.classList.add('d-none');
  teks.classList.remove('d-none');  
}


document.querySelector(".tombol").addEventListener('click', function () {
  Swal.fire({
    title: 'Hai Yekk!',
    html: `Selamat ${time()}, Kamu udah ${makan()}?`,
    timer: 2500,
    timerProgressBar: true,
    showConfirmButton: false,
  }).then((result) => {
    if (result.dismiss === Swal.DismissReason.timer) {
      Swal.fire('Kalau belum jangan lupa MAKAN yaa').then((result) => {
        Swal.fire({
          title: ' ',
          html: `Aku tau ko Kamu lagi SIBUK Banget`,
          timer: 2000,
          timerProgressBar: true,
          showConfirmButton: false,
        }).then((result) => {
          if (result.dismiss === Swal.DismissReason.timer) {
            Swal.fire({
              title: ' ',
              html: `Lagi PUSING Banget, CAPE Banget`,
              timer: 2000,
              timerProgressBar: true,
              showConfirmButton: false,
            }).then((result) => {
              if (result.dismiss === Swal.DismissReason.timer) {
                Swal.fire('Semangat terus ya Kamu :)').then((result) => {
                  Swal.fire(
                    'Jangan Keseringan BEGADANG!',
                    '',
                    'error'
                  ).then((result) => {
                    Swal.fire(
                      'Jangan telat MAKAN!',
                      '',
                      'error'
                    ).then((result) => {
                      Swal.fire('Aku dukung kamu terus koq').then((result) => {
                        Swal.fire({
                          title: 'Oh iya aku mau nanya',
                          text: 'Ada sesuatu yang lagi kamu pingin ga?',
                          showDenyButton: true,
                          confirmButtonText: `Ada by`,
                          denyButtonText: `Ga ada ko`,
                        }).then((result) => {
                          /* Read more about isConfirmed, isDenied below */
                          if (result.isConfirmed) {
                            Swal.fire({
                              title: 'Mau apa?',
                              input: 'text',
                              inputPlaceholder: 'ex: Seblacc, boba, or etc',
                              showCancelButton: false,
                              inputValidator: (value) => {
                                if (!value) {
                                  return 'Isi dulu dunk Yekk'
                                }
                              }
                            }).then((result) => {
                              Swal.fire('Okey Yekk', 'Nanti aku kabulin kemauan kamu yaah', 'success').then((result) => {
                                Swal.fire("See ya! JEYEKK ^^").then((result) => {
                                  selesai()
                                });
                              })
                            })
                          } else if (result.isDenied) {
                            Swal.fire('Oh oke deh kalo ga ada').then((result) => {
                              Swal.fire("See ya! JEYEKK ^^").then((result) => {
                                selesai()
                              });
                            })
                          }
                        })
                      })
                    })
                  })
                })
              }
            })
          }
        })
      })
    }
  })
});
