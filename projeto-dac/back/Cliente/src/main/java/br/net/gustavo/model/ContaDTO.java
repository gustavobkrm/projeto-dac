package br.net.gustavo.model;

import java.io.Serializable;
import java.util.Date;

public class ContaDTO implements Serializable {


	private int id;
	private int conta;
	private Date criacao;
	private double limite;
	private String historico;
	private double saldoConta;
	
	public ContaDTO(int id, int conta, Date criacao, double limite, String historico, double saldoConta) {
		super();
		this.id = id;
		this.conta = conta;
		this.criacao = criacao;
		this.limite = limite;
		this.historico = historico;
		this.saldoConta = saldoConta;
	}
	public double getSaldoConta() {
		return saldoConta;
	}
	public void setSaldoConta(double saldoConta) {
		this.saldoConta = saldoConta;
	}
	
	public int getId() {
		return id;
	}

	public void setId(int id) {
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

}
