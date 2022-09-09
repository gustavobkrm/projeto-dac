package br.net.dac.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import br.net.dac.model.Cliente;

public interface ClienteRepository extends JpaRepository<Cliente, Long>{
	@Query("from Cliente where email = :email and senha = :senha and id = :id")
	public Cliente findByEmailAndSenhaAndId(@Param("email") String email, @Param("senha") String senha, @Param("id") Long id);

}
