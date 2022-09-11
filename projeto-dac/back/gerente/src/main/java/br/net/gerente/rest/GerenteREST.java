package br.net.gerente.rest;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.net.gerente.model.Gerente;
import br.net.gerente.model.GerenteDTO;
import br.net.gerente.repository.GerenteRepository;


@CrossOrigin
@RestController
public class GerenteREST {
	@Autowired
	private GerenteRepository repo;

	@Autowired
	private ModelMapper mapper;

	@GetMapping("/gerentes")
	ResponseEntity<List<Gerente>> returnAllGerentes(){
		List<Gerente> lista = repo.findAll();
		return ResponseEntity.ok().body(lista);
	}

	@GetMapping("/gerentes/{id}")
	ResponseEntity<Gerente> getGerenteById(@PathVariable("id") Long id) {
		Gerente c = repo.getReferenceById(id);
		return ResponseEntity.ok().body(c);
	}


	@PostMapping("/gerentes")
	ResponseEntity<Gerente> insertGerente(@RequestBody GerenteDTO gerente) {
		repo.save(mapper.map(gerente,  Gerente.class));
		Gerente ger = repo.getReferenceById(gerente.getId());
		return ResponseEntity.ok().body(ger);
	}

	@PutMapping("/gerentes/{id}")
	ResponseEntity<Gerente>  updateGerente(@PathVariable("id") Long id, @RequestBody GerenteDTO gerente) {
		Gerente c = repo.getReferenceById(id);
		repo.save(mapper.map(gerente,  Gerente.class));
		return ResponseEntity.ok().body(c);
	}

	@DeleteMapping("/gerentes/{id}")
	ResponseEntity<Gerente>  deleteGerente(@PathVariable("id") Long id) {
		Gerente c = repo.getReferenceById(id);
		repo.deleteById(id);
		return ResponseEntity.ok().body(c);
	}
}

