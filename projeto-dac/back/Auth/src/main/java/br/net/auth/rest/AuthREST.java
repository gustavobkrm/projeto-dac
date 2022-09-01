package br.net.auth.rest;

import java.io.Serializable;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.net.auth.model.Usuario;
import br.net.auth.model.UsuarioDTO;
import repository.UsuarioRepository;

@CrossOrigin
@RestController
public class AuthREST implements Serializable{
	@Autowired
	private UsuarioRepository repo;
	@Autowired
	private ModelMapper mapper;


	@PostMapping("/login")
	UsuarioDTO auth (@RequestBody UsuarioDTO usuario) {
		repo.save(mapper.map(usuario, Usuario.class));
		
		String email = usuario.getEmail();
		String senha = usuario.getSenha();
		
		if(email == null || senha == null) {
			return null;
		}
		
		Usuario usuEntity = repo.findByEmailAndSenha(email, senha);
		if (usuEntity == null) {
			return null;
		}
		
		if (usuEntity.getEmail() == usuario.getEmail() && usuEntity.getSenha() == usuario.getSenha()) {
			return mapper.map(usuEntity,  UsuarioDTO.class);
		}
		else {
			return null;
		}
		
	}
}
