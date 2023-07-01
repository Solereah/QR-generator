const input = document.querySelector("input")
const imgQr = document.querySelector("#img")
const generateBtn = document.querySelector("#generate")
const downloadBtn = document.querySelector("#download")

generateBtn.addEventListener("click", () => {
  const codeQr = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${input.value}`
  imgQr.src = codeQr
})

downloadBtn.addEventListener("click", async () => {
  const resp = await fetch(imgQr.src)
  const blob = await resp.blob()
  const downloadLink = document.createElement("a")
  downloadLink.href = URL.createObjectURL(blob)
  downloadLink.download = "codeQr.jpg"
  downloadLink.click()
  input.value = ""
  img.src = ""
})
