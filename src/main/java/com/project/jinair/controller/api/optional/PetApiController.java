package com.project.jinair.controller.api.optional;

import com.project.jinair.ifs.CrudInterface;
import com.project.jinair.model.network.Header;
import com.project.jinair.model.network.request.Optional.PetsApiRequest;
import com.project.jinair.model.network.response.Optional.PetsApiResponse;
import com.project.jinair.service.optional.PetApiLogicService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/optional/pet")
@RequiredArgsConstructor
public class PetApiController implements CrudInterface<PetsApiRequest, PetsApiResponse> {


    private final PetApiLogicService petApiLogicService;

/*
    {
        "transaction_time":"2022-03-03",
        "resultCode":"ok",
        "description":"ok",
        "data":{
             "ptPrice": 120000,
             "ptStatus":"Apply",
             "aptIndex": 2
        }
    }
 */

    @Override
    @PostMapping("") // http://localhost:8080/api/optional/pet
    public Header<PetsApiResponse> create(@RequestBody Header<PetsApiRequest> request) {
        System.out.println(request);
        return petApiLogicService.create(request);
    }

    @Override
    @GetMapping("{id}") // http://localhost:8080/api/optional/pet/{id} (get)
    public Header<PetsApiResponse> read(@PathVariable(name = "id") Long id) {
        return petApiLogicService.read(id);
    }

/*
{
    "transaction_time":"2022-03-03",
    "resultCode":"ok",
    "description":"ok",
    "data":{
         "ptIndex" : 2,
         "ptPrice": 3000,
         "ptStatus": "Apply",
         "aptIndex": 1
    }
}
*/
    @Override
    @PutMapping("")  // http://localhost:8080/api/optional/pet
    public Header<PetsApiResponse> update(@RequestBody Header<PetsApiRequest> request) {
        return petApiLogicService.update(request);
    }

    @Override
    @DeleteMapping("{id}") // http://localhost:8080/api/optional/pet/{id}
    public Header<PetsApiResponse> delete(@PathVariable(name="id") Long id) {
        return petApiLogicService.delete(id);
    }
}
