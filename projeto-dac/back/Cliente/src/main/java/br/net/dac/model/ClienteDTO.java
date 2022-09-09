package br.net.dac.model;

import java.io.Serializable;

public class ClienteDTO implements Serializable {

	private Long id;
	private String nome;
	private String email;
	private String senha;
	private String cpf;
	private EnderecoDTO endereco;
	private String aprovado;
	private ContaDTO conta;
	private double salario;

	public ClienteDTO(Long id, String nome, String email, String senha, String cpf, EnderecoDTO endereco, String aprovado, ContaDTO conta, double salario) {
		super();
		this.id = id;
		this.nome = nome;
		this.email = email;
		this.senha = senha;
		this.cpf = cpf;
		this.endereco = endereco;
		this.aprovado = aprovado;
		this.conta = conta;
		this.salario = salario;
	}



	public String getSenha() {
		return senha;
	}



	public void setSenha(String senha) {
		this.senha = senha;
	}



	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getAprovado() {
		return aprovado;
	}

	public void setAprovado(String aprovado) {
		this.aprovado = aprovado;
	}

	public ContaDTO getConta() {
		return conta;
	}

	public void setConta(ContaDTO conta) {
		this.conta = conta;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getCpf() {
		return cpf;
	}

	public void setCpf(String cpf) {
		this.cpf = cpf;
	}

	public EnderecoDTO getEndereco() {
		return endereco;
	}

	public void setEndereco(EnderecoDTO endereco) {
		this.endereco = endereco;
	}

	public double getSalario() {
		return salario;
	}

	public void setSalario(double salario) {
		this.salario = salario;
	}

}