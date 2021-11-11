import { useEffect, useState } from "react";
import { Fab } from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";
import { Link } from "react-router-dom";
import QrReader from "react-qr-reader";

function QRscanner() {
  const [qrcode, setQrcode] = useState("");
  const [basket, setBasket] = useState([]);

  const handleScan = (data) => {
    if (data) {
      setQrcode(data);
    }
  };
  const handleError = (err) => {
    console.error(err);
    alert(err);
  };

  useEffect(() => {
    if (qrcode) {
      // Get product info
      // const API_URL = `http://localhost/api.php?barcode=${barcode}`

      // fetch(API_URL)
      // .then(res => res.json())
      // .then(data => {
      //   if (data) {
      //     setBasket([...basket, data]);
      //   } else {
      //     alert('Bu ürün bulunamadı!')
      //   }
      // })
      setBasket([...basket, qrcode]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [qrcode]);

  return (
    <div>
      <Link to="/">
        <Fab style={{ marginRight: 5 }} color="primary">
          <ArrowBack />
        </Fab>
      </Link>
      <span>QR Scanner</span>

      <center>
        <div style={{ marginTop: 30 }}>
          <QrReader
            delay={300}
            onError={handleError}
            onScan={handleScan}
            style={{ height: 250, width: 250 }}
          />
        </div>
      </center>

      {/* <TextareaAutosize
        style={{ fontSize: 18, width: 250, height: 100, marginTop: 40 }}
        maxRows={4}
        value={qrcode}
      /> */}
      {qrcode && <div>Current QR: {qrcode}</div>}
      {basket &&
        basket.map((item, i) => (
          <div key={i}>{item}</div>
          //   <div key={item.id}>
          //     {item.product} <br />
          //     {item.price} <br />
          //     <img src={item.image} style={{ width: 100, height: 100 }} />
          //   </div>
        ))}
    </div>
  );
}

export default QRscanner;
