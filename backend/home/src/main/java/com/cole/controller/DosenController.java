package com.cole.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cole.service.DosenService;
import com.cole.vo.Dosen;
import com.cole.vo.Result;

import jakarta.servlet.http.HttpServletResponse;

@RestController
@CrossOrigin
public class DosenController {

    @Autowired
    DosenService dosenService;

    @GetMapping("/dosen/{id}")
    public Dosen getDosen(@PathVariable("id") Long id_dosen) {
        Dosen dosen = dosenService.getDosen(id_dosen);
        return dosen;
    }

    @GetMapping("/dosens")
    public List<Dosen> getDosens(){
        List<Dosen> dosens = dosenService.getDosens();
        return dosens;
    }

    @PostMapping("/dosen/login")
    public Object loginDosen(HttpServletResponse response, @RequestBody Dosen dosenParam) {
        Dosen dosen = dosenService.loginDosen(dosenParam.getEmail(), dosenParam.getPassword());
        if (dosen != null) {
            return new Result(200, "Success");
        } else {
            response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
            return new Result(401, "Unauthorized");
        }
    }

    @PostMapping("/dosen")
    public Object saveDosen(HttpServletResponse response, @RequestBody Dosen dosenParam) {
        Dosen dosen = new Dosen(dosenParam.getNama(), dosenParam.getEmail(), dosenParam.getPassword(),
                dosenParam.getKampus(), dosenParam.getJurusan(), dosenParam.getRiwayat_s1(),
                dosenParam.getRiwayat_s2(), dosenParam.getRiwayat_s3(), dosenParam.getAbout());

        boolean isSuccess = dosenService.saveDosen(dosen);

        if(isSuccess) {
            return new Result(200, "Success");
        } else {
            response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
            return new Result(500, "Fail");
        }
    }

    @PutMapping("/dosen/{id}")
    public Object modifyDosen(HttpServletResponse response, @PathVariable Long id, @RequestBody Dosen dosenParam) {
        Dosen dosen = new Dosen(id, dosenParam.getNama(), dosenParam.getEmail(), dosenParam.getPassword(),
                dosenParam.getKampus(), dosenParam.getJurusan(), dosenParam.getRiwayat_s1(),
                dosenParam.getRiwayat_s2(), dosenParam.getRiwayat_s3(), dosenParam.getAbout());

        boolean isSuccess = dosenService.updateDosen(dosen);
        if(isSuccess) {
            return new Result(200, "Success");
        } else {
            response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
            return new Result(500, "Fail");
        }
    }

}
