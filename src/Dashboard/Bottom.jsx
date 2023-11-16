import React from "react";
import { Link } from "react-router-dom";

const Bottom = () => {
  const containerStyle = {
    fontFamily: "Helvetica",
    textAlign: "left",
    padding: "80px",
  };

  const paragraphStyle = {
    fontSize: "16px",
    marginBottom: "20px",
  };

  const imageContainerStyle = {
    display: "flex",
    justifyContent: "space-around",
    marginBottom: "20px",
  };

  const imageStyle = {
    width: "60px",
    height: "50px",
    marginBottom: "10px",
  };

  const verticalineStyle = {
    width: "100%",
    paddingTop: "30px",
    borderBottom: "2px solid  #ccccb3",
    marginBottom: "20px",
  };

  const bacaJugaStyle = {
    fontSize: "16px",
    fontWeight: "light",
  };

  const titleStyle = {
    fontSize: "21px",
    fontWeight: "light",
  };

  const articleStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "20px",
  };

  const articleImageStyle = {
    width: "100px",
    height: "100px",
    marginRight: "20px",
  };

  const articleContentStyle = {
    flex: 1,    
  };

  const readMoreButtonStyle = {
    background: "#ffcc00",
    color: "white",
    padding: "8px 16px",
    textDecoration: "none",
    border: "none",    
  };

  return (
    <div style={containerStyle}>
    <p style={titleStyle}>Produk dan Layanan Kami</p>
      <p style={paragraphStyle}>
        Kami akan membantu menginformasikan kepada Anda mengenai kesehatan padi
        Anda dan merekomendasikan produk yang sesuai dengan gejala atau
        penyakit yang ditanam padi Anda.
      </p>
      <div style={imageContainerStyle}>
        <Link to="/komponen1">
          <figure>
            <img src="pkt.jpg" alt="" style={imageStyle} />
            <figcaption>Penilaian<br /> Kesehatan <br />Tanaman</figcaption>
          </figure>
        </Link>
        <Link to="/Product">
          <figure>
            <img src="elenmeyer.jpg" alt="" style={imageStyle} />
            <figcaption>Pupuk dan <br />Perbaikan <br />Tanaman</figcaption>
          </figure>
        </Link>
        <Link to="/komponen3">
          <figure>
            <img src="ph.jpg" alt="" style={imageStyle} />
            <figcaption>pengendalian<br /> Hama</figcaption>
          </figure>
        </Link>
      </div>
      
      <div style={verticalineStyle}></div>
      <div style={bacaJugaStyle}>Baca Juga: Cara Mencegah Penyakit</div>
      <div style={articleStyle}>
        <img
          src="https://saprotan-utama.com/wp-content/uploads/2022/11/Penggerek-batang-padi.jpg"
          alt="Article"
          style={articleImageStyle}
        />
        <div style={articleContentStyle}>
          <p style={titleStyle}>Mengatasi Penggerek Batang Padi Terkini!</p>
          <p>Mengatasi penggerek batang padi perlu dilakukan dengan cara terkini agar hasil panen padi tetap terjaga. Penggerek batang padi adalah salah satu hama yang paling sering menyerang tanaman padi dengan....</p>
          <Link to="https://saprotan-utama.com/mengatasi-penggerek-batang-padi-terkini/" target="_blank">
            <button style={readMoreButtonStyle}>Pelajari...</button> {/*1*/}
          </Link>
        </div>
      </div>
      <div style={articleStyle}>
        <img
          src="https://saprotan-utama.com/wp-content/uploads/2021/12/Teknik-Budidaya-Padi-1.jpg"
          alt="Article"
          style={articleImageStyle}
        />
        <div style={articleContentStyle}>
          <p style={titleStyle}>Inilah 6 Teknik Budidaya Padi yang Sahabat perlu tahu!</p>
          <p>Pengelolaan tanaman terpadu merupakan salah satu pendekatan untuk mengelola lahan, air, tanaman dan iklim secara terpadu dan berkelanjutan. Hal ini dilakukan untuk meningkatkan produktivitas....</p>
          <Link to="https://saprotan-utama.com/inilah-6-teknik-budidaya-padi-yang-sahabat-perlu-tahu/" target="_blank">
            <button style={readMoreButtonStyle}>Pelajari...</button>{/*2*/}
          </Link>
        </div>
      </div>
      <div style={articleStyle}>
        <img
          src="https://saprotan-utama.com/wp-content/uploads/2021/03/Anakan_Padi.jpg"
          alt="Article"
          style={articleImageStyle}
        />
        <div style={articleContentStyle}>
          <p style={titleStyle}>Cara Budidaya Padi untuk Memperbanyak Anakan Produktif</p>
          <p>Dalam usaha budidaya padi, tentunya harapan setiap petani adalah mendapatkan hasil yang maksimal. Sudah banyak panduan yang disosialisasikan kepada para petani, mulai dari metode tanam jajar legowo....</p>
          <Link to="https://saprotan-utama.com/cara-budidaya-padi-untuk-memperbanyak-anakan-produktif/" target="_blank">
            <button style={readMoreButtonStyle}>Pelajari...</button>{/*3*/}
          </Link>
        </div>
      </div>
      <div style={articleStyle}>
        <img
          src="https://saprotan-utama.com/wp-content/uploads/2021/01/pupuk_urea_padi.jpg"
          alt="Article"
          style={articleImageStyle}
        />
        <div style={articleContentStyle}>
          <p style={titleStyle}>Dicari di Mana-mana, Apa Manfaat Pupuk Urea untuk Padi?</p>
          <p>Hai Sahabat, jika sebelumnya kita sudah pernah membahas pemupukan untuk tanaman cabai dan bawang merah, hari ini kita akan belajar tentang pemupukan untuk tanaman padi ya, secara khusus mengenai Pupuk Urea.....</p>
          <Link to="https://saprotan-utama.com/dicari-di-mana-mana-apa-manfaat-pupuk-urea-untuk-padi/" target="_blank">
            <button style={readMoreButtonStyle}>Pelajari...</button>{/*4*/}
          </Link>
        </div>
      </div>
      <div style={articleStyle}>
        <img
          src="https://www.ptnpg.com/~img/artikel_npg4-3eb47-3553_250-t598_25.webp"
          alt="Article"
          style={articleImageStyle}
        />
        <div style={articleContentStyle}>
          <p style={titleStyle}>APLIKASI PUPUK NPK FERTICOMP 15-15-15 PADA TANAMAN PADI SAWAH</p>
          <p>Ketersediaan unsur hara bagi tanaman merupakan salah satu faktor yang mempengaruhi produktivitas padi di Indonesia. Untuk meningkatkan ketersediaan hara di dalam tanah sekaligus meningkatkan produksi padi, PT Nusa Palapa Gemilang mengembangkan pupuk majemuk NPK 15-15-15 dengan Merk FERTICOMP. FERTICOMP 15-15-15 memiliki kandungan 15% N, 15%....</p>
          <Link to="https://www.ptnpg.com/Berita/aplikasi-pupuk-npk-ferticomp-15-15-15-pada-tanaman-padi-sawah.html" target="_blank">
            <button style={readMoreButtonStyle}>Pelajari...</button>{/*5*/}
          </Link>
        </div>
      </div>
      <div style={articleStyle}>
        <img
          src="https://www.bertani.co.id/wp-content/uploads/2019/10/PPP.jpg"
          alt="Article"
          style={articleImageStyle}
        />
        <div style={articleContentStyle}>
          <p style={titleStyle}>8 Cara Menanam Padi Yang Baik dan Benar Sampai Panen!</p>
          <p>Padi merupakan makanan pokok bagi masyarakat asia terlebih lagi indonesia. Padi merupakan asal daripada beras yang menghasilkan nasi yang biasanya kita makan dalam keseharian....</p>
          <Link to="https://www.bertani.co.id/cara-menanam-padi/ " target="_blank">
            <button style={readMoreButtonStyle}>Pelajari...</button>{/*6*/}
          </Link>
        </div>
      </div>
      <div style={articleStyle}>
        <img
          src="https://bibitonline.com/wp-content/uploads/padi-2.jpg"
          alt="Article"
          style={articleImageStyle}
        />
        <div style={articleContentStyle}>
          <p style={titleStyle}>Langkah-langkah Cara Menanam Padi</p>
          <p>Tanaman padi merupakan asal muasal dari beras. Beras merupakan kebutuhan utama masyarakat Indonesia untuk mencukupi kebutuhan karbohidrat. Begitu bergantungnya masyarakat akan kebutuhan beras atau nasi....</p>
          <Link to="https://bibitonline.com/artikel/langkah-langkah-cara-menanam-padi  " target="_blank">
            <button style={readMoreButtonStyle}>Pelajari...</button>{/*6*/}
          </Link>
        </div>
      </div>
      <div style={articleStyle}>
        <img
          src="https://asset.kompas.com/crops/KJhgrrQrrDF041h8oZhjINty0yM=/0x0:1000x667/750x500/data/photo/2022/09/19/6327e2b3a4373.jpg"
          alt="Article"
          style={articleImageStyle}
        />
        <div style={articleContentStyle}>
          <p style={titleStyle}>Ciri-ciri Tanaman Padi Siap Panen</p>
          <p>Selain upaya meningkatkan produktivitas tanaman, masa panen padi juga diupayakan agar bisa lebih singkat. Lantas, berapakah umur padi yang siap panen? Dan bagaimana kriterianya? Simak penjelasan lengkapnya berikut ini....</p>
          <Link to="https://agri.kompas.com/read/2022/09/19/142900484/ciri-ciri-tanaman-padi-siap-panen " target="_blank">
            <button style={readMoreButtonStyle}>Pelajari...</button>{/*7*/}
          </Link>
        </div>
      </div>
      <div style={articleStyle}>
        <img
          src="https://4.bp.blogspot.com/-VNU7K0jG-5E/VNB6u4xrRcI/AAAAAAAAAFE/DT4Xh9ul-5g/s1600/images%2B(4).jpg"
          alt="Article"
          style={articleImageStyle}
        />
        <div style={articleContentStyle}>
          <p style={titleStyle}>PENGENALAN TANAMAN PADI</p>
          <p>Padi merupakan tanaman dagangan di Malaysia dan tujuan ditanam adalah untuk mendapatkan beras sebagai makanan ruji.Beras adalah bijian yang diperoleh daripada tanaman padi yang telah dikupas kulitnya.....</p>
          <Link to="https://kamipetanimuda.blogspot.com/2015/01/pengenalan-tanaman-padi.html" target="_blank">
            <button style={readMoreButtonStyle}>Pelajari...</button>{/*8*/}
          </Link>
        </div>
      </div>
      <div style={articleStyle}>
        <img
          src="https://pertanian.kulonprogokab.go.id/files/news/normal/bdc0850478e311f10650b4cf3dd6cff3.jpg"
          alt="Article"
          style={articleImageStyle}
        />
        <div style={articleContentStyle}>
          <p style={titleStyle}>Hama Utama Padi</p>
          <p>Pertanaman padi varietas unggul yang sehat akan memberikan hasil dan pendapatan optimal bagi petani. Untuk itu, tanaman padi harus terus dirawat secara intensif dan dijaga dari gangguan organisme pengganggu tanaman (OPT).....</p>
          <Link to="https://pertanian.kulonprogokab.go.id/detil/1206/hama-utama-padi" target="_blank">
            <button style={readMoreButtonStyle}>Pelajari...</button>{/*9*/}
          </Link>
        </div>
      </div>      
    </div>
  );
};

export default Bottom;
