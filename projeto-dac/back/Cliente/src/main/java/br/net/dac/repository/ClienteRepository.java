package br.net.dac.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import br.net.dac.model.Cliente;

public interface ClienteRepository extends JpaRepository<Cliente, Long>{
	public Cliente findByLogin(String login);
	@Query("from Usuario where email = :login and senha = :senha")
	public Cliente findByEmailAndSenha(@Param("login") String login, @Param("senha") String senha);

}
