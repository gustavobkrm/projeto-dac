package br.net.gerente.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.net.gerente.model.Gerente;

public interface GerenteRepository extends JpaRepository<Gerente, Long> {

}
