package br.net.dac.model;

import java.io.Serializable;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "tb_clientes")
@JsonIgnoreProperties({"hibernateLazyInitializer","handler"})
public class Cliente implements Serializable {
	private static final Long serialVersionUID = 1L;

	@Id
	@GeneratedValue
	@Column(name = "id")
	private Long id;

	@Column(name = "nome")
	private String nome;

	@Column(name = "email")
	private String email;

	@Column(name = "senha")
	private String senha;

	@Column(name = "cpf")
	private String cpf;

	@Column(name = "aprovado")
	private String aprovado;

	@Column(name = "salario")
	private double salario;

	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "conta", referencedColumnName = "id")
	private Conta conta;

	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "endereco", referencedColumnName = "id")
	private Endereco endereco;

	public Cliente(Long id, String nome, String email, String senha, String cpf, String aprovado, double salario, Conta conta,
			Endereco endereco) {
		super();
		this.id = id;
		this.nome = nome;
		this.email = email;
		this.senha = senha;
		this.cpf = cpf;
		this.aprovado = aprovado;
		this.salario = salario;
		this.conta = conta;
		this.endereco = endereco;
	}


	public Cliente() {
		super();
	}


	public double getSalario() {
		return salario;
	}


	public void setSalario(double salario) {
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

	public String getAprovado() {
		return aprovado;
	}

	public void setAprovado(String aprovado) {
		this.aprovado = aprovado;
	}

	public Conta getConta() {
		return conta;
	}

	public void setConta(Conta conta) {
		this.conta = conta;
	}

	public Endereco getEndereco() {
		return endereco;
	}

	public void setEndereco(Endereco endereco) {
		this.endereco = endereco;
	}


}