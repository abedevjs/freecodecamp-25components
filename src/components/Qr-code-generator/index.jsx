import { useState } from "react";
import QRCode from "react-qr-code";

function QrCodeGenerator() {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");

  function handleGenerateQrCode() {
    setQrCode(input);
    setInput("");
  }

  return (
    <div>
      <h1>QR Code Generator</h1>
      <div>
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          name="qr-code"
          value={input}
          placeholder="enter your value here"
        />
        <button
          onClick={handleGenerateQrCode}
          disabled={input && input.trim() !== "" ? false : true}
        >
          Generate
        </button>
      </div>
      <div>
        <QRCode
          id="qr-code-value"
          value={qrCode}
          size={400}
          //   style={{ backgroundColor: "#fff" }}
          bgColor="#fff"
        />
      </div>
    </div>
  );
}

export default QrCodeGenerator;
