package br.net.auth.rest;

import java.io.Serializable;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
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

	@GetMapping("/teste")
    ResponseEntity<String> teste() {
        return ResponseEntity.ok().body("teste");
    }
	@PostMapping("/login")
	ResponseEntity<Usuario> auth (@RequestBody UsuarioDTO usuario) {
		String email = usuario.getEmail();
		String senha = usuario.getSenha();
		Long id = usuario.getId();


		if(email == null || senha == null) {
			System.out.print('1');
			return ResponseEntity.status(401).build();
		}

		Usuario usuEntity = repo.findByEmailAndSenhaAndId(email, senha, id);		

		if (usuEntity == null) {
			System.out.print('2');
			return ResponseEntity.status(401).build();
		}
		System.out.println(email + ' ' + usuEntity.getEmail());
		System.out.println(usuEntity.getId().toString() + ' ' + id.toString());


		if (usuEntity.getEmail().equals(email) && usuario.getSenha().equals(senha) && usuEntity.getId().toString().equals(id.toString())) {
			System.out.print('5');
			return ResponseEntity.ok().body(usuEntity);
		}
		else {
			System.out.print('3');
			return ResponseEntity.status(401).build();
		}

	}
}
