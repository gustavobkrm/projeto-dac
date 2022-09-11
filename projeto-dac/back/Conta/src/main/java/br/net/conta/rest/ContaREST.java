package br.net.conta.rest;

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

import br.net.conta.model.Conta;
import br.net.conta.model.ContaDTO;
import br.net.conta.repository.ContaRepository;

@CrossOrigin
@RestController
public class ContaREST {
	@Autowired
	private ContaRepository repo;
	@Autowired
	private ModelMapper mapper;

	@GetMapping("/contas/{id}")
	ResponseEntity<Conta> getContaById(@PathVariable("id") Long id) {
		Conta c = repo.getReferenceById(id);
		return ResponseEntity.ok().body(c);
	}

	@PostMapping("/contas")
	ResponseEntity<Conta> insertConta(@RequestBody ContaDTO conta) {
		repo.save(mapper.map(conta,  Conta.class));
		Conta c = repo.getReferenceById(conta.getId());
		return ResponseEntity.ok().body(c);
	}

	@PutMapping("/contas/{id}")
	ResponseEntity<Conta>  updateConta(@PathVariable("id") Long id, @RequestBody ContaDTO conta) {
		Conta c = repo.getReferenceById(id);
		repo.save(mapper.map(conta,  Conta.class));
		return ResponseEntity.ok().body(c);
	}

	@DeleteMapping("/contas/{id}")
	ResponseEntity<Conta>  deleteConta(@PathVariable("id") Long id) {
		Conta c = repo.getReferenceById(id);
		repo.deleteById(id);
		return ResponseEntity.ok().body(c);
	}

	// passar o id da conta?
	@GetMapping("/contas/{id}/consultarsaldo")
	ResponseEntity<Double> saldoConta(@PathVariable("id") Long id){
		Conta c = repo.getReferenceById(id);
		return ResponseEntity.ok().body(c.getSaldoConta());
	}

	@PutMapping("/contas/deposito/{id}")
	ResponseEntity<Conta> setSaldoConta(@PathVariable("id") Long id, @RequestBody String deposito){
		Conta c = repo.getReferenceById(id);
		double depositoConvertido = Double.parseDouble(deposito);
		c.setSaldoConta(c.getSaldoConta() + depositoConvertido);
		repo.save(c);
		return ResponseEntity.ok().body(c);
	}

	//saque? extrato?
}
