package com.project.jinair.controller.api.optional;

import com.project.jinair.ifs.CrudInterface;
import com.project.jinair.model.network.Header;
import com.project.jinair.model.network.request.Optional.InsuranceApiRequest;
import com.project.jinair.model.network.response.Optional.InsuranceApiResponse;
import com.project.jinair.service.optional.InsuranceApiLogicService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;

@RestController
@RequestMapping("/api/optional/insurance")
@RequiredArgsConstructor
public class InsuranceApiController implements CrudInterface<InsuranceApiRequest, InsuranceApiResponse> {

    private final InsuranceApiLogicService insuranceApiLogicService;

/*
{
    "transaction_time":"2022-03-03",
    "resultCode":"ok",
    "description":"ok",
    "data":{
         "isType": 20000,
         "isPrice": 40000,
         "isStatus" : "Apply"
    }
}
*/

    @Override
    @PostMapping("") // http://localhost:8080/api/optional/insurance
    public Header<InsuranceApiResponse> create(@RequestBody Header<InsuranceApiRequest> request) {
        System.out.println(request);
        return insuranceApiLogicService.create(request);
    }

    @Override
    @GetMapping("/{id}") // http://localhost:8080/api/optional/insurance/{id} (get)
    public Header<InsuranceApiResponse> read(@PathVariable(name = "id") Long id) {
        return insuranceApiLogicService.read(id);
    }

/*
{
    "transaction_time":"2022-03-03",
    "resultCode":"ok",
    "description":"ok",
    "data":{
         "isIndex" : 2,
         "isType": 44000,
         "isPrice": 20000,
         "isStatus": "Apply"
    }
}
*/

    @Override
    @PutMapping("")
    public Header<InsuranceApiResponse> update(@RequestBody Header<InsuranceApiRequest> request) {
        return insuranceApiLogicService.update(request);
    }

    @Override
    @DeleteMapping("{id}")
    public Header<InsuranceApiResponse> delete(@PathVariable(name="id") Long id) {
        return insuranceApiLogicService.delete(id);
    }

    @GetMapping("/search/{id}") // http://localhost:8080/api/optional/insurance/{id} (get)
    public BigDecimal search(@PathVariable(name = "id") Long id) {
        return insuranceApiLogicService.search(id);
    }
}
