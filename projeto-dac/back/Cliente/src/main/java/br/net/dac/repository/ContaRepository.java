package br.net.dac.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.net.dac.model.Conta;

public interface ContaRepository extends JpaRepository<Conta, Long> {

}
