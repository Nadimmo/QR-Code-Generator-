const handlerQRCode=()=>{
  const url = document.getElementById('url').value.trim()
  if (!url) {
    alert('Please Provide Valied URL')
  }
  document.getElementById('url').value=''
  
  try {
    new QRCode(document.getElementById('QR-Code'),{
      text: url,
      width: 200,
      height: 200,
      colorDark: "#000000",
      colorLight: "#ffffff"
      
    })
  } catch (e) {
    console.log(e.message)
  }
}
