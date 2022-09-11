package br.net.auth.rest;

import java.io.Serializable;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.net.auth.model.Usuario;
import br.net.auth.model.UsuarioDTO;
import br.net.auth.repository.UsuarioRepository;

@CrossOrigin
@RestController
public class AuthREST implements Serializable{

	private static final long serialVersionUID = 1L;
	@Autowired
	private UsuarioRepository repo;
	@Autowired
	private ModelMapper mapper;


	@PostMapping("/login")
	ResponseEntity<Usuario> auth (@RequestBody UsuarioDTO usuario) {
		String email = usuario.getEmail();
		String senha = usuario.getSenha();
		Long id = usuario.getId();


		if(email == null || senha == null) {
			return ResponseEntity.status(401).build();
		}

		Usuario usuEntity = repo.findByEmailAndSenhaAndId(email, senha, id);
		BCryptPasswordEncoder criptografar = new BCryptPasswordEncoder();
		
		String senhaEncripto = criptografar.encode(usuario.getSenha());
		if (usuEntity == null) {
			return ResponseEntity.status(401).build();
		}

		if (usuEntity.getEmail().equals(email) && usuEntity.getSenha().equals(senhaEncripto) && usuEntity.getId().toString().equals(id.toString())) {
			return ResponseEntity.ok().body(usuEntity);
		}
		else {
			return ResponseEntity.status(401).build();
		}

	}
}
