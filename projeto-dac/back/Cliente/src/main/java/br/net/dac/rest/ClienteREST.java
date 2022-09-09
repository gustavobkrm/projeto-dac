package br.net.dac.rest;

import java.util.ArrayList;
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

import br.net.dac.model.Cliente;
import br.net.dac.model.ClienteDTO;
import br.net.dac.repository.ClienteRepository;
import br.net.dac.repository.ContaRepository;

@CrossOrigin
@RestController
public class ClienteREST {
	@Autowired
	private ClienteRepository repo;
	@Autowired
	private ContaRepository repoConta;
	@Autowired
	private ModelMapper mapper;

	public static List<ClienteDTO> lista = new ArrayList<>();

	@GetMapping("/clientes")
	ResponseEntity<List<Cliente>> returnAllClients(){
		List<Cliente> lista = repo.findAll();
		return ResponseEntity.ok().body(lista);
	}

	@GetMapping("/clientes/{id}")
	ResponseEntity<Cliente> getClientById(@PathVariable("id") Long id) {
		Cliente c = repo.getReferenceById(id);
		return ResponseEntity.ok().body(c);
	}


	@PostMapping("/clientes")
	ResponseEntity<Cliente> insertClient(@RequestBody ClienteDTO cliente) {
		repo.save(mapper.map(cliente,  Cliente.class));
		Cliente cli = repo.findByEmailAndSenhaAndId(cliente.getEmail(), cliente.getSenha(), cliente.getId());
		return ResponseEntity.ok().body(cli);
	}

	@PutMapping("/clientes/{id}")
	ResponseEntity<Cliente>  updateClient(@PathVariable("id") Long id, @RequestBody ClienteDTO cliente) {
		Cliente c = repo.getReferenceById(id);
		repo.save(mapper.map(cliente,  Cliente.class));
		return ResponseEntity.ok().body(c);
	}

	@DeleteMapping("/clientes/{id}")
	ResponseEntity<Cliente>  deleteClient(@PathVariable("id") Long id) {
		Cliente c = repo.getReferenceById(id);
		repo.deleteById(id);
		return ResponseEntity.ok().body(c);
	}


}
