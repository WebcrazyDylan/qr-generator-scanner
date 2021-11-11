import React, { useState } from "react";
import { Fab, TextField, Grid } from "@material-ui/core";
import { ArrowBack, GetApp } from "@material-ui/icons";
import { Link } from "react-router-dom";
import QRCode from "qrcode.react";

function QRgenerator() {
  const [qr, setQr] = useState("http://jonghyun.cf");
  const handleChange = (event) => {
    setQr(event.target.value);
  };
  const downloadQR = () => {
    const canvas = document.getElementById("myqr");
    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    let downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = "myQRCode.png";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <div>
      <Link to="/">
        <Fab style={{ marginRight: 10 }} color="primary">
          <ArrowBack />
        </Fab>
      </Link>
      <span>QR Generator</span>

      <div style={{ marginTop: 20 }}>
        <TextField
          onChange={handleChange}
          style={{ width: 240 }}
          value={qr}
          label="QR content"
          size="medium"
          variant="outlined"
          color="primary"
        />
      </div>

      <div>
        {qr ? (
          <QRCode id="myqr" value={qr} size={250} includeMargin={true} />
        ) : (
          <p>Please input QR content.</p>
        )}
      </div>
      <div>
        {qr ? (
          <Grid container>
            {/* <Grid item xs={10}>
              <TextareaAutosize
                style={{ fontSize: 18, width: 250, height: 100 }}
                maxRows={4}
                defaultValue={qr}
                value={qr}
              />
            </Grid> */}
            <Grid item xs={12}>
              <Fab
                onClick={downloadQR}
                style={{ marginLeft: 0 }}
                color="secondary"
              >
                <GetApp />
              </Fab>
            </Grid>
          </Grid>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default QRgenerator;
