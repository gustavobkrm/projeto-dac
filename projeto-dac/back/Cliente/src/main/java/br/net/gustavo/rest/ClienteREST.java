package br.net.gustavo.rest;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.net.gustavo.model.ClienteDTO;
import br.net.gustavo.model.ContaDTO;

@CrossOrigin
@RestController
public class ClienteREST {
	public static List<ClienteDTO> lista = new ArrayList<>();
	
	@GetMapping("/clientes")
	public List<ClienteDTO> returnAllClients(){
		return lista;
	}
	@GetMapping("/clientes/{id}")
		public ClienteDTO getClientById(@PathVariable("id") int id) {
		ClienteDTO c =lista.stream().filter(lista->lista.getId() == id).findAny().orElse(null);
		return c;
	}
	
	@PostMapping("/clientes")
    public ClienteDTO insertClient(@RequestBody ClienteDTO cliente) {
		ClienteDTO c = lista.stream().max(Comparator.comparing(ClienteDTO::getId)).orElse(null);
		if (c == null)
			cliente.setId(1);
		else
			cliente.setId(c.getId() + 1);
		lista.add(cliente);
		return cliente;
	}
	
	@PutMapping("/clientes/{id}")
	public ClienteDTO updateClient(@PathVariable("id") int id, @RequestBody ClienteDTO cliente) {
		ClienteDTO c = lista.stream().filter(cli -> cli.getId() == id).findAny().orElse(null);
		if (c != null) {
			c.setNome(cliente.getNome());
			c.setCpf(cliente.getCpf());
			c.setConta(cliente.getConta());
			c.setEmail(cliente.getEmail());
			c.setEndereco(cliente.getEndereco());
			c.setSalario(cliente.getSalario());
		}
		return c;
	}
	
	@DeleteMapping("/clientes/{id}")
	public ClienteDTO deleteClient(@PathVariable("id") int id) {
		ClienteDTO c = lista.stream().filter(cli -> cli.getId() == id).findAny().orElse(null);
		if (c != null)
			lista.removeIf(cli -> cli.getId() == id);
		
		return c;
	}
	
	@PutMapping("/clientes/{id}/depositar")
    public ClienteDTO depositar (@PathVariable("id") int id, @RequestBody double quantidade) {
			ClienteDTO c =lista.stream().filter(lista->lista.getId() == id).findAny().orElse(null);
        	if (c != null) {
        		ContaDTO conta = c.getConta();
        		conta.setSaldoConta(conta.getSaldoConta() + quantidade);
        		c.setConta(conta);
        	}
        	
        	return c;
	}
	
}
