package br.net.conta.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "tb_conta")
public class Conta {

	@Id
	@GeneratedValue
	@Column(name = "id")
	private Long id;

	@Column(name = "conta")
	private int conta;

	@Column(name = "criacao")
	private Date criacao;

	@Column(name = "limite")
	private double limite;

	@Column(name = "historico")
	private String historico;

	@Column(name = "saldo_conta")
	private double saldoConta;

	public Conta(Long id, int conta, Date criacao, double limite, String historico, double saldoConta) {
		super();
		this.id = id;
		this.conta = conta;
		this.criacao = criacao;
		this.limite = limite;
		this.historico = historico;
		this.saldoConta = saldoConta;
	}


	public Conta() {
		super();
	}


	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public int getConta() {
		return conta;
	}

	public void setConta(int conta) {
		this.conta = conta;
	}

	public Date getCriacao() {
		return criacao;
	}

	public void setCriacao(Date criacao) {
		this.criacao = criacao;
	}

	public double getLimite() {
		return limite;
	}

	public void setLimite(double limite) {
		this.limite = limite;
	}

	public String getHistorico() {
		return historico;
	}

	public void setHistorico(String historico) {
		this.historico = historico;
	}

	public double getSaldoConta() {
		return saldoConta;
	}

	public void setSaldoConta(double saldoConta) {
		this.saldoConta = saldoConta;
	}


}
