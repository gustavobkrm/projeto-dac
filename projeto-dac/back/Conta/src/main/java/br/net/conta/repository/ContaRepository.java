package br.net.conta.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.net.conta.model.Conta;

public interface ContaRepository extends JpaRepository<Conta, Long> {

}
