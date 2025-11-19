const handlerQRCode = () => {
  const url = document.getElementById('url').value.trim();
  if (!url) {
    alert('Please Provide Valid URL');
    return;
  }

  document.getElementById('url').value = '';
  document.getElementById('QR-Code').innerHTML = ""; 

  try {
    new QRCode(document.getElementById('QR-Code'), {
      text: url,
      width: 200,
      height: 200,
      colorDark: "#000000",
      colorLight: "#ffffff"
    });

    // show download button after QR loads
    setTimeout(() => {
      document.getElementById('downloadBtn').classList.remove('hidden');
    }, 300);

  } catch (e) {
    console.log(e.message);
  }
};

function downloadQRCode() {
  const img = document.querySelector('#QR-Code img');

  if (!img) {
    alert("QR Code not generated!");
    return;
  }

  const imgSrc = img.src;

  const link = document.createElement("a");
  link.href = imgSrc;
  link.download = "qrcode.png";
  link.click();
}
