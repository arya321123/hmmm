import React, {useState} from 'react';

const Kontak = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    description: '',
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.id]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Email sent successfully');
      } else {
        console.error('Failed to send email');
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div
      style={{
        backgroundColor: '#ffffff',
        fontFamily: 'Helvetica ',
        minHeight: '100vh',
        padding: '20px',
      }}
    >
      <img
        src="hbk.jpg"
        alt="Logo"
        style={{
          width: '100%',
          height: '100px',
          objectFit: 'cover',
        }}
      />
      <div
        className="container"
        style={{
          width: '100%',
          maxWidth: '960px',
          margin: '0 auto',
          marginBottom: '20px',
        }}
      >
        <div
          className="row"
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: '20px',
          }}
        >
          <div
            className="col-6"
            style={{
              marginRight: '20px',
              borderRight: '2px solid #6b4612', // Garis vertikal pemisah
              paddingRight: '20px', // Ruang antara garis vertikal dengan konten
            }}
          >
            <div
              className="card"
              style={{
                backgroundColor: 'white',
                borderRadius: '2px',
                padding: '20px',
              }}
            >
              <p className="card-body">
                Selamat datang di Website CODDY. Kami berdedikasi untuk memberi
                Anda pengalaman terbaik. Jika Anda memiliki pertanyaan atau
                masalah, jangan ragu untuk menghubungi kami melalui:
              </p>
              <ul
                className="list-group list-group-flush"
                style={{
                  marginBottom: '20px',
                }}
              >
                <li
                  className="list-group-item"
                  style={{marginBottom: '10px'}}
                >
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Nama"
                    style={{
                      width: '100%',
                      border: '1px solid #6b4612',
                      padding: '10px',
                      fontFamily: 'sans-serif',
                      fontSize: '16px',
                      color: '#6b4612', // Warna teks
                    }}
                  />
                </li>
                <li
                  className="list-group-item"
                  style={{marginBottom: '10px'}}
                >
                  <input
                    type="email" id="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    style={{
                      width: '100%',
                      border: '1px solid #6b4612',
                      padding: '10px',
                      fontFamily: 'sans-serif',
                      fontSize: '16px',
                      color: '#6b4612',
                    }}
                  />
                </li>
                <li className="list-group-item">
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone"
                    style={{
                      width: '100%',
                      border: '1px solid #6b4612',
                      padding: '10px',
                      fontFamily: 'sans-serif',
                      fontSize: '16px',
                      color: '#6b4612',
                    }}
                  />
                </li>
                <li className="list-group-item">
                  <textarea
                    id="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Deskripsi"
                    style={{
                      width: '100%',
                      border: '1px solid #6b4612',
                      padding: '10px',
                      fontFamily: 'sans-serif',
                      fontSize: '16px',
                      color: '#6b4612',
                      minHeight: '80px',
                    }}
                  />
                </li>
              </ul>
              <button
                onClick={handleSubmit}
                className="btn btn-primary"
                style={{
                  backgroundColor: '#6b4612',
                  color: '#ffffff',
                  border: 'none',
                  padding: '10px 20px',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  fontSize: '16px',
                  float: 'right',
                }}
              >
        Kirim
              </button>

            </div>
          </div>
          <div
            className="col-6"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              paddingLeft: '20px',
            }}
          >
            <img
              src="logo.jpg"
              alt="CODDY Logo"
              style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                marginBottom: '10px',
              }}
            />
            <div
              style={{
                textAlign: 'center',
                fontSize: '24px',
                fontWeight: 'bold',
                color: '#6b4612',
                marginBottom: '20px',
              }}
            >
              CODDY
            </div>
            <p style={{textAlign: 'left'}}>
              Lokasi:123 Jalan Jendral Sudirman, Indonesia 12345<br />
              Email: info@coddy.com<br />
              Phone: 555-555-5555<br />
              Fax: 555-555-5555<br />
            </p>
          </div>
        </div>
      </div>
      <iframe
        title="Google Maps"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.3359362572082!2d106.811436973877!3d-6.219355760911973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1346d5321a7%3A0xe19b81e9e58ae407!2sOrbit%20Future%20Academy!5e0!3m2!1sid!2sid!4v1699382072783!5m2!1sid!2sid"
        width="100%"
        height="200px"
        style={{border: 0, borderRadius: '5px', marginTop: '20px'}}
        allowfullscreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Kontak;
