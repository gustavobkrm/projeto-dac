package repository;

import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.query.Param;

import br.net.auth.model.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario,Long>{

	public Usuario findByEmail(String login);
	@Query("from tb_usuarios where email = :email and senha = :senha")
	public Usuario findByEmailAndSenha(@Param("email") String email, @Param("senha") String senha);
}
