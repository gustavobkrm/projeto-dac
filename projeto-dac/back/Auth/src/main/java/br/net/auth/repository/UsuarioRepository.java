package br.net.auth.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import br.net.auth.model.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario,Long>{

	@Query("from Usuario where email = :email and senha = :senha and id = :id")
	public Usuario findByEmailAndSenhaAndId(@Param("email") String email, @Param("senha") String senha, @Param("id") Long id);
}
