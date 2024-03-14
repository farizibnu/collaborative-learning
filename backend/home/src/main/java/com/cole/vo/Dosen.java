package com.cole.vo;

public class Dosen {
    private Long id_dosen;
    private String nama;
    private String email;
    private String password;
    private String kampus;
    private String jurusan;
    private String riwayat_s1;
    private String riwayat_s2;
    private String riwayat_s3;
    private String about;

    // Constructor
    public Dosen() {
    }

    // Constructor
    public Dosen(String nama, String email, String password, String kampus, String jurusan, String riwayat_s1, String riwayat_s2, String riwayat_s3, String about) {
        this.nama = nama;
        this.email = email;
        this.password = password;
        this.kampus = kampus;
        this.jurusan = jurusan;
        this.riwayat_s1 = riwayat_s1;
        this.riwayat_s2 = riwayat_s2;
        this.riwayat_s3 = riwayat_s3;
        this.about = about;
    }

    public Dosen(Long id_dosen, String nama, String email, String password, String kampus, String jurusan, String riwayat_s1, String riwayat_s2, String riwayat_s3, String about) {
        this.id_dosen = id_dosen;
        this.nama = nama;
        this.email = email;
        this.password = password;
        this.kampus = kampus;
        this.jurusan = jurusan;
        this.riwayat_s1 = riwayat_s1;
        this.riwayat_s2 = riwayat_s2;
        this.riwayat_s3 = riwayat_s3;
        this.about = about;
    }

    // Getter and Setter
    public Long getId_dosen() {
        return id_dosen;
    }

    public void setId_dosen(Long id_dosen) {
        this.id_dosen = id_dosen;
    }

    public String getNama() {
        return nama;
    }

    public void setNama(String nama) {
        this.nama = nama;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getKampus() {
        return kampus;
    }

    public void setKampus(String kampus) {
        this.kampus = kampus;
    }

    public String getJurusan() {
        return jurusan;
    }

    public void setJurusan(String jurusan) {
        this.jurusan = jurusan;
    }

    public String getRiwayat_s1() {
        return riwayat_s1;
    }

    public void setRiwayat_s1(String riwayat_s1) {
        this.riwayat_s1 = riwayat_s1;
    }

    public String getRiwayat_s2() {
        return riwayat_s2;
    }

    public void setRiwayat_s2(String riwayat_s2) {
        this.riwayat_s2 = riwayat_s2;
    }

    public String getRiwayat_s3() {
        return riwayat_s3;
    }

    public void setRiwayat_s3(String riwayat_s3) {
        this.riwayat_s3 = riwayat_s3;
    }

    public String getAbout() {
        return about;
    }

    public void setAbout(String about) {
        this.about = about;
    }
}
