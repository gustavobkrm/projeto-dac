package br.net.gustavo.model;

import java.io.Serializable;

import javax.persistence.*;

@Entity
@Table(name = "tb_cliente")
public class Cliente implements Serializable {
	private static final Long serialVersionUID = 1L;

	@Id
	@GeneratedValue
	@Column(name = "id")
	private int id;
	
	@Column(name = "nome")
	private String nome;
	
	@Column(name = "email")
	private String email;
	
	@Column(name = "cpf")
	private String cpf;
	
	@Column(name = "aprovado")
	private String aprovado;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "conta", referencedColumnName = "id")	
	private ContaDTO conta;

	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "endereco", referencedColumnName = "id")	
	private EnderecoDTO endereco;

	public Cliente(int id, String nome, String email, String cpf, String aprovado, ContaDTO conta,
			EnderecoDTO endereco) {
		super();
		this.id = id;
		this.nome = nome;
		this.email = email;
		this.cpf = cpf;
		this.aprovado = aprovado;
		this.conta = conta;
		this.endereco = endereco;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
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

	public ContaDTO getConta() {
		return conta;
	}

	public void setConta(ContaDTO conta) {
		this.conta = conta;
	}

	public EnderecoDTO getEndereco() {
		return endereco;
	}

	public void setEndereco(EnderecoDTO endereco) {
		this.endereco = endereco;
	}

	
}